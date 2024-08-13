import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import images from "@/constants/images";

const SearchInput = ({ initialQuery }: any) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center space-x-4 w-auto h-12 px-4 rounded-3xl border-2 border-gray-400 focus:border-secondary">
      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );
        }}
      >
        <View className="bg-mainColor rounded-full w-7 h-6 p-1">
          <Image
            source={images.search}
            className="w-6 h-5 "
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <TextInput
        className="text-base mt-0.5 text-black flex-1 font-pregular"
        value={query}
        placeholder="Search here"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
    </View>
  );
};

export default SearchInput;
