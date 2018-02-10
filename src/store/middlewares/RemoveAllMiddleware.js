import Items from "./../actions/Items";
import * as firebase from 'firebase';


export default class RemoveAllMiddleware {

    static removeAll() {
        // console.log("test ", data);
        return (dispatch) => {
            var database = firebase.database();
            // My Business logic Here
            // var patients = [];
            var obj = [];

            // firebase.database().ref('patients/' + key).remove();

            database.ref('todos/').set({

            })
                .then(() => {
                    firebase.database().ref('todos/').once('value')
                        .then((snapshot) => {
                            obj = snapshot.val();
                            dispatch(Items.getTodos(obj));
                            // let allUsers = userData.val();
                            // let currentUserUid = firebase.auth().currentUser.uid;
                            // dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                            // dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                        });
                })




        }
    }
}
