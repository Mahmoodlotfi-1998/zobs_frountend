import React, {Fragment} from 'react';
import { Loading } from "./loading";
import {productService} from "./ProductSerivces";
import Back from '../images/back.svg'
import filled from '../images/filled outline.svg'
import Lottie1 from "../animation/circle.json";
import {LottieAnimation} from "../components/lottie";
import User from "../images/dental.svg";

export class AddService extends React.Component {

    state = { price:undefined , data:undefined };

    async componentDidMount() {
        // const history = createHistory();
        //
        // if (history.location.params && history.location.params) {
        //     let state = { ...history.location.params };
        //     delete state.transaction;
        //     history.replace({ ...history.location, state });
        // }
        // window.location.reload(false);
        const { params } = this.props.location;

        let price = params;
        // var userId=localStorage.getItem('user_id');
        this.setState({ price });
        // alert(this.state.price)
    }

    handlePriceOffClick() {

        let code = document.getElementById('code').value;
        // const errors= {};
        // const { data } = productService.getPriceOff(code);
        productService.getPriceOff(code).then((response) => {
            if (response.data.status === 'ok'){
                let price = this.state.price;
                document.getElementById('lastprice').innerHTML= price -( price * (response.data.price_off/100) );
                alert('عملیات انجام و به سفارش شما '+response.data.price_off + ' درصد تخفیف اعمال شد.');
            }else {
                alert('کد وارد شده نا معتبر میباشد.');
            }
        });
    }

    handleAddServiceClick(){

        if (document.getElementById('checkbox_policy').checked){
            document.getElementById("policy_matn").style.display= "none";

            var address = document.getElementById('address').value;
            var code = document.getElementById('code').value;
            let id = this.props.match.params.id;

            if(address.length>0){
                productService.addService(code,address,id).then((response) => {
                    if (response.data.status === 'ok'){
                        window.open('/webapp/add_service_success','_self');
                    }else {
                        alert('کد وارد شده نا معتبر میباشد..');
                    }
                });
            }else {
                document.getElementById('address').style.border='2px solid red';
            }


        }else {
            document.getElementById("policy_matn").style.display= "block";
        }
    }



    render() {
        return <Fragment>
            <div>
                <div className="app_header" >
                    <div className="back_svg" onClick={back_history}>
                        <img width="100%" src={Back}/>
                    </div>
                    <div className="back_title">
                        جزئیات درخواست
                    </div>
                </div>
                <div className="row_add_service">
                    <div className="catSection">
                        <LottieAnimation lotti={Lottie1} height={100} width={100}>

                        </LottieAnimation>
                        <img style={{marginTop:"-35%",width:"10%"}} src={filled}/>

                    </div>
                    <div className="service_matn">
                        <p>هزینه اعلامی بدون درنظر گرفتن کد تخفیف است</p>
                    </div>

                    <div className="col-9 service_section">
                        <div className="row price_box">
                            <div className="col-6" style={{textAlign:"right"}}>
                                تومان
                            </div>
                            <div id="lastprice" className="col-5">
                                {this.state.price}
                            </div>
                        </div>
                    </div>

                    <div className="col-9 service_section">
                        <div className="row price_box" style={{padding:0}}>
                            <div className="col-3" style={{paddingLeft:0}}>
                                <button onClick={this.handlePriceOffClick.bind(this)} className="btn btn-danger">اعمال</button>
                            </div>
                            <div className="col-9" >
                                <input name="code" id="code" style={{width:"100%",border:"none",direction:"rtl",height:"100%"}} placeholder="کد تخفیف دارم"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-9 service_section">
                        <div className="row">
                            <textarea style={{width:"100%",direction:"rtl"}} name="address" id="address" placeholder="آدرس خود را وارد کنید...">

                            </textarea>
                        </div>
                    </div>

                    <div className="row" style={{margin:24}}>
                        <a className="col-10" id="checkbox_policy_matn" style={{direction:"rtl"}} href="https://zobs.ir/zoobs/pages/policy">
                            <p style={{color:"blue",float:"right",marginLeft:5}}> قوانین و مقررات </p>
                            <p style={{float:"right"}}> را قبول دارم. </p>
                            <p id="policy_matn" style={{color:"red",display:"none"}}>قوانین و مقررات را قبول کنید.</p>
                        </a>
                        <div className="col-2">
                            <input id="checkbox_policy" type="checkbox" style={{width:"100%",height:"50%",color:"red"}}/>
                        </div>
                        <div className="col-9" style={{marginLeft:"25%",marginBottom:"30%"}}>
                            <button onClick={this.handleAddServiceClick.bind(this)} className="btn btn-lg btn-info" style={{color:'white',paddingRight:40,paddingLeft:40}}>ثبت سفارش</button>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>

                </div>
            </div>



        </Fragment>
    }

}
function back_history(){
    window.history.back();
}