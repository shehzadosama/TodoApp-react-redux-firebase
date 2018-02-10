import Items from "./../actions/Items";

import * as firebase from 'firebase';

export default class AddTodoMiddleware {

    static addItemsWithValue(data) {
        var database = firebase.database();
        let obj;
        console.log("test ", data);
        return (dispatch) => {
            var storageData;

            database.ref('/todos').push(
                {
                    item: data
                }
            ).then(() => {
                database.ref('todos/').once('value')
                    .then((snapshot) => {
                        obj = snapshot.val();
                        dispatch(Items.getTodos(obj));
                        // let allUsers = userData.val();
                        // let currentUserUid = firebase.auth().currentUser.uid;
                        // dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                        // dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                    });

                console.log("Todo Added");
                // dispatch(PatientsAction.addPatients(data));
            })
        }
    }
}
