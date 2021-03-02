const { ListNode, addTwoNumbers } = require('./add-two-numbers');

test('3 더하기 4 는 7 이다', () => {
  // arrange
  const l1 = new ListNode(3);
  const l2 = new ListNode(4);

  // act
  const actual = addTwoNumbers(l1, l2);
  const expected = new ListNode(7);
  
  // assert
  expect(actual).toEqual(expected);
});

test('42 더하기 35 은 77 이다', () => {
  // arrange
  const l1 = new ListNode(2, new ListNode(4));
  const l2 = new ListNode(5, new ListNode(3));

  // act
  const actual = addTwoNumbers(l1, l2);
  const expected = new ListNode(7, new ListNode(7));

  // assert
  expect(actual).toEqual(expected);
});

test('342 더하기 465 은 807 이다', () => {
  // arrange
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  // act
  const actual = addTwoNumbers(l1, l2);
  const expected = new ListNode(7, new ListNode(0, new ListNode(8)));

  // assert
  expect(actual).toEqual(expected);
});

test('0 더하기 0 은 0 이다', () => {
  // arrange
  const l1 = new ListNode(0);
  const l2 = new ListNode(0);

  // act
  const actual = addTwoNumbers(l1, l2);
  const expected = new ListNode(0);

  // assert
  expect(actual).toEqual(expected);
});

test('999999 더하기 9999 은 1009998 이다', () => {
  // arrange
  const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))));
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

  // act
  const actual = addTwoNumbers(l1, l2);
  const expected = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(1)))))));

  // assert
  expect(actual).toEqual(expected);
});
