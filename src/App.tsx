import { useSyncExternalStore } from 'react';
import {
  ActionIcon,
  Button,
  Flex,
  Menu,
  MultiSelect,
  SegmentedControl,
  Table,
  TagsInput,
} from '@mantine/core';
import {
  IconArrowDown,
  IconArrowUp,
  IconCopy,
  IconFlipHorizontal,
  IconRowInsertTop,
  IconTrash,
} from '@tabler/icons-react';
import type * as iD from '@openstreetmap/id-plugin-sdk';
import {
  DIRECTION,
  type Direction,
  EXIT_TYPES,
  type ExitType,
} from './util/const.js';
import type { Parsed, Row } from './util/types.def.js';
import { omit, uuid } from './util/helpers.js';
import {
  generateTags,
  isAllTagsHaveSameValue,
  parseTags,
} from './util/tags.js';
import { ThemeProvider } from './ThemeProvider.js';

export const App: React.FC<{ domRoot: HTMLElement } & iD.PluginData> = ({
  domRoot,
  tagsStore,
}) => {
  const tags = useSyncExternalStore(tagsStore.subscribe, tagsStore.getValue);

  if (!isAllTagsHaveSameValue(tags)) {
    return <>cannot use in this field with a multiselect</>;
  }

  const data = parseTags(tags);
  const setData = (newValue: Parsed) => {
    tagsStore.setValue(generateTags(newValue));
  };

  return (
    <ThemeProvider domRoot={domRoot}>
      <div className="container">
        <Flex gap={8} align="center">
          <SegmentedControl
            size="xs"
            color="blue"
            data={DIRECTION.filter(Boolean).map((value) => ({
              value,
              label: value || '*',
            }))}
            value={data.dir}
            onChange={(newDirection) =>
              setData({ ...data, dir: newDirection as Direction })
            }
            disabled={!data.rows.length}
          />
          <ActionIcon
            variant="light"
            onClick={() => {
              setData({
                ...data,
                rows: [...data.rows, { key: uuid() }],
              });
            }}
          >
            <IconRowInsertTop />
          </ActionIcon>
          <ActionIcon
            variant="light"
            onClick={() => {
              setData({ ...data, rows: [...data.rows].reverse() });
            }}
          >
            <IconFlipHorizontal />
          </ActionIcon>
        </Flex>

        <div className="wrap">
          <Table className="table">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Num</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>To</Table.Th>
                <Table.Th>Symbol</Table.Th>
                <Table.Th>Exit Num</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.rows.map((row, index) => {
                function update(x: Partial<Row>) {
                  const newArray = structuredClone(data.rows);
                  Object.assign(newArray[index]!, x);
                  setData({ ...data, rows: newArray });
                }

                function move(direction: number) {
                  const newArray = structuredClone(data.rows);
                  const temp = newArray[index]!;
                  newArray[index] = newArray[index + direction]!;
                  newArray[index + direction] = temp;
                  setData({ ...data, rows: newArray });
                }

                function copyFrom(direction: number) {
                  const newArray = structuredClone(data.rows);
                  newArray[index] = {
                    ...newArray[index + direction],
                    key: newArray[index]!.key, // keep the original key
                  };
                  setData({ ...data, rows: newArray });
                }

                const previous = data.rows[index - 1]! || { _: 0 };
                const isSameAsPrevious =
                  JSON.stringify(omit(row, ['key', 'type'])) ===
                    JSON.stringify(omit(previous, ['key', 'type'])) &&
                  (row.dest?.length ||
                    row.destRef?.length ||
                    row.destSymbol?.length);

                return (
                  <Table.Tr key={row.key}>
                    <Table.Td>
                      <Menu shadow="md" width={200}>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore react 19 forwardRef bug */}
                        <Menu.Target>
                          <Button size="xs" variant="outline">
                            # {index + 1}
                          </Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                          <Menu.Item
                            leftSection={<IconTrash />}
                            color="red"
                            onClick={() => {
                              const newArray = [...data.rows];
                              newArray.splice(index, 1);
                              setData({ ...data, rows: newArray });
                            }}
                          >
                            Delete
                          </Menu.Item>

                          <Menu.Divider />

                          <Menu.Item
                            leftSection={<IconArrowUp />}
                            disabled={!index}
                            onClick={() => move(-1)}
                          >
                            Move Up
                          </Menu.Item>
                          <Menu.Item
                            leftSection={<IconArrowDown />}
                            disabled={index === data.rows.length - 1}
                            onClick={() => move(+1)}
                          >
                            Move Down
                          </Menu.Item>

                          <Menu.Divider />

                          {isSameAsPrevious ? (
                            <Menu.Item
                              leftSection={<IconArrowUp />}
                              disabled // TODO: implement
                            >
                              Unlink from previous car
                            </Menu.Item>
                          ) : (
                            <>
                              <Menu.Item
                                leftSection={<IconCopy />}
                                disabled={!index}
                                onClick={() => copyFrom(-1)}
                              >
                                Copy from previous car
                              </Menu.Item>
                              <Menu.Item
                                leftSection={<IconCopy />}
                                disabled={index === data.rows.length - 1}
                                onClick={() => copyFrom(+1)}
                              >
                                Copy from next car
                              </Menu.Item>
                            </>
                          )}
                        </Menu.Dropdown>
                      </Menu>
                    </Table.Td>
                    <Table.Td>
                      <MultiSelect
                        size="xs"
                        multiple
                        data={EXIT_TYPES}
                        value={row.type || []}
                        onChange={(v) => update({ type: v as ExitType[] })}
                      />
                    </Table.Td>
                    {isSameAsPrevious ? (
                      <Table.Td colSpan={3}>
                        <em>(same as previous)</em>
                      </Table.Td>
                    ) : (
                      <>
                        <Table.Td>
                          <TagsInput
                            size="xs"
                            value={row.dest}
                            onChange={(v) => update({ dest: v })}
                          />
                        </Table.Td>
                        <Table.Td>
                          <TagsInput
                            size="xs"
                            value={row.destSymbol}
                            onChange={(v) => update({ destSymbol: v })}
                          />
                        </Table.Td>
                        <Table.Td>
                          <TagsInput
                            size="xs"
                            value={row.destRef}
                            onChange={(v) => update({ destRef: v })}
                          />
                        </Table.Td>
                      </>
                    )}
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </div>
      </div>
    </ThemeProvider>
  );
};
App.displayName = 'ExitCarriages';
