import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Form from "./Form";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.heroIcon}>
        <Image
          style={{ height: 200, width: 200 }}
          source={require("./img/running.png")}
        />
      </View>
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginTop: 20,
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 25,
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
  heroIcon: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
  },
});
