import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../Themes'
export default StyleSheet.create({
  image: {
    height: Metrics.screenHeight/3,
    width: Metrics.screenWidth
  },
  infoView:{
    padding: Metrics.baseMargin,
    backgroundColor: 'white'
  },
  name:{
    fontSize: 18,
    color: Colors.accent,
    fontFamily: 'serif',
    marginBottom: Metrics.baseMargin,
    fontWeight: 'bold'
  },
  category:{
    fontStyle: 'italic',
    fontSize: 15,
    color: Colors.accent
  },
  cookingTime:{
    fontSize: 12,
    alignSelf: 'flex-end',
    fontStyle: 'italic',
  },
})
