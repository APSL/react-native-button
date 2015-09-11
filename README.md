# apsl-react-native-button

A React Native button component with rounded corners.

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

There are four required props: ``borderColor``, ``backgroundColor``, ``textColor`` and a child ``string`` that represents the button text. Also, you can pass ``TouchableOpacity``' props to the component.

```javascript
<Button borderColor={'red'} backgroundColor={'green'} textColor={'blue'}>
  Hello!
</Button>
```
