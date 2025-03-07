import { StatusBar } from 'expo-status-bar';
//rnfs
import { Text, View, TextInput, Image, TouchableOpacity, Button, ScrollView, Alert,  TouchableHighlight, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from '@/constants/Login ';
import About from '@/components/About ';
import { Link, useRouter } from 'expo-router';
//import profile from "@/assets/images/eren.jpg";

export default function Index() {
  const router = useRouter();
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cacel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: false }
    );
  };
  return (
      <ScrollView style={{ flex: 1}}>
      <LinearGradient colors={['#EEE8AA','#FAFAD2','#EEE8AA']} style={ Login.container}>
      <View style={ Login.spacing } />
      <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/6122/6122651.png' }} style={Login.logo} />   
      <Text style={Login.title}> Welcome </Text>
      <TextInput style={Login.input} placeholder='User Player' />
      <TextInput style={Login.input} placeholder='Password' secureTextEntry />
      <TouchableOpacity style={Login.button}>
            <Text style={Login.buttonText}>Login</Text>
      </TouchableOpacity>

      <About />
      <Link href='/contact'>Click Here</Link>

      <Button title='Click Test' onPress={()=> 
          router.push("/contact?name=OAT&major=Thongchai&email=tc.oattt@gmail.com")} />

          <Text>&nbsp;</Text>

      <Button title='Click Contact' onPress={()=> 
          router.push({
            pathname : "/contact",
            params : {
              name : "OAT",
              major : "Thongchai",
              email : "tc.oattt@gmail.com",
            }
          })} />
          <Text>&nbsp;</Text>

        <Button title='Click Go To User ID' onPress={()=> 
          router.push("/user/123")} />

        <Text>&nbsp;</Text>

        <Button title='Go To Profile' onPress={()=> 
          router.push("/profile")} />

          <Text>&nbsp;</Text>

          <Text style={{alignItems: "center"}}>ERENNNNNNNNNNN</Text>
          <Image source={require('@/assets/images/eren.jpg ')} 
          style={{width: 120, height: 120, borderRadius: 100, marginHorizontal: "auto",}} resizeMode="cover"
          />
          <Text>&nbsp;</Text>

          <Text style={{alignItems: "center"}}>MIKASAAAAAAAAAAAA</Text>
          <Image source={require('@/assets/images/Mikasa.webp ')} 
          style={{width: 120, height: 120, borderRadius: 100, marginHorizontal: "auto",}} resizeMode="cover"
          />
          
          {/*<Image source={profile}
          style={{width: 120, height: 120, borderRadius: 100, marginHorizontal: "auto",}} resizeMode="cover"
          />*/}

          <Text>&nbsp;</Text>
          <TouchableHighlight
          underlayColor="#black"
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            showAlert();
          }}
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>
      <StatusBar style="auto" />
    </LinearGradient>
    </ScrollView>
  );
}