import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Quouts({route,navigation}) {

    const [board,setboard] = useState(Array(10).fill(null));
    // const {levelno} = route.params;
    const Quouts = [
        [
            "‶The soul sees beauty may sometimes walk alone.″",
            "when the people you love are gone, you're alone.",   
            "life could be wonderful if people would leave you alone.",
            "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
            "i would rather to be alone and a loud voice for action than be silent.",
            "The soul sees beauty may sometimes walk alone.",
            "when the people you love are gone, you're alone.",   
            "life could be wonderful if people would leave you alone.",
            "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
            "i would rather to be alone and a loud voice for action than be silent.",
          ],
          [
            "silence is the best way to react while angry.",
            "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
            "sometimes i'm just not in the mood to talk.",
            "sometimes you just wanna give people a high five to the face.",
            "an angry man opens his mouth and shuts his eyes.",
            "silence is the best way to react while angry.",
            "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
            "sometimes i'm just not in the mood to talk.",
            "sometimes you just wanna give people a high five to the face.",
            "an angry man opens his mouth and shuts his eyes.",
          ],
          [
            "laugh at your problems,everybody else does.",
            "don't hate me, just get to know me first!",   
            "the best thing about being me, i'm a limited edition and there are no other copies!",
            "when people judge you on what they are told or what they see..get too know me first.",
            "i have a new thory in life...what other people think of me is truly none of my buisness!",
            "laugh at your problems,everybody else does.",
            "don't hate me, just get to know me first!",   
            "the best thing about being me, i'm a limited edition and there are no other copies!",
            "when people judge you on what they are told or what they see..get too know me first.",
            "i have a new thory in life...what other people think of me is truly none of my buisness!",
          ],
          [
            "The soul sees beauty may sometimes walk alone.",
            "when the people you love are gone, you're alone.",   
            "life could be wonderful if people would leave you alone.",
            "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
            "i would rather to be alone and a loud voice for action than be silent.",
            "The soul sees beauty may sometimes walk alone.",
            "when the people you love are gone, you're alone.",   
            "life could be wonderful if people would leave you alone.",
            "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
            "i would rather to be alone and a loud voice for action than be silent.",
          ],
          [
            "silence is the best way to react while angry.",
            "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
            "sometimes i'm just not in the mood to talk.",
            "sometimes you just wanna give people a high five to the face.",
            "an angry man opens his mouth and shuts his eyes.",
            "silence is the best way to react while angry.",
            "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
            "sometimes i'm just not in the mood to talk.",
            "sometimes you just wanna give people a high five to the face.",
            "an angry man opens his mouth and shuts his eyes.",
          ],
          [
            "laugh at your problems,everybody else does.",
            "don't hate me, just get to know me first!",   
            "the best thing about being me, i'm a limited edition and there are no other copies!",
            "when people judge you on what they are told or what they see..get too know me first.",
            "i have a new thory in life...what other people think of me is truly none of my buisness!",
            "laugh at your problems,everybody else does.",
            "don't hate me, just get to know me first!",   
            "the best thing about being me, i'm a limited edition and there are no other copies!",
            "when people judge you on what they are told or what they see..get too know me first.",
            "i have a new thory in life...what other people think of me is truly none of my buisness!",
          ],
          [
            "The soul sees beauty may sometimes walk alone.",
            "when the people you love are gone, you're alone.",   
            "life could be wonderful if people would leave you alone.",
            "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
            "i would rather to be alone and a loud voice for action than be silent.",
            "The soul sees beauty may sometimes walk alone.",
            "when the people you love are gone, you're alone.",   
            "life could be wonderful if people would leave you alone.",
            "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
            "i would rather to be alone and a loud voice for action than be silent.",
          ],
          [
            "silence is the best way to react while angry.",
            "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
            "sometimes i'm just not in the mood to talk.",
            "sometimes you just wanna give people a high five to the face.",
            "an angry man opens his mouth and shuts his eyes.",
            "silence is the best way to react while angry.",
            "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
            "sometimes i'm just not in the mood to talk.",
            "sometimes you just wanna give people a high five to the face.",
            "an angry man opens his mouth and shuts his eyes.",
          ],
          [
            "laugh at your problems,everybody else does.",
            "don't hate me, just get to know me first!",   
            "the best thing about being me, i'm a limited edition and there are no other copies!",
            "when people judge you on what they are told or what they see..get too know me first.",
            "i have a new thory in life...what other people think of me is truly none of my buisness!",
            "laugh at your problems,everybody else does.",
            "don't hate me, just get to know me first!",   
            "the best thing about being me, i'm a limited edition and there are no other copies!",
            "when people judge you on what they are told or what they see..get too know me first.",
            "i have a new thory in life...what other people think of me is truly none of my buisness!",
          ]
    ];
  return (
   <>
       <ScrollView>

            <View style={{flex:1,flexDirection:'column'}}>

                <View style={style.contanier}>

                    {
                        board.map((value,index)=>(

                            <View style={style.box} key={index}>
                            <Pressable onPress={() => navigation.navigate('single')}>
                                <Text style={style.txt}>{Quouts[index]}</Text>
                            </Pressable>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                                <Image source={require('./img/heart_off.png')} resizeMode='stretch' style={{height:25,width:25,margin:10}}></Image>
                                <Text style={{fontSize:20,color:'black',margin:10}}>Like</Text>
                                <Image source={require('./img/download.png')} resizeMode='stretch' style={{height:25,width:25,margin:10}}></Image>
                                <Text style={{fontSize:20,color:'black',margin:10}}>Save</Text>
                                <Image source={require('./img/copy.png')} resizeMode='stretch' style={{height:25,width:25,margin:10}}></Image>
                                <Text style={{fontSize:20,color:'black',margin:10}}>Copy</Text>
                                <Image source={require('./img/share.png')} resizeMode='stretch' style={{height:25,width:25,margin:10}}></Image>
                                <Text style={{fontSize:20,color:'black',margin:10}}>Share</Text>
                            </View>
                        </View>
                        ))
                    }   

                </View>

            </View>
       </ScrollView>

   </>
  )
}
const style=StyleSheet.create({
box:{
    height:460,
    margin:5,
    width:'97%',
    // padding:20,
    borderRadius:20,
    backgroundColor:'white',
    elevation:40,
    shadowColor:'gray',
    marginBottom:10
},
txt:{
    height:400,
    width:'100%',
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    fontSize:35,
    padding:50,
    fontWeight:'bold',
    borderTopRightRadius:20,
    borderTopLeftRadius:20
}
})
