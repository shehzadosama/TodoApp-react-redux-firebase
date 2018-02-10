import Items from "./../actions/Items";

import * as firebase from 'firebase';

export default class GetTodosMiddleware {

    static getTodos() {
        var database = firebase.database();

        // console.log("test ", data);
        return (dispatch) => {
            var storageData;

            // database.ref('/todos').push(
            //     {
            //         item: data
            //     }
            // );
            var obj = [];
            firebase.database().ref("/todos/").once("value").then(function (snapshot) {
                obj = snapshot.val();
                // var arr = [];
                // for (let a in obj) arr.push(obj[a])

                console.log('obj', obj);
                for (var i in obj) console.log(i)
                dispatch(Items.getTodos(obj));

            }
            );

            // dispatch(PatientsAction.addPatients(data));
        }
    }
}
