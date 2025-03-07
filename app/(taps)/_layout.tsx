import { Tabs } from "expo-router";
import TabBarIcon from "@/components/navigation/TabBarIcon ";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Foundation } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: true, 
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: "#BDB76B",
        },
        tabBarLabelStyle: {fontSize: 14, fontWeight: "bold", color: 'black'},
        tabBarStyle: { backgroundColor: "#BDB76B", height: 90, marginBottom: 0, paddingTop: 5,},
        tabBarInactiveTintColor: "black",
        tabBarInactiveBackgroundColor: "#BDB76B",
    }}>
   <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="volume-control-phone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(admin)"
        options={{
          title: "Admin",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="users" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}