import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../../Themes';
export default StyleSheet.create({
  container: {
    height: Metrics.screenHeight/3,
    width: Metrics.screenWidth/2 - Metrics.doubleBaseMargin,
    margin: Metrics.baseMargin,
    backgroundColor: 'white',
    borderRadius: Metrics.buttonRadius,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
  },
  image:{
    flex:7,
    borderTopLeftRadius: Metrics.buttonRadius,
    borderTopRightRadius: Metrics.buttonRadius,
  },
  name:{
    flex: 1,
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    alignSelf: 'center',
    padding: Metrics.baseMargin
  }
})
