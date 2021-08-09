import {writeCsvFormatFakeData} from './fake'
import {getFileNameAndNumber} from './utils/getFileNameAndNumber'

const [filename, numberOfFakeData] = getFileNameAndNumber('./data/fake', 1)
const csvFilename = `${filename}-${numberOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename, numberOfFakeData)
  .then(result => console.log(result))
  .catch((e: Error) => console.log(e.message))


/**
 ts-node src\writeCsv.ts
 write 1 items to ./data/fake-1.csv file

 이렇게 하면 fake 데이터가 100000개를 만들어냄
 ts-node src\writeCsv.ts data/fake 100000
 */