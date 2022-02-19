import { isDev, hostname } from './';

describe('Utils', () => {
  afterAll(() => {
    // @ts-ignore
    process.env.NODE_ENV = 'test';
  });

  describe('isDev', () => {
    test.each([
      [true, 'development'],
      [false, 'production'],
    ])('returns %s when NODE_ENV is %s', (expected, env) => {
      // @ts-ignore
      process.env.NODE_ENV = env;

      expect(isDev()).toBe(expected);
    });
  });

  describe('hostname', () => {
    test.each([
      ['localhost', 'development'],
      ['kasimahmic.github.io', 'production'],
    ])('returns %s when NODE_ENV is %s', (expected, env) => {
      // @ts-ignore
      process.env.NODE_ENV = env;

      expect(hostname()).toBe(expected);
    });
  });
});
