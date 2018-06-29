import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, FlatList, Text, TouchableOpacity  } from 'react-native'
import styles from './Styles/ListIngredientStyle'

export default class ListIngredient extends Component {
  constructor(props){
    super(props)
    this.state={ count: 1 }
  }
  renderItem({item}){
    return(
      <View style={styles.ingredientItem}>
        <Text style={styles.amountAndUnit}>{this.state.count * item.Amount} {item.Unit}</Text>
        <Text style={styles.name}>{item.IngredientName}.</Text>
      </View>
    )
  }

  keyExtractor = (item, id) => '' + id

  oneScreensWorth = 20

  subCount(){
    if(this.state.count > 1){
      this.setState({count: this.state.count - 1})
    }
  }

  addCount(){
    this.setState({count: this.state.count + 1})
  }

  render () {
    console.log(this.state.count);
    return (
      <View style={styles.container}>
         <View style= {styles.noteView}>
          <Text style={styles.ingredient}>NGUYÊN LIỆU</Text>
          <Text style={styles.label}>Cho {this.state.count} người</Text>
          <TouchableOpacity 
            style= {styles.btnSub}
             onPress= {this.subCount.bind(this)}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style= {styles.btnAdd}
            onPress= {this.addCount.bind(this)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.Ingredient}
          extraData = {this.state}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}/>
      </View>
    )
  }
}
