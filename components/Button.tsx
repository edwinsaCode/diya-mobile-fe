import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";

const Button = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  image,
  imageStyle,
}: {
  title: string;
  handlePress?: any;
  containerStyles: string;
  textStyles?: string;
  isLoading?: any;
  image?: any;
  imageStyle?: string;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {/* <Image source={image} className={`className="w-5 h-5 ${imageStyle}`} /> */}
      <Text
        className={`text-primary font-psemibold text-xl text-white ${textStyles}`}
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
