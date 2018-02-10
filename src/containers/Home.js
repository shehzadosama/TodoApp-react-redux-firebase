import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';

// import CounterAction from './../../store/actions/counter'
import ItemsAction from './../store/actions/Items'
// import CounterMiddleware from './../../store/middlewares/counterMiddleware'

// import Counter from '../../components/counter/Counter'
import TodoList from '../components/TodoList'
import TodoItems from '../components/TodoItems'
import AddTodoMiddleware from '../store/middlewares/AddTodoMiddleware';
import GetTodosMiddleware from '../store/middlewares/GetTodosMiddleware';
import RemoveAllMiddleware from '../store/middlewares/RemoveAllMiddleware';
import RemoveMiddleware from '../store/middlewares/RemoveMiddleware';
import UpdateTodoMiddleware from '../store/middlewares/UpdateTodoMiddleware';
//  import TodoMiddleware from './../../store/middlewares/todoMiddleware'




function mapStateToProps(state) {
    // console.log(state.addItems.todos)
    // console.log(state.addItems.editState)
    // console.log(state.addItems.editVal)
    console.log(state.getTodos.todos)
    return {
        items: state.getTodos.todos,
        editState: state.addItems.editState,
        editVal: state.addItems.editVal,
        editKey: state.addItems.editKey,
        // decCounter: state.decrementCounter.decrementState
    };
}


function mapDispatchToProps(dispatch) {
    return {
        add: function (value) {
            return dispatch(AddTodoMiddleware.addItemsWithValue(value));
        },
        removeAll: function () {
            return dispatch(RemoveAllMiddleware.removeAll());
        },
        remove: function (key) {
            return dispatch(RemoveMiddleware.removeItem(key));
        },
        closeEdit: function () {
            return dispatch(ItemsAction.closeEdit());
        },
        openEdit: function (key) {
            return dispatch(ItemsAction.openEdit(key));
        },
        updateItem: function (item,key) {
            return dispatch(UpdateTodoMiddleware.updateItem(item,key));
        },
        getTodos: function (item) {
            return dispatch(GetTodosMiddleware.getTodos());
        },

    };
}

class Home extends Component {

    componentWillMount() {
        this.props.getTodos();
    }
    addItem(item) {
        this.props.add(item);
    }
    removeItems() {
        this.props.removeAll();
    }
    removeItem(key) {
        this.props.remove(key);
    }
    closeEdit() {
        this.props.closeEdit();
    }
    openEdit(key) {
        this.props.openEdit(key);
    }
    updateItem(item,key) {
        this.props.updateItem(item,key);
    }

    render() {
        return (
            <div>
                <TodoList updateItem={this.updateItem.bind(this)}
                    editKey={this.props.editKey}
                    editVal={this.props.editVal}
                    closeEdit={this.closeEdit.bind(this)}
                    editState={this.props.editState}
                    update={this.addItem.bind(this)}
                    removeAll={this.removeItems.bind(this)}
                    openEdit={this.openEdit.bind(this)}
                    items={this.props.items}
                    removeItem={this.removeItem.bind(this)} />





                {/* <TodoItems openEdit={this.openEdit.bind(this)} items={this.props.items} removeItem={this.removeItem.bind(this)} /> */}
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
