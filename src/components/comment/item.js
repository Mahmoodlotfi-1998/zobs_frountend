import React from 'react';

export function CommentItem(props){
    return <div className="row mt-4">
        <div className="col-2">
            <img width="100%" className="responsive-img" src={require('../../images/images.jpeg')} />
        </div>
        <div className="col-10">
            <h3 className="heading">{props.author}</h3>
            <p>{props.text}</p>

        </div>
    </div>

}