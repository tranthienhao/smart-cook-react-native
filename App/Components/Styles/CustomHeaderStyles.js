import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../Themes';
export default StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center"
  },
  headerImage: {
    height: Metrics.navBarHeight,
    width: Metrics.screenWidth / 4
  },
  title:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    padding: Metrics.baseMargin
  }
});
