import { useNavigate } from "react-router-dom";
import "../css/selectReview.css"

export function NewReviewSelection(){

    const navigate = useNavigate();

    return<>
    <div id="selectreview-container">
        <h1 id="selectReview-title">What's your next review?</h1>
    </div>
    <div id="select-buttons-container">
        <button className="selectbtn" onClick={() => navigate("/selectreview/showreview")}>Show Review</button>
        <button className="selectbtn" >Film Review</button>
        <button className="selectbtn" >Product Review</button>
    </div>
    </>
}