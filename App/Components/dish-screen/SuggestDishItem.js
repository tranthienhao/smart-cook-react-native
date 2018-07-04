import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './Styles/SuggestDishItemStyle'

export default class SuggestDishItem extends Component {
 static propTypes = {
        data: PropTypes.object.isRequired,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { Image }, parallax, parallaxProps } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: Image }}
              containerStyle={[styles.imageContainer]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={'rgba(255, 255, 255, 0.4)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: Image }}
              style={styles.image}
            />
        );
    }
    clickItem(){
        this.props.nav.navigate('DishDetailScreen', { data: this.props.data, HeaderTitle: this.props.data.Name.toUpperCase()})
    }
    render () {
        const { data: { Name, Description, CookingTime }} = this.props;

        const uppercaseName = Name ? (
            <Text
              style={[styles.name]}
              numberOfLines={2}
            >
                { Name.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={this.clickItem.bind(this)}
              > 
                <View style={styles.shadow} />
                <View style={[styles.imageContainer]}>
                    { this.image }
                    <Text style={styles.cookingTime}>{CookingTime}</Text>
                    <View style={[styles.radiusMask]} />
                </View>
                <View style={[styles.textContainer]}>
                    { uppercaseName }
                    <Text
                      style={[styles.description]}
                      numberOfLines={2}
                    >
                        { Description }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
