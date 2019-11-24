import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import _ from 'lodash'
import { flood } from './utils'


it('flood simplest', () => {
  const field = [['blue']]
  const actual = flood(field, 'cyan')
  expect(actual).toEqual([['cyan']])
  //should create a new field
  expect(field !== actual)
})

it('flood small field blue -> cyan', () => {
  const field = [
    ['blue', 'cyan'],
    ['blue', 'cyan'],
  ]
  const actual = flood(field, 'cyan')
  expect(actual).toEqual([
    ['cyan', 'cyan'],
    ['cyan', 'cyan'],
  ])
})

it('flood small field blue -> grey', () => {
  const field = [
    ['blue', 'cyan'],
    ['blue', 'cyan'],
  ]
  const actual = flood(field, 'grey')
  expect(actual).toEqual([
    ['grey', 'cyan'],
    ['grey', 'cyan'],
  ])
})

it('flood small field blue -> grey', () => {
  const field = [
    ['blue', 'blue', 'blue'],
    ['blue', 'cyan', 'blue'],
    ['blue', 'blue', 'blue'],
  ]
  const actual = flood(field, 'grey')
  expect(actual).toEqual([
    ['grey', 'grey', 'grey'],
    ['grey', 'cyan', 'grey'],
    ['grey', 'grey', 'grey'],
  ])
})

it('flood big field field blue -> grey', () => {
  const field = _.times(
    25,
    () => ['blue', ..._.times(24, () => 'grey')]
  )
  const actual = flood(field, 'grey')
  expect(actual).toEqual(_.times(
    25,
    () => _.times(25, () => 'grey')
  ))
})
