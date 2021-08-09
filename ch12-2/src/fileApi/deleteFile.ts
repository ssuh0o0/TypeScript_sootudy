import * as fs from 'fs'
import {fileExists} from './fileExists'

export const deleteFile = (filename: string) : Promise<string> => 
  new Promise<any>(async(resolve, reject) => {
    //파일 존재하는지 확인
    const alreadyExists = await fileExists(filename)
    // fs.unlink 호출해서 파일 삭제
    !alreadyExists ? resolve(filename) :
      fs.unlink(filename, (error) => error ? reject(error) : resolve(filename))
  })

// ts-node .\src\test\deleteFile-test.ts

// delete ./data/hello.txt file.
// delete ./data/test.json file.
// delete ./data dir