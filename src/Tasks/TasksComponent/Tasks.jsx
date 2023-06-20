import PopUpOpacity from '../../PopUpComponent/PopUpOpacity/PopUpOpacity';
import TaskItem from './TaskItem/TaskItem';
import './Tasks.scss';

// Tasks component

export default function Tasks({ todos, storedTodos, onChange, onDelete, onPopUp, onHideCompleted, hidden, storedHidden }) {

    // console.log(todos);

    return (
        <div className='tasks_div'>
            {
                storedTodos.map((todo) => {

                    let display = todo.display;

                    // console.log("todosMapTODO", todo);

                    return (
                        <>
                            <TaskItem
                                key={todo.id}
                                display={display}
                                onPopUp={onPopUp}
                                todo={todo}
                                onChange={onChange}
                                onDelete={onDelete}
                                onHideCompleted={onHideCompleted}
                                // hidden={hidden}
                                storedHidden={storedHidden}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}