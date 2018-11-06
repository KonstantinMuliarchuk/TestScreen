import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, LayoutAnimation, NativeModules} from 'react-native';
import { width, colors, flex, icons } from '../theme/constants';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

class ImageView extends Component {
    state = {
        left: -width
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.selected !== this.props.selected) {
            if (nextProps.selected === 'Undo') {
                LayoutAnimation.linear()
                this.setState({left: -width})
            }else if(nextProps.selected === 'New Place') {
                LayoutAnimation.linear()
                this.setState({left: 0})
            }else if(nextProps.selected === 'Post') {
                LayoutAnimation.linear()
                this.setState({left: width})
            }
        }
    }

    render() {
        const data = ['Add Image', 'Second Slide', 'Third Slide'],
        leftMargin = {right: this.state.left}
        return (
            <View style={[styles.mainContainer, leftMargin]}>
                {data.map((item, index) =>
                    <View
                        style={[styles.container]}
                        key={index.toString()}
                    >
                        <TouchableOpacity
                            style={styles.imageContainer}
                        >
                            {item === 'Add Image' && <Image
                                style={styles.image}
                                source={icons.addPicture}
                            />}
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    </View>)}

            </View>
        );
    }
}

const styles = {
    mainContainer: {
        width: width,
        height: width * 0.75,
        backgroundColor: colors.lightGrey,
        width: width*3, 
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        width: width,
        height: width * 0.75,
        backgroundColor: colors.lightGrey,
        ...flex.centered,
        top: 0
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
        marginVertical: 5
    }
}

export default ImageView;