import { useRoute } from "@react-navigation/native";
import { Animated, Text, View, SafeAreaView, StatusBar, ScrollView, StyleSheet, TouchableOpacity, GestureResponderEvent, Button } from "react-native";

import { useFonts } from 'expo-font';
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";


//Andy name is passed from the profile's screen as first name  

//FIRST ANIMATION VIEW
const InitialView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true

            }
        ).start();
    }, [fadeAnim])

    return (

        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

//SECOND ANIMATION VIEW
const SecondView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.sequence([
            Animated.delay(1000),
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            )]).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

//THIRD ANIMATION VIEW
const ThirdView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.sequence([
            Animated.delay(2000),
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            )]).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}


const Dashboard = () => {
    const [usearr, setarr] = useState([8, 8, 8, 4])
    var luckygame = []

    //IF TRY YOUR LUCK BUTTON IS PRESSED, THE DATA IS FETCHED FROM YOUR GIVEN API
    const onpress = async () => {

        try {
            const response = await fetch(
                'https://raw.githubusercontent.com/Streak-Tech/assigment/main/data.json'
            );
            const json = await response.json();
            console.log(usearr);
            console.log(json.numbers);

            setarr(json.numbers)
            console.log(usearr);
        } catch (error) {
            console.error(error);
        }

    }

    //when u clickk try luck these numbers get pushed
    for (let i = 0; i < usearr.length; i++) {

        luckygame.push(
            <View key={i}>
                <View style={styles.cardnumber}>
                    <Text style={[{
                        fontSize: 50,
                        fontWeight: "bold",

                        color: "brown"
                    }]}> {usearr[i]} </Text>
                </View>
            </View>
        )
    }

    //FOR LOADING FONTS
    const [loaded] = useFonts({
        Barlow: require('./assets/fonts/Barlow.ttf'),
        IBMPlexMono: require('./assets/fonts/IBMPlexMono.ttf')
    });

    //RETRIEVING DATA FROM STORE 
    const details = useSelector((store) => store.details.details);


    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar />
            <View style={{ flex: 1 }}>
                <View style={{ height: 400, backgroundColor: "#ac39ac", paddingTop: 30, paddingHorizontal: 12, paddingBottom: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18 }}>
                        <View style={{ width: 30, height: 30, marginLeft: 5, backgroundColor: "white", transform: [{ rotate: "45deg" }] }}></View>
                        <View style={{ maxWidth: 250 }}>
                            <View style={{ height: 36, backgroundColor: "purple", borderRadius: 30, flexDirection: "row", paddingRight: 20 }}>
                                <View style={{ width: 25, height: 25, backgroundColor: "white", margin: 6, borderRadius: 50 }}></View>
                                <Text style={styles.profile}>{details.firstname}</Text>
                            </View>
                        </View>
                    </View >
                    <InitialView style={{ height: 220, backgroundColor: "#f5fffa", borderRadius: 20 }}>
                        <View style={{ height: 120, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                            <View >
                                <Text style={[styles.savings, {
                                    color: "gray",
                                    paddingTop: 16,
                                    paddingBottom: 8
                                }]}>Balance</Text>
                                <Text style={[styles.price, { paddingBottom: 34, color: "black" }]}>{`\u20B9`}12,000</Text>
                            </View>
                            <View style={{ marginTop: 14, width: 45, height: 45, borderRadius: 50, borderWidth: 0.3 }}>
                                <View style={{ margin: 15, width: 20, height: 20, borderWidth: 1, borderRadius: 50 }}></View>
                            </View>

                        </View>
                        <View style={{ borderWidth: 0.4 }}></View>
                        <View style={{ height: 100, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f9ecf9", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <View >
                                <Text style={[styles.savings, {
                                    color: "purple",
                                    opacity: 0.7,
                                    paddingTop: 12,
                                    paddingBottom: 8
                                }]}>Savings</Text>
                                <Text style={[styles.price, { color: "purple", paddingBottom: 20 }]}>{`\u20B9`}36,800</Text>
                            </View>
                            <View style={{ marginTop: 40, padding: -14 }}>
                                <View style={{ width: 96, height: 40, borderRadius: 30, borderWidth: 0.3, paddingHorizontal: 14, backgroundColor: "#ffe6ff", shadowOpacity: 1, shadowRadius: 70, shadowColor: "red" }}>
                                    <Text style={styles.savemore}>Save more</Text>
                                </View>
                            </View>
                        </View>

                    </InitialView >
                    <SecondView style={{ flexDirection: "row", marginVertical: 20 }}>
                        <View style={{ backgroundColor: "#80080", height: 50, width: 170, borderWidth: 0.3, borderRadius: 10, flexDirection: "row" }}>
                            <Text style={[styles.recenttrans, { color: "white", padding: 15 }]}>Scan Code</Text>
                            <View style={{ width: 30, height: 30, backgroundColor: "white", marginVertical: 10, borderRadius: 50 }}></View>
                        </View>
                        <View style={{ backgroundColor: "#bf40bf", height: 50, width: 70, borderWidth: 0.4, borderRadius: 10, marginHorizontal: 8 }}>
                            <Text style={{ fontSize: 30, color: "white", textAlign: "center" }}>{`->`}</Text>
                        </View>
                        <View style={{ backgroundColor: "#bf40bf", height: 50, width: 70, borderWidth: 0.4, borderRadius: 10, marginHorizontal: 8 }}>
                            <Text style={{ fontSize: 30, color: "white", marginTop: -8, textAlign: "center" }}>...</Text>
                        </View>
                    </SecondView>
                </View>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic" >

                        <ThirdView style={{ paddingHorizontal: 12 }}>
                            <View style={{ marginTop: 30, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff6ff" }}>
                                <Text style={[styles.recenttrans, { marginTop: 20, color: "purple", marginBottom: 30, paddingLeft: 14, paddingRight: 20 }]}>Recent transactions</Text>
                                <View style={styles.orderdesc}>
                                    <View style={styles.orderpic}></View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={styles.item}>Food & Drinks</Text>
                                            <Text style={styles.transtime}>02:30 pm</Text>
                                        </View>
                                        <View style={{ marginLeft: 72 }}>
                                            <Text style={styles.item}>- {`\u20B9`}50</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={{ borderWidth: 0.2, opacity: 0.4 }}></View>
                                <View style={styles.orderdesc}>
                                    <View style={styles.orderpic}></View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={styles.item}>Store sale</Text>
                                            <Text style={styles.transtime}>Jun - 4:30 pm</Text>
                                        </View>
                                        <View style={{ marginLeft: 88 }}>
                                            <Text style={styles.item}>- {`\u20B9`}140</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={{ borderWidth: 0.2, opacity: 0.4 }}></View>
                                <View style={styles.orderdesc}>
                                    <View style={styles.orderpic}></View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View>
                                            <Text style={styles.item}>Money Credited</Text>
                                            <Text style={styles.transtime}>Jun - 12:30 pm</Text>
                                        </View>
                                        <View style={{ marginLeft: 35 }}>

                                            <Text style={[styles.item, { color: "green" }]}>+ {`\u20B9`}4500</Text>

                                        </View>
                                    </View>

                                </View>
                                <View style={{ borderWidth: 0.2, opacity: 0.4 }}></View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={[styles.recenttrans, { marginTop: 20, color: "purple", marginBottom: 30, opacity: 0.5, paddingLeft: 14, paddingRight: 20 }]}>All transactions {`>`} </Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                            <View style={{ marginTop: 30, borderRadius: 10, borderWidth: 1, backgroundColor: "#f0f8ff" }}>
                                <Text style={[styles.recenttrans, {
                                    marginTop: 20,
                                    marginBottom: 30, paddingLeft: 14, paddingRight: 20,
                                }]}>{details.firstname} 's Savings</Text>
                                <Text style={[{ paddingLeft: 14, paddingRight: 20 }, styles.random]}><Text style={styles.random}>Saved a total of </Text><Text style={[styles.random, { color: "black" }]}>{`\u20B9`}6,480</Text> <Text style={styles.random}>this month and is close to achieving one goal</Text></Text>
                                <View style={{ borderRadius: 10, borderWidth: 1, backgroundColor: "white", paddingLeft: 14, paddingRight: 20, marginRight: 20, marginLeft: 14, flexDirection: "row" }}>
                                    <View style={{
                                        borderRadius: 20,
                                        marginVertical: 13,
                                        marginRight: 15,
                                        width: 6,
                                        backgroundColor: '#909090',
                                    }}></View>
                                    <View>
                                        <Text style={[styles.random, {
                                            marginTop: 20,
                                            marginBottom: 30,
                                            opacity: 1
                                        }]}> Playstation 5</Text>
                                        <Text style={styles.random}><Text style={[styles.random, { color: "black" }]}>{`\u20B9`}36,480 saved </Text><Text style={styles.random}> of  {`\u20B9`}40,000 goal</Text> </Text>
                                    </View>
                                </View>

                                <View style={{ borderWidth: 0.2, opacity: 0.4, marginTop: 25 }}></View>
                                <TouchableOpacity>
                                    <Text style={[styles.random, { marginTop: 20, marginBottom: 30, paddingLeft: 14, paddingRight: 20, }]}>Add and view goals {`>`} </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 30, borderRadius: 10, borderWidth: 1, marginBottom: 40, backgroundColor: "#fdf5e6" }}>
                                <Text style={[styles.recenttrans, {
                                    marginTop: 20,
                                    marginBottom: 30, paddingLeft: 14, paddingRight: 20,
                                    color: "#800000"
                                }]}>Game of the day</Text>
                                <View style={{ flexDirection: "row", borderRadius: 10, borderWidth: 1, height: 120, marginLeft: 14, marginRight: 20, }}>

                                    {luckygame}

                                </View>
                                <Text style={[styles.recenttrans, {
                                    marginTop: 20,
                                    marginBottom: 30,
                                    textAlign: "center", paddingLeft: 14, paddingRight: 20,
                                    color: "brown"
                                }]}> Win prizes worth {`\u20B9`}4000 or more </Text>
                                <TouchableOpacity style={{ paddingLeft: 14, paddingRight: 20, borderRadius: 30, borderWidth: 1, height: 60, width: 200, backgroundColor: "brown", alignSelf: "center" }}
                                    onPress={onpress}>
                                    <Text style={[styles.recenttrans, {
                                        marginTop: 18,
                                        textAlign: "center",
                                        color: "white"
                                    }]}> Try your luck </Text>
                                </TouchableOpacity>
                                <View style={{ borderWidth: 0.2, opacity: 0.4, marginTop: 25 }}>

                                </View>
                                <TouchableOpacity>
                                    <Text style={[styles.recenttrans, {
                                        marginTop: 20,
                                        color: "brown",
                                        marginBottom: 30, paddingLeft: 14, paddingRight: 20,
                                    }]}>View all games {`>`} </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderRadius: 30, borderWidth: 1, width: 200, height: 60, marginBottom: 20, backgroundColor: "#e6e6fa", alignSelf: "flex-end" }}>
                                <Text style={[styles.recenttrans, {
                                    marginTop: 18,
                                    textAlign: "center",
                                    opacity: 0.5
                                }]}>Parental controls </Text>
                            </View>
                        </ThirdView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    cardnumber: { height: 100, justifyContent: "center", alignItems: "center", backgroundColor: "#ffdab9", width: 55, margin: 10, borderRadius: 10 },
    orderpic: { width: 50, height: 50, backgroundColor: "#e0ffff", borderRadius: 50 },
    orderdesc: { flexDirection: "row", paddingVertical: 18, paddingLeft: 14, paddingRight: 20 },
    random: {

        fontFamily: 'Barlow',
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left",
        color: "#0055ff",
        opacity: 0.7,
        marginBottom: 20

    },
    transtime: {
        fontFamily: "Barlow",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 17,
        letterSpacing: 0,
        textAlign: "left",
        marginLeft: 14,
        color: "gray",
        opacity: 0.9
    },
    item: {
        fontFamily: "Barlow",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left",
        marginLeft: 14,
        marginBottom: 4
    },
    savings: {
        fontFamily: "Barlow",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left"
    },
    recenttrans: {
        fontFamily: "Barlow",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: "left",

    },
    savemore: {
        fontFamily: "IBMPlexMono",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "center",
        color: "purple",
        paddingTop: 10

    },
    profile: {
        fontFamily: "Barlow",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "white",
        paddingLeft: 5,
        paddingTop: 7
    },

    price: {
        fontFamily: "IBMPlexMono",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 39,
        letterSpacing: 0,
        textAlign: "left"

    },

})

export default Dashboard;