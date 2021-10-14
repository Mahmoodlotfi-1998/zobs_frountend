import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Detail, HomePage , CartPage,Category,AddService,Add_service_successfull,All_services,Services,Chats,LoginPage,Location,Dashboard,UserInfo,Register,Edit,Subscription,DesktopDevice } from "./pages";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import {Footer} from "./pages/footer";

function App() {
    // localStorage.setItem('user_id','0')
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return  (
            <BrowserRouter>
                    <Route exact path="/webapp" component={HomePage} />
                    <Route path="/webapp/category/:id" component={Category} />
                    <Route path="/webapp/add_service/:id" component={AddService} />
                    <Route path="/webapp/add_service_success" component={Add_service_successfull} />
                    <Route path="/webapp/all_services" component={All_services} />
                    <Route path="/webapp/service/:id" component={Services} />
                    <Route path="/webapp/chat" component={Chats} />
                    <Route path="/webapp/location" component={Location} />
                    <Route path="/webapp/dashboard" component={Dashboard} />
                    <Route path="/webapp/userinfo" component={UserInfo} />
                    <Route path="/webapp/register" component={Register} />
                    <Route path="/webapp/edit" component={Edit} />
                    <Route path="/webapp/subscription" component={Subscription} />
                    <Route path="/webapp/login" component={LoginPage} />
                    <Footer />

            </BrowserRouter>
        )
}else {
        return (
            <BrowserRouter>
            <Route component={DesktopDevice} />
            </BrowserRouter>
        )
}


}
export default App;


//npm run build