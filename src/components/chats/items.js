import React, {Fragment} from 'react';
import Back from "../../images/email.svg";

export function ChatItem({data}){

    if (data.length > 0){
        return <Fragment><div id="chats">
            <div style={{height:70,width:'100%',float:"right"}}>

            </div>
            {data.map((item) => (<div className="row "  style={{display:"block",width:'100%',float:"right"}}>
                {/*className="talk-bubble tri-right round "*/}
                <div className={checkSender(item.sender)}>

                    <div className={checkSender2(item.sender)} >
                        <h6 className="heading test" >{item.description}</h6>
                        <p style={{fontSize:10}}>{item.time_insert}</p>
                    </div>
                </div>
            </div>))}
        </div>
            <div style={{height:100,width:'100%',float:"right"}}>

            </div>
        </Fragment>;
    }else {
        return <div>
            <div style={{height:70,width:'100%',float:"right"}}>

            </div>

            <div className="text-center col-4" style={{marginTop:'20%',float:"right"}}>
            </div>
            <div className="text-center col-4" style={{marginTop:'20%',float:"right"}}>
                <img width="100%" src={Back} />
                <div style={{marginTop:'15%'}}>
                    پیامی وجود ندارد
                </div>

            </div>
        </div>
    }

}

export function checkSender(sender){
    if (sender){
        return 'talk-bubble tri-right round right-in'
    }
    return 'talk-bubble tri-right round left-in'
}
export function checkSender2(sender){
    if (sender){
        return 'talktext text-end'
    }
    return 'talktext'
}
