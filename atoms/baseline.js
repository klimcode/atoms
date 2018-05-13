const getMetrics = (metrics) => {
  const {
    FS_DEF, FF_DEF, METRICS_DEF, METRICS,
  } = metrics;

  return (props) => {
    const { component, theme } = props;
    const fontFamily = theme && theme.fontFamily;
    const fontSize = theme && theme.fontSize;
    const themeComponentStyles = theme && theme[component];

    const themeFontFamily = (themeComponentStyles && themeComponentStyles.fontFamily) || fontFamily;
    const themeFontSize = (themeComponentStyles && themeComponentStyles.fontSize) || fontSize;
    const themeGap = themeComponentStyles && themeComponentStyles.gap;
    const finalFontFamily = props.ff || themeFontFamily || FF_DEF;
    const finalFontSize = props.fs || themeFontSize || props.fontSizeDef || FS_DEF;


    const gap = ((props.gap || themeGap || props.gapDef) && '_gap') || '';
    const id = `${finalFontFamily}_${finalFontSize}${gap}`;

    const result = METRICS[id];
    // debugger;
    /* eslint-disable no-console */
    if (!result && console && console.error) {
      console.error(`Font Metrics "${id}" for "${component}" component not found. Default Metrics used instead.`);
    }

    return result || METRICS_DEF || '';
  };
};


export default getMetrics;
