import {connect} from '../mongodb/connect'

const makedbTest = async() => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db("ch12-1")
    console.log('db', db)
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

makedbTest()

/**
 ts-node .\src\test\makedb-test.ts
db Db {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  s: {
 */