import React, { Component, View, TouchableOpacity, Text, StyleSheet, PropTypes, ActivityIndicatorIOS, ProgressBarAndroid, Platform } from 'react-native'
import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType'
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes'

class Button extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: (this.props.isLoading === true ? true : false),
      isDisabled: (this.props.isDisabled === true ? true : false),
    }
  }
  
  _renderInnerText () {
    let children = this.props.children
    if (this.state.isLoading) {
      if (Platform.OS !== 'android') {
        return (
          <ActivityIndicatorIOS
            animating={true}
            size="small"
            style={styles.spinner}
            color='black'
          />
        )
      } else {
        return (
          <ProgressBarAndroid 
            style={[{
              height: 20,
            }, styles.spinner]}
            styleAttr="Inverse"
          />
        )
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
    
    if (this.state.isDisabled === true || this.state.isLoading === true) {
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
  
  setIsLoading(val = false) {
    this.setState({
      isLoading: Boolean(val)
    })
  }
  
  setIsDisabled(val = false) {
    this.setState({
      isDisabled: Boolean(val)
    })
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  textStyle: StyleSheetPropType(TextStylePropTypes),
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
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
