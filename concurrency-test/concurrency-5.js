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
  // console.log('First 5 concurrent Requests');
  let promises = [];
  for(let i = 0; i < n / 2; i++){
    const p = run(url, i+1);
    promises.push(p);
  }

  await Promise.all(promises).then(results => {
    console.log(results.map(result => {
      return result[0].toString().padEnd(4) + new Array(Math.round(result[1]/10)).join('◙') + ' ' + result[1];
    }).join('\n'));
  });

  promises = [];
  // console.log('\nNext 5 concurrent requests');
  for(let i = n/2; i < n; i++){
    const p = run(url, i+1);
    promises.push(p);
  }

  await Promise.all(promises).then(results => {
    console.log(results.map(result => {
      return result[0].toString().padEnd(4) + new Array(Math.round(result[1]/10)).join('◙') + ' ' + result[1];
    }).join('\n'));
  });
})();
