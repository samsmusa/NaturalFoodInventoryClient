import React from 'react';
import ReactStars from "react-rating-stars-component";

const Rating = ({value}) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <ReactStars
                edit={false}
                count={5}
                // onChange={ratingChanged}
                size={24}
                isHalf={true}
                value={value}
                // count={5}
    // onChange={ratingChanged}
    // size={24}
    activeColor="#ffd700"/>
    );
};

export default Rating;