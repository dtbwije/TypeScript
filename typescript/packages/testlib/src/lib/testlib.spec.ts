import { add, greet } from './testlib';

// We recommend installing an extension to run jest tests.

describe('add function', () => {
  it('adds two positive integers', () => {
    expect(add(3, 4)).toEqual(7);
  });

  it('adds with zero', () => {
    expect(add(0, 5)).toEqual(5);
    expect(add(5, 0)).toEqual(5);
  });

  it('adds negative numbers', () => {
    expect(add(-2, -3)).toEqual(-5);
    expect(add(-3, 7)).toEqual(4);
  });

  it('adds floating point numbers (uses tolerance)', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  it('adds large numbers', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toEqual(Number.MAX_SAFE_INTEGER + 1);
  });
});

describe('greet function (behavior)', () => {
  it('returns undefined and logs greeting when called with a name', () => {
    expect(greet('Alice')).toBeUndefined();
  });
});