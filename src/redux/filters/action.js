import { AUTHOR, CATEGORIES } from "./actionTypes"

export const catetories_fillter = (categorie, fillterType) => {
    return {
        type: CATEGORIES,
        payload: {
            categorie,
            fillterType,
        }
    }
}

export const author_fillter = (author, fillterTypeAuthor) => {
    return {
        type: AUTHOR,
        payload: {
            author,
            fillterTypeAuthor,
        }
    }
}