import { NavigationHelpersContext } from "@react-navigation/native";
import { useNavigate } from "react-router-dom";
import { ShowReview } from "../types/ShowTypes";

import "../css/navbar.css"


export function Navbar(){

    const navigate = useNavigate();

    return<>
    <div id="navbar-div">
    <button className="navbtn" onClick={() => navigate("/")}>Home</button>
    <button className="navbtn" onClick={() => navigate("/selectreview")}>New Review</button>
    <button className="navbtn">About</button>
    </div>
</>
}