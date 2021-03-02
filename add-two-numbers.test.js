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

test('4 더하기 6 은 10 이다', () => {
  // arrange
  const l1 = new ListNode(4);
  const l2 = new ListNode(6);

  // act
  const actual = addTwoNumbers(l1, l2).val;
  const expected = new ListNode(0, new ListNode(1)).val;

  // assert
  expect(actual).toEqual(expected);
});
