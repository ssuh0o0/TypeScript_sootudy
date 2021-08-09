import {rmdir} from '../fileApi/rmdir'

const deleteDataDir = async (dir) => {
  const result = await rmdir(dir)
  console.log(`'${result}' dir deleted.`) 
}
deleteDataDir('./data/today')

// ts-node .\src\test\rmdir-test.ts
//'./data/today' dir deleted.