import HomePage from '@pages/home/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import AppContainer from '@core/container/AppContainer';

const MainAppNavigation = () => {

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='home'
          component={(props) =>
            <HomePage
              controller={AppContainer.getInstance().getControllers().getHomeController()}
              styles={AppContainer.getInstance().getStyles().getHomeStyles()}
              {...props}
            />
          }
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default MainAppNavigation