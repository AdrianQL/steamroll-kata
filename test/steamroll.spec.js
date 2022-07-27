const steamroll = require('../steamroll');

test('steamroll([[["a"]], [["b"]]])', () => {
  expect(steamroll([[["a"]], [["b"]]])).toStrictEqual(["a", "b"]); 
});

test('steamrollArray([1, [2], [3, [[4]]]])', () => {
  expect(steamroll([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4]);
});

test('steamrollArray([1, [], [3, [[4]]]])', () => {
  expect(steamroll([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4]);
});

test('steamrollArray([1, {}, [3, [[4]]]])', () => {
  expect(steamroll([1, {}, [3, [[4]]]])).toStrictEqual([1, {}, 3, 4]);
});
