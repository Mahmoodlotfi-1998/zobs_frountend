import React from 'react';
import {Link} from "react-router-dom";
import Back from "../../images/note.svg";

export function  ServicesList ({ data }) {

    if (data.length > 0){
        return (<div>{data.map((item) => (

            <div className="row service_list">
                <div className="service_list2">
                    <p className="child_category_title">{item.cat_name}</p>
                    <p className="child_category_title">{item.day} {item.date}</p>
                    <p className="child_category_title" style={{color:'#283593',direction:"rtl"}}>{item.price} تومان</p>
                    <div style={{float:"right",width:"100%"}}>
                        <p style={{float:"right",width:"50%",textAlign:"right"}} className="col-5">
                            <div style={{width:10,height:10,borderRadius:'50%',background:'#283593',float:"right",marginTop:7}}></div>

                            <div style={{marginRight:20}}>
                                {item.status_str}
                            </div>

                        </p>
                        <Link to={{
                            pathname: "/webapp/service/" + item.id,
                            params: { day:item.day,date:item.date } // your data array of objects
                        }}>
                            <p className="col-6" style={{float:"right",width:"50%",direction:"rtl",textAlign:"left",color:"red"}}>
                                مشاهده جزئیات >
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
        ))}
            <div style={{height:60}}>

            </div>
        </div>);
    }else {
        return <div>
            <div style={{height:70,width:'100%',float:"right"}}>

            </div>

            <div className="text-center col-4" style={{marginTop:'20%',float:"right"}}>
            </div>
            <div className="text-center col-4" style={{marginTop:'20%',float:"right"}}>
                <img width="100%" style={{marginLeft:'15%'}} src={Back} />
                <div style={{marginTop:'15%'}}>
                    سرویسی وجود ندارد
                </div>

            </div>
        </div>
    }







}
