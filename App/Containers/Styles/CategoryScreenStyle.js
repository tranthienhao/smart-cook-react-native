import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container:{
    flex:1
  },
  categoryView:{
    justifyContent: 'center'
  },
  categoryBackground: {
    height: Metrics.screenHeight/3,
    width: Metrics.screenWidth
  },
  label:{
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
});
