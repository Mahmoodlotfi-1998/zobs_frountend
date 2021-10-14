import React from 'react';
import Support from '../images/support.svg'
import Support2 from '../images/support2.svg'
import Home from '../images/home.svg'
import Home2 from '../images/home2.svg'
import Service from '../images/service.svg'
import Service2 from '../images/service2.svg'
import User from '../images/user.svg'
import User2 from '../images/user2.svg'
import {Link} from "react-router-dom";

export class Footer extends React.Component{

    constructor(props) {
        super(props)
        this.onButtonClicked = this.onButtonClicked.bind(this)
        this.state = { currentButton: 0 }
    }

    onButtonClicked (id) {
        this.setState({ currentButton: id })

        console.log(this.state.currentButton)
    }

    // async componentDidMount() {
    //
    //     const {data} =  { data:window.location.href }
    //
    //     alert(JSON.stringify({data}))
    //
    //     this.setState({data} );
    //
    //     console.log(this.state.path)
    //
    //     alert(JSON.stringify(this.state))
    //
    // }

    render() {
        let path = window.location.href
        if (path.includes("login")){
            return '';
        }else{

            return <div  style={style.footerSection}>
                <Link to="/webapp" onClick={() => this.onButtonClicked(0)}>
                    <div className="col-3" style={style.footerElement}>
                        <img style={style.footerImg}  src={this.state.currentButton === 0 ? Home:Home2}/>

                        <p style={style.footerP}>خانه</p>
                    </div>
                </Link>

                <Link to="/webapp/chat" onClick={() => this.onButtonClicked(1)}>
                    <div className="col-3" style={style.footerElement}>
                        <img style={style.footerImg} src={this.state.currentButton === 1 ? Support2:Support} />
                        <p style={style.footerP}>پشتیبانی</p>
                    </div>
                </Link>

                <Link to="/webapp/all_services" onClick={() => this.onButtonClicked(2)}>
                    <div className="col-3" style={style.footerElement}>
                        <img style={style.footerImg} src={this.state.currentButton === 2 ? Service2:Service} />
                        <p style={style.footerP}>سفارشات</p>
                    </div>
                </Link>

                <Link to="/webapp/dashboard" onClick={() => this.onButtonClicked(3)}>

                    <div className="col-3" style={style.footerElement}>
                        <img style={style.footerImg} src={this.state.currentButton === 3 ? User2:User} />
                        <p style={style.footerP}>کاربری</p>
                    </div>
                </Link>
            </div>

        }
    }


}

const style={
    footerSection:{
        // border:'2px solid red',
        bottom:5,
        position:'fixed',
        boxShadow:'rgb(182, 182, 182, 0.53) 0px -1px 5px 1px',
        height:65,
        background:'white',
        width:'100%',
        padding:10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    footerElement:{
        // border: '2px solid blue',
        float:'right',
        height: '100%',
        textAlign:'center'
    },footerImg:{
        width: '50%',
        height:'50%',
        marginTop:'10%'
    },footerP:{
        fontSize:8,
        marginTop:'5%'
    }
}