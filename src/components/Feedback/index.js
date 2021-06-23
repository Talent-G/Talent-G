import React, {Fragment} from 'react'
import "./styles.css";


const Feedback = (props) => {
    return (
        <>
            <div className="feedback-container">
                <span className="feedback-title">{props.title}</span>
                <div className="feedback__session-container">
                    <div className="feedback__session-title">
                        <span>{props.title}</span>
                    </div>
                    <div className="feedback__session-content">
                        {props.sesions.map((sesion)=>(
                            <span>{props.sesion.title}</span>
                            <div className="session__pros">
                                <ul>
                                    {props.sesion.pros.map((pro)=>(<li key={props.id}>{pro}</li>))}
                                </ul>
                            </div>
                            <div className="session__cons">
                                <ul>
                                    {props.sesion.cons.map((con)=>(<li key={props.id}>{con}</li>))}
                                </ul>  
                            </div>
                        ))}
 
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Feedback
