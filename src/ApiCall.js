import {  FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ActivityIndicator} from 'react-native-paper'

function ApiCall () {
    const [isLoading,setIsLoading]=useState(true);
    const [employees,setEmployees]=useState([]);
    useEffect(()=>{
        fetch("https://aamras.com/dummy/EmployeeDetails.json")
        .then((response)=>response.json())
        .then((json)=>setEmployees(json.employees))
        .catch((error)=>console.log(error))
        .finally(()=>setIsLoading(false));
    },[]
    );
  return (
    <View style={{flex:1}}>
     {isLoading?(
        <ActivityIndicator/>

     ):(
        <View style={{flex:1}}>
            <FlatList
            data={employees}
            renderItem={({item})=>{
                    return<Text>
                        "employees_name":{item.name},"employees_age":{item.age},"employees_salary":{item.salary}
                    </Text>
            }
                  
            
            
        }
            />
            </View>
     )}
    </View>
  )
}

export default ApiCall

const styles = StyleSheet.create({})