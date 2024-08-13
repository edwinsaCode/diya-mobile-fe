import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import images from "@/constants";

interface FormTypes {
  title?: string;
  value: string;
  placeholder: string;
  handleChangeText: any;
  otherStyles?: string;
  inputStyle?: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  inputStyle,
  ...props
}: FormTypes) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-950 font-pmedium">{title}</Text>
      <View
        className={`w-full h-16 px-4  rounded-2xl  flex flex-row items-center ${inputStyle}`}
      >
        <TextInput
          className="flex-1 text-gray-950 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.eye : images.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
