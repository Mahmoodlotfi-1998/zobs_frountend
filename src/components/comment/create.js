import React,{useState} from 'react';

export function CreateComment(props){

    const [state,setSatate]=useState({comment:{author:'' , text:''} , errors:{author:[],text:[]} });

    const submitHandler = event => {

        event.preventDefault();
        if (formDataIsValid()){

            props.onComment(state.comment);
            setSatate({comment:{},errors:{}})
        }
    }

    const formDataIsValid= () =>{
        const errors= {};
        if (!state.comment.author){
            errors.author='name is required';
        }

        if (!state.comment.text){
            errors.text='text is required';
        }

        setSatate({...state,errors});
        return !(errors.author || errors.text);

    }

    const changeHandler = event => {
        const formData = {[event.target.name]: event.target.value };
        // console.log(formData)
        setSatate({...state,comment: {...state.comment, ...formData}})
    }

    return <form onSubmit={submitHandler}>
        <div className="mb-3">
            <label>Name</label>
            <input type="text" value={state.comment.author || ''} onChange={changeHandler} name="author" className="form-control" />
            <div id="emailHelp" className="form-text text-danger">{state.errors.author || []}</div>
        </div>
        <div className="mb-3">
            <label>reviwe</label>
            <textarea value={state.comment.text || ''} className="form-control" onChange={changeHandler} rows="5" name="text"> </textarea>
            <div id="emailHelp" className="form-text text-danger">{state.errors.text}</div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
}