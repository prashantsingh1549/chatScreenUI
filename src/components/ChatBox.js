import React, { useState, } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Keyboard,Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import EmojiBoard from "react-native-emoji-board";
import { vh, vw } from "./Dimension";


const ChatBox = ({ onHandleSubmit }) => {
    const [chat, setChat] = useState("");
    const [height1, setheight] = useState(0);
    const [emoji, setEmoji] = useState(false)

    const handleEmoji=(emoji)=>{
        const chatData=chat+emoji.code
        setChat(chatData)
       
    }
    return (
        <View style={styles.screenContainer}>
            <View style={{ flex: 6, justifyContent: "center" }}>
                <TextInput
                    placeholder="Message"
                    value={chat}
                    onChangeText={(val) => setChat(val)}
                    onFocus={()=>setEmoji(false)}
                    style={[styles.chatbox, { height: Math.max(50, height1),marginBottom: emoji == true ? vh(420) : 0 }]}
                    onContentSizeChange={(event) => {
                        event.nativeEvent.contentSize.height < 105 && setheight(event.nativeEvent.contentSize.height)
                    }}
                    multiline={true}
                />
                <TouchableOpacity
                    style={{ position: "absolute", paddingLeft: vw(10) ,bottom: emoji == true ? vh(432) : vh(15)}}
                    onPress={() => {
                        setEmoji(!emoji)
                        Keyboard.dismiss()
                    }
                    }>
                    <Icon name="emoji-emotions" color="lightgray" size={25} />
                </TouchableOpacity>
                {
                    chat == "" &&
                    <View style={{ position: "absolute", right: 80, flexDirection: "row",bottom: emoji == true ? vh(432) : vh(15) }}>
                        <TouchableOpacity
                            style={{ rotation: -40 }}
                            onPress={() => {
                                alert("Attached file")
                            }
                            }>
                            <Icon name="attach-file" color="lightgray" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.money}
                            onPress={() => {
                                alert("Money transfer")
                            }
                            }>
                            <Icon1 name="rupee" color="gray" size={18} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginRight: -vw(70), }}
                            onPress={() => {
                                alert("Open camera")
                            }
                            }>
                            <Icon name="photo-camera" color="lightgray" size={25} />
                        </TouchableOpacity>
                    </View>}
            </View>
            <View style={{ flex: 1 }}>
                {chat == "" ? <TouchableOpacity
                    onPress={() => {
                        alert("comming soon")
                    }}
                    style={[styles.micIcon,{marginBottom: emoji == true ? vh(620) : 0 }]}>
                    <Icon name="mic" size={25} color="#fff" />
                </TouchableOpacity> :
                    <TouchableOpacity
                        onPress={() => {
                            onHandleSubmit(chat)
                            setChat("")
                            setEmoji(false)
                        }}
                        style={[styles.micIcon,{marginBottom: emoji == true ? vh(620) : 0 }]}>
                        <Icon name="send" size={25} color="#fff" />
                    </TouchableOpacity>}
            </View>
            <EmojiBoard 
            showBoard={emoji} 
            onRemove={() => setEmoji(!emoji)} 
            onClick={handleEmoji} 
            // containerStyle={{position:"absolute"}}
            />
        </View>
    )
};

export default ChatBox;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row"
    },
    chatbox: {
        backgroundColor: "#17212D",
        borderRadius: 25,
        paddingLeft: vw(45),
        paddingHorizontal: vw(20)
    },
    micIcon: {
        width: vw(45),
        height: vh(49),
        borderRadius: 45 / 2,
        backgroundColor: "#49C95A",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: vw(4)
    },
    money: {
        marginHorizontal: vw(15),
        width: vw(27), height: vh(29),
        borderRadius: 25 / 2,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center"
    }
})