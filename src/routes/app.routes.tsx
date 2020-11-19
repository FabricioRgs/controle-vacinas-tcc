/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { View, Text } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Create from '../pages/Create';
import Campanhas from '../pages/Campanhas';

const Drawer = createDrawerNavigator();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Text
          style={{
            color: '#F5F5F5',
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 5,
          }}
        >
          Menu
        </Text>
        <DrawerItemList
          inactiveTintColor="#F5F5F5"
          activeBackgroundColor="#29a9c0"
          activeTintColor="#3e3b47"
          labelStyle={{ fontSize: 16 }}
          {...props}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const AppRouter: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    backBehavior="history"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerStyle={{
      backgroundColor: '#28262e',
    }}
    drawerContentOptions={{
      activeTintColor: '#28262e',
      itemStyle: { marginVertical: 0 },
    }}
  >
    <Drawer.Screen
      name="Home"
      options={{ title: 'Home' }}
      component={Dashboard}
    />
    <Drawer.Screen
      name="Cadastrar dependentes"
      options={{ title: 'Cadastrar dependentes' }}
      component={Create}
    />
    <Drawer.Screen
      name="Campanhas"
      options={{ title: 'Campanhas' }}
      component={Campanhas}
    />
    <Drawer.Screen
      name="Profile"
      options={{ title: 'Minha Conta' }}
      component={Profile}
    />
  </Drawer.Navigator>
);

export default AppRouter;
