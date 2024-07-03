import { ImageSourcePropType } from 'react-native';
type DictType = {
    [key: string]: ImageSourcePropType;
  }
  
export const localImages: DictType = {
    "apfc": require("../resources/images/apfc.jpg") as ImageSourcePropType,
    "capacitor": require("../resources/images/capacitor.jpg") as ImageSourcePropType,
    "fire": require("../resources/images/fire.jpg") as ImageSourcePropType,
    "lighting": require("../resources/images/lighting.jpg") as ImageSourcePropType,
    "mcc": require("../resources/images/mcc.jpg") as ImageSourcePropType,
    "pcc": require("../resources/images/pcc.jpg") as ImageSourcePropType,
    "starter": require("../resources/images/starter.jpg") as ImageSourcePropType,
}