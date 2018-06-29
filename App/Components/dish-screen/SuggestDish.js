import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import SuggestDishItem from './SuggestDishItem'
import styles from './Styles/SuggestDishStyle'
import { sliderWidth, itemWidth } from './Styles/SuggestDishItemStyle';
import Carousel from 'react-native-snap-carousel';

const ENTRIES1 = [
   {
     title: 'Beautiful and dramatic Antelope Canyon',
     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
     illustration: 'https://i.imgur.com/UYiroysl.jpg'
   }, {
     title: 'Earlier this morning, NYC',
     subtitle: 'Lorem ipsum dolor sit amet',
     illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
   }, {
     title: 'White Pocket Sunset',
     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
     illustration: 'https://i.imgur.com/MABUbpDl.jpg'
   }, {
     title: 'Acrocorinth, Greece',
     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
     illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
   }, {
     title: 'The lone tree, majestic landscape of New Zealand',
     subtitle: 'Lorem ipsum dolor sit amet',
     illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
   },
]
export default class SuggestDish extends Component {
  _renderItemWithParallax ({item, index}, parallaxProps) {
      return (
        <SuggestDishItem
          data={item}
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
          renderItem={this._renderItemWithParallax}
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
