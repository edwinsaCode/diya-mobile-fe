import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "@/constants";
import VideoCard from "@/components/VideoCard";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView className="w-full h-full">
      <StatusBar style="dark" />
      <View className="w-full h-full">
        <View className=" flex flex-row justify-between p-5 w-full m-2">
          <View className=" flex flex-row items-center gap-3">
            <View className="">
              <Image source={images.logo} className="w-16 h-12  " />
            </View>
            <Text className=" text-3xl font-light items-center justify-center">
              divio
            </Text>
          </View>
          <View className=" w-[50%] ">
            <SearchInput />
          </View>
        </View>

        <View className=" flex-row items-center justify-between">
          <View className="w-[50%] pl-3">
            <Text>Welcome back,</Text>
            <Text className="text-3xl">Rosi Wilson!</Text>
            <View className="flex-row gap-2">
              <View className="flex-row items-center gap-1">
                <View className=" w-2 h-2 rounded-full bg-slate-400"></View>
                <Text>Free User</Text>
              </View>

              <View className="flex-row items-center gap-1">
                <View className=" w-2 h-2 rounded-full bg-orange-400"></View>
                <Text>Since 2024</Text>
              </View>
            </View>
          </View>

          <View className="w-[50%] items-end pr-3">
            <Image source={images.pp} className=" rounded-full w-24 h-24" />
          </View>
        </View>

        <View className=" bg-mainColor w-auto rounded-md m-2  flex-row">
          <View className=" text-white p-5 w-[60%]">
            <Text className="text-white">Upgrade to Premium</Text>
            <Text className="text-white font-semibold">__</Text>
            <Text className="text-white font-light text-xs">
              Become a VIP Member to get more Features & Unlimited Divio
            </Text>
          </View>
          <View className=" w-[40%]  items-end justify-center pr-5">
            <Image source={images.card3} className="w-24 h-24 rounded-full" />
          </View>
        </View>

        <View className="flex-row justify-between p-2">
          <View className=" flex-row items-center gap-2">
            <Image source={images.fire} className="w-5 h-5" />
            <Text className=" text-lg">Popular Video</Text>
          </View>
          <View className=" items-center justify-center">
            <Image source={images.shuffle} className="w-5 h-5" />
          </View>
        </View>
        <ScrollView className=" py-4 ">
          <View className=" flex flex-wrap flex-row w-full justify-between mb-0">
            <VideoCard
              className="w-[48%]"
              creator="Fatoni|64 M Views|10 months ago"
              title="Wonderfull"
              avatar={images.avatar}
              thumbnail={images.people}
              // onPress={() => console.log("error")}
            />
            <VideoCard
              className="w-[48%] bg-black"
              creator="Fatoni64 M Views|10 months ago"
              title="Wonderfull"
              avatar={images.avatar}
              thumbnail={images.card}
            />
          </View>
          <View className=" flex flex-wrap flex-row w-full justify-between ">
            <VideoCard
              className="w-[48%]"
              creator="Fatoni|64 M Views|10 months ago"
              title="Wonderfull"
              avatar={images.avatar}
              thumbnail={images.card}
              // onPress={() => console.log("error")}
            />
            <VideoCard
              className="w-[48%]"
              creator="Fatoni64 M Views|10 months ago"
              title="Wonderfull"
              avatar={images.avatar}
              thumbnail={images.people}
            />
          </View>
          <View className=" flex flex-wrap flex-row w-full justify-between">
            <VideoCard
              className="w-[48%] "
              creator="Fatoni|64 M Views|10 months ago"
              title="Wonderfull"
              avatar={images.avatar}
              thumbnail={images.card3}
              // onPress={() => console.log("error")}
            />
            <VideoCard
              className="w-[48%]"
              creator="Fatoni64 M Views|10 months ago"
              title="Wonderfull"
              avatar={images.avatar}
              thumbnail={images.people}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
