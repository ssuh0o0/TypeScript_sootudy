import * as path from 'path'
import {appendFile} from '../fileApi/appendFile'
import {mkdir} from '../fileApi/mkdir'

const appendTest = async(filename: string, data: any) => {
  const result = await appendFile(filename, data)
  console.log(`append ${result} to ${filename}`)
}

mkdir('./data')
  .then(s => appendTest('./data/hello.txt', "\nHi, there!")) 
  .catch((e: Error) => console.log(e.message))


// ts-node .\src\test\appendFile-test.ts

//append 
//Hi, there! to ./data/hello.txt
