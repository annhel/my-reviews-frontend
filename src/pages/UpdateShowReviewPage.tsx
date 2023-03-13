import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteShowReview, getAllShowReviews, getShowReviewById, putShowReview } from "../api/ShowReviewRequests";
import { UpdateShowReviewForm } from "../components/UpdateShowForm";
import { ShowReview } from "../types/ShowTypes";
import { HomePageProps } from "./NewShowReview";
import "../css/updateReview.css"
import { Navbar } from "../navbar/Navbar";


export function UpdateShowReviewPage(props: HomePageProps){

    const params = Number(useParams().id); //Review ID

    const navigate = useNavigate();

    const [showReview, setShowReview] = useState<ShowReview>({id:0, name:"", rating:0, ratingDesc:"", imgLink:"", lastUpdate:""});
    const [updatedForm, setUpdatedForm] = useState<ShowReview>({id:0, name:"", rating:0, ratingDesc:"", imgLink:"", lastUpdate:""});
    const [renderUpdateForm, setRenderUpdateForm] = useState<boolean>(false);
    
    useEffect(()=>{
        (async ()=>{
            const retrievedReview = await getShowReviewById(params);
            setShowReview(retrievedReview);
            setUpdatedForm(retrievedReview);
        })();
    }, [])

    async function handleUpdateReview(){
        await putShowReview({
            id: updatedForm.id,
            name: updatedForm.name,
            ratingDesc: updatedForm.ratingDesc,
            rating: updatedForm.rating,
            imgLink: updatedForm.imgLink,
            lastUpdate: new Date().toLocaleDateString()
        })
        const reviews = await getAllShowReviews();
        props.setShowReviews(reviews);
        setRenderUpdateForm(false);
        navigate("/")
    }

    async function handleDelete(){
        await deleteShowReview(params)
        setRenderUpdateForm(false);
        navigate("/")
    }
    
    function handleUpdate(){
        setRenderUpdateForm(true);
    }

    return<>
    <div id="update-header-container">
        <h1 id="updateReview-title">Review Details</h1>
    </div>

    <div id="review-details-container">
        <div id="review-img-div">
            <img id="review-img" src={showReview.imgLink} alt={showReview.name}></img>
        </div>
        <div id="review-details-div">
            <div id="details-name-rating">
                <p>{showReview.name}</p>
                <p id="details-rating">{showReview.rating}</p>
            </div>
            <div id="review-desc-div">
                <p>{showReview.ratingDesc}</p>
            </div>
            <div id="button-container">
                <button id="update-btn" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    </div>
    
    {renderUpdateForm && (
    <div id="update-form-container">
        <h2>Update Review</h2>
        <UpdateShowReviewForm updatedForm={updatedForm} setUpdatedForm={setUpdatedForm}/>
        <div id="update-del-btns">
            <button id="update-btn" onClick={handleUpdateReview}>Update Review</button>
            <button id="del-btn" onClick={handleDelete}>Del</button>
        </div>
    </div>
    )}

    </>
}