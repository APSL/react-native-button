import React, { Component, TouchableOpacity, Text, StyleSheet, PropTypes } from 'react-native'
import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType'
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes'

class Button extends Component {
  render () {
    // Extract TouchableOpacity props
    let touchableProps = {
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    }
    return (
      <TouchableOpacity {...touchableProps}
        style={[styles.button, this.props.style]}>
        <Text style={[styles.textButton, this.props.textStyle, this.props.style]}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  textStyle: StyleSheetPropType(TextStylePropTypes),
  children: PropTypes.string.isRequired
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
})

export default Button
