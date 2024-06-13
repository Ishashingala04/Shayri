import React,{ useState} from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
const Homepage = ({route,navigation}) => {
    const [board, setBoard] = useState(Array(20).fill(null));
  
    const renderBoard = () => {
      return board.map((cell, index) => (
        <Pressable key={index} onPress={() => navigation.navigate('Details',{'levelno':index})} style={[style.content,{backgroundColor: colors[index % colors.length]}]}>
          <Text style={style.text}>{Quotes[index]}</Text>
          <Image style={[style.emoji]} resizeMode='contain' source={images[index]}></Image>
        </Pressable>
      ));
    };
  
    const Quotes = ['Alone', 'Angry', 'Anniversary', 'Attitude','Awesome', 'awkward moment', 'beard', 'beautiful', 'best', 'bike', 'birthday', 'break up', 'brother', 'busy', 'cheat', 'childhood', 'clever', 'college', 'cool', 'creative', 'cute', 'dance', 'emotional', 'exam', 'facebook', 'family', "father's day", 'flirt', 'food', 'forgiveness', 'friends', 'funny', 'god', 'good morning', 'good night', 'gym'];
    const images = [ require('./img/category113.png'),
     require('./img/category3.png'),
     require('./img/category4.png'),
     require('./img/category5.png'),
     require('./img/category6.png'),
     require('./img/category7.png'),
     require('./img/category8.png'),
     require('./img/category9.png'),
     require('./img/category10.png'),
     require('./img/category11.png'),
     require('./img/category12.png'),
     require('./img/category74.png'),
     require('./img/category16.png'),
     require('./img/category17.png'),
     require('./img/category18.png'),
     require('./img/category19.png'),
     require('./img/category20.png'),
     require('./img/category21.png'),
     require('./img/category22.png'),
     require('./img/category24.png'),
     require('./img/category26.png'),
     require('./img/category27.png'),
     require('./img/category28.png'),
     require('./img/category29.png'),
     require('./img/category30.png'),
     require('./img/category31.png'),
     require('./img/category109.png'),
     require('./img/category32.png'),
     require('./img/category33.png'),
     require('./img/category114.png'),
     require('./img/category34.png'),
     require('./img/category35.png'),
     require('./img/category37.png'),
     require('./img/category38.png'),
     require('./img/category39.png'),
     require('./img/category40.png'),
   ];
    const colors = ['#00ADE5','#F70039','#F6C602','#A9181B','#BF73BB','#F38BAE','#F65C5E','#FF6090','#4BD462','#4F19AB','#9319A8','#FFB74B'];
    
    return(
        <>
       
       
    <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={style.txt}>Best Quotes & Status</Text>
                    <Image source={require('./img/crown.png')} style={{height:40,width:40}}></Image>
                    <Image source={require('./img/menu.png')} style={{height:40,width:40}}></Image>         
                </View>        
                    <TextInput style={style.serch}>
                        <Image source={require('./img/loupe.png')} style={{height:20,width:20,}}></Image>
                    </TextInput>
            <ScrollView style={{flex: 7}}>
                <View style={style.row}>{renderBoard()}</View>
            </ScrollView>
        
    </View>

            
       
        </>
    )
}
export default Homepage;
const style = StyleSheet.create({

    txt:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        textTransform:'uppercase',
        fontFamily:'PWChalk',
    },
    serch:{
       
        width:'100%',
        backgroundColor:'#dedede',
        borderRadius:20,
        paddingLeft:20,
        fontSize:20,
        marginBottom:15,
        marginTop:10
    },
    
    row:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:10,
        justifyContent:'space-between'
    },
    text: {
        fontSize :20,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#fff',
        padding: 5,
      },
      emoji: {
        height: '65%',
        alignSelf: 'flex-end',
       
      },
      content: {
        height: 100,
        width: '45%',
        borderRadius:8,
        margin:8
      },
   
   
})