import {CREATE_ORDER, CREATE_ORDER_ERROR} from "../type"

export const createOrder = (order) => {
    return(dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const id = order.name + order.email
        firestore
            .collection("order")
            .doc(id)
            .set({
                ...order,
                date: new Date(),
            }, {merge: true}).then(() =>{
                dispatch({ type: CREATE_ORDER }, order);
            }).catch((err) =>{
                dispatch({ type: CREATE_ORDER_ERROR}, err)
            })
            
    }
}

