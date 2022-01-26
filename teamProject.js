//git init for git hub then create new project on github
//create a file called .gitignore and first line node_modules and save so github 
//wont upload everything
//start with npm init before starting
//then npm install mongodb in the terminal line
//to get package.json

const mongodb = require ('mongodb');

const client = new mongodb.MongoClient('mongodb://localhost:27017')

const connectClient =async () =>{
await client.connect();
console.log('Client Connected!');

};
const getUserCollections= () =>{
    const db = client.db('danis-db');
    const col = db.collection('users');

    return col;

}

const insertUser = async () => {
const col = getUserCollections();
await col.insertOne({
first: 'Danielle',
last: 'Kom',
job: 'Entrepreneur'

});
console.log('User Inserted!');

}

const getUsers = async () => {
    const col = getUserCollection();
    const users = await col.find({}).toArray();
    return users;
}

connectClient()
.then(() => insertUser ())
.then(() => getUsers())
.then((users) => console.log(users))
.then(() => client.close());

const getUserCollection= () => {
const db = client.db('danis-db');
const col = db.collection('Products');

return col;
}

const insertProducts = async () => {
    const col = getUserCollection();
    await col.insertOne({
        Ptype: 'iphoneX',
        Pcolor: 'white',
        Pyear: 2018,
        Pprice: 950,
        Pdevice:'apple'

    });
    console.log('Product Inserted!');

}

const getProducts= async () => {
const col =getUserCollections();
const products =await col.find({}).toArray();

return products;

}

connectClient()
.then(() => insertProducts())
.then(() => getProducts())
.then((products)=> console.log(products))
.then(() => client.close());