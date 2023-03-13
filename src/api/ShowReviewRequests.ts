import { ShowReview, ShowReviewForm } from "../types/ShowTypes";

const url = "http://127.0.0.1:8080"

export async function getAllShowReviews():Promise<ShowReview[]>{
    const httpResponse = await fetch(`${url}/reviews`)
    const showReviews: ShowReview[] = await httpResponse.json();
    return showReviews;
}

export async function getShowReviewById(id: number): Promise<ShowReview>{
    const httpResponse = await fetch(`${url}/reviews/${id}`)
    const showReview: ShowReview = await httpResponse.json();
    return showReview;
}

export async function postShowReview(showReviewForm: ShowReviewForm): Promise<ShowReview>{
    const httpResponse = await fetch("http://127.0.0.1:8080/reviews",
    {method:"POST",
    body: JSON.stringify(showReviewForm),
    headers:{
    "Content-Type":"application/json"
    }})

    const showReview:ShowReview = await httpResponse.json();
    return showReview
}

export async function putShowReview(updateShowReview: ShowReview ):Promise<ShowReview>{
    const httpResponse = await fetch("http://127.0.0.1:8080/reviews",
    {method:"PUT",
    body: JSON.stringify(updateShowReview),
    headers:{
    "Content-Type":"application/json"
    }})

    const showReview:ShowReview = await httpResponse.json();
    return showReview
}

export async function deleteShowReview(id: number): Promise <boolean>{
    const httpResponse = await fetch(`${url}/reviews/${id}`,
    {method:"DELETE",
    body: JSON.stringify(id),
    headers:{
    "Content-Type":"application/json"
    }})

    const showReviewStatus:boolean = await httpResponse.json();
    return showReviewStatus;

}