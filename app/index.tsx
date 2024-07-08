import { launchMapActivity } from "mapsted-react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <TouchableOpacity onPress={() => launchMapActivity()} style={styles.button}  >
      <Text>Lunch Map</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40, 
    width: "80%", 
    elevation: 8,
    marginTop: 50, 
    borderRadius: 8, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "white", 
    marginHorizontal: "auto", 
  }
})