import React, { Component, View, TouchableOpacity, Text, StyleSheet, PropTypes, ActivityIndicatorIOS, Platform } from 'react-native'
import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType'
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes'

class Button extends Component {
  _renderInnerText () {
    let children = this.props.children
    if (this.props.isLoading) {
      if (Platform.OS === 'ios') {
        return <ActivityIndicatorIOS style={styles.spinner}
            animating={true} size='small' color='black' />
      } else {
        children = 'Loading...'
      }
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {children}
      </Text>
    )
  }

  render () {
    // Extract TouchableOpacity props
    let touchableProps = {
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    }
    if (this.props.isLoading) {
      return (
        <View style={[styles.button, this.props.style, styles.opacity]}>
          {this._renderInnerText()}
        </View>
      )
    }
    return (
      <TouchableOpacity {...touchableProps}
        style={[styles.button, this.props.style]}>
        {this._renderInnerText()}
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  textStyle: StyleSheetPropType(TextStylePropTypes),
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
}

let styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    alignSelf: 'center',
  },
  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.3,
  },
})

export default Button
