import React,{Fragment} from 'react';
import Back from "../images/back.svg";
import User from "../images/dental.svg";
import DashboardIcon from "../images/user (5).svg";
import AboutUs from "../images/clipboard.svg";
import Law from "../images/policy.svg";
import Support from "../images/support2.svg";
import {Link} from "react-router-dom";
import {LottieAnimation} from "../components/lottie";
import Lottie1 from "../animation/circle.json";

export class  Dashboard extends React.Component {

    render() {
        return <Fragment>
            <div className="app_header" >
                <div className="back_svg" onClick={back_history}>
                    <img width="100%" src={Back}/>
                </div>
                <div className="back_title">
                    صفحه کاربری
                </div>
            </div>

            <div className="login_image" style={{marginTop:'20%'}}>
                <LottieAnimation lotti={Lottie1} height={130} width={130}>

                </LottieAnimation>
                <img style={{marginTop:"-40%",width:"16%"}} src={User}/>


                <div style={{marginTop:'10%',width:'100%'}}>
                    <Link to="/webapp/userinfo" >
                        <div className="row dashboard_item">
                            <div className="col-1">
                            </div>
                            <div className="col-9 text-end">
                                حساب کاربری شما
                            </div>
                            <div className="col-2">
                                <img src={DashboardIcon} width="50%" />
                            </div>
                        </div>
                    </Link>
                    <a href="https://zobs.ir/zoobs/pages/about-us">
                        <div className="row dashboard_item">
                            <div className="col-1">
                            </div>
                            <div className="col-9 text-end">
                                درباره ما
                            </div>
                            <div className="col-2">
                                <img src={AboutUs} width="50%" />
                            </div>
                        </div>
                    </a>
                    <a href="https://zobs.ir/zoobs/pages/policy">
                        <div className="row dashboard_item">
                            <div className="col-1">
                            </div>
                            <div className="col-9 text-end">
                                شرایط و قوانین
                            </div>
                            <div className="col-2">
                                <img src={Law} width="50%" />
                            </div>
                        </div>
                    </a>
                    <a href="tel:09379109962">
                        <div className="row dashboard_item">
                            <div className="col-1">
                            </div>
                            <div className="col-9 text-end">
                                تماس با پشتیبانی
                            </div>
                            <div className="col-2">
                                <img src={Support} width="50%" />
                            </div>
                        </div>
                    </a>

                </div>

            </div>
        </Fragment>

    }
}
function back_history(){
    window.history.back();
}