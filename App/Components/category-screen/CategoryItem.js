import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/CategoryItemStyle'

export default class CategoryItem extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: this.props.category.Image}}/>
        <Text style={styles.name}>{this.props.category.Name.toUpperCase()}</Text>
      </View>
    )
  }
}
