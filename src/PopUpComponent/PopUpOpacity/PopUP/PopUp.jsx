import './PopUp.scss';

// Pop-up component

export default function PopUp({ todo,onDelete, onPopUp }) {

    // console.log(todo, "todo");
    // 

    // const [fff, setfff] = useState();

    return (
        
        <div
            className="pop_up_opacity_div"
            style={{ display: todo.popUp ? "block" : "none" }}
            onClick={() => {
                onPopUp(todo);
                // alert("Barev");
            }} 
        >
            <div className="pop_up_div" >
                <div className='pop_up_elemets_flex'>
                    <div className='pop_up_elements'>
                        <div className="pop_up_title">
                            <p>Are you sure you want to delete?</p>
                        </div>
                        <div className="pop_up_answer_div_flex">
                            <div className='pop_up_answer_div'>
                                <p
                                    className="pop_up_answer_text"
                                    onClick={() => {
                                        onDelete(todo);
                                        onPopUp(todo);
                                    }}
                                >Yes</p>
                                <p
                                    className="pop_up_answer_text"
                                    onClick={() => {
                                        onPopUp();
                                    }}
                                >No</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}