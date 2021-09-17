import { conn } from "../connection";
import { Wedding } from "../entities";
import { MissingResourceError } from "../errors";
import { WeddingDAO } from "./wedding-dao";

// https://www.postgresqltutorial.com/postgresql-date/

export class WeddingDaoPostgres implements WeddingDAO {
    
    async getAllWeddings(): Promise<Wedding[]> {
        const sql: string = 'SELECT * FROM wedding ORDER BY weddingid';
        const result = await conn.query(sql);
        const allWeddings: Wedding[] = [];

        for (let row of result.rows) {
            const wedding: Wedding = new Wedding(row.weddingid, row.weddingdate, row.weddinglocation, row.weddingname, row.budget);
            allWeddings.push(wedding);
        }

        return allWeddings;
    }


    async getWeddingByWeddingID(weddingID: number): Promise<Wedding> {
        // const sql: string = 'SELECT weddingid, TO_CHAR(weddingdate, $1), weddinglocation, weddingname, budget FROM wedding WHERE weddingid = $2';
        // const values = ['MM-DD-YYYY', weddingID];

        // const sql: string = 'SELECT * FROM wedding WHERE weddingid = $1';
        // const values = [weddingID];

        // const sql: string = 'SELECT TO_CHAR(weddingdate, ' + 'MM-DD-YYYY' + ') FROM wedding WHERE weddingid = 1';
        // const sql: string = 'SELECT * FROM wedding WHERE weddingid = $1';
        // const sql: string = 'SELECT weddingid, to_char(weddingdate::DATE, "dd-mm-yyyy"), weddinglocation, weddingname, budget FROM wedding WHERE weddingid = $1';
        // const values = [weddingID];
        
        // const selectdate: string = 'weddingdate';
        const sql: string = 'SELECT weddingid, weddingdate, weddinglocation, weddingname, budget FROM wedding WHERE weddingid = $1';
        const values = [weddingID];


        // SELECT TO_CHAR(NOW() :: DATE, 'dd-mm-yyyy');


        // const result = await conn.query(sql);


        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The wedding with ID ${weddingID} does not exist.`);
        }

        const row = result.rows[0];
        const retrievedWedding: Wedding = new Wedding(row.weddingid, 
                                                      row.weddingdate, 
                                                      row.weddinglocation, 
                                                      row.weddingname, 
                                                      row.budget);

        return retrievedWedding;
    }


    async createWedding(newWedding: Wedding): Promise<Wedding> {
        const sql: string = "INSERT INTO wedding (weddingdate, weddinglocation, weddingname, budget) VALUES ($1, $2, $3, $4) returning weddingid";
        const values = [newWedding.weddingDate, newWedding.weddingLocation, newWedding.name, newWedding.budget];
        const result = await conn.query(sql, values);
        newWedding.weddingID = result.rows[0].weddingid;

        return newWedding;
    }


    async updateWedding(wedding: Wedding): Promise<Wedding> {
        const sql: string = 'UPDATE wedding SET weddingdate=$1, weddinglocation=$2, weddingname=$3, budget=$4 WHERE weddingid=$5';
        const values = [wedding.weddingDate, wedding.weddingLocation, wedding.name, wedding.budget, wedding.weddingID];
        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The wedding with ID ${wedding.weddingID} does not exist.`);
        }

        return wedding;
    }


    async deleteWedding(weddingID: number): Promise<boolean> {
        const sql: string = 'DELETE FROM wedding WHERE weddingid=$1';
        const values = [weddingID];
        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The wedding with ID ${weddingID} does not exist.`);
        }

        return true;
    }
}