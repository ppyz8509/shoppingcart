import {ADD_PRODUCT , ADD_QUANTITY ,REMOVE_QUNATITY, FILTER_BY_CATEDORY} from './actionTypes'
import {initialState} from ".//initialState"
const nexID = (item) => {
    return item.reduce((id, item) => Math.max(id, item.id), -1) +1;
}

const productReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_PRODUCT :
            return [
                ...state,
                {
                    id: nexID(state),
                    ...action.payload,
                    price: parseFloat(action.payload.price),
                    qunatity: parseInt(action.payload.qunatity),
                }
            ]
        case ADD_QUANTITY :
            return state.map((product) => {
                if(product.id === action.payload.productId) {
                    return {

                    }
                }
            })


        case  REMOVE_QUNATITY :
            
    }
}