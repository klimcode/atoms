import { css } from 'styled-components';
import getBaselineStyles from '../baseline';


export const cssBaseline = css`
  ${getBaselineStyles}
`;

export const cssInlineGapDesktop = gap => css`
  @media (min-width: ${p => p.theme.screenLarge}) {
    margin-left: ${gap || 16}px;

    &:first-child {
      margin: 0;
    }
  }
`;
