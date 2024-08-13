import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { Link } from "expo-router";
import Button from "@/components/Button";

const index = () => {
  return (
    <SafeAreaView className="w-full h-full bg-mainColor">
      <ScrollView
      // contentContainerStyle={{
      //   height: "100%",
      // }}
      >
        <View className="w-full h-full flex items-center min-h-[84%] mb-28">
          <View className="mb-28 mt-14">
            <Image
              source={images.diyaPutih}
              className="w-[300px] h-[250px]"
              resizeMode="contain"
            />
            <View>
              <Text className="text-6xl text-white font-bold text-center">
                divio
              </Text>
              <Text className="text-white text-center font-light">
                diya video mobile
              </Text>
            </View>
          </View>
          <View className="flex gap-5">
            <View className="mb-0">
              <Link
                href="/sign-in"
                className="text-5xl text-white font-bold text-center mb-0 pb-0"
              >
                Masuk
              </Link>
              <Text className="text-white text-center font-light mt-0 pt-0">
                lanjutkan dengan mail
              </Text>
            </View>
            <View className="flex gap-2 mt-0">
              <View className=" flex flex-row gap-5 bg-slate-100 rounded-full items-center p-0">
                <Image
                  source={images.email}
                  className="w-5 h-5 mb-3 mt-0 p-0"
                />
                <Text className="mb-4 mr-5 mt-0 p-0 font-semibold text-mainColor ">
                  Lanjutkan dengan mail
                </Text>
                {/* <Button
                  title="Lanjutkan dengan mail"
                  containerStyles=""
                  textStyles="text-mainColor mb-4 mr-5 mt-0 p-0 font-semibold"
                  image={images.email}
                  imageStyle="w-5 h-5 mb-3 mt-0 p-0"
                /> */}
              </View>
              <View className="border border-white rounded-3xl">
                <Link
                  href="/Home"
                  className="flex w-auto text-white font-light text-center py-1"
                >
                  Masuk Sebagai Tamu
                </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
