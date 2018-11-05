import { Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')
export const colors = {
    grey: '#ACACAC',
    lightGreen: '#56A700',
    lightGrey: 'rgb(240,240,240)'
}


export const flex = {
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    full: {
        width,
        height
    }
}

export const icons ={
    right: require('./icons/Right.png'),
    left: require('./icons/Left.png'),
    addPicture: require('./icons/AddPicture.png')
}