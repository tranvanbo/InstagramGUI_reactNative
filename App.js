import * as React from 'react';
import { Text, View,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Activity from './component/Activity';
import Home from './component/Home';
import Profile from './component/Profile';
import Search from './component/Search';
import Video from './component/Video';
import Icon from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
const CustomHeader = () => (
  <View style={styles.header}>
    <Text style={{ fontSize:20,fontWeight: 'bold' }}>Instagram</Text>
    <View style={styles.iconView}>
    <TouchableOpacity style={styles.iconPlus}>
    <Icon name="plus-square" size={30} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconSend}>
    <Icon size={30} name="send"></Icon>
    </TouchableOpacity>
    
    </View>
 
  </View>
);

export default function App() {
   
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return (
              <Ionicons name="home-sharp" size={30}  style={{color: 'black'}}/>
            );
          } else if (route.name === 'Search') {
            return (
              <Ionicons
                name="search"
                size={30}
                style={{color: 'black'}}
              />
            );
          }
          else if(route.name === 'Video'){
            return(
              <Icon
              name="film"
              size={30}
              style={{color: 'black'}}
              />
            )
          }
          else if(route.name === 'Activity'){
            return(
              <Ionicons
              name="heart-outline"
              size={30}
              style={{color: 'black'}}
              />
            )
          }
          else if(route.name === 'Profile'){
            return(
              // <Ionicons
              // name="person"
              // size={30}
              // style={{color: 'black'}}
              // />
              <Image  style={{borderRadius:44,height:30,width:30}} source={{uri:'https://instagram.fsgn5-11.fna.fbcdn.net/v/t51.2885-19/s150x150/269722840_115083967689442_8548000068534297585_n.jpg?_nc_ht=instagram.fsgn5-11.fna.fbcdn.net&_nc_cat=110&_nc_ohc=n4pzSO0tojYAX-1hYuL&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT89fnqTRrACqmNQHlXsE_k-HQ372IKn2cqrhe-6_-yHcQ&oe=61F5C9F8&_nc_sid=7bff83'}}/>
            )
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        tabBarLabel:() => {return null},
      })}
      >
        <Tab.Screen name="Home" component={Home}  options={{ headerTitle: CustomHeader }}/>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Video" component={Video} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  header:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
  ,
  iconView:{
      flexDirection: 'row',
      marginLeft:200
      
  },
  iconPlus:{
    marginRight:20
  }
 
 
})