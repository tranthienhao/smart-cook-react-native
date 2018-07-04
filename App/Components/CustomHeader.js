import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./Styles/CustomHeaderStyles";

export default class HeaderCom extends Component {
  render() {
    return (
      <View style={styles.header}>
        {this.props.title ? (
          <Text numberOfLines={1} style={styles.title}>
            {this.props.title}
          </Text>
        ) : (
          <Image
            style={styles.headerImage}
            source={require("../Images/logo.png")}
          />
        )}
      </View>
    );
  }
}
