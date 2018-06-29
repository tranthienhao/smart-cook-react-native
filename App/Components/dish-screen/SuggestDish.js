import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import SuggestDishItem from './SuggestDishItem'
import styles from './Styles/SuggestDishStyle'
import { sliderWidth, itemWidth } from './Styles/SuggestDishItemStyle';
import Carousel from 'react-native-snap-carousel';

export default class SuggestDish extends Component {
  _renderItemWithParallax ({item}, parallaxProps) {
      return (
        <SuggestDishItem
          data={item}
          nav={this.props.nav}
          parallax={true}
          parallaxProps={parallaxProps}
        />
      );
  }
  render () {
    return (
      <View style={styles.container}>
        <Carousel
          data={this.props.listDish}
          renderItem={this._renderItemWithParallax.bind(this)}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          autoplay={true}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
        />
      </View>
    )
  }
}
