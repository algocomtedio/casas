import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  const [Imc,setImc] = useState(null);

const calcularImc = ( )=>{
  var resultado = peso / (altura * altura);
  setImc(resultado);

}


  return (

    <View style={styles.container}>
   <Text>Aplicativo-calculo-IMC</Text>
      <TextInput
       placeholder="peso" 
      keyboardType="numeric" 
      value={peso}
      onChangeText={(peso)=>setPeso(peso)}
      
/>
      <TextInput
       placeholder="Altura" 
      keyboardType="numeric" 
      value={altura}
      onChangeText={(altura)=>setAltura(altura)}
      />
      {Imc&&(
<Text style={styles.titulo}>Imc: {Imc}</Text> 
      )}
      <Button title="Calcular" onPress={()=>{calcularImc( ) }}/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A41623',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: '50',
    fontWeight: "bold"
  }
});
