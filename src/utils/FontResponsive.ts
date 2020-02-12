import { Platform, StatusBar, Dimensions } from 'react-native';

export function RFValue(fontSize) {
    const standardScreenHeight = 680;
    const heightPercent = (fontSize * deviceHeight()) / standardScreenHeight;
    return Math.round(heightPercent);
}

function deviceHeight() {
    const { height } = Dimensions.get('window');
    if (Platform.OS === 'android') {
        return height - StatusBar.currentHeight;
    }
    return height;
}
