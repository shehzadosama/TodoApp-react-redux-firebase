import Items from "./../actions/Items";
import * as firebase from 'firebase';


export default class RemoveMiddleware {

    static removeItem(key) {
        // console.log("test ", data);
        return (dispatch) => {
            // My Business logic Here
            // var patients = [];

            var obj = [];
            firebase.database().ref('todos/' + key).remove();

            firebase.database().ref("/todos/").once("value").then(function (snapshot) {
                obj = snapshot.val();
                // var arr = [];
                // for (let a in obj) arr.push(obj[a])

                console.log('obj', obj);
                // alert("Todo Removed");
                dispatch(Items.getTodos(obj));
            }
            );




        }
    }
}
