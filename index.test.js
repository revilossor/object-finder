const target = require('./index');
require('./assertions').forEach((assertion) => {
  test(assertion.description, () => {
    expect(target(assertion.input.comparator, ...assertion.input.objects)).toEqual(expect.arrayContaining(assertion.output));
  });
});
