import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { width, colors } from '../theme/constants';


class TopNavigator extends Component {

    state = {
        selected: 'Undo'
    }
    handlePress = (item) => {
        this.setState({ selected: item })
    }
    render() {
        const buttons = ['Undo', 'New Place', 'Post'],
            { selected } = this.state;
        return (
            <View style={styles.container}>
                {buttons.map((item, index) =>
                    <TouchableOpacity
                        key={index.toString()}
                        onPress={() => this.handlePress(item)}
                        style={styles.buttonContainer}
                    >
                        <Text style={[styles.text, item === selected && { color: colors.lightGreen }]}>{item}</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = {
    container: {
        height: 100,
        width: width,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.grey,
        backgroundColor: colors.lightGrey
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.grey,
        position: 'absolute',
        bottom: 10,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    }
}

export default TopNavigator;