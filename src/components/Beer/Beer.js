import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Beer = ({name, abv, label, type}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: label}} style={styles.beer} />
            <Text>{name}</Text>
            <Text>{abv}</Text>
            <Text>{type}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    beer: {
        width: 250,
        height: 250,
    },
    container: {
        maxHeight: 150,
    }
});

export default Beer;