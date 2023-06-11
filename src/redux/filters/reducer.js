import { AUTHOR, CATEGORIES } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CATEGORIES:
            const { categorie, fillterType } = action.payload;
            switch (fillterType) {
                case "added":
                    return {
                        ...state,
                        filter_categories: [...state.filter_categories, categorie],
                    };

                case "removed":

                    return {
                        ...state,
                        filter_categories: state.filter_categories.filter((exitCat) => exitCat !== categorie)
                    };

                default:
                    return state;
            }

        case AUTHOR:
            const { author, fillterTypeAuthor } = action.payload;
            switch (fillterTypeAuthor) {
                case "added":
                    return {
                        ...state,
                        filter_authors: [...state.filter_authors, author]
                    };
                case "removed":
                    return {
                        ...state,
                        filter_authors: state.filter_authors.filter((existAuthor) => existAuthor !== author)
                    }

                default:
                    return state;
            }

        default:
            return state;
    }
}


export default reducer;