import type { PropsWithChildren } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import maintineStyles from '@mantine/core/styles.css?url';
import ownStyles from './main.css?url';

export const ThemeProvider: React.FC<
  PropsWithChildren<{ domRoot: HTMLElement }>
> = ({ domRoot, children }) => {
  const theme = createTheme({
    components: { Portal: { defaultProps: { target: domRoot } } },
  });
  return (
    <MantineProvider
      cssVariablesSelector={domRoot.tagName}
      getRootElement={() => domRoot}
      theme={theme}
    >
      <link rel="stylesheet" href={maintineStyles} />
      <link rel="stylesheet" href={ownStyles} />
      {children}
    </MantineProvider>
  );
};
