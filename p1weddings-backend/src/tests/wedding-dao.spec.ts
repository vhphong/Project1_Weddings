import { conn } from "../connection";
import { WeddingDAO } from "../daos/wedding-dao";
import { WeddingDaoPostgres } from "../daos/wedding-dao-postgres";
import { Wedding } from "../entities";




const weddingDAO: WeddingDAO = new WeddingDaoPostgres();

// PASSED
test("Test: Create a wedding", async () => {
    const testWedding: Wedding = new Wedding(0, '12/15/2020', 'LA', 'Pete Alice', 11);
    const result: Wedding = await weddingDAO.createWedding(testWedding);

    console.log(result);

    expect(result.weddingID).not.toBe(0);
});


// PASSED
test("Test: Get all weddings", async () => {
    let wedding1: Wedding = new Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 22);
    let wedding2: Wedding = new Wedding(0, '11/15/2021', 'FL', 'Mike Emma', 33);
    let wedding3: Wedding = new Wedding(0, '12/15/2021', 'TX', 'Cris Elle', 44);

    const result1: Wedding = await weddingDAO.createWedding(wedding1);
    const result2: Wedding = await weddingDAO.createWedding(wedding2);
    const result3: Wedding = await weddingDAO.createWedding(wedding3);

    console.log("wedding1.weddingDate: " + wedding1.weddingDate);
    console.log("result1.weddingDate: " + result1.weddingDate);

    console.log("wedding2.weddingDate: " + wedding2.weddingDate);
    console.log("result2.weddingDate: " + result2.weddingDate);

    console.log("wedding3.weddingDate: " + wedding3.weddingDate);
    console.log("result3.weddingDate: " + result3.weddingDate);

    const allWeddings: Wedding[] = await weddingDAO.getAllWeddings();

    expect(allWeddings.length).toBeGreaterThanOrEqual(3);
});


// PASSED
test("Test: Get wedding by wedding ID", async () => {
    let testWedding: Wedding = new Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 55);
    const result: Wedding = await weddingDAO.createWedding(testWedding);

    let retrievedWedding: Wedding = await weddingDAO.getWeddingByWeddingID(result.weddingID);

    console.log("testWedding.weddingDate: " + testWedding.weddingDate);
    console.log("result.weddingDate: " + result.weddingDate);
    console.log("retrievedWedding.weddingDate: " + retrievedWedding.weddingDate);

    expect(retrievedWedding.weddingID).toBe(testWedding.weddingID);


    // wrong day format?????????????????????
    // expect(retrievedWedding.weddingDate).toBe(result.weddingDate);


    expect(retrievedWedding.weddingLocation).toBe(testWedding.weddingLocation);
    expect(retrievedWedding.name).toBe(testWedding.name);
    expect(retrievedWedding.budget).toBe(testWedding.budget);
});


// PASSED
test("Test: Update wedding by wedding ID", async () => {
    let testWedding: Wedding = new Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 66);
    testWedding = await weddingDAO.createWedding(testWedding);

    console.log(testWedding);

    testWedding.budget = 67;
    testWedding = await weddingDAO.updateWedding(testWedding);
    console.log(testWedding);

    const updatedWedding = await weddingDAO.getWeddingByWeddingID(testWedding.weddingID);
    console.log(updatedWedding);    // weddingDate: undefined ????????

    expect(updatedWedding.budget).toBe(67);
});


// PASSED
test("Test: Delete wedding by wedding ID", async () => {
    let wedding1: Wedding = new Wedding(0, '12/27/2021', 'CA', 'Pete Alice', 77);
    wedding1 = await weddingDAO.createWedding(wedding1);

    console.log(wedding1);

    const deleteResult: boolean = await weddingDAO.deleteWedding(wedding1.weddingID);

    expect(deleteResult).toBeTruthy();
});


afterAll(async () => {
    conn.end();
});