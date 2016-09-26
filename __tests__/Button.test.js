/* global test */

import { View } from 'react-native'
import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

describe('Button', () => {
  test('Renders', () => {
    const component = renderer.create(
      <Button>
        Button
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Renders disabled', () => {
    const component = renderer.create(
      <Button isDisabled={true}>
        Disabled button
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Renders loading', () => {
    const component = renderer.create(
      <Button isLoading={true}>
        Loading button
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Renders with a inner View', () => {
    const component = renderer.create(
      <Button>
        <View />
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should contain children', () => {
    const component = renderer.create(
      <Button>
        Press me!
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    const props = component.getInstance().props
    expect(props.children).toEqual('Press me!')
  })
  test('Should react to the onPress event', () => {
    const mockFunction = jest.fn(() => 'Mock function')
    const component = renderer.create(
      <Button onPress={mockFunction}>
        Press me!
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    const props = component.getInstance().props
    expect(props.onPress()).toEqual('Mock function')
    expect(mockFunction).toBeCalled()
  })
})
