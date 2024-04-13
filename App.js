import { FirstScene} from './FirstScene';
import { StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';

export default ViroSceneNav = () => {
  return (
    <ViroARSceneNavigator initialScene={{ scene: FirstScene }}      style={styles.f1}
/>
  )
}


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
