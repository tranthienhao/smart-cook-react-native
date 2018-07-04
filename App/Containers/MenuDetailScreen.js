import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { connect } from "react-redux";

// Styles
import styles from "./Styles/MenuDetailScreenStyle";

class MenuDetailScreen extends Component {
  render() {
    const data = this.props.navigation.getParam("data");
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image1} source={{ uri: data.FoodImage1 }} />
        {data.FoodId2 ? (
          <View style={styles.imageView}>
            <Image style={styles.image} source={{ uri: data.FoodImage2 }} />
            {data.FoodId3 ? (
              <Image style={styles.image} source={{ uri: data.FoodImage3 }} />
            ) : (
              <View />
            )}
          </View>
        ) : (
          <View />
        )}
        <View style={styles.infoView}>
          <Text style={styles.name}>{data.Name}</Text>
          <Text style={styles.category}>{data.CategoryName}</Text>
          <Text style={styles.cookingTime}>{data.CookingTime}</Text>
          <Text style={styles.description}>{data.Description}</Text>
          <Text style={styles.note}>Bạn hãy ấn vào hình để xem công thức cụ thể cho từng món nhé!</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDetailScreen);
