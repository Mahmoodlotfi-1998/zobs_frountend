import React from "react";
import {Link} from "react-router-dom";


export function GetSubscription ({data}){
    // function setLink(id){
    //     var userId = localStorage.getItem('user_id');
    //     var url="https://zobs.ir/zoobs/api/payment?source=1&type=subscription&action=begin&ur_id="+userId+"&s_id="+id;
    //
    //     window.open(url);
    // }

    return data.map((item) => (

        <div className="row ">
            <div className="row sub_item" onClick={()=>{
                                var userId = localStorage.getItem('user_id');
                                var url="https://zobs.ir/zoobs/api/payment?source=1&type=subscription&action=begin&ur_id="+userId+"&s_id="+item.id;
                                window.open(url);
                            }}
            >
                <div className="col-5" style={{direction:"rtl"}}>

                    <span style={{margin:10,color:"blue"}}>{item.price}</span>
                    تومان
                </div>
                <div className="col-7 text-end">
                    {item.name}
                </div>

            </div>
        </div>

    ));

}

