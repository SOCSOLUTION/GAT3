
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {

    var item_value = sessionStorage.getItem('token');

    var swap;
    item_value ? swap = true : swap = false;
    // if (item_value === undefined){
    //     swap = false;
    // }
    // else{
    //     swap = true;
    // }
    const user = {
        loggedIn: swap
    } 
    return user && user.loggedIn
 }


const ProtectedRoutes = () => {

    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to={"/"} />

}


export default ProtectedRoutes;