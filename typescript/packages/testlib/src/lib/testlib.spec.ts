import { add } from './testlib';

describe('test testlib', () => {
  it('should work', () => {
    expect(add(3,4)).toEqual(7);
  });
});
