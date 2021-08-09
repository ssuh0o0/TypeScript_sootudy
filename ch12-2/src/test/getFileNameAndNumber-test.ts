import { getFileNameAndNumber } from '../utils/getFileNameAndNumber'

const [filename, numberOfFakeItems] = getFileNameAndNumber('data/fake.csv', 100000)
console.log(filename, numberOfFakeItems) 

//ts-node .\src\test\getFileNameAndNumber-test.ts data/fake.csv 100000
//data/fake.csv 100000
