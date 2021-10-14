import React from "react";
import {Link} from "react-router-dom";
import Down from '../../images/down-arrow.svg'

export function ChildCategory ({data}){

    return data.map((item) => (

        <div className="row child_category">
            <Link to={{
                pathname: "/webapp/add_service/" + item.id,
                params:item.price
            }}>
                <p className="child_category_title">{item.title}</p>
                <img src={Down} className="child_category_img" />
            </Link>
        </div>

    ));

}