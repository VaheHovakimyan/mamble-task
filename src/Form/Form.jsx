import { useState } from 'react';
import './Form.scss';
import './FormMedia.scss';

// Form component

export default function Form({ onAdd }) {

    const [text, setText] = useState("");
    const [errormsg, setErrorMsg] = useState(false);

    return (

        <div className='form_div'>

            <div className="form">
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    { ((!errormsg) && text.length !== 0) && onAdd(text); setText("") }
                }}>


                    <div className='form_flex'>
                        <div className='input_task_title_error'>


                            <p className='task_title'>Task</p>


                            <input
                                type="text"
                                value={text}
                                placeholder="Write here"
                                className="form_input"
                                onChange={(evt) => {
                                    setText(evt.target.value);
                                    setErrorMsg(evt.target.value.length >= 54);
                                }}
                                style={{ border: errormsg ? '1px solid #FF3104' : '1px solid #FFCD04' }}
                            />


                            <div className='error_text_div'>
                                <span className="error_text" style={{ visibility: errormsg ? 'visible' : 'hidden' }} >
                                    Task content can contain max 54 characters.
                                </span>
                            </div>
                        </div>


                        <div className='form_button_div'>
                            <button
                                className="form_button"
                                style={{ opacity: errormsg ? '0.5' : '1' }}
                                disabled={errormsg}
                            >Add</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}