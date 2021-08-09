// object key와 value를 분리
import {IFake, makeFakeData} from '../fake/makeFakeData'

const data: IFake = makeFakeData();
const keys = Object.keys(data)
console.log('keys:', keys) 
const values = Object.values(data)
console.log('values:', values) 

/*
ts-node .\src\test\keys-values-test.ts 

keys: [ 'name', 'email', 'profession', 'birthday', 'sentence' ]
values: [
  'Lawrence Rodriquez',
  'kufos@rolrawa.gw',
  'Sales Representative',
  1985-09-04T20:03:22.861Z,
  'Bumius bodu bagog eli fenzeka zibage es ma kozu lowodo mofde deb atnodo rugu amci miknu.'
]
*/