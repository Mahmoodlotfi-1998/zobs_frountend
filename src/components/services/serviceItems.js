import React from 'react';
import {Link} from "react-router-dom";

export function  ServicesItems ({ data }) {

    return <div>{data.map((item) => (

        <div className="row service_list">
            <div className="service_list2">
                <div style={{float:"right",width:"70%",textAlign:"right",direction:"rtl"}}>
                    {item.title}
                </div>
                <div style={{float:"right",width:"30%"}} className={checkType(item.type,item.value)}>
                    {item.value}
                </div>
            </div>
        </div>
    ))}
        <div style={{height:20}}>

        </div>
    </div>;


}
export function checkType(type,value){
    if (value ==0){
        return 0
    }
    if (type == 'inc'){
        return 'green_services'
    }
    return 'red_services'
}
