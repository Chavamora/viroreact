import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  Viro360Image,
  Viro3DObject,
  ViroAmbientLight
} from "@viro-community/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { FirstScene } from "./FirstScene";


export const SecondScene = (props) => {
  const [text, setText] = useState("Initializing AR...");

  const handleClick = () => {
    props.sceneNavigator.push({ scene: FirstScene });
  };

  function onInitialized(state, reason) {
    console.log("guncelleme", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Second scene");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      console.log("tracking unavailable");
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#fff" intensity={300}/>
      <Viro3DObject
        source={require('./assets/source/Sage.glb')}
        resources={[
          require('./assets/textures/gltf_embedded_0.png'),
          
          
        ]}
        highAccuracyEvents={true}
        type="GLB"
        scale={[1.1, 1.1, 1.1]}
        position={[0.1, -0.8, -1]}
        rotation={[-90,-80,0]}
      />
      {/* <Viro3DObject
        source={require('./assets/mikasa.obj')}
        resources={[
          require('./assets/mikasa.mtl'),
          require('./assets/mikasa body tex.png'),
          require('./assets/mikasa face tex.png'),
          require('./assets/eyes mikasa.png'),
          require('./assets/shirt texture.png'),
          require('./assets/jean texture.png'),
          require('./assets/jacket texture2.png'),
        ]}
        type="OBJ"
        position={[0, 0, -1]}
        scale={[0.1,0.1,0.1]}
      /> */}
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARScene>
      <SecondScene />
    </ViroARScene>
  );
};

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
