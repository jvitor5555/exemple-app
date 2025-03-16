import React from 'react';
import { View, StyleSheet, Image, TextInput, Text, Button, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function App() {

  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#fff',
      padding: 20,
    },

    textoCentralizado: {
      fontSize: 16,
      fontFamily: 'Roboto',
      color: '#333',
      marginBottom: 13,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    img: {
      height: 300,
      width: 280,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginBottom: 8
    },

    textoEsquerda: {
      fontSize: 16,
      fontFamily: 'Roboto',
      color: '#333',
      marginBottom: 5,
      alignSelf: 'flex-start',
    },

    input: {
      width: '100%',
      height: 45,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
    },

    segundoContainer: {
      width: '80%',
    },

    botao: {
      marginTop: 10,
      marginBottom: 15,
    }
  });

  return (
    <View style={estilo.container}>

      <Text style={estilo.textoCentralizado}>Aplicativo de apresentação pessoal</Text>

      <Image source={require("./assets/megume.jpg")} style={estilo.img} />


      <Text style={estilo.textoCentralizado}>Megumi Fushiguro</Text>


      <View style={estilo.segundoContainer}>
        <Text style={estilo.textoEsquerda}>Informe o seu nome...</Text>
        <TextInput style={estilo.input} />

        <Text style={estilo.textoEsquerda}>Descrição...</Text>
        <TextInput style={estilo.input} />

        <View style={estilo.botao}>
          <Button title="Enviar dados" color="#34E675" />
        </View>
      </View>
    </View>
  );
}