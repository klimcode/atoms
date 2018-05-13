const FS_DEF = 16;
const FF_DEF = 'openSans';
const METRICS_DEF = `
  padding: 0 0 7px 0;
  margin: -7px 0 0 0;
  font-size: 16px;
  line-height: 32px;
`;
const METRICS = {
  openSans_16_gap: `
    margin: 0;
    padding: 25px 0 7px 0;
    font-size: 16px;
    line-height: 32px;
  `,
  openSans_32_gap: `
    margin: 0 0 -3px 0;
    padding: 67px 0 0 0;
    font-size: 32px;
    line-height: 64px;
  `,
  openSans_40: `
    margin: 0;
    padding: 0;
    font-size: 40px;
    line-height: 64px;
  `,
  openSans_40_gap: `
    margin: 0;
    padding: 64px 0 0 0;
    font-size: 40px;
    line-height: 64px;
  `,
  openSans_56: `
    margin: -6px 0 0 0;
    padding: 0 0 6px 0;
    font-size: 56px;
    line-height: 64px;
  `,
  openSans_56_gap: `
    margin: 0;
    padding: 58px 0 6px 0;
    font-size: 56px;
    line-height: 64px;
  `,
};

export default {
  FS_DEF, FF_DEF, METRICS_DEF, METRICS,
};
