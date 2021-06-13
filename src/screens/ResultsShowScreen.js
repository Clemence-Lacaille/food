import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../API/yelp';

const ResultsShowScreen = ({ navigation } ) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.nameSyle}>{result.name}</Text>
            <Text style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>{result.display_phone}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                return  <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 150,
        width: 250,
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: 20
    },
    nameSyle: {
        marginHorizontal: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: "#ec9787",
    },

});

export default ResultsShowScreen;