const time = require('../index');

global.console.log = jest.fn();

it('logs how long it takes to run a function', async () => {
  const wait = () => new Promise(
    (resolve) => setTimeout(
      () => resolve(12),
      1000
    )
  );

  expect(await time(wait)).toEqual(12);
  expect(global.console.log).toHaveBeenCalledWith('Done in 1s');
});