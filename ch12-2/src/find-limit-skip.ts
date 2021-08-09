import { connect } from './mongodb/connect'
import { IFake } from './fake'

const findLimitSkip = async () => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db('ch12-2')
    const usersCollection = db.collection('users')

    let cursor = await usersCollection.find({}).sort({ birthday: -1, name: 1 }).skip(100).limit(5)
    let result = await cursor.toArray()
    console.log(result.map((user: IFake) => ({ name: user.name, birthday: user.birthday })))
  } catch (e) {
    console.log(e.message)
  } finally {
    connection.close()
  }
}

findLimitSkip()


// ts-node .\src\find-limit-skip.ts
// [
//   {
//     name: 'Jared Richardson',
//     birthday: 'Wed Sep 23 1998 14:53:45 GMT+0900 (대한민국 표준시)'
//   },
//   {
//     name: 'Lettie Knight',
//     birthday: 'Wed Sep 23 1998 06:27:00 GMT+0900 (대한민국 표준시)'
//   },
//   {
//     name: 'Beatrice King',
//     birthday: 'Wed Sep 23 1998 00:52:30 GMT+0900 (대한민국 표준시)'
//   },
//   {
//     name: 'Scott Holloway',
//     birthday: 'Wed Sep 23 1992 04:55:39 GMT+0900 (대한민국 표준시)'
//   },
//   {
//     name: 'Eugenia Mendoza',
//     birthday: 'Wed Sep 23 1992 03:03:21 GMT+0900 (대한민국 표준시)'
//   }
// ]
