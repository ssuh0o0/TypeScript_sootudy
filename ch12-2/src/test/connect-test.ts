import {connect} from '../mongodb/connect'

const connectTest = async() => {
  let connection
  try {
    connection = await connect()
    console.log('connection OK.', connection)
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

connectTest()


//ts-node .\src\test\connect-test.ts
/*
connection OK. MongoClient {
  _events: [Object: null prototype] { newListener: [Function (anonymous)] },
  _eventsCount: 1,
  _maxListeners: undefined,
  s: {
    url: 'mongodb://localhost:27017',
    options: {
      servers: [Array],
      caseTranslate: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      directConnection: true,
*/