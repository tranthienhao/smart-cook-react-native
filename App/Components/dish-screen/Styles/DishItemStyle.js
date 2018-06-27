import { StyleSheet } from 'react-native'
import {Metrics, Colors} from '../../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1, 
    marginBottom: Metrics.baseMargin,
    backgroundColor: 'white'
  },
  image:{
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    height: Metrics.screenHeight /3,
    margin: Metrics.baseMargin
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent,
    margin: Metrics.baseMargin
  },
  description:{
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin
  },
  category:{
    position: 'absolute',
    alignSelf: 'baseline',
    color: 'white',
    backgroundColor: Colors.primary,
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: Metrics.baseMargin,
    margin: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin*2
  },
  cookingTime: {
    alignSelf:'flex-end',
    color: 'black',
    backgroundColor:'white',
    padding: Metrics.baseMargin
  },
  line:{
    margin: Metrics.baseMargin,
    height: 1,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    position: 'absolute',
    bottom: Metrics.baseMargin
  }
})
