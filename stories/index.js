import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { H1, H2, H3 } from '../atoms/H';

storiesOf('Header', module)
  .add('H1', () => (
    <div>
      <H1>H1 without gap</H1>
      <H1 gap>H1 with gap</H1>
    </div>
  ))
  .add('H2', () => (
    <div>
      <H2>H2 without gap</H2>
      <H2 gap>H2 with gap</H2>
    </div>
  ))
  .add('H3', () => (
    <div>
      <H3>H3 without gap</H3>
      <H3 gap>H3 with gap</H3>
    </div>
  ));
