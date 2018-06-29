import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, FlatList, Text, Image } from 'react-native'
import styles from './Styles/ListStepStyle'

export default class ListStep extends Component {
  renderItem({item}){
    return(
      <View style={styles.stepItem}>
      <Text style={styles.number}>{item.Number}.</Text>
        <Text style={styles.content}>{item.Content}</Text>
      </View>
    )
  }

  keyExtractor = (item, id) => '' + id

  oneScreensWorth = 20
  render () {
    return (
      <View style={styles.container}>
        <View style= {styles.noteView}>
          <Image style= {styles.icon} source = {require('../../Images/Icons/ic-dish.png')} />
          <Text style={styles.note}>Vui lòng làm đúng từng bước để đạt kết quả tốt nhất!</Text>
        </View>
        <FlatList
          data={this.props.Step}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}/>
      </View>
    )
  }
}
