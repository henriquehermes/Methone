import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Onboarding from './screens/Onboarding';
import Questions from './screens/Questions';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Onboarding"
                    headerMode="none"
                >
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="Questions" component={Questions} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default Navigation;
