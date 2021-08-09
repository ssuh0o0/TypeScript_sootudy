import {mkdir} from '../fileApi/mkdir'

const makeDataDir = async(dirname: string) => {
  let result = await mkdir(dirname)
  console.log(`'${result}' dir created`) 
}
makeDataDir('./data/today')

// ts-node .\src\test\mkdir-test.ts
// 'C:\Users\emili\Documents\typescript\chapter12\ch12-1\data' dir created