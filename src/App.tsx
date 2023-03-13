import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NewReviewSelection } from './pages/NewReviewSelection';
import { NewShowReview } from './pages/NewShowReview';
import { UpdateShowReviewPage } from './pages/UpdateShowReviewPage';
import { ShowReview } from './types/ShowTypes';


function App() {
  const[reviews, setShowReviews] = useState<ShowReview[]>([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage reviews={reviews} setShowReviews={setShowReviews}/>}/>
        <Route path='/selectreview' element={<NewReviewSelection/>}/>
        <Route path='/selectreview/showreview' element={<NewShowReview setShowReviews={setShowReviews}/>}/>
        <Route path='/updateshowreview/:id' element={<UpdateShowReviewPage setShowReviews={setShowReviews}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
