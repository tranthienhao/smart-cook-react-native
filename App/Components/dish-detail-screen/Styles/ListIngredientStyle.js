import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1
  },
  ingredientItem:{
    flexDirection: 'row',
    padding: Metrics.baseMargin
  },
  name:{
    flex: 1,
    color: 'black',
    paddingLeft: Metrics.baseMargin
  },
  amountAndUnit: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    textAlign:'right'
  },
  noteView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ingredient:{
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary
  },
  label:{
    color: Colors.primary,
    margin: Metrics.doubleBaseMargin
  },
  btnSub:{
    width: Metrics.screenWidth / 8,
    alignItems: 'center',
    padding: Metrics.baseMargin/2,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderBottomLeftRadius: Metrics.buttonRadius,
    borderTopLeftRadius: Metrics.buttonRadius,
  },
  btnAdd: {
    width: Metrics.screenWidth / 8,
    alignItems: 'center',
    padding: Metrics.baseMargin/2,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderBottomRightRadius: Metrics.buttonRadius,
    borderTopRightRadius: Metrics.buttonRadius
  }
})
