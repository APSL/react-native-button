import React { TouchableOpacity, Text, StyleSheet } from 'react-native'

class Button extends Component {
  render () {
    <TouchableOpacity
      style={[styles.button]}>
      <Text style={styles.textButton}>
        {this.props.children}
      </Text>
    </TouchableOpacity>
  }
}

Button.propTypes = {
  children: React.PropTypes.string.isRequired
}

let styles = StyleSheet.create({
  button: {
    height: 44,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
})

export default Button
