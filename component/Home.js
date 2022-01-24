import React, { useState } from 'react';
import { View,ScrollView,StyleSheet,Text,Image,TouchableOpacity,FlatList,TextInput} from 'react-native';
import  DataStory  from '../Data.js/DataStory';
import Data from '../Data.js/Data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
const ItemStoty=({item})=>{
    return(
        <TouchableOpacity style={styles.ViewImage}>
        <Image style={styles.imageStory}source={{uri:item.image}}/>
        <Text style={{fontSize:12}}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const ItemContent=({item}) =>{
   
    return (
        <View style={styles.contentNew}>
        <View style={styles.header}> 
            <View style={styles.nameAvatar}>
            <Image style={styles.avatar} source={{uri:item.avatar}}/>
            <Text style={{fontWeight:'bold',marginLeft:5,fontSize:16}}>{item.name}</Text>
            </View>
            <Ionicons size={20} style={styles.IconDots} name="ellipsis-vertical"/>
        </View>
        <Image style={styles.imageContent} source={{uri:item.image}}/>
            <View style={styles.React}>
                <View style={styles.IconReact}>
                    <Ionicons style={{padding:5}} size={30} name="heart-outline"></Ionicons>
                    <Ionicons style={{padding:5}} size={30} name="chatbubble-outline"></Ionicons>
                    <Icon style={{padding:5}} size={30} name="send"></Icon>
                    <Icon style={{paddingLeft:250}} size={30} name="bookmark"></Icon>
                </View>
                    <Text style={{fontWeight:'bold',paddingLeft:5}}>{item.react}</Text>
                    <View style={styles.comment}>
                        <Image style={{height:30,width:30,borderRadius:44,marginLeft:5}} source={{uri:item.avatar}}/>
                        <TextInput style={{width:270,marginLeft:10}} placeholder="Thêm bình luận"/>
                            <View style={styles.IconComment}>
                                    <Ionicons size={20} style={{color:'red'}} name="heart"/>
                                    <Ionicons size={20} style={{color:'#eba40b',marginLeft:7}} name="hand-right"></Ionicons>
                                    <Ionicons size={20} style={{color:'gray',marginLeft:7}} name="add-circle-outline"></Ionicons>
                            </View>
                    </View>
            </View>
    </View>
    )
}
const Home=()=> {
  return (
    <View style={styles.container}>
        <View style={styles.story}>
        <FlatList 
        horizontal={true}
        data={DataStory}
        renderItem={ItemStoty}
        keyExtractor={item =>item.id}
        />
        </View>
        
        <View style = {styles.content}>
            <FlatList
                data={Data}
                renderItem={ItemContent}
                keyExtractor={item =>item.id}
            />
        </View>
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    story:{
        flex: 1,
        
    },
    imageStory:{
        height:70,
        width:70,
        borderRadius:44,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
    },
    ViewImage:{
        height:'100%',
        width:90,
        alignItems: 'center'
    },
    content: {
            marginTop:5,
            flex: 6,
         
    },
    contentNew:{
        height:600,
        borderWidth: 0.3,
        flex:1,
    },
    header: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
    },
    imageContent: {
        flex:8,
    },
    React:{
        flex:2,
        justifyContent: 'space-between',
    },
    avatar: {
        width:40,
        height:40,
        marginLeft:10,
        borderRadius:44,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "red",
    },
    nameAvatar:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
      
    },
    IconDots:{
        marginRight:5
    },
    IconReact:{
        flexDirection:'row',

    },
    comment:{
        flexDirection:'row',
        alignItems: "center",
        marginBottom:3,
    },
    IconComment:{
        flexDirection:'row',
        marginLeft:5
    }
   
})