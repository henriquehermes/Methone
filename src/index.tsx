import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { registerRootComponent } from 'expo';
import { AppLoading } from 'expo';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import theme from './styles/global';

const fetchFonts = () => {
    return Font.loadAsync({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
    });
};

console.disableYellowBox = true;

const App = () => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setIsReady(true)}
            />
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Routes />
        </ThemeProvider>
    );
};

export default registerRootComponent(App);
