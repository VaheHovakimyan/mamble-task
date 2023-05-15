



export default function TaskItemCheckbox({todo, onChange, onHideCompleted, hidden, storedHidden}){
    return(
        <>
            <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    className='task_completed_checkbox'
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked
                        });
                        onHideCompleted(storedHidden);
                    }}
                />
        </>
    )
}