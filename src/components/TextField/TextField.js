import React from 'react'

const TextField = (props) => {
    return (
        <>
            <label htmlFor={props.idfor} className="form-label">{props.label}</label>
            {props.type !== "textarea" ?
                <input type={props.type} className="form-control shadow-none border border-secondary-subtle" id={props.idfor} placeholder={props.hint} />
                : <textarea class="form-control" id={props.idfor} rows="3" placeholder={props.hint}></textarea>}
        </>
    )
}

export default TextField