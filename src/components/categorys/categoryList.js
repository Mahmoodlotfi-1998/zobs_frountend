import React from "react";
import { MainCategory } from "./mainCategory";
import {Link} from "react-router-dom";

export function CategoryList({ products }) {

    return products.map((item) => (

            <div className="col-3" style={style.catSection}>
                <Link to={"/webapp/category/" + item.id}>
                    <MainCategory data={item} />
                </Link>
            </div>

    ));
}

const style={
    catSection:{
        boxShadow:'0px 0px 20px 2px #dddddd',
        margin:13,
        padding:'20',
        borderRadius:'50%'
    }
}