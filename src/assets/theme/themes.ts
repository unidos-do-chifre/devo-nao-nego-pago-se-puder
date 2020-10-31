import { ratioX } from "utils/metrics";

const theme = {
  fontFamily: "Roboto",
  colors: {
    primaryDark: "#474747",
    primaryRegular: "#7C7C7C",
    primaryLight: "#E5E5E5",
    accentDark: "#1B5E20",
    accentRegular: "#4CAF50",
    accentLight: "#C8E6C9",
    surface: "#FFFFFF",
    background: "#FFFFFF",
    error: "#B00020",
    onError: "#FFFFFF",
    onPrimaryRegular: "#FFFFFF",
    onPrimaryDark: "#FFFFFF",
    onPrimaryLight: "#474747",
    onAccentRegular: "#FFFFFF",
    onAccentDark: "#FFFFFF",
    onAccentLight: "#474747",
  },
};

const namesProportion: string[] = [
  "xxsmall",
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
];

function setProportion(values: number[]) {
  const temp: any = [...values];

  let i = 0;
  while (i < namesProportion.length && i < values.length) {
    temp[namesProportion[i]] = values[i];
    i++;
  }

  return temp;
}

const fontSizes = setProportion([8, 10, 12, 14, 18, 24].map(ratioX));;
const space = setProportion([0, 4, 8, 24, 64, 128].map(ratioX));

export default { ...theme, fontSizes, space };
