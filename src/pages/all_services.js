import React,{Fragment} from 'react';
import {productService} from "./ProductSerivces";
import {Loading} from "./loading";
import Back from "../images/back.svg";
import {ServicesList} from "../components/services";

export class  All_services extends React.Component {
    state = {data: undefined,page:0};

    async componentDidMount() {

        const {data} = await productService.getallServices(this.state.page);

        this.setState({data});

    }

    render() {
        const data = this.state.data;
        if (!data) {
            return <Loading />
        }else {
            return <Fragment>
                <div className="app_header" >
                    <div className="back_svg" onClick={back_history}>
                        <img width="100%" src={Back}/>
                    </div>
                    <div className="back_title">
                        سفارشات
                    </div>
                </div>

                <div>
                    <div style={{height:70,width:'100%',float:"right"}}>

                    </div>
                    <ServicesList data={this.state.data.list} />

                </div>

            </Fragment>

        }

    }
}
function back_history(){
    window.history.back();
}