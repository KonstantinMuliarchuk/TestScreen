import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { width, flex, colors } from '../theme/constants';

class SegmentController extends Component {
    state = {
        selected: this.props.data[0]
    }
    render() {
        const { data, full, half } = this.props,
            { selected } = this.state
        return (
            <View style={[full
                ? styles.containerFull
                : styles.containerHalf]}>
                {data.map((item, index) =>
                    <View
                        key={index.toString()}
                        style={[styles.buttonsContainer,
                        item === selected && { backgroundColor: colors.lightGreen }]}
                    >
                        <Text
                            style={styles.text}
                            onPress={() => this.setState({ selected: item })}
                        >{item}</Text>
                    </View>
                )}

            </View>
        );
    }
}

const styles = {
    containerFull: {
        width: width * 0.9,
        height: 30,
        borderRadius: 15,
        flexDirection: 'row',
        marginVertical: 20,

    },
    containerHalf: {
        width: width * 0.45,
        height: 30,
        borderRadius: 5,
        flexDirection: 'row',
        marginVertical: 5,
    },
    buttonsContainer: {
        flex: 1,
        ...flex.centered,
        backgroundColor: colors.grey,
        clipsToBounds: true

    },
    text: {
        color: 'white',
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
    }
}

export default SegmentController