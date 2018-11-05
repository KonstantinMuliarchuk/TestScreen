import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { width, height } from '../../theme/constants';
import TopNavigator from '../../components/TopNavigator';
import ImageView from '../../components/imageView';
import Button from '../../components/button';
import SegmentController from '../../components/segmentControl';
import Rows from '../../components/rows';
import { mainData } from './data';

class MainScreen extends Component {
    render() {
        const segmentControlData = ['Stock', 'Buy']
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