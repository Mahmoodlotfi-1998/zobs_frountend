import React, {Fragment, useState} from 'react';
import Back from "../images/back.svg";
import User from "../images/dental.svg";
import {productService} from "./ProductSerivces";
import {LottieAnimation} from "../components/lottie";
import Lottie1 from "../animation/circle.json";

export class Edit extends React.Component{

    state={register:{first_name:'' , last_name:'',fix_phone:'',address:''} , errors:{author:[],text:[]} }

    componentDidMount() {
        var userId = localStorage.getItem('user_id');

        if (userId == null || userId == 0 ){
            alert('کاربر گرامی برای استفاده از این صفحه بایست ابتدا وارد شوید.')
            window.open('/webapp/login',"_self")
        }
        const { params } = this.props.location;

        // var userId=localStorage.getItem('user_id');
        this.setState({ register:{first_name:params.first_name , last_name:params.last_name,fix_phone:params.fix_phone,address:params.address} });
    }

    submitHandler (event){
        event.preventDefault();
        // console.log(event)

        if (this.formDataIsValid()){
            document.getElementById('send_btn').setAttribute("disabled",true);
            console.log(this.state.register)
            send_request(this.state.register);
        }
    }

    formDataIsValid(){
        const errors= {};
        if (!this.state.register.first_name){
            errors.first_name='این فیلد اجباریست';
        }if (!this.state.register.last_name){
            errors.last_name='این فیلد اجباریست';
        }if (!this.state.register.address){
            errors.address='این فیلد اجباریست';
        }if (!this.state.register.fix_phone){
            errors.fix_phone='این فیلد اجباریست';
        }

        this.setState({...this.state,errors});
        return !(errors.fix_phone || errors.address ||errors.last_name ||errors.first_name );
        // return true
    }

    changeHandler ( event) {
        const formData = {[event.target.name]: event.target.value };
        // console.log(formData)
        this.setState({...this.state,register: {...this.state.register, ...formData}})

        // console.log(state)
    }

    render(){
        return <Fragment>

            <div className="login_image" style={{marginTop:'5%'}}>
                <LottieAnimation lotti={Lottie1} height={100} width={100}>

                </LottieAnimation>
                <img style={{marginTop:"-35%",width:"15%"}} src={User}/>


                <div style={{marginTop:'10%',width:'100%'}}>
                    <form onSubmit={this.submitHandler.bind(this)}>
                        <div className="row">
                            <div className="col-12">
                                مشخصات خود را وارد کنید
                            </div>
                        </div>
                        <div className="row" style={{marginTop:20}}>
                            <div className="col-12">
                                <input className="form-control text-center" value={this.state.register.first_name}  onChange={this.changeHandler.bind(this)} name="first_name" type="text"  placeholder="نام"/>
                                <div id="emailHelp" className="form-text text-danger">{this.state.errors.first_name || []}</div>

                            </div>
                            <div className="col-12" style={{marginTop:20}}>
                                <input className="form-control text-center" onChange={this.changeHandler.bind(this)} value={this.state.register.last_name} name="last_name" type="text"  placeholder="نام خانوادگی"/>
                                <div id="emailHelp" className="form-text text-danger">{this.state.errors.last_name || []}</div>

                            </div>
                            <div className="col-12" style={{marginTop:20}}>
                                <input className="form-control text-center" onChange={this.changeHandler.bind(this)} value={this.state.register.fix_phone} name="fix_phone" type="text"  placeholder="شماره تلفن ثابت"/>
                                <div id="emailHelp" className="form-text text-danger">{this.state.errors.fix_phone || []}</div>

                            </div>
                            <div className="col-12" style={{marginTop:20}}>
                                <textarea className="form-control text-center" onChange={this.changeHandler.bind(this)} value={this.state.register.address} name="address"  placeholder="آدرس مطب"/>
                                <div id="emailHelp" className="form-text text-danger">{this.state.errors.address || []}</div>

                            </div>

                            <div className="col-12" style={{marginTop:20}}>
                                <input id="send_btn" type="submit" style={{width:'100%',color:"white"}} className="btn btn-info" value="ویرایش"/>
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </Fragment>
    }


}

export async function send_request(values){
    productService.userUpdate(values).then((response) => {
        if (response.data.status === 'ok'){
            alert('عملیات با موفقیت انجام شد')
            window.open('/webapp/userinfo','_self');
        }else {
            alert('مشکلی پیش آمد.');
        }
    });

}
