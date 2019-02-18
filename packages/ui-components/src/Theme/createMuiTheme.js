import vhCheck from "vh-check";
import { createMuiTheme } from "@material-ui/core/styles";
import "./index.css";

const defaultOptions = {
  subtract: [],
  includeUnit: true
};

const sum = numbers => {
  const reducer = (result, current) => result + current;
  return numbers.reduce(reducer, 0);
};

const vh = (v, options = {}, vhResult) => {
  const normOptions = { ...defaultOptions, ...options };

  const height = vhResult.vh - vhResult.offset;
  const minsSum = sum(normOptions.subtract);
  const result = (v * height) / 100;
  const finalResult = result - minsSum;

  if (normOptions.includeUnit) {
    return `${finalResult}px`;
  }

  return finalResult;
};

export default (accent, background, secondaryBackground) => {
  const vhResult = vhCheck();

  return createMuiTheme({
    palette: {
      custom: {
        mainAccent: accent,
        mainBackground: background,
        secondaryBackground: secondaryBackground
      },
      type: "dark"
    },
    typography: {
      htmlFontSize: 16 // material's preferred way to use rems at 62.5% (10px)
    },
    layout: {
      vh: (v, opts) => vh(v, opts, vhResult)
    }
  });
};
