import React, { View, TouchableOpacity, Text, StyleSheet, PropTypes, ActivityIndicatorIOS, ProgressBarAndroid, Platform } from 'react-native'
import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType'
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes'

class Button extends React.Component {
  _renderInnerText () {
    if (this.props.isLoading) {
      if (Platform.OS !== 'android') {
        return (
          <ActivityIndicatorIOS
            animating={true}
            size='small'
            style={styles.spinner}
            color={this.props.activityIndicatorColor || 'black'}
          />
        )
      } else {
        return (
          <ProgressBarAndroid
            style={[{
              height: 20,
            }, styles.spinner]}
            styleAttr='Inverse'
          />
        )
      }
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {this.props.children}
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

    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View style={[styles.button, this.props.style, styles.opacity]}>
          {this._renderInnerText()}
        </View>
      )
    } else {
      return (
        <TouchableOpacity {...touchableProps}
          style={[styles.button, this.props.style]}>
          {this._renderInnerText()}
        </TouchableOpacity>
      )
    }
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  textStyle: StyleSheetPropType(TextStylePropTypes),
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  activityIndicatorColor: PropTypes.string,
}

const styles = StyleSheet.create({
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
    opacity: 0.5,
  },
})

export default Button
