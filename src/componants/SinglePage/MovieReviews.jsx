import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../api/TMDB/fetchTrailer";
import { LuPlus } from "react-icons/lu";
import ReviewForm from "./ReviewForm";


function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    };

    getReviews();
  }, [movieId]);
  
  const handleFormSubmit = (newReview) => {
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
  };

  return (
    <div className="movieReviews-container">
        <div className="movieReviews-header">
          <h2>Reviews</h2>
          <button className="add-review-button" onClick={() => setShowForm(!showForm)}>
          <LuPlus />Add Review
          </button>
        </div>
        {showForm && (
          <ReviewForm onSubmit={handleFormSubmit} onClose={() => setShowForm(false)} />
        )}
        <div className="movieReviews">
          {reviews.length === 0 ? (
              <p className="reviews-error">No reviews available.</p>
          ) : (
              reviews.map((review) => (
              <div key={review.id} className="review">
                  <h3>{review.author}</h3>
                  <p>{stripHtmlTags(review.content)}</p>
              </div>
              ))
          )}
        </div>
    </div>
  );
}