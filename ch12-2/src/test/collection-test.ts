import {connect} from '../mongodb/connect'

const makeCollectionsTest = async() => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db("ch12-1")
    const personsCollection  = db.collection("persons")
    const addressesCollection = db.collection("addresses")
    console.log(personsCollection, addressesCollection)
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

makeCollectionsTest()

/*
ts-node .\src\test\collection-test.ts
Collection {
  s: {
    pkFactory: <ref *1> [Function: ObjectID] {
      index: 14611372,
      createPk: [Function: createPk],
      createFromTime: [Function: createFromTime],
      createFromHexString: [Function: createFromHexString],
      isValid: [Function: isValid],
      ObjectID: [Circular *1],
      ObjectId: [Circular *1]
    },
    */