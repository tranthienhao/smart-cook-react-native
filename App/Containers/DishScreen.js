import React, { Component } from 'react'
import { ScrollView, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DishItem from '../Components/dish-screen/DishItem'
import SuggestDish from '../Components/dish-screen/SuggestDish'

// Actions
import DishActions from '../Redux/DishRedux'
// Styles
import styles from './Styles/DishScreenStyle'

class DishScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      listDish: []
    }
  }
  renderItem({item}){
    return(
      <DishItem dish={item} />
    )
  }

  keyExtractor = (item, id) => ''+id

  oneScreensWorth = 20
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style= {styles.suggestLabel}>Ăn gì hôm nay?</Text>
        <SuggestDish listDish= {this.state.listDish}/>
        <View style = {{justifyContent: 'center'}}>
          <View style= {styles.line}></View>
          <Text style= {styles.label}>BỘ SƯU TẬP</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.listDish}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}/>
      </ScrollView>
    )
  }
  componentDidMount(){
    this.props.getDish()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.fetching) {
      this.setState({listDish: [...this.state.listDish, ...this.props.listDish]})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listDish: state.dish.listDish,
    fetching: state.dish.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDish: () => dispatch(DishActions.dishRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishScreen)
