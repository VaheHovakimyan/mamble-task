import PopUp from "../../../../../PopUpComponent/PopUpOpacity/PopUP/PopUp";
import PopUpOpacity from "../../../../../PopUpComponent/PopUpOpacity/PopUpOpacity";



export default function TaskItemDelete({ onDelete,todo,onPopUp }) {

    // console.log("todo",todo.text);

    return (
        <>
            <div
                onClick={() => {
                    onPopUp(todo);
                }}
                className='delete_button'
            ></div>
            <PopUpOpacity
                todo={todo}
                onDelete={onDelete}
                onPopUp={onPopUp}
            />
        </>
    )
}