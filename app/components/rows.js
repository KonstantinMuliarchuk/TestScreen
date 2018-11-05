import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { width, icons } from '../theme/constants';
import SegmentController from './segmentControl';

class Rows extends Component {
    render() {
        const { data } = this.props;
        return (
            <View
                style={styles.container}
            >
                <TouchableOpacity

                    onPress={() => console.log('Button pressed')}
                    disabled={data.type !== 'button'}
                >
                    <Text style={styles.title}>{data.title}</Text>
                    {
                        data.type === 'segment'
                            ? <SegmentController
                                half
                                data={data.segments}
                            />
                            : <Text style={styles.text}>{data.text}</Text>
                    }
                    {
                        data.type === 'button'
                        && <Image
                            style={styles.right}
                            source={icons.right}
                        />
                    }

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        width: width * 0.9,
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 5,
        justifyContent: 'center'
    },
    title: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 2,
        marginVertical: 5
    },
    text: {
        color: 'gray',
        fontSize: 16,
        marginBottom: 5
    },
    right: {
        position: 'absolute',
        right: 20,
        resizeMode: 'contain',
        width: 5
    }
}

export default Rows;