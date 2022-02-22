import React, {useEffect, useState} from 'react';
import { Button ,StyleSheet ,TextInput,View} from 'react-native';
import PushNotification from "react-native-push-notification";



export default function App(){
  useEffect(
    ()=>{
      createChannels();
    },[]
  );
  const[name,setName]=useState('Rahul');


const createChannels =() =>{
  PushNotification.createChannel(
    {
      channelId:"test-channel",
      channelName:"Test Channel"
    }
  )
}

const handleNotificationA= ()=>{
  PushNotification.localNotification({
    channelId:"test-channel",
    title : "You clicked on Button A",
    message:"Hello "+name+" Your order is ready",
    color :"red"
  })
}

const handleNotificationB =() => {
  PushNotification.localNotification({
    channelId:"test-channel",
    title : "You clicked on Button A",
    message:"Hello "+name+" Your order is ready",
    bigText: "Thanks "+name+" for Ordering food from Button B store "
  

  });
  

} 


  return(
    <View style={styles.container}>

      <TextInput
      multiline
      placeholder='e.g John Martin'
      onChangeText={(val)=>setName(val)}
      />
<Button title='Button A'
onPress={()=>{ handleNotificationA()}}/>
<Button title='Button B'
onPress={()=> { handleNotificationB() }}/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
 
 
 
 
  
});