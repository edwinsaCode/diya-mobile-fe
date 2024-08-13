import { View, Text, Image } from "react-native";
import React, { ReactNode } from "react";
import { Tabs } from "expo-router";
import images from "@/constants";

const TabIcon = ({ icon, color, name, focused }: any): ReactNode => {
  return (
    <View className=" flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tablayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 84,
            borderWidth: 1,
            backgroundColor: "#08244B",
            borderTopColor: "#232533",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Shorts"
          options={{
            title: "Shorts",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.shorts}
                color={color}
                name="Shorts"
                focused={focused}
              />
            ),
          }}
        />

        {/* <Tabs.Screen
          name="ta"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.plus}
                color={color}
                name=""
                focused={focused}
              />
            ),
          }}
        /> */}
        <Tabs.Screen
          name="Subsciptions"
          options={{
            title: "Subsciptions",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.subsciptions}
                color={color}
                name="Subsciptions"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Library"
          options={{
            title: "Library",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.library}
                color={color}
                name="Library"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Tablayout;
