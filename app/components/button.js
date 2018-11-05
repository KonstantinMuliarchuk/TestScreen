import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import { width, colors, flex } from '../theme/constants';

class Button extends Component {
    render() {
        const { active, label, action } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={()=> action()}
            >
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        width: width*0.9,
        height: 45,
        borderRadius: 5,
        backgroundColor: colors.lightGreen,
        ...flex.centered,
        marginVertical: 30
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }
}

export default Button