import { CATEGORIE_FILTER } from "./ActionTypes"



export const categori_fillter = (categorie_name) => {

    return {
        type: CATEGORIE_FILTER,
        payload: categorie_name
    }
}