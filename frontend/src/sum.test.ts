import { expect, test } from 'vitest';
import { sum } from './sum';

test('add(10, 20) should return 30', () => {
  expect(sum(10, 20)).toBe(30);
});
