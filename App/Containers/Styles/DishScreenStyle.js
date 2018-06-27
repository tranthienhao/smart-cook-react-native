import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {Metrics, Colors} from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  label:{
    fontWeight: 'bold',
    padding: Metrics.baseMargin,
    color: Colors.primary,
    backgroundColor: '#eeeeee',
    alignSelf: 'flex-start'
  },
  line: {
    margin: Metrics.baseMargin,
    height: 1,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: Metrics.doubleBaseMargin
  }
})
