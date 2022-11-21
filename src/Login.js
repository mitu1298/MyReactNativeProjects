import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Data from './Data';
import ApiCall from './ApiCall';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login ({navigation})  {
const[name,setName]=useState();
const[email,setEmail]=useState();
const emailref = useRef();
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
        <Text>Login</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:80}}>
        <Text style={{fontSize:18}}>Name:</Text>
        <TextInput 
        style={{paddingLeft:5,backgroundColor:"#f2f2f2",width:180,
        height:30,borderRadius:5,marginHorizontal:10}}
        placeholder="Enter Name" onChangeText={(name)=>setName(name)}
        onSubmitEditing={()=> {emailref.current.focus();}}
        ></TextInput>
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:10}}>
        <Text style={{fontSize:18}}>Email:</Text>
        <TextInput style={{paddingLeft:5,backgroundColor:"#f2f2f2",width:180,height:30,
        borderRadius:5,marginHorizontal:10}}
        placeholder="Enter Email" onChangeText={(email) => setEmail(email)}
        ref={emailref} keyboardType="email-address">

        </TextInput>
        </View>
    <View>
        <TouchableOpacity style={{borderRadius:5,backgroundColor:"#fcbc05",width:100,height:30,justifyContent:"center",marginHorizontal:130,marginTop:40}}
                            onPress={()=>navigation.navigate('Data')}
        >
            <Text style={{textAlign:"center"}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:5,backgroundColor:"#fcbc05",width:100,height:30,justifyContent:"center",marginHorizontal:130,marginTop:40}}
                            onPress={()=>navigation.navigate('ApiCall')}
        >
            <Text style={{textAlign:"center"}}>ApiCall</Text>
        </TouchableOpacity>
    
       
        
        </View>
    
    </View>
  )
}

//export default Login;

const Stack= createNativeStackNavigator();
function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{
                    title:'Home Page'
                }}/>
            <Stack.Screen name ='Data' component={Data}  options={{
                title:'Data'
            }}/>
            <Stack.Screen name='ApiCall' component={ApiCall} options={{
                title:'ApiCall'
            }}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}
 export default App;
const styles = StyleSheet.create({})