import { View, Text, Image } from "react-native";
import React, { useEffect, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Mont-Bold": require("@/assets/fonts/Mont-Heavy.otf"),
    "Mont-Light": require("@/assets/fonts/Mont-ExtraLight.otf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
