import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.primary
  },
  headerImage:{
    height: Metrics.navBarHeight,
    width: Metrics.screenWidth/ 4,
    marginLeft: Metrics.screenWidth / 2 - Metrics.screenWidth / 8,
  },
  icon: {
    height: 25,
    width: 25
  },
})
