import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    console.log("name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.logo}>
          <Text style={styles.supa}>Supa</Text>
          <Text style={styles.menu}>Menu</Text>
        </Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={24}
            color="#222222"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Full Name"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="phone" size={24} color="#222222" style={styles.inputIcon} />
          <TextInput
            placeholder="Phone Number"
            onChangeText={(text) => setPhone(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#222222"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Your Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F7941D",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    color: "#222222",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  inputIcon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#F7941D",
    color: "white",
    width: "80%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  supa: {
    color: "black",
  },
  menu: {
    color: "#F7941D",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
