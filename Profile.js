
import React, { useState, } from 'react';
import {
    Button,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SavePersonDetails } from './redux/actions/SavePersonDetails';
import { useDispatch, useSelector } from "react-redux"



const Profile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [firstname, setfname] = useState("");
    const [Secondname, setsname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setPhone] = useState("");

    const [loaded] = useFonts({
        'IBM Plex Sans': require('./assets/fonts/IBMPlexSans.ttf')
    });

    //IF FONTS ARE NOT LOADED, THE SCREEN WILL BE EMPTY.
    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={{
            marginHorizontal: 21,
            marginTop: 30
        }}>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" >

                <View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.profile}>Profile</Text>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            borderWidth: 0.3, alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 3,
                            backgroundColor: 'white',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: 'bold',
                                letterSpacing: 0.25,
                                color: 'red'
                            }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.enterurdetailstext}>Enter your details so we can {`\n`}get to know you better</Text>
                    <View style={{ borderWidth: 0.19, marginBottom: 28 }}></View>
                    <Text style={styles.headings}>First Name</Text>
                    <TextInput
                        selectTextOnFocus={true}
                        placeholder="John"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyle}
                        value={firstname}
                        onChangeText={(text) => setfname(text)}
                    />
                    <Text style={styles.headings}>Second Name</Text>
                    <TextInput
                        selectTextOnFocus={true}
                        placeholder="John"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyle}
                        value={Secondname}
                        onChangeText={(text) => setsname(text)}
                    />
                    <Text style={styles.headings}>Email</Text>
                    <TextInput
                        selectTextOnFocus={true}
                        placeholder="John"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyle}
                        value={email}
                        onChangeText={(text) => setemail(text)}
                    />
                    <Text style={styles.headings}>Mobile number</Text>
                    <TextInput
                        selectTextOnFocus={true}
                        placeholder="John"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyle}
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                    <Text style={styles.otpverification}>OTP verification in next step</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            var details = {};
                            details.firstname = firstname;
                            details.Secondname = Secondname;
                            details.email = email;
                            details.phone = phone;
                            dispatch(SavePersonDetails(details));
                            navigation.navigate('Dashboard');
                            // setPhone("");
                            // setemail("");
                            // setsname("");
                            // setfname("");
                        }}>
                        <Text style={styles.createprofile}>Create Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    createprofile: {

        fontFamily: "IBM Plex Sans",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: "center",
        color: "white"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#9400d3",
        height: 56,
        borderRadius: 10,
        justifyContent: "center",
        marginBottom: 36
    },
    otpverification: {

        fontFamily: "IBM Plex Sans",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "center",
        color: "gray",
        opacity: 0.8,
        marginVertical: 12
    },
    TextInputStyle: {
        fontFamily: "IBM Plex Sans",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",

        height: 50,
        borderRadius: 5,
        borderWidth: 0.5,
        padding: 10,
        marginBottom: 20,
    },
    headings: {
        fontFamily: "IBM Plex Sans",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "left",
        marginBottom: 12
    },
    profile: {
        fontFamily: "IBM Plex Sans",
        fontSize: 22,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: "left",
        color: "purple",

        paddingBottom: 20
    },
    enterurdetailstext: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: "left",
        paddingBottom: 30,
        opacity: 0.5
    }
});

export default Profile;
