import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
function Singlequouts({ navigation, route }) {


    const [currentText, setcurrentex] = useState(0);
    const [like,setlike]=useState(false);

    function showpretxt() {
        // console.log('hello');
        if (currentText === 0) {
            // setcurrentex(Quouts.length -1);
            return;
        } else {
            setcurrentex(currentText - 1);
        }
    }
    const Quouts =
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
        ]

    function shownexttxt() {
        // console.log('hii');
        if (currentText === Quouts.length - 1) {
            setcurrentex(0);
        } else {
            setcurrentex(currentText + 1);
        }
    }
    function tooglelike(){
        setlike(!like);
    }
    function copyToClipboard() {
        Clipboard.setString(Quouts[currentText]);
    }
    return (
        <>
            <View>
                <View style={{ height: 10, flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <Pressable style={{ height: 50, width: 100, backgroundColor: 'black', borderRadius: 100 }} onPress={() => navigation.navigate('Details')}><Text style={style.btntxt}>←</Text></Pressable>
                </View>
                <View style={{ height: 800, justifyContent: 'center' }}>

                    <View style={style.box} >
                        <Pressable onPress={() => navigation.navigate('single')}>
                            <Text style={style.txt}>{Quouts[currentText]}</Text>
                        </Pressable>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Pressable onPress={tooglelike}>
                                <Image source={like ? require('./img/heart_on.png') : require('./img/heart_off.png')} resizeMode='stretch' style={{ height: 25, width: 25, margin: 10 }}></Image>
                            </Pressable>
                            <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>Like</Text>
                            <Image source={require('./img/download.png')} resizeMode='stretch' style={{ height: 25, width: 25, margin: 10 }}></Image>
                            <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>Save</Text>
                            <Pressable onPress={copyToClipboard}>
                                <Image source={require('./img/copy.png')} resizeMode='stretch' style={{ height: 25, width: 25, margin: 10 }}></Image>
                            </Pressable>
                            <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>Copy</Text>
                            <Image source={require('./img/share.png')} resizeMode='stretch' style={{ height: 25, width: 25, margin: 10 }}></Image>
                            <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>Share</Text>
                        </View>
                    </View>

                    <View style={{ height: 10, flexDirection: 'row', justifyContent: 'space-between', margin: 25 }}>
                        <Pressable style={{ height: 50, width: 100, backgroundColor: 'black' }} onPress={showpretxt} disabled={currentText === 0}><Text style={currentText === 0 ? { ...style.btntxt, opacity: 0.5 } : style.btntxt}>«</Text></Pressable>
                        <Pressable style={{ height: 50, width: 100, backgroundColor: 'black' }} onPress={shownexttxt} disabled={currentText === Quouts.length - 1}><Text style={currentText === Quouts.length - 1 ? { ...style.btntxt, opacity: 0.5 } : style.btntxt}>»</Text></Pressable>
                    </View>

                </View>

            </View >
        </>
    )
}

export default Singlequouts
const style = StyleSheet.create({
    box: {
        height: 460,
        margin: 5,
        width: '97%',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 40,
        shadowColor: 'gray',
        marginBottom: 10,
        // backgroundColor:'pink'
    },
    txt: {
        height: 400,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
        padding: 50,
        fontWeight: 'bold',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    btntxt: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',

    }
})

