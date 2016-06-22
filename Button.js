'use strict';

const React = require('react');
const {
  PropTypes
} = React;

const {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ProgressBarAndroid,
  TouchableNativeFeedback,
  Platform
} = require('react-native');

const isEqual = require('lodash.isequal');

const Button = React.createClass({
  propTypes: {
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.string.isRequired,
    activeOpacity: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    delayLongPress: PropTypes.number,
    delayPressIn: PropTypes.number,
    delayPressOut: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
  },

  statics: {
    isAndroid: (Platform.OS === 'android'),
  },

  _renderInnerTextAndroid: function () {
    if (this.props.isLoading) {
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
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {this.props.children}
      </Text>
    );
  },

  _renderInnerTextiOS: function () {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size='small'
          style={styles.spinner}
          color={this.props.activityIndicatorColor || 'black'}
        />
      );
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]} allowFontScaling={this.props.allowFontScaling}>
        {this.props.children}
      </Text>
    );
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    if (!isEqual(nextProps, this.props)) {
      return true;
    }
    return false;
  },

  _renderInnerText: function () {
    if (Button.isAndroid) {
      return this._renderInnerTextAndroid()
    }
    return this._renderInnerTextiOS()
  },

  render: function () {
    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View style={[styles.button, this.props.style, (this.props.disabledStyle || styles.opacity)]}>
          {this._renderInnerText()}
        </View>
      );
    } else {
      // Extract Touchable props
      let touchableProps = {
        onPress: this.props.onPress,
        onPressIn: this.props.onPressIn,
        onPressOut: this.props.onPressOut,
        onLongPress: this.props.onLongPress,
        activeOpacity: this.props.activeOpacity,
        delayLongPress: this.props.delayLongPress,
        delayPressIn: this.props.delayPressIn,
        delayPressOut: this.props.delayPressOut,
      };
      if (Button.isAndroid) {
        touchableProps = Object.assign(touchableProps, {
          background: this.props.background || TouchableNativeFeedback.SelectableBackground()
        });
        return (
          <TouchableNativeFeedback {...touchableProps}>
            <Text style={[styles.button, this.props.style]}>
              {this._renderInnerTextAndroid()}
            </Text>
          </TouchableNativeFeedback>
        )
      } else {
        return (
          <TouchableOpacity {...touchableProps}
            style={[styles.button, this.props.style]}>
            {this._renderInnerTextiOS()}
          </TouchableOpacity>
        );
      }
    }
  }
});

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
});

module.exports = Button;
