import React, {Fragment} from 'react';
import { Loading } from "./loading";
import {productService} from "./ProductSerivces";
import { ChildCategory } from "../components/categorys";
import Back from '../images/back.svg'

export class Category extends React.Component {
    state = { data: undefined };

    async componentDidMount() {
        let id = this.props.match.params.id;
        var userId = localStorage.getItem('user_id');
        // alert(userId)

        if (userId == null || userId == 0 ){
            alert('کاربر گرامی برای استفاده از این صفحه بایست ابتدا وارد شوید.')
            window.open('/webapp/login',"_self")
        }
        const { data } = await productService.getCategory(id,userId);

        this.setState({ data });

    }

    render() {
        const data = this.state.data;
        if (!data) {
            return <Loading />
        }

        if (data.list.length ===0){
            return <Fragment>
                <div className="app_header" >
                    <div className="back_svg" onClick={back_history}>
                        <img width="100%" src={Back}/>
                    </div>
                    <div className="back_title">
                        زیر دسته ها
                    </div>
                </div>
                <div className="no_res">اطلاعاتی جهت نمایش وجود ندارد</div>
            </Fragment>
        }

        return <Fragment>
            <div className="app_header" >
                <div className="back_svg" onClick={back_history}>
                    <img width="100%" src={Back}/>
                </div>
                <div className="back_title">
                    زیر دسته ها
                </div>
            </div>
            <div className="categorys">
                <ChildCategory data={data.list}/>
            </div>

        </Fragment>
    }

}
function back_history(){
    window.history.back();
}