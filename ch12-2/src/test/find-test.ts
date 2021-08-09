import {connect} from '../mongodb/connect'

const findDocumentTest = async() => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db("ch12-2")
    const personsCollection  = db.collection("persons")
    const addressesCollection = db.collection("addresses")
    
    cursor = personsCollection.find({ name: "Jack" })
    const foundPersons = await cursor.toArray()
    console.log(foundPersons)

    cursor = addressesCollection.find({})
    const foundAddresses = await cursor.toArray()
    console.log(foundAddresses) 
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

findDocumentTest()

// ts-node .\src\test\find-test.ts
// [ { _id: 61004447fc41706614964d3f, name: 'Jack', age: 32 } ]
// [ { _id: 61004447fc41706614964d40, country: 'korea', city: 'seoul' } ]