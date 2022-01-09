import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'; 
import { StyleSheet, Button, View, Text, Alert, Image, TextInput } from 'react-native';

export default function App() {
  //I create a variable text, and a method setText to change the value of text
  const [name,setName] =useState(" ");
  const [age,setAge] =useState(" ");
  return (
    <View style={styles.container}>
      <Text style= {styles.headerText}>Hello World !</Text>
      <Text style= {styles.subHeading}>Welcome to my app.</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1286283054.jpg',
        }}
      />
      <Text>Thank you for visiting us :)</Text>
      <TextInput
        placeholder= "Enter your name"
        style={styles.input}
        onChangeText={(val)=>{setName(val)}}
        value={name}
      />
       <TextInput
        placeholder= "Enter your age"
        style={styles.input}
        onChangeText={(val)=>{setAge(val)}}
        value={age}
      />
      <Button
        title="Press me"
        onPress={() => alert('Helo '+ name +". Your age is " + age + ".")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText:{
    fontSize:32,
    color:'red',
    marginBottom:10,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  subHeading:{
    color:'blue',
    fontSize:20,
    marginBottom:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#c9b6b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f4f0f0',
  },
});
