import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllShowReviews, postShowReview } from "../api/ShowReviewRequests";
import { NewShowReviewForm } from "../components/NewShowreviewForm";
import { ShowReview, ShowReviewForm } from "../types/ShowTypes";
import "../css/newReview.css"

export type HomePageProps = {
    setShowReviews: React.Dispatch<React.SetStateAction<ShowReview[]>>
}

export function NewShowReview(props: HomePageProps){

    const[showReviewForm, setShowReviewForm] = useState<ShowReviewForm>({name:"",rating:0, ratingDesc:"", imgLink:"", lastUpdate:""});

    const navigate = useNavigate();

    async function submitReview(){
        const showReview = await postShowReview({
            name: showReviewForm.name,
            ratingDesc: showReviewForm.ratingDesc,
            rating: showReviewForm.rating,
            imgLink: showReviewForm.imgLink,
            lastUpdate: new Date().toLocaleDateString()
        })
        const reviews = await getAllShowReviews();
        props.setShowReviews(reviews);
        navigate("/")
    }

    return<>
    <div id="newreview-container">
        <h1 id="newReview-title">iRate: A Show!</h1>
    </div>
    <div id="newReviewForm-container">
        <NewShowReviewForm showReviewForm={showReviewForm} setShowReviewForm={setShowReviewForm} setShowReviews={props.setShowReviews}/>
        <div id="submitbtndiv">
        <button id="submitReviewbtn" onClick={submitReview}>Submit Review</button>
        </div>
    </div>
</>
}