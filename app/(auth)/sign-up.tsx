import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { useState } from "react";
import images from "../../constants";
import FormField from "@/components/FormField";
import { Link } from "expo-router";
import Button from "@/components/Button";

const SignUp = () => {
  //   const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  //   const submit = async () => {
  //     if (form.email === "" || form.password === "") {
  //       Alert.alert("Error", "Please fill in all fields");
  //     }

  //     setSubmitting(true);

  //     try {
  //       await signIn(form.email, form.password);
  //       const result = await getCurrentUser();
  //       setUser(result);
  //       setIsLogged(true);

  //       Alert.alert("Success", "User signed in successfully");
  //       router.replace("/Home");
  //     } catch (error) {
  //       Alert.alert("Error", error.message);
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className=" bg-[#F2E6DA]">
        <View className="bg-mainColor flex flex-row rounded-b-xl pt-8">
          <View className=" flex justify-center px-4 my-6 w-[60%]">
            <Text className=" text-white text-4xl font-bold">
              Register Akun anda
            </Text>
            <Text className=" text-white">Isi Form ini dengan benar</Text>
          </View>
          <View className=" text-white items-end justify-end w-[40%]">
            <Image source={images.hand} className="w-32 h-32  text-white" />
          </View>
        </View>

        <View className="px-7">
          <FormField
            // title="Nama Lengkap"
            value={form.name}
            inputStyle="border-2 border-gray-200 focus:border-mainColor bg-gray-200"
            placeholder="Nama Lengkap"
            handleChangeText={(e: any) => setForm({ ...form, name: e })}
          />

          <FormField
            // title="Username"
            value={form.username}
            inputStyle="border-2 border-gray-200 focus:border-mainColor bg-gray-200"
            placeholder="Username"
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
          />

          <FormField
            // title="Email"
            value={form.email}
            inputStyle="border-2 border-gray-200 focus:border-mainColor bg-gray-200"
            placeholder="Email"
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
          />

          <FormField
            value={form.password}
            inputStyle="border-2 border-gray-200 focus:border-mainColor bg-gray-200"
            placeholder="Password"
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
          />
        </View>

        <View className="items-end pr-7 pt-3">
          <Link href="/">Butuh bantuan?</Link>
        </View>

        <View>
          <Button
            title="Masuk"
            containerStyles="mt-10 m-14 bg-mainColor"
            textStyles="font-semibold"
          />

          <Text className="text-center mb-5">
            Sudah memiliki akun?{" "}
            <Link href="/sign-in" className="text-lg text-green-300">
              Masuk
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
