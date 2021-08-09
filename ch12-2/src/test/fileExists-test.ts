import {fileExists} from '../fileApi/fileExists'

const exists = async(filepath) => {
  const result = await fileExists(filepath)
  console.log(`${filepath} ${result ? 'exists' : 'not exists'}`)
}

exists('./package.json') 
exists('./package')     

// ts-node .\src\test\fileExists-test.ts

// ./package.json exists
// ./package not exists

// package.json 파일이 있는 위치 : 현재 디렉터리