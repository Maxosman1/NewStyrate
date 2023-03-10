import React, { useState } from "react";

const ReviewList = ({ reviews }) => {
  const [selectedType, setSelectedType] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredReviews =
    selectedType === "all"
      ? reviews
      : reviews.filter((review) => review.productType === selectedType);

  return (
    <div className="review-list">
      <div className="filter-container">
        <label htmlFor="product-type">Product Type:</label>
        <select
          id="product-type"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fashion">Fashion</option>
          <option value="tech">Tech</option>
          <option value="other">Other</option>
        </select>
      </div>
      {filteredReviews.map((review) => (
        <div className="review-preview" key={review.username}>
          <h3>Username: {review.username}</h3>
          <p>Text Review: {review.textReview}</p>
          <p>Product Type: {review.productType}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
