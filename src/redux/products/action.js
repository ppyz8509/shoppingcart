import {
    ADD_PRODUCT,
    ADD_QUANTITY,
    REMOVE_QUNATITY,
    FILTER_BY_CATEDORY,
} from "./actionTypes";

export const addProduct = (productId , qunatity) => {
    return {
        type : ADD_PRODUCT,
        payload :{productId, qunatity},
    }
}

export const addQunatity = (productId,qunatity) => {
    return {
        type : ADD_QUANTITY,
        payload :{productId, qunatity},
    }
}
export const removeQunatity = (productId,qunatity) => {
    return {
        type : REMOVE_QUNATITY,
        payload :{productId, qunatity},
    }
}
export const filterByCategory = (productId,qunatity) => {
    return {
        type : FILTER_BY_CATEDORY,
        payload :{productId, qunatity},
    }
}