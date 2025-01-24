import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../api/TMDB/fetchTrailer";

function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    };

    getReviews();
  }, [movieId]);

  return (
    <div className="movieReviews-container">
        <h2>Reviews</h2>
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