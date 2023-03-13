import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllShowReviews } from "../api/ShowReviewRequests";
import { Navbar } from "../navbar/Navbar";
import { ShowReview } from "../types/ShowTypes";

import "../css/homePage.css"
import Logo from "../images/irate.png"

export type ReviewsProps = {
    setShowReviews: React.Dispatch<React.SetStateAction<ShowReview[]>>
    reviews: ShowReview[]
}

export function HomePage(props: ReviewsProps){

    // request the reviews from DB
    useEffect(()=>{
        (async ()=>{
            const retrieveReviews = await getAllShowReviews();
            props.setShowReviews(retrieveReviews);
        })();
    }, [])

    const navigate = useNavigate();

    function handleViewDetails(id: number){
        navigate("/updateshowreview/" + id)
    }


    return<>
    <div id="header-container">
        <div id="title-subtitle">
            <h1><span id="iRate">i</span>Rate</h1>
            <h2>Your voice, your rating, your <span id="iRate">i</span>Rate.</h2>
            <h2>Review anything, anywhere!</h2>
        </div>
        <div id="navdiv">
            <Navbar></Navbar>
        </div>
    </div>

    <div id="reviews-div">
    {props.reviews.map(r=> 
    <div key={r.id} id="movie-poster-container">
            <img src={Logo} alt="IRate Logo" id="movie-poster"/>
        <div id="movie-info">
            <p id="info-film-title">{r.name}</p>
            <p>iRated: {r.rating}/10</p>
            <p>Last updated: {r.lastUpdate}</p>
            <button id="movie-btn" onClick={() => handleViewDetails(r.id)}>View Details</button>
        </div> 
    </div>
     )}
    </div>
    
    </>
}