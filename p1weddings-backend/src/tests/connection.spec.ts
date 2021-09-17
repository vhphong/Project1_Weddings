import { conn } from "../connection";

// client is the main object we will use to interact with our database
test("Test for creating a connection ", async () => {
    // we need await because we are fetching data stored on a database in the cloud
    const result = await conn.query('SELECT * FROM wedding');
    console.log(result);
});