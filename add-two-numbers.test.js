const { reverse, reverseDigit, addTwoNumbers } = require('./add-two-numbers');

describe('addTowNumbers', () => {
  test('reverseDigit', () => {
    // arrange
    const list = [5,6,4];
    const expected = 465;

    // act
    const actual = reverseDigit(list);

    // assert
    expect(actual).toStrictEqual(expected);
  });

  test('reverse array', () => {
    // arange
    const list = [1,2,3];
    const expected = [3,2,1];

    // act
    const actual = reverse(list);

    // assert
    expect(actual).toStrictEqual(expected);
  })

  test('add two numbers', () => {
    // arrange
    const list1 = [2,4,3];
    const list2 = [5,6,4];
    const expected = [7,0,8];

    // act
    const actual = addTwoNumbers(list1, list2);

    // assert
    expect(actual).toStrictEqual(expected);
  });
});
