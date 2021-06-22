import { ISinglePublication } from "../../entities/publication";

export const GET_PUBLICATIONS = "GET_PUBLICATIONS";

export interface IPublicationTypes{
    GET_PUBLICATIONS: {
        publications: ISinglePublication[];
    }
}