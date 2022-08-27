import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

function Separator() {  
  return <View style={styles.Separator} />
}


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
    <View>
     <Button title="Aperte aqui" OnPress={() => {alert('Simples')
    }} />
    </View>
    <Separator />
    <View>
      <Text style={ styles.title}>
  )Adjust the color in a way that looks standard on each platform. 
  on ios, the color prop controls the color of the text. On Android, the color adjust the background Color of the Button.
  </Text>
  <Button
   title="Aperte aqui"
   color="#f194ff"
   onPress={() => {alert('Button with adjusted color pressed')}}
/>
</View>
  <Separator />
  <View>
    <Text style={styles.title}>
      All interaction for the component are disabled.
      </Text>
      <Button
      title="Aperte aqui"
      disabled
      onPress={()=> { alert('cannot press this one')}}
/>
</View>
<Separator />
<View>
  <Text style={styles.title}>
    This layout strategy lets the title define the width os the button.
    </Text>
    <View> </View> style={styles.fixToText}>
      <Button
      title="Botão esquerdo"
      onPress={()=> { alert('left button pressed')}}
      />
    <Button
    title="Botão direito"
    onPress={()=>{alert('Left button pressed')}}
    />
    </View>
    </View>
