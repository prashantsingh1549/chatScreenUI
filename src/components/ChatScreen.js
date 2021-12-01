import React, { useState , useRef} from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import ChatBox from "./ChatBox";
import wallpaper from "../../assets/wallpaper.jpg";
import profile from "../../assets/profile.jpg"
import Video from 'react-native-video';
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialIcons";
import { vh, vw } from "./Dimension";

const ChatScreen = () => {
    const [data, setData] = useState([
        { isSent: true, time: new Date(), image: "", video: "", text: "hello Prashant", mine: true },
        { isSent: true, time: new Date(), image: "", video: "", text: "hello sid", mine: false },
        { isSent: true, time: new Date(), image: profile, video: "", text: "this picture is nice", mine: false },
        { isSent: true, time: new Date(), image: "", video: "", text: "yes nice ", mine: true },
        { isSent: true, time: new Date(), image: "", video: "", text: "how are you?", mine: false },
        { isSent: true, time: new Date(), image: "", video: "", text: "fine and you", mine: true },
        { isSent: true, time: new Date(), image: "", video: "", text: "i am also fine", mine: false },
        { isSent: true, time: new Date(), text: "look this video", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", mine: false },
    ])
    const [mine, setmine] = useState(true)
    const [paused, setPaused] = useState(true)

    const handleSubmit = (chat) => {
        const allData = [...data];
        const chatObject = { isSent: true, time: new Date(), image: "", video: "", text: chat, mine: !mine }
        allData.push(chatObject);
        setData(allData)
        setmine(!mine)
    }
    return (
        <ImageBackground source={wallpaper} style={styles.screenContainer} >
            <FlatList
                data={data}
                keyExtractor={({ item, index }) => Math.random(100)}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.meassage, item.mine ? styles.mine : styles.not_mine]}>
                            <View style={[styles.cloud, { backgroundColor: item.mine ? "#dddddd" : "#DBFAC6" }]}>
                                {item.image ?
                                    <Image style={[styles.contetImage, { alignSelf: item.mine ? "flex-start" : "flex-end", }]}
                                        borderRadius={10}
                                        source={profile} />
                                    : null}
                                {item.video ?
                                    <View style={{ width: vw(290), height: vh(170), justifyContent: "center", alignItems: "center" }}>
                                        <Video source={{ uri: item.video }}
                                            paused={paused}
                                            pictureInPicture={true}
                                            poster={"https:baconmockup.com/300/200/"}
                                            selectedVideoTrack={{ type: "disabled" }}
                                            style={styles.backgroundVideo} />
                                        <TouchableOpacity
                                            onPress={() => { setPaused(!paused) }}
                                            style={{ justifyContent: "center", alignItems: "center" }}
                                        >
                                            {paused === true ? <Icon name="play-circle-fill" size={50} color="#000" /> :
                                                <Icon name="pause" size={50} color="#000" />}
                                        </TouchableOpacity>
                                       
                                    </View>
                                    : null}
                                {item.text ?
                                    <Text style={[styles.text]}>{item.text}</Text>
                                    : null}
                                <View style={{ flexDirection: "row", justifyContent: "flex-end", }}>
                                    <Text style={{ color: "grey", fontSize: 11 }}>{moment(item.time).format("LT")}</Text>
                                    {item.isSent === true ?
                                        <Icon style={{ marginLeft: 2 }} name="check" size={18} color="lightblue" /> : ""}
                                </View>
                            </View>
                        </View>


                    );
                }}
            />

            <View style={{ height: 60, zIndex: 2, marginLeft: 2 }}>
                <ChatBox onHandleSubmit={handleSubmit} />
            </View>
        </ImageBackground>
    )
};

export default ChatScreen;

const styles = StyleSheet.create({
    meassage: {
        flexDirection: "row",
        marginVertical: vh(10)
    },
    cloud: {
        maxWidth: vw(3100),
        paddingHorizontal: vw(10),
        paddingTop: vh(10),
        paddingBottom: vh(8),
        borderRadius: 10,
    },
    screenContainer: {
        flex: 1,
    },

    contetImage: {
        width: vw(220),
        height: vh(150),
        borderRadius: 10,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    text: {
        paddingTop: 3,
        fontSize: 17,
        lineHeight: 22,
        color: "#000"
    },
    mine: {
        marginLeft: vw(15)
    },
    not_mine: {
        alignSelf: "flex-end",
        marginRight: vw(15)
    },
})

