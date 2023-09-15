import { StyleSheet, View, Image } from "react-native";
import { HallView } from "./HallView";

function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("/assets/logo.jpg")}
        style={{ width: 100, height: 100 }}
      />
      <HallView />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
