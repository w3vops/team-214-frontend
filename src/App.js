import React, {useEffect, useState} from 'react';
import Homepage from "./pages/homepage/homepage";
import {Switch, Route} from "react-router-dom";
import About from "./pages/about/about";
import Service from "./pages/service/service";
import Terms from "./pages/terms/terms";
import ScrollToTop from "./utils/scroll-to-top";
import Enquiry from "./pages/enquiry/enquiry";
import AdminLogin from "./components/admin-login/admin-login";
import AdminDashboard from "./pages/dashboard/dashboard";
import Error from "./pages/error/error";
import Splashscreen from "./components/splashscreen/splashscreen";

function App() {



    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    return isLoading ? <Splashscreen/> :
        <>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/about" component={About}/>
                <Route path="/service/:service_name" component={Service}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/enquiry" component={Enquiry}/>
                <Route path="/admin/login" component={AdminLogin}/>
                <Route path="/admin/dashboard" component={AdminDashboard}/>
                <Route path="/splashscreen" component={Splashscreen}/>
                <Route component={Error}/>
            </Switch>
        </>
}

export default App;
