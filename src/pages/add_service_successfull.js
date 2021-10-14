import React from 'react';
import {Link} from "react-router-dom";


export function Add_service_successfull () {

    return <div className="Add_service_successfull">
        سفارش شما با موفقیت درج شد برای تکلمیل و مشاهده کامل به بخش سفارشات اپلیکیشن مراجعه کنید.
        <Link to="/webapp/all_services">
            <div className="go_to_services">
                سفارشات
            </div>
        </Link>
    </div>

}
