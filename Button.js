import React, { Component, TouchableOpacity, Text, StyleSheet, PropTypes } from 'react-native'

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
        style={[styles.button, {borderColor: this.props.borderColor, backgroundColor: this.props.backgroundColor}]}>
        <Text style={[styles.textButton, {color: this.props.textColor}]}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  borderColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
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
