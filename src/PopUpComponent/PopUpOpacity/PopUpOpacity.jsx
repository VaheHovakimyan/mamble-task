import PopUp from './PopUP/PopUp';
import './PopUpOpacity.scss';

// Pop-up background component

export default function PopUpOpacity({ todo, onDelete, onPopUp }) {


    return (
        
        <>
            <PopUp
                todo={todo}
                onDelete={onDelete}
                onPopUp={onPopUp}
            />
        </>

    )
}