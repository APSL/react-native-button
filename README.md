# apsl-react-native-button

A React Native button component customizable via ``style`` props.

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-button/button.png" alt="Button component screenshot" width="400">
</p>

## Install

Install the package:

```bash
$ npm i apsl-react-native-button --save
```

Import the ``Button`` component:

```javascript
import Button from 'apsl-react-native-button'
```

## Usage

Provide ``TouchableOpacity``' props to the component (including ``style``),
``textStyle``'s ``StyleSheet`` to customize the inner text and a children node
to render. You can also provide the ``isLoading`` prop that will dim the button
and disable it to prevent accidental taps. Check the included example for more
options.

```javascript
<Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
  Hello!
</Button>
```

## License

MIT.
