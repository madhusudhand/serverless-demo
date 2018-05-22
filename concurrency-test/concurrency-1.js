const tinyreq = require('tinyreq');

async function run(url, i) {
  const start = Date.now();
  let end = start;

  return tinyreq({ url })
  .then(() => {
      end = Date.now();
      return [i, (end-start)];
  }).catch(() => {
      end = Date.now();
      return [i, (end-start)];
  });
}

const n = 10;
const url = 'https://5fysj9tbqa.execute-api.ap-south-1.amazonaws.com/development/hello/test1';

(async () => {
  for(let i=0; i<n; i++){
    const result = await run(url, i+1);
    console.log(result[0].toString().padEnd(4) + new Array(Math.round(result[1]/10)).join('◙') + ' ' + result[1]);
  }
})();
