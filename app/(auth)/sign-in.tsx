import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { useState } from "react";
import images from "../../constants";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="bg-[#F2E6DA] h-full w-full">
        <View className="bg-[#F2E6DA] h-full w-full">
          <View>
            <Image source={images.login} />
          </View>
          <View className="bg-[#F2E6DA]">
            <FormField
              // title="Email"
              inputStyle="border-2 border-mainColor focus:border-mainColor"
              value={form.email}
              handleChangeText={(e: any) => setForm({ ...form, email: e })}
              placeholder="email"
              otherStyles="mt-7 mx-5"
            />
            <FormField
              // title="Password"
              inputStyle="border-2 border-mainColor focus:border-mainColor"
              value={form.password}
              handleChangeText={(e: any) => setForm({ ...form, password: e })}
              placeholder="password"
              otherStyles="mt-2 mx-5"
            />

            <Button
              title="Login"
              // handlePress={submit}
              containerStyles="mt-10 m-5 bg-mainColor"
              // isLoading={isSubmitting}
              textStyles="font-semibold text-white"
            />
          </View>
          <View className="w-full px-32 items-center justify-center text-center">
            <Text className=" text-center font-semibold ">
              Tidak Punya Akun? Daftar{" "}
              <Link href="/sign-up" className="text-yellow-400">
                Kesini
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
