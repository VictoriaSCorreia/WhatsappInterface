import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, Image } from "react-native";

const contatos = [
  {
    imagem: require('./assets/magali.jpg'),
    contato: "Magá 💖",
    hora: "13:34",
    data: ["✔✔ Vamos usar os brincos novo..."]
  },
  {
    imagem: require('./assets/cebolinha.jpg'),
    contato: "O chato do Cebolinha",
    hora: "12:06",
    data: ["PQ VC É UMA BAIXINHA DENTU..."]
  },
  {
    imagem: require('./assets/ricardinho.jpg'),
    contato: "Ricardinho boa pinta 😍",
    hora: "11:59",
    data: ["🗸🗸 Como que tá a vida?? 😁😁"]
  },
  {
    imagem: require('./assets/cascao.jpg'),
    contato: "Comparça",
    hora: "11:12",
    data: ["O Cebola que me obrigou"]
  },
  {
    imagem: require('./assets/turma.jpg'),
    contato: "TURMA 🌟",
    hora: "11:05",
    data: ["Comparça: Eu n contei seu plano..."]
  },
  {
    imagem: require('./assets/carminha.jpg'),
    contato: "Carminha metida 🤢🐍",
    hora: "09:30",
    data: ["Óbvio que eu sou a mais bonita d..."]
  },
  {
    imagem: require('./assets/souza.jpg'),
    contato: "Familia Souza 🙏🏻🙏🏻🙏🏻❤️",
    hora: "07:06",
    data: ["Mãe: Mônica quebrou outra cadei..."]
  },
  {
    imagem: require('./assets/denise.jpg'),
    contato: "Dê",
    hora: "Ontem",
    data: ["MIGA QUE BABADO FORTE CHOC..."]
  },
  {
    imagem: require('./assets/docontra.jpg'),
    contato: "Do Contra",
    hora: "Ontem",
    data: ["!adnil iO"]
  }
];

const App = () => (
  <SafeAreaView style={styles.fundo}>
    <View style={styles.container}>
      <SectionList
        sections={contatos}
        renderItem={() => null}
        renderSectionHeader={({ section: { imagem, contato, hora, data }}) => (
          <View style={styles.headerContainer}>
            <Image style={styles.imagem} source={imagem}/>
            <View style={styles.textContainer1}>
              <View style={styles.textContainer2}> 
                <Text style={styles.header}>{contato}</Text>
                <Text style={styles.header2}>{hora}</Text> 
              </View>
              {data.map((item, index) => (
                <Text key={index} style={styles.title}>{item}</Text>
              ))}
            </View>
          </View>
        )}
      /> 
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#001217"
  },
  container: {
    paddingTop: 30,
    marginHorizontal: 13
  },
  imagem: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  headerContainer: {
    paddingBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer1: {
    flex: 1,
    marginLeft: 9,
  },
  textContainer2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    paddingBottom: 4,
    color: "white",
    fontWeight: 'bold',
    fontSize: 15,
  },
  header2: {
    color: "#6F8687",
    fontSize: 12,
  },
  title: {
    color: "#6F8687",
    fontSize: 14,
    marginBottom: 4,
  }
});

export default App;