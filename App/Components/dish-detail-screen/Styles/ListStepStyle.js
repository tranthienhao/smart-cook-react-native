import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1
  },
  stepItem:{
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  number:{
    color: Colors.primary,
    padding: Metrics.baseMargin,
    paddingRight: 0
  },
  content:{
    color: 'black',
    padding: Metrics.baseMargin,
    paddingRight: Metrics.doubleBaseMargin*2
  },
  noteView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    width: 25,
    height: 25,
    margin: Metrics.baseMargin
  },
  note:{
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.primary,
  }
})
