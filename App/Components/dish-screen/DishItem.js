import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/DishItemStyle'

export default class DishItem extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style= {styles.image} source ={{uri: this.props.dish.Image}}/>
        <Text style= {styles.category}>{this.props.dish.CategoryName.toUpperCase()}</Text>
        <Text style= {styles.name}>{this.props.dish.Name.toUpperCase()}</Text>
        <Text style= {styles.description} numberOfLines={2} ellipsizeMode ={'tail'}>{this.props.dish.Description}</Text>
        <View style= {styles.line}></View>
        <Text style= {styles.cookingTime}>{this.props.dish.CookingTime}</Text>
      </View>
    )
  }
}
