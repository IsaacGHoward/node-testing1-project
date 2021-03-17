const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const res = utils.trimProperties(input);
    expect(input).toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(input).toEqual(actual);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const input = [-4, 5 , 7 , 0 , 24 , -100];
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(24);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
    const actual = counter.countDown();
    expect(actual).toEqual(3);
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
    counter.countDown();
    const actual = counter.countDown();
    expect(actual).toEqual(2);
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const actual = counter.countDown();
    expect(actual).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    const actual = seasons.next();
    expect(actual).toEqual('summer');
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual('fall');
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual('winter');
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    seasons.next();
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual('spring');
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual('summer');
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    let actual;
    for(var i = 0; i< 40; i++){
      actual = seasons.next();
    }
    expect(actual).toEqual('spring');
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
