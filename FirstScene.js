import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants,
  Viro360Image,
  ViroScene,
  ViroImage,
  Viro3DObject
} from "@viro-community/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {SecondScene} from "./SecondScene";

export const FirstScene = (props) => {
  const [text, setText] = useState("Initializing AR...");

  const handleClick = () => {
    console.log("CLICK")
    props.sceneNavigator.replace({ scene: SecondScene });
    
  };

  function onInitialized(state, reason) {
    console.log("guncelleme", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("click here");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      console.log("tracking unavailable");
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized} >
      <Viro360Image source={require("./assets/360img.jpeg")} />
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
        onClick={handleClick}
      />
      
    </ViroARScene>
    // <ViroScene>
    //  <ViroText
    //     text='hola'
    //     scale={[0.5, 0.5, 0.5]}
    //     position={[0, 0, -1]}
    //     style={styles.helloWorldTextStyle}
    //     onClick={handleClick}
    //   />
    // </ViroScene>  
  );
};

// export default () => {
//   return (
//     <FirstScene/>
//   );
// };
var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
