import React, { useState } from "react";
import "./styles.css";

const Form = () => {
  const [values, setValues] = useState({
    tiktokVideoId: "",
    amazonProductLink: "",
    username: "",
    textReview: "",
    productType: "beauty"
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    const { tiktokVideoId } = values;
    fetch(
      `https://www.tiktok.com/oembed?url=https://www.tiktok.com/@tiktok/video/${tiktokVideoId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form>
      <label htmlFor="tiktokVideoId">TikTok Video ID:</label>
      <input
        type="text"
        name="tiktokVideoId"
        id="tiktokVideoId"
        value={values.tiktokVideoId}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="amazonProductLink">Amazon Product Link:</label>
      <input
        type="text"
        name="amazonProductLink"
        id="amazonProductLink"
        value={values.amazonProductLink}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={values.username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="textReview">Text Review:</label>
      <input
        type="text"
        name="textReview"
        id="textReview"
        value={values.textReview}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="productType">Product Type:</label>
      <select
        name="productType"
        id="productType"
        value={values.productType}
        onChange={handleChange}
      >
        <option value="beauty">Beauty</option>
        <option value="fashion">Fashion</option>
        <option value="tech">Tech</option>
        <option value="other">Other</option>
      </select>
      <br />
      <button type="submit" onClick={handlePreview}>
        Preview
      </button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
