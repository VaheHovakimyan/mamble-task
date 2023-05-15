import './HideCompleted.scss';
import './HideCompletedMedia.scss';

// Hide completed component

export default function HideCompleted({ onHideCompleted,setHidden,storedHidden }) {
    return (
        <div className='hide_completed_div'>
            <div className='hide_completed'>
                <div className='checkbox_text_div'>
                    <input
                        type="checkbox"
                        className='hide_completed_checkbox'
                        checked={storedHidden}
                        onChange={(evt) => {
                            localStorage.setItem("hidden",JSON.stringify(evt.target.checked));
                            onHideCompleted(evt.target.checked);
                        }}
                    />
                    <span className='hide_completed_text'>Hide completed</span>
                </div>
            </div>
        </div>
    )
}