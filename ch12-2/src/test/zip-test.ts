import {zip} from '../utils'
import {makeFakeData, IFake} from '../fake'
const data = makeFakeData() // 가짜 데이터 생성
const keys = Object.keys(data), values = Object.values(data) // 속성명 배열과 속성 값 배열 생성

const fake: IFake = zip(keys, values) as IFake // IFake 타입 객체로 변환
console.log(fake) 

/*
ts-node .\src\test\zip-test.ts
{
  name: 'Fannie Leonard',
  email: 'fapsispof@cutuda.ge',
  profession: 'Health Therapist',
  birthday: 1994-06-16T14:49:18.821Z,
  sentence: 'Herbopcez ajoda cuvagav ipfoc boalhu ibefa iwoba igfudcub wi cutnul savoli epve tojjehjak ento kos.'
}
*/