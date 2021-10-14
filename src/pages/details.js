import React, {Fragment} from 'react';
import {useParams} from "react-router-dom"
import {productService} from "./ProductSerivces";
import {CommentList, CreateComment} from "../components/comment";
import {cartStore , addToCard} from "../api";

export class Detail extends React.Component {
    state = { data: undefined };

    async componentDidMount() {
        let id = this.props.match.params.id;
        const { data } = await productService.getProductById(id);
        this.setState({ data });

        this.unsubscribe= cartStore.subscribe(() => {
            console.log(cartStore.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    async submitComment(comment) {
        const response = await productService.addComment(this.state.data.id, comment);
        if(response.status === 200) {

            // const {data} = await productService.getComment(this.state.data.id);
            // this.setState({data: {...this.state.data , comments: data }})

            // alert(JSON.stringify(comment));
            // this.setState({data: {...this.state.data , comments: {...this.state.data.comments ,{comment.author} }   }})

            var joined= this.state.data.comments.concat({author:comment.author,text:comment.text});
            this.setState({data: {...this.state.data , comments:joined   }})

        }
    }

    addToCartHandle(){
        cartStore.dispatch(addToCard(this.state.data));
    }

    render() {
        const data = this.state.data;
        if (!data) {
            return <div>Loading...</div>;
        }
        return (
            <Fragment>
                <div className="row">
                    <div className="col-5">
                        <img src={data.pic} width="100%" />
                    </div>
                    <div className="col-7">
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        <strong style={styles.price}>{data.price}</strong>
                        <br/>
                        <button onClick={this.addToCartHandle.bind(this)} className="mt-5 btn btn-primary btn-lg">افزودن به سبد خرید</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 mx-auto">
                        <CommentList comments={data.comments || []} />
                        <hr className="my-5" />
                        <CreateComment onComment={this.submitComment.bind(this)} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const styles = {
    price: {
        color: "green",
        fontSize: 24,
    },
};