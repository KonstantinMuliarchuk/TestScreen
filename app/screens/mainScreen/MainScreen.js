import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { width, height } from '../../theme/constants';
import TopNavigator from '../../components/TopNavigator';
import ImageView from '../../components/imageView';
import Button from '../../components/button';
import SegmentController from '../../components/segmentControl';
import Rows from '../../components/rows';

class MainScreen extends Component {
    render() {
        const segmentControlData = ['Stock', 'Buy'],
            mainData = [
                { title: 'Name', type: 'text', text: 'Office ergonomic chair' },
                { title: 'Group', type: 'segment', segments: ['Piece', 'Service'] },
                { title: 'List', type: 'button', text: 'Chairs' },
                { title: 'Details', type: 'text', text: 'Lorem ipsum dolor sit amet, consectetur'+
                ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
                { title: 'Area', type: 'button', text: 'Hong Kong' },
                { title: 'Fee', type: 'text', text: '765 HKD' },
            ]
        return (
            <View style={styles.container}>
                <TopNavigator />
                <ImageView />
                <ScrollView
                    style={styles.scrolledArea}
                    showsVerticalScrollIndicator={false}
                >
                    <SegmentController
                        data={segmentControlData}
                        full
                    />
                    {
                        mainData.map((item, index) =>
                            <Rows
                                key={index.toString()}
                                data={item}
                            />
                        )
                    }
                    <Button
                        label='Post'
                        action={() => console.log('button pressed!')}
                    />
                </ScrollView>

            </View>
        );
    }
}

const styles = {
    container: {
        alignItems: 'center',
        width: width,
        height: height
    },
    scrolledArea: {
        backgroundColor: 'white'
    }
}

export default MainScreen;