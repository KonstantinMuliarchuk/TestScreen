import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { width, colors, flex, icons } from '../theme/constants';


class ImageView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.imageContainer}
                >
                    <Image
                        style={styles.image}
                        source={icons.addPicture}
                    />
                    <Text>Add image</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        width: width,
        height: width * 0.75,
        backgroundColor: colors.lightGrey,
        ...flex.centered
    },
    imageContainer: {
        height: 140,
        width: 180,
        borderColor: colors.grey,
        borderRadius: 10,
        borderWidth: 2,
        ...flex.centered
    },
    image: {
        height: 40,
        width: 50,
        resizeMode: 'contain',
        marginVertical :5
    }
}

export default ImageView;