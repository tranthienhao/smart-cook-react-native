import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DishDetailContentStyle'
import ListStep from './ListStep'
import ListIngredient from './ListIngredient'
import Video from './Video'
export default class DishDetailContent extends Component {
  constructor(props){
    super(props)
    this.state= {selected: 'Cách làm'}
  }
  selectionOnPress(selection) {
    this.setState({ selected: selection })
  }
  renderContent(){
    switch(this.state.selected) {
      case 'Cách làm':
        return(
          <ListStep Step={this.props.data.Step}/>
        )
        break
      case 'Nguyên liệu':
        return(
          <ListIngredient Ingredient={this.props.data.Ingredient} />
        )
        break
      case 'Video':
        return <Video />
        break
    }
  }
  render () {
    return (
      <View style ={styles.container}>
        <View style={styles.contentView}>
          <TouchableOpacity 
            style={this.state.selected ==='Cách làm'?styles.selectedButton: styles.noneSelectedButton}
            onPress = {()=>this.selectionOnPress('Cách làm')}>
           <Text style={this.state.selected ==='Cách làm'?styles.selectedTitle: styles.noneSelectedTitle}>Cách làm</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={this.state.selected ==='Nguyên liệu'?styles.selectedButton: styles.noneSelectedButton}
            onPress = {()=>this.selectionOnPress('Nguyên liệu')}>
           <Text style={this.state.selected ==='Nguyên liệu'?styles.selectedTitle: styles.noneSelectedTitle}>Nguyên liệu</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={this.state.selected ==='Video'?styles.selectedButton: styles.noneSelectedButton}
            onPress = {()=>this.selectionOnPress('Video')}>
            <Text style={this.state.selected ==='Video'?styles.selectedTitle: styles.noneSelectedTitle}>Video</Text>
          </TouchableOpacity>
        </View>
        {this.renderContent()}
      </View>
    )
  }
}
