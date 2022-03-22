import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import FotoRosto1 from './assets/foto_perfil.jpg'
import PlanoFundo from './assets/planofundo.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image  source={PlanoFundo} style={styles.img_fundo}/>
      </View>
      <View>
        <Image source={FotoRosto1} style={styles.img_perfil} />
        <Text style={styles.texte_nome}>Andréa de J. S. França</Text>
        <Text style={styles.texte_desc}>Desenvolvedora em processo de construção de carreira com experiência em JavaScript, HTML5, CSS3, Reac Js e React Native.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img_fundo:{
    width:500,
    height:400,
    backgroundColor:"black"
  },
  img_perfil:{
    width:150,
    height:150,
    alignSelf:'center',
    borderRadius:100
  },
  texte_nome:{
    alignSelf:'center',
    fontSize:20,
    padding:20
  },
  texte_desc:{
    alignSelf:'center',
    fontSize:15,
    padding:10,
    margin:5,
    textAlign:'center'
  }
});
