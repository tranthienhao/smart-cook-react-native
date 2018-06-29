import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'
import React from 'react'
import {Image} from 'react-native'
import MenuDetailScreen from '../Containers/MenuDetailScreen'
import DishDetailScreen from '../Containers/DishDetailScreen'
import CategoryScreen from '../Containers/CategoryScreen'
import MenuScreen from '../Containers/MenuScreen'
import DishScreen from '../Containers/DishScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
      Tab: {
        screen: TabNavigator({
            'Món ăn': {
              screen: DishScreen
            },
            'Thực đơn': {
              screen: MenuScreen
            },
            'Danh mục': {
              screen: CategoryScreen
            },
          }, {
            navigationOptions: ({
              navigation
            }) => ({
                tabBarIcon: ({
                  focused,
                  tintColor
                }) => {
                  const {
                    routeName
                  } = navigation.state
                  let iconName;
                  switch (routeName) {
                    case 'Món ăn':
                      iconName = require('../Images/Icons/ic-dish.png')
                      break;
                    case 'Thực đơn':
                      iconName = require('../Images/Icons/ic-menu.png')
                      break;
                    case 'Danh mục':
                      iconName = require('../Images/Icons/ic-category.png')
                      break;
                    default:
                      break;
                  }
                  return ( < Image source = {
                      iconName
                    }
                    style = {
                      [styles.icon, {
                        tintColor: tintColor
                      }]
                    }
                    />)
                  },
                }),
              tabBarPosition: "bottom",
              tabBarOptions: {
                activeTintColor: '#de5a57',
                inactiveTintColor: '#707070',
                showIcon: true,
                upperCaseLabel: false,
                indicatorStyle: {
                  opacity: 0
                },
                style: {
                  backgroundColor: 'white',
                  height: 56,
                },
                labelStyle: {
                  fontSize: 12,
                },
              },
              animationEnabled: true,
              swipeEnabled: true,
            })
        },
        MenuDetailScreen: {
          screen: MenuDetailScreen
        },
        DishDetailScreen: {
          screen: DishDetailScreen
        },
      },
      {
        // Default config for all screens
        headerMode: 'float',
        initialRouteName: 'Tab',
        navigationOptions: {
          headerTitle: (
            <Image style= {styles.headerImage} source={require('../Images/logo.png')}/>
          ),
          headerTintColor: 'white',
          headerStyle: styles.header
        }
      }) 
      export default PrimaryNav