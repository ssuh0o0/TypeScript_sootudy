// 가짜 데이터를 여러개 생성해 CVS 파일에 작성
export function * range(max: number, min:number = 0) {
  while(min < max)
    yield min++
}