/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';

import { SafeAreaView, ScrollView, Image, StyleSheet, Text, View, ActivityIndicator, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LayOut from '../Components/LayOut';
import CustomButton from '../Components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_BASE_URL from '../utils/urls';
import Axios from 'axios';
import { ApiAuthContext } from '../App';

const HomeScreen = ({ navigation }) => {

    const { apiData, isLoading } = useContext(ApiAuthContext);
    // const [apiData, setApiData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetchingApiData();
    // }, []);
    // const fetchingApiData = async () => {
    //     try {
    //         const response = await Axios.get(API_BASE_URL);
    //         setApiData(response.data);
    //         setIsLoading(false);
    //         MaleUsers(response.data);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    return (
        <LayOut>

            <View style={styles.Container}>
                {isLoading ? (
                    <View >
                        <ActivityIndicator size={'large'} />
                    </View>)
                    : (<View style={styles.mainContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.nameTextStyle}>All Users</Text>
                        </View>
                        <FlatList
                            data={apiData}
                            renderItem={({ item }) => {
                                // <MaleUsers val={item} />
                                //FemaleUsers(item);
                                return (
                                    <View style={styles.TopViewStyle}>
                                        <Text style={styles.TopTextStyle}>ID: {item.id}  Name: {item.name} Gender: {item.gender}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    )}
            </View>

        </LayOut>
    );
};

export default HomeScreen;



const styles = StyleSheet.create({
    mainContainer: {
        //width: '100%',
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uperListContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    TopViewStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(80,255,80,0.6)',

    },
    TopTextStyle: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    bottomViewStyle: {
        // width: '100%',
        height: 250,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 10,
    },
    maleViewStyle: {
        height: 300,
        width: 200,
        backgroundColor: 'rgba(80,255,80,0.6)',
        borderWidth: 1,
        borderRadius: 10,
    },
    feMaleViewStyle: {
        height: 300,
        width: 200,
        backgroundColor: 'rgba(80,255,80,0.6)',
        borderWidth: 1,
        borderRadius: 10,
    },
    nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',

    },
});
