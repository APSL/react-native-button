'use strict';

var React = require('react-native');
var {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  PropTypes,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  TouchableNativeFeedback,
  Platform
} = React;
var StyleSheetPropType = require('react-native/Libraries/StyleSheet/StyleSheetPropType');
var TextStylePropTypes = require('react-native/Libraries/Text/TextStylePropTypes');

var Button = React.createClass({
  propTypes: Object.assign({},
    {textStyle: StyleSheetPropType(TextStylePropTypes),
    children: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func},
  ),

  _renderInnerText: function () {
    if (this.props.isLoading) {
      if (Platform.OS !== 'android') {
        return (
          <ActivityIndicatorIOS
            animating={true}
            size='small'
            style={styles.spinner}
            color={this.props.activityIndicatorColor || 'black'}
          />
        );
      } else {
        return (
          <ProgressBarAndroid
            style={[{
              height: 20,
            }, styles.spinner]}
            styleAttr='Inverse'
            color={this.props.activityIndicatorColor || 'black'}
          />
        );
      }
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {this.props.children}
      </Text>
    );
  },

  render: function () {
    // Extract Touchable props
    var touchableProps = {
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    };
    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View style={[styles.button, this.props.style, styles.opacity]}>
          {this._renderInnerText()}
        </View>
      );
    } else {
      if (Platform.OS !== 'android') {
        return (
          <TouchableOpacity {...touchableProps}
            style={[styles.button, this.props.style]}>
            {this._renderInnerText()}
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableNativeFeedback {...touchableProps}
            background={TouchableNativeFeedback.Ripple()}>
            <Text style={[styles.button, this.props.style]}>
              {this._renderInnerText()}
            </Text>
          </TouchableNativeFeedback>
        );
      }
    }
  }
});

var styles = StyleSheet.create({
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
});

module.exports = Button;
