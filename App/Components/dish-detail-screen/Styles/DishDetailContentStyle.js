import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../../Themes'
export default StyleSheet.create({
  container:{
    margin: Metrics.baseMargin,
    backgroundColor: 'white',
  },
  contentView:{
    flexDirection: 'row'
  },
  selectedButton:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: Metrics.baseMargin
  },
  noneSelectedButton:{
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: Metrics.baseMargin
  },
  selectedTitle:{
    color: Colors.accent,
    fontWeight: 'bold'
  },
  noneSelectedTitle:{
    color: 'white',
    fontWeight:'bold'
  }
})
