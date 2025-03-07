import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Login from '@/constants/Login ';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function contact() {
    const router = useRouter(); //use router
    const {name, major, email} = useLocalSearchParams();  //useLocalSearchParams
  return (
    <View style={Login.container}>
      <Text>contact page</Text>
      <Text>Name : {name} </Text>
      <Text>Name : {major} </Text>
      <Text>Email : {email} </Text>
      <Button title='Black' onPress={()=> router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({})