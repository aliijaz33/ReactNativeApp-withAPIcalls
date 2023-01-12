/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LayOut from '../Components/LayOut';
import { ApiAuthContext } from '../App';

function FemaleUsers() {

    //console.log("_______", userData.name);
    const { apiData } = useContext(ApiAuthContext);
    return (
        <LayOut>
            <View style={styles.container}>
                <Text style={styles.nameTextStyle}>Males </Text>
                <FlatList
                    data={apiData}
                    renderItem={({ item }) => {
                        {
                            if (item.gender === "female") {
                                return (
                                    <View style={styles.TopViewStyle}>
                                        <Text style={styles.TextStyle}>ID: {item.id}  Name: {item.name} Gender: {item.gender}</Text>
                                    </View>
                                );
                            }
                        }
                    }}
                />
            </View>
        </LayOut>
    );
}

export default FemaleUsers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    TextStyle: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    TopViewStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(80,255,80,0.6)',

    },
});
