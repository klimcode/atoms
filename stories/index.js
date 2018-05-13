import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
// import { action } from '@storybook/addon-actions';
import { H1, H2, H3 } from '../atoms/H';
import theme from '../baseline/theme';

storiesOf('Header', module)
  .add('H1', () => (
    <ThemeProvider theme={theme}>
      <div>
        <H1>H1 without gap</H1>
        <H1 gap>H1 with gap</H1>
      </div>
    </ThemeProvider>
  ))
  .add('H2', () => (
    <ThemeProvider theme={theme}>
      <div>
        <H2>H2 without gap</H2>
        <H2 gap>H2 with gap</H2>
      </div>
    </ThemeProvider>
  ))
  .add('H3', () => (
    <ThemeProvider theme={theme}>
      <div>
        <H3>H3 without gap</H3>
        <H3 gap>H3 with gap</H3>
      </div>
    </ThemeProvider>
  ));
