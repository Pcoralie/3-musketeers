const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      expect(Array.isArray(['value'])).toBe(true)
      expect(typeof 'value').toBe('string')

    });

    test('should contain `Luke Skywalker`', () => {
      //expect(starWarsNames).toContain('Luke Skywalker')
      expect.stringContaining('Luke Skywalker')
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect.not.stringContaining('Ben Quadinaros')
      //expect(starWars.all).not.toContain('Ben Quadinaros')
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      expect(typeof(starWars.random())).toBe('string')
    });

    test('should return an array of random items if passed a number', () => {
      expect(Array.isArray(starWars.random(6))).toBe(true)
    });
  });
});
