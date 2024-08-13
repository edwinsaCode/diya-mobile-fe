import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import images from "../constants";

type VideoCardProps = {
  title: string;
  creator: string;
  avatar?: ImageSourcePropType;
  thumbnail?: ImageSourcePropType;
  video?: ImageSourcePropType;
  onPress?: () => void;
  className?: string;
};

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  creator,
  avatar,
  thumbnail,
  video,
  onPress,
  className,
}) => {
  return (
    <View
      className={`flex flex-col items-center px-1 mb-4 w-[50%] gap-1 ${className}`}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className="w-full h-32 rounded-xl mt-3 relative flex justify-center items-center"
      >
        {thumbnail ? (
          <Image
            source={thumbnail}
            className={`w-full h-full rounded-xl mt-3 bg-black ${className}`}
            resizeMode="cover"
          />
        ) : (
          <Text>No Thumbnail</Text>
        )}
        <Image
          source={images.play}
          className="w-12 h-12 absolute"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="flex flex-row gap-3 items-start pl-0 ml-0">
        <View className="flex justify-start items-start flex-row">
          <View className="w-[34px] h-[34px] rounded-full border border-secondary flex justify-center items-center p-0.5">
            {avatar ? (
              <Image
                source={avatar}
                className="w-full h-full rounded-full"
                resizeMode="cover"
              />
            ) : (
              <Text>No Avatar</Text>
            )}
          </View>

          <View className="flex justify-center flex-1 ml-1 gap-y-1">
            <Text
              className="font-psemibold text-xs text-black font-semibold"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-[8px] font-light font-pregular text-black"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image
            source={images.menu}
            className="w-3 h-3 mr-2"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
