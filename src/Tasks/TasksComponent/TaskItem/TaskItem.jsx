import './TaskItem.scss';
import TaskItemCheckbox from './TaskItemElems/TaskItemCheckBox';
import TaskItemDelete from './TaskItemElems/DeleteElem/TaskItemDelete';
import TaskItemText from './TaskItemElems/TaskItemText';
import './TaskItemMedia.scss';
import PopUpOpacity from '../../../PopUpComponent/PopUpOpacity/PopUpOpacity'

// TaskItem component

export default function TaskItem({ todo,display,todos,onChange,onDelete, onPopUp, onHideCompleted, hidden, storedHidden }) {


    // console.log(todo);

    return (
        <div
            className='task_div'
            style={{ display: display ? "none" : "block" }}
        >
            <div className='task'>

            
                {/* <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    className='task_completed_checkbox'
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked
                        });
                    }}
                /> */}

                <TaskItemCheckbox
                    todo={todo}
                    onChange={onChange}
                    onHideCompleted={onHideCompleted}
                    // hidden={hidden}
                    storedHidden={storedHidden}
                />


                {/* <div className='task_text'>
                    <p
                        className='task_text_paragraph'
                        style={{ color: !todo.isCompleted ? '#666666' : '#ACACAC' }}
                    >{todo.text}</p>
                </div> */}

                <TaskItemText
                    todo={todo}
                />


                {/* <div
                    onClick={() => {
                        // onDelete(todo)
                        setOpenPopUp(!openPopUp)
                    }}
                    className='delete_button'
                ></div> */}

                <TaskItemDelete
                    todo={todo}
                    onDelete={onDelete}
                    onPopUp={onPopUp}
                />

            </div>
        </div>
    )
}