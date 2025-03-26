import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Biblioteca para ícones

export default function App() {
  return (
    <SafeAreaView style={estilo.safeArea}>

      <ScrollView contentContainerStyle={estilo.scrollContent}>

        <View style={estilo.principal}>

          <View>
            <Text style={estilo.negrito}>Popular Places</Text>
          </View>

          <FontAwesome name="chevron-right" size={20} color="black" style={estilo.arrowIcon} />

          <View>
            <Text>All Popular Places</Text>
          </View>

          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img1.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Niladri Reservoir</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$459/Person</Text>
          </View>


          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img2.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Casa Las Tirtugas</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$894/Person</Text>

          </View>


          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img3.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Aonang Villa Resort</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>

            </View>
            <Text>$761/Person</Text>
          </View>


          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img4.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Rangauti Resort</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$857/Person</Text>
          </View>

          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img5.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Azure Bay</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$977/Person</Text>
          </View>

          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img6.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Whispering Pines</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$889/Person</Text>
          </View>

          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img7.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Crystal Shores</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$928/Person</Text>
          </View>

          <View style={estilo.card}>

            <View style={estilo.imageContainer}>
              <Image source={require("./assets/img8.jpg")} style={estilo.img} />
            </View>

            <Text style={estilo.center}>Sunset Lagoon</Text>

            <View style={estilo.row}>
              <FontAwesome name="map-marker" size={24} color="red" />
              <Text style={estilo.text}>Lorem ipsum dolor</Text>
            </View>

            <View style={estilo.row}>
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <FontAwesome name="star" size={24} color="gold" style={estilo.starMargin} />
              <Text style={estilo.text}>4.5</Text>
            </View>

            <Text>$997/Person</Text>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({

  safeArea: {
    flex: 1,
    paddingTop: 60, 
  },

  scrollContent: {
    paddingBottom: 30, 
  },

  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    height: 280,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 5, 
    elevation: 5, 
  },

  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, 
  },

  text: {
    marginLeft: 5, 
  },

  principal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "center",
    gap: 20
  },

  starMargin: {
    marginRight: 5,  
  },

  negrito: {
    fontWeight: 'bold'
  },

  center: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
