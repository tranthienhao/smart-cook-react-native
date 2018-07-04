import React, { Component } from "react";
import { ScrollView, FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import MenuItem from "../Components/menu-screen/MenuItem";
// Actions
import MenuActions from "../Redux/MenuRedux";
// Styles
import styles from "./Styles/MenuScreenStyle";

class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMenu: []
    };
  }
  renderItem({ item }) {
    return <MenuItem Menu={item} nav={this.props.navigation} />;
  }

  keyExtractor = (item, id) => "" + id;

  oneScreensWorth = 20;
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.line} />
          <Text style={styles.label}>THỰC ĐƠN GỢI Ý</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.listMenu}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </ScrollView>
    );
  }
  componentDidMount() {
    this.props.getMenu();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.fetching) {
      this.setState({
        listMenu: [...this.state.listMenu, ...this.props.listMenu]
      });
    }
  }
}

const mapStateToProps = state => {
  return {
    listMenu: state.menu.listMenu,
    fetching: state.menu.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMenu: () => dispatch(MenuActions.menuRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuScreen);
