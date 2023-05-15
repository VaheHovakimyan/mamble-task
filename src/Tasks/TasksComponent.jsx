// import { useState } from "react";
import StartPageText from "./StartPageComponent/StartPageText";
import Tasks from "./TasksComponent/Tasks";



export default function TasksComponent({ todos, storedTodos,onChange,onDelete,onPopUp,onHideCompleted,hidden, storedHidden }) {


    return (
        <article>
            {
                storedTodos.length === 0 ?
                    <StartPageText /> :
                    <Tasks
                        // todos={todos}
                        storedTodos={storedTodos}
                        onPopUp={onPopUp}
                        onChange={onChange}
                        onDelete={onDelete}
                        onHideCompleted={onHideCompleted}
                        // hidden={hidden}
                        storedHidden={storedHidden}
                    />
            }
        </article>
    )
}