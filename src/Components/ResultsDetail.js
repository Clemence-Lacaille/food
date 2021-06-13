import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
 return (
     <View style={styles.containerStyle}>
         <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
         <Text style={styles.nameStyle}>{result.name}</Text>
         <Text style={styles.ratingStyle}>
           {result.rating} <Entypo name="star" size={15} color="#ec9787" />, {result.review_count} Reviews
        </Text>
     </View>
 )
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 20
    },
    imageStyle: {
        height: 150,
        width: 250,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;