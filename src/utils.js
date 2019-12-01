export const flood = (field, nextColor) => {
  field = JSON.parse(JSON.stringify(field))
  const flood = (currentColor, row, column) => {
    // terminal case
    if(!field[row] || !field[row][column]) {
      return field
    }
    if (field[row][column] === currentColor) {
      field[row][column] = nextColor
      field = flood(currentColor, row + 1, column)
      field = flood(currentColor, row - 1, column)
      field = flood(currentColor, row, column - 1)
      return flood(currentColor, row, column + 1)
    }
    return field

  }
  return flood(field[0][0], 0, 0)
}
