/**
 * Avatar
 *
 * @format
 *
 */

import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import FastImage from "react-native-fast-image";

type Props = {
  disabled?: boolean;
  onPress?: () => void;
  photoURL: any;
  size?: number;
  circle?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Avatar: React.FC<Props> = (props) => {
  const {
    circle = true,
    disabled,
    photoURL,
    onPress,
    size = 30,
    style,
  } = props;
  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      <FastImage
        source={typeof photoURL === "string" ? photoURL : { uri: photoURL }}
        style={[
          s.image,
          { width: size, height: size, borderRadius: circle ? size * 0.5 : 0 },
        ]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  image: {
    backgroundColor: "#DDD",
  },
});

export default Avatar;
