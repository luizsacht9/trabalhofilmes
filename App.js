import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

let [Filmes, setFilmes] = useState([]);

const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

useEffect(function(){
fetch(baseURL)
.then(data => data.json())
.then(objeto => {
  console.log(objeto);
  setFilmes(objeto.data)
})
}, []);

return (
  <View style={styles.container}>
    { Filmes.length > 0 ? Filmes.map(filme =>
      <Text>
        {'\n\n'}TITULO: {filme.attributes.titulo}
        <Text>
          {'\n\n'}SINOPSE: {filme.attributes.sinopse}
        </Text>
      </Text>) : <Text>Carregando...</Text>}
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
