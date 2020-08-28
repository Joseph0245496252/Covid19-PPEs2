import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { dataReducer} from "./dataReducer";

export default combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    dataReducer: dataReducer,
})