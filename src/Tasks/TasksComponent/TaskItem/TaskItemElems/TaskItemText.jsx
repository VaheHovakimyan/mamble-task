


export default function TaskItemText({todo}) {
    return (
        <>
            <div className='task_text'>
                <p
                    className='task_text_paragraph'
                    style={{ color: !todo.isCompleted ? '#777777' : '#ACACAC' }}
                >{todo.text}</p>
            </div>
        </>
    )
}