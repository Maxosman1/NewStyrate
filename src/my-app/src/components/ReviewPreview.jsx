import React from "react";

const ReviewPreview = ({
  videoId,
  productImage,
  productName,
  productType,
  textReview
}) => (
  <div className="review-preview">
    <div className="review-preview__video-container">
      <iframe
        src={`https://www.tiktok.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      />
    </div>
    <div className="review-preview__product-details">
      <img
        src={productImage}
        alt={productName}
        className="review-preview__product-image"
      />
      <div className="review-preview__product-name">{productName}</div>
      <div className="review-preview__product-type">{productType}</div>
    </div>
    <div className="review-preview__text-review">{textReview}</div>
  </div>
);

export default ReviewPreview;
