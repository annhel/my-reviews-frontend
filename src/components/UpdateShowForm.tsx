import { ShowReview } from "../types/ShowTypes"

import "../css/updateReview.css"

export type ShowReviewDetails={
    updatedForm: ShowReview
    setUpdatedForm: React.Dispatch<React.SetStateAction<ShowReview>>
}

export function UpdateShowReviewForm(props:ShowReviewDetails){

    return<>
    
    <form id="update-form">
        <div id="showtitle-rating">
            <input id="update-form-title" type={"text"} value={props.updatedForm.name} onChange={e => props.setUpdatedForm({...props.updatedForm, name: e.target.value})}></input>
            <input id="update-form-rating" type={"number"} value={String(props.updatedForm.rating)} onChange={e => props.setUpdatedForm({...props.updatedForm, rating: Number(e.target.value)})}></input>
        </div>
        

        <textarea maxLength={10000} id="update-form-textarea" value={props.updatedForm.ratingDesc} onChange={e => props.setUpdatedForm({...props.updatedForm, ratingDesc: e.target.value})}
          onPaste={(e) => {
            console.log('Pasting...');
            const pastedText = e.clipboardData.getData('text');
            props.setUpdatedForm({...props.updatedForm, ratingDesc: pastedText});
          }}
        ></textarea>
        
        <input id="update-form-imglink" type={"text"} value={props.updatedForm.imgLink} onChange={e => props.setUpdatedForm({...props.updatedForm, imgLink: e.target.value})}></input>
    </form>
    </>
}