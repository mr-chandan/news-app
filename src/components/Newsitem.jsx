import React from 'react'

export default function Newsitem(props) {

    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.url}className="card-img-top" alt=".."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.auth}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}
