import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
} from "react-native";

export default Form = () => {
  showtoast = () => {
    ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Username</Text>
        <TextInput placeholder="Username" style={styles.form} />
      </View>
      <View style={{ marginTop: 5 }}>
        <Text>Password</Text>
        <TextInput placeholder="Password" style={styles.form} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonLogin}>
          <Button title="Login" onPress={showtoast} />
        </View>
        <View style={styles.buttonReg}>
          <Button color="red" title="Signup" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: widthContainer,
    // flex: 1,
    alignSelf: "center",
  },
  form: {
    width: 300,
    padding: 12,
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
  },
  buttons: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  buttonLogin: {
    flex: 1,
  },
  buttonReg: {
    flex: 1,
  },
});
