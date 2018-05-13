const getMetrics = (props) => {
  const { theme, component } = props;
  const {
    METRICS, METRICS_DEF, FF_DEF, FS_DEF,
  } = theme.fontMetrics;

  const themeComponentStyles = theme && theme[component];

  const themeFontFamily = themeComponentStyles && themeComponentStyles.fontFamily;
  const themeFontSize = themeComponentStyles && themeComponentStyles.fontSize;
  const themeGap = themeComponentStyles && themeComponentStyles.gap;
  const finalFontFamily = props.ff || themeFontFamily || FF_DEF;
  const finalFontSize = props.fs || themeFontSize || props.fontSizeDef || FS_DEF;


  const gap = ((props.gap || themeGap || props.gapDef) && '_gap') || '';
  const id = `${finalFontFamily}_${finalFontSize}${gap}`;

  // debugger;
  const result = METRICS[id];
  /* eslint-disable no-console */
  if (!result && console && console.error) {
    console.error(`Font Metrics "${id}" for "${component}" component not found. Default Metrics used instead.`);
  }

  return result || METRICS_DEF || '';
};

export default getMetrics;
