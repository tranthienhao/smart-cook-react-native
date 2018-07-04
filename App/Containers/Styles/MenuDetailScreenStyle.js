import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'
export default StyleSheet.create({
  image1: {
    height: Metrics.screenHeight / 3,
    width: Metrics.screenWidth,
    margin: 2
  },
  image: {
    flex: 1,
    margin: 2
  },
  imageView: {
    height: Metrics.screenHeight / 2.5,
    width: Metrics.screenWidth,
    flexDirection: 'row'
  },
  infoView: {
    padding: Metrics.baseMargin,
    backgroundColor: "white"
  },
  name: {
    fontSize: 18,
    color: Colors.accent,
    fontFamily: "serif",
    marginBottom: Metrics.baseMargin,
    fontWeight: "bold"
  },
  category: {
    fontStyle: "italic",
    fontSize: 15,
    color: Colors.accent
  },
  cookingTime: {
    fontSize: 12,
    alignSelf: "flex-end",
    fontStyle: "italic"
  },
  note:{
    color:'black',
    fontStyle: 'italic',
    marginTop: Metrics.baseMargin
  }
});
