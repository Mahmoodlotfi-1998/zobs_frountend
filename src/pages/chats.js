import React,{Fragment} from 'react';
import {productService} from "./ProductSerivces";
import {Loading} from "./loading";
import Back from "../images/back.svg";
import {ChatItem,CreateChat} from "../components/chats";

export class  Chats extends React.Component {
    state = {data: undefined};

    async componentDidMount() {
        var userId = localStorage.getItem('user_id');

        if (userId == null || userId == 0 ){
            alert('کاربر گرامی برای استفاده از این صفحه بایست ابتدا وارد شوید.')
            window.open('/webapp/login',"_self")
        }
        const {data} = await productService.getChat()

        this.setState({data})

    }



    async submitComment(comment) {
        // console.log(comment.desc);
        const response = await productService.addChat(comment.description);
        comment.sender=1;
        comment.time_insert=response.data.date;

        if(response.data.status === 'ok') {

            // const {data} = await productService.getComment(this.state.data.id);
            // this.setState({data: {...this.state.data , comments: data }})

            // alert(JSON.stringify(comment));
            // this.setState({data: {...this.state.data , comments: {...this.state.data.comments ,{comment.author} }   }})

            // var joined= this.state.data.comments.concat({author:comment.author,text:comment.text});
            this.setState({data: [...this.state.data , comment ]})
            document.getElementById('send_btn').removeAttribute("disabled");

            //
            // console.log(this.state.data)

        }else{
            alert('خطایی رخ داد')
        }
    }

    render() {
        const data = this.state.data;
        if (!data) {
            return <Loading/>
        }
        if (data.length === undefined) {
            return <Fragment>
                <div className="app_header">
                    <div className="back_svg" onClick={back_history}>
                        <img width="100%" src={Back}/>
                    </div>
                    <div className="back_title">
                        پشتیبانی
                    </div>
                </div>
                <div className="no_res">اطلاعاتی جهت نمایش وجود ندارد</div>
            </Fragment>
        } else {
            return <Fragment >
                <div style={{width:'100%',float:"right"}}>
                <div className="app_header" >
                    <div className="back_svg" onClick={back_history}>
                        <img width="100%" src={Back}/>
                    </div>
                    <div className="back_title">
                        پشتیبانی
                    </div>
                </div>

                <div className="chat_page" id="chat_page" ref={(el) => { this.messagesEnd = el; }}>

                    <ChatItem data={data} />

                </div>

                <div>
                    <CreateChat onComment={this.submitComment.bind(this)} />
                </div>
                </div>
            </Fragment>

        }

    }

}
function back_history(){
    window.history.back();
}