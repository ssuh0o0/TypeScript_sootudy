// makeFakeData를 사용해 numberOfItems 만큼 IFake 객체 생성
// 속성명과 속성 값의 배열을 추출해서 filename을 만든다.
import * as path from 'path'
import {IFake, makeFakeData} from './makeFakeData'
import { mkdir, writeFile, appendFile } from '../fileApi'
import { range } from '../utils/range'

export const writeCsvFormatFakeData = async(filename: string, 
  numberOfItems: number): Promise<string> => {
  const dirname = path.dirname(filename)
  await mkdir(dirname)

  const comma = ',', newLine = '\n'
  for(let n of range(numberOfItems)) {
    const fake: IFake = makeFakeData()

    // csv 파일은 첫줄에 객체의 속성 이름을 쉼표로 구분하여 작성해야 함
    if(n == 0) {
      const keys = Object.keys(fake).join(comma)
      await writeFile(filename, keys)
    }
    
    //객체의 속성이름 생략하고 속성값만 파일에 작성
    const values = Object.values(fake).join(comma)
    await appendFile(filename, newLine + values)
  }
  return `write ${numberOfItems} items to ${filename} file`
}