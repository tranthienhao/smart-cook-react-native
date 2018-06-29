import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import DishDetailContent from '../Components/dish-detail-screen/DishDetailContent'

// Styles
import styles from './Styles/DishDetailScreenStyle'

class DishDetailScreen extends Component {
  render () {
    const data = this.props.navigation.getParam('data')
    return (
      <ScrollView>
        <Image style= {styles.image} source={{uri: data.Image}}></Image>
        <View style= {styles.infoView}>
          <Text style= {styles.name}>{data.Name}</Text>
          <Text style= {styles.category}>{data.CategoryName}</Text>
          <Text style= {styles.cookingTime}>{data.CookingTime}</Text>
          <Text style= {styles.description}>{data.Description}</Text>
        </View>
        <DishDetailContent data={data}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen)
