import Items from "./../actions/Items";
import * as firebase from 'firebase';


export default class UpdateTodoMiddleware {

    static updateItem(item, key) {
        // console.log("test ", data);
        return (dispatch) => {
            var database = firebase.database();
            var obj;
            console.log(key)
            database.ref('todos/' + key + '/').set({
                item: item
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
            // My Business logic Here
            // var patients = [];

            // var obj = [];
            // firebase.database().ref('todos/' + key).remove();

            // firebase.database().ref("/todos/").once("value").then(function (snapshot) {
            //     obj = snapshot.val();
            //     // var arr = [];
            //     // for (let a in obj) arr.push(obj[a])

            //     console.log('obj', obj);
            //     // alert("Todo Removed");
            //     dispatch(Items.getTodos(obj));
            // }
            // );




        }
    }
}
