
import { Wedding } from "../entities";

export default interface WeddingService {

    // POST /weddings
    // create a new wedding
    createWedding(wedding: Wedding): Promise<Wedding>;


    // GET /weddings
    // get all weddings
    getAllWeddings(): Promise<Wedding[]>;


    // GET /weddings/:id
    // get a wedding
    getWeddingByWeddingID(weddingID: number): Promise<Wedding>;


    // PUT /weddings
    updateWedding(wedding: Wedding): Promise<Wedding>;


    // DELETE /weddings/:id
    // delete a wedding
    deleteWedding(weddingID: number): Promise<boolean>;

}