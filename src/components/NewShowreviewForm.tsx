import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllShowReviews, postShowReview } from "../api/ShowReviewRequests";
import { ShowReview, ShowReviewForm } from "../types/ShowTypes";

export type NewShowReviewProps = {
    setShowReviewForm: React.Dispatch<React.SetStateAction<ShowReviewForm>>
    showReviewForm: ShowReviewForm
    setShowReviews: React.Dispatch<React.SetStateAction<ShowReview[]>>
}

export function NewShowReviewForm(props: NewShowReviewProps){

    return<>
    <form id="newReviewForm-container">
        <div id="showtitle-rating">
            <input type={"text"} placeholder="Show Title" onChange={e => props.setShowReviewForm({...props.showReviewForm, name: e.target.value})}></input>
            <input id="ratinginput" type={"number"} placeholder="10" onChange={e => props.setShowReviewForm({...props.showReviewForm, rating: Number(e.target.value)})}></input>
        </div>
        

        <textarea id="showdesc-input" placeholder="Description" onChange={e=> props.setShowReviewForm({...props.showReviewForm, ratingDesc: e.target.value})}></textarea>
        
        <input type={"text"} placeholder="Image link" onChange={e => props.setShowReviewForm({...props.showReviewForm, imgLink: e.target.value})}></input>
    </form>
    </>
}