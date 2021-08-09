//파일을 한줄씩 읽어들인다.
import {readFileGenerator} from '../fileApi'

for(let value of readFileGenerator("data/fake-100000.csv")) {
  console.log('<line>', value, '</line >') 
  break // 첫 줄만 출력
}

/**
ts-node .\src\test\readFileGenerator-test.ts
<line> name,email,profession,birthday,sentence </line >
 */