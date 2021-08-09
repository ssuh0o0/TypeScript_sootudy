// ./data 디렉터리 생성, hello.txt, test.json 생성
import * as path from 'path'
import {writeFile} from '../fileApi/writeFile'
import {mkdir} from '../fileApi/mkdir'
import mkdirp = require('mkdirp')

const writeTest = async(filename: string, data: any) => {
  const result = await writeFile(filename, data)
  console.log(`write ${result} to ${filename}`)
}

mkdir('./data')
  .then(s => writeTest('./data/hello.txt', "hello world"))
  .then(s => writeTest("./data/test.json", JSON.stringify({name: "Jack", age: 32}, null, 2)))
  .catch((e: Error) => console.log(e.message))

// ts-node .\src\test\writeFile-test.ts

//write hello world to ./data/hello.txt
//write {
//  "name": "Jack",
//  "age": 32
//} to ./data/test.json