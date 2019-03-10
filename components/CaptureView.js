import React from "react";
import { View, Image, Dimensions, TextInput } from "react-native";
import CaptureToolbar from "./CaptureToolbar";

import styles from "./styles";

export default ({ capture, trashPicture, uploadPicture, addStory }) => (
  //   <React.Fragment>
  <View>
    <Image
      source={{ uri: capture.uri }}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        resizeMode: "contain"
      }}
    />
  </View>
);