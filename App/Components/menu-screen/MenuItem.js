import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./Styles/MenuItemStyle";

export default class MenuItem extends Component {
  clickItem() {
    this.props.nav.navigate("MenuDetailScreen", {
      data: this.props.Menu,
      HeaderTitle: this.props.Menu.Name.toUpperCase()
    });
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.clickItem.bind(this)}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={{ uri: this.props.Menu.FoodImage1 }}
            />
            {this.props.Menu.FoodId2 ? (
              <Image
                style={styles.image}
                source={{ uri: this.props.Menu.FoodImage2 }}
              />
            ) : (
              <View />
            )}
            {this.props.Menu.FoodId3 ? (
              <Image
                style={styles.image}
                source={{ uri: this.props.Menu.FoodImage3 }}
              />
            ) : (
              <View />
            )}
          </View>
          <Text style={styles.meal}>{this.props.Menu.Meal.toUpperCase()}</Text>
          <Text style={styles.name}>{this.props.Menu.Name.toUpperCase()}</Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            {this.props.Menu.Description}
          </Text>
          <View style={styles.line} />
          <Text style={styles.cookingTime}>{this.props.Menu.CookingTime}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
