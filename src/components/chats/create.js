import React,{useState} from 'react';
import SendBtn from "../../images/send-button.svg";

export function CreateChat(props){

    const [state,setSatate]=useState({comment:undefined});

    const submitHandler = event => {
        document.getElementById('description').value='';
        event.preventDefault();
        if (formDataIsValid()){
            document.getElementById('send_btn').setAttribute("disabled",true);
            props.onComment(state.comment);
            setSatate({comment:undefined})
        }
    }

    const formDataIsValid= () =>{
        // const errors= {};
        // if (!state.comment.author){
        //     errors.author='name is required';
        // }
        //
        // if (!state.comment.text){
        //     errors.text='text is required';
        // }

        // setSatate({...state,errors});
        // return !(errors.author || errors.text);
        return true
    }

    const changeHandler = event => {
        const formData = {description: event.target.value };
        // console.log(formData)
        setSatate({...state,comment: {...state.comment, ...formData}})

        // console.log(state)
    }

    return <form onSubmit={submitHandler} className="create_chat_body row">
        <div className="col-10">
            <input type="text" name="texts" id="description" onChange={changeHandler} className="form-control" style={{borderRadius:30,direction:"rtl",color:"black"}} />
            {/*<div id="emailHelp" className="form-text text-danger">{state.errors.author || []}</div>*/}
        </div>
        <div className="col-2">
            <button type="submit" id="send_btn" className="btn btn-secondary" style={{width:"100%"}}>
                <img src={SendBtn} width="100%"/>
            </button>
        </div>




    </form>
}