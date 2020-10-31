import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");

const screenSizes = {
  width: width / 375,
  height: height / 812,
};

export const ratioX = (size: number) => PixelRatio.roundToNearestPixel(size * screenSizes.width);
export const ratioY = (size: number) => PixelRatio.roundToNearestPixel(size * screenSizes.height);

export const moderateScale = (size: number, factor = 0.5) =>
  size + (ratioX(size) - size) * factor;

export default { ratioX, ratioY };
