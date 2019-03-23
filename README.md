Measure how long it takes to call an asynchronous function

## Usage

```js
const time = require('@piuccio/time-fn');

await time(() => {
  // ... you code here
});
```

It'll print to stdout how long it took for the function to resolve.

## Return

```js
const time = require('@piuccio/time-fn');

const result = await time(myFunction);
// result will be the resolved value of myFunction
```