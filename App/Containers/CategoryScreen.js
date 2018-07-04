import React, { Component } from "react";
import { ScrollView, Text, Image, View, FlatList } from "react-native";
import { connect } from "react-redux";
import CategoryItem from "../Components/category-screen/CategoryItem";
// Styles
import styles from "./Styles/CategoryScreenStyle";
//Action
import CategoryActions from "../Redux/CategoryRedux";
class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { listCategory: [] };
  }

  renderItem({ item }) {
    return <CategoryItem category={item} />;
  }

  keyExtractor = (item, id) => "" + id;

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.categoryView}>
          <Image
            style={styles.categoryBackground}
            source={require("../Images/category-background.jpg")}
          />
          <Text style={styles.label}>DANH MỤC MÓN ĂN</Text>
        </View>
        <FlatList
          numColumns={2}
          renderItem={this.renderItem.bind(this)}
          data={this.state.listCategory}
          keyExtractor={this.keyExtractor}
        />
      </ScrollView>
    );
  }
  componentDidMount() {
    this.props.getCategory();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.fetching) {
      this.setState({
        listCategory: [...this.state.listCategory, ...this.props.listCategory]
      });
    }
  }
}

const mapStateToProps = state => {
  return {
    listCategory: state.category.listCategory,
    fetching: state.category.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategory: () => dispatch(CategoryActions.categoryRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryScreen);
