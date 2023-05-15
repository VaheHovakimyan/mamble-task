//                                 Intro                           //

// With the help of this program you can write and add your tasks, //
// you can also delete them. With the help of the "Hide Completed" button, //
// you can hide from the screen those tasks that have already been completed. // 
// After updating and closing the website, your task list is saved, //
// which makes your work with the program easier and saves you time. //
// Thank you for using our program.Have a nice working day) //


import { useState,useReducer } from "react";
import Form from "../Form/Form";
import HideCompleted from "../HideCompletedComponent/HideCompleted";
import PopUpOpacity from "../PopUpComponent/PopUpOpacity/PopUpOpacity";
import TasksComponent from "../Tasks/TasksComponent";
import './Main.scss';


// Reducers


function reducer(state,action) {
    if (action.type === "add") {
        return [
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false,
                display: false,
                popUp: false
            },
            ...state
        ];
    } else if (action.type === "delete") {
        return state.filter((t) => t.id !== action.payload.id);
    } else if (action.type === "update") {
        return state.map((todo) => {
            if (todo.id === action.payload.updatedTodo.id) {
                return action.payload.updatedTodo;
            }
            return todo;
        });
    } else if (action.type === "hide-completed") {
        return state.map((todo) => {
            if (todo.isCompleted && action.payload.hidden) {
                return {
                    ...todo,
                    display: true
                }
            }else if(todo.display && !action.payload.hidden){
                return {
                    ...todo,
                    display: false
                }
            }
            return todo;
        })
    } else if (action.type === "pop-up") {
        return state.map((todo) => {
            if (todo.id === action.payload.popId) {
                return {
                    ...todo,
                    popUp: !todo.popUp
                }
            }
            return todo;
        })
    }

    return state;

}


// Main component


export default function Main() {

    const [hidden,setHidden] = useState(false);

    let storedHidden = JSON.parse(localStorage.getItem("hidden"));
    // localStorage.setItem("hidden", JSON.stringify(hidden));

    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    
    if(!storedTodos){
        storedTodos = [];
    }

    const [todos,dispatch] = useReducer(reducer,storedTodos);

    // [
    //     {
    //         id: Math.random(),
    //         text: "1",
    //         isCompleted: false,
    //         display: false,
    //         popUp: false
    //     },
    //     {
    //         id: Math.random(),
    //         text: "2",
    //         isCompleted: false,
    //         display: false,
    //         popUp: false
    //     },
    //     {
    //         id: Math.random(),
    //         text: "3",
    //         isCompleted: false,
    //         display: false,
    //         popUp: false
    //     }
    // ]



    localStorage.setItem("todos", JSON.stringify(todos));

    // console.log(todos);


    return (
        <>

            {/* Pop-up background component */}
            {/* 
            <PopUpOpacity

                todos={todos}

                // onPopUp={(todo) => {
                //     dispatch({
                //         type: "pop-up",
                //         payload: {
                //             popId: todo.id
                //         }
                //     })
                // }}

                onDelete={(todo) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: todo.id
                        }
                    });
                }}
            /> */}



            <div className="main_div">
                <div className="main">

                    <HideCompleted
                        storedHidden={storedHidden}
                        setHidden={setHidden}
                        onHideCompleted={(hidden) => {
                            dispatch({
                                type: "hide-completed",
                                payload: {
                                    hidden: hidden
                                }
                            });
                        }}
                    />
 
                    <Form
                        onAdd={(text) => {
                            dispatch({
                                type: 'add',
                                payload: {
                                    text: text
                                }
                            });
                        }}
                    />

                    <TasksComponent

                        // todos={todos}
                        storedTodos={storedTodos}
                        storedHidden={storedHidden}

                        onPopUp={(todo) => {
                            dispatch({
                                type: "pop-up",
                                payload: {
                                    popId: todo.id
                                }
                            })
                        }}

                        onChange={(newTodo) => {
                            dispatch({
                                type: "update",
                                payload: {
                                    updatedTodo: newTodo
                                }
                            });
                        }}

                        onDelete={(todo) => {
                            dispatch({
                                type: "delete",
                                payload: {
                                    id: todo.id
                                }
                            });
                        }}

                        onHideCompleted={(hidden) => {
                            dispatch({
                                type: "hide-completed",
                                payload: {
                                    hidden: hidden
                                }
                            });
                        }}
                    />

                </div>
            </div>
        </>
    )
}