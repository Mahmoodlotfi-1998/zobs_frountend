import React from "react";
import {Link} from "react-router-dom";
import Down from "../../images/down-arrow.svg";

export function SearchCategory({ data }) {
    return data.map((item) => (

        <div className="row child_category_search">
            <Link to={{
                pathname: "/webapp/add_service/" + item.id,
                params:item.price
            }}>
                <p className="child_category_title">{item.title}</p>
            </Link>
        </div>

    ));
}
