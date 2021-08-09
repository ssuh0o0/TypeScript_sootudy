process.argv.forEach((val: string, index: number) => {
  console.log(index + ': ' + val)
})

// ts-node src/test/processArgs-test.ts data/fake.csv 100000

//0: C:\Users\emili\AppData\Roaming\npm\node_modules\ts-node\dist\bin.js
//1: C:\Users\emili\Documents\typescript\chapter12\ch12-1\src\test\processArgs-test.ts
//2: data/fake.csv
//3: 100000