import rimraf from 'rimraf'
import {fileExists} from './fileExists'

export const rmdir = (dirname: string): Promise<string> => 
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname)
    !alreadyExists ? resolve(dirname) :
      rimraf(dirname, error => error ? reject(error) : resolve(dirname)) 
  })


// fs.rmdir은 비어있지 않은 디렉터리는 삭제하지 못한다.
// but rimraf 패키지를 이용하면 비어있지 않은 디렉터리도 삭제 가능!