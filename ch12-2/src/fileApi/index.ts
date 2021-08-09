import {fileExists} from './fileExists'
import {mkdir} from './mkdir'
import {rmdir} from './rmdir'
import {writeFile} from './writeFile'
import {readFile} from './readFile'
import {appendFile} from './appendFile'
import {deleteFile} from './deleteFile'
import { readFileGenerator } from './readFileGenerator'

export {fileExists, mkdir, rmdir, writeFile, readFile, appendFile, deleteFile, readFileGenerator}
// 각기 다른 파일에 구현된 fileExist, mkdir 같은 함수를 다시 내보내서 src/fileApi 디렉터리의 함수들을 사용할 수 있게끔 한다