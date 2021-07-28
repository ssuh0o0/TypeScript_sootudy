import {deleteFile} from '../fileApi/deleteFile'
import {rmdir} from '../fileAPi/rmdir'

const deleteTest = async(filename: string) => {
  const result = await deleteFile(filename)
  console.log(`delete ${result} file.`)
}
Promise.all([deleteTest('./data/hello.txt'), deleteTest('./data/test.json')])
  .then(s => rmdir('./data'))
  .then(dirname => console.log(`delete ${dirname} dir`))
  .catch((e: Error) => console.log(e.message))