import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// TODO: implement the fuction. all the test should pass
const flood = (field) => {
  return field
}

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
