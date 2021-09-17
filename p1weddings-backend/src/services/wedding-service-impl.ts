import { WeddingDAO } from "../daos/wedding-dao";
import { WeddingDaoPostgres } from "../daos/wedding-dao-postgres";
import { Wedding } from "../entities";
import WeddingService from "./wedding-service";


export class WeddingServiceImpl implements WeddingService {

    weddingDAO: WeddingDAO = new WeddingDaoPostgres();

    createWedding(wedding: Wedding): Promise<Wedding> {
        return this.weddingDAO.createWedding(wedding);
    }


    getAllWeddings(): Promise<Wedding[]> {
        return this.weddingDAO.getAllWeddings();
    }


    getWeddingByWeddingID(weddingID: number): Promise<Wedding> {
        return this.weddingDAO.getWeddingByWeddingID(weddingID);
    }


    updateWedding(wedding: Wedding): Promise<Wedding> {
        return this.weddingDAO.updateWedding(wedding);
    }


    deleteWedding(weddingID: number): Promise<boolean> {
        return this.weddingDAO.deleteWedding(weddingID);
    }

}