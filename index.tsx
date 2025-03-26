import React from 'react';
import { View, StyleSheet, Image, TextInput, Text, Button, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function App() {

    const editar  = StyleSheet.create({

        primeirocontainer: {

            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#C0C0C0'
            
        },

        outroscontainers: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
          margin: 20,
          width: 150,
          height: 150,
    
      },

        img: {
          width: '100%',
          height: "100%",
          borderColor: 'black',
          borderRadius: 10,
          borderWidth: 1
        },

        texto: {
          fontFamily: 'Roboto',
          fontSize: 15,
          fontWeight: 'bold'
        }

    });

    return (
      <View style={editar.primeirocontainer}>
            <View style={editar.outroscontainers}>
                <Image source={require("@/assets/images/megume.jpg")} style={editar.img}/>
            </View>
            <Text style={editar.texto}>Megumi Fushiguro</Text>

            <View style={editar.outroscontainers}>
                <Image source={require("@/assets/images/megume.jpg")} style={editar.img}/>
            </View>
            <Text style={editar.texto}>Megumi Fushiguro</Text>

            <View style={editar.outroscontainers}>
                <Image source={require("@/assets/images/megume.jpg")} style={editar.img}/>
            </View>
            <Text style={editar.texto}>Megumi Fushiguro</Text>
      </View>
    );
  }