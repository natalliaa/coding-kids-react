import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPeopleCarry, FaQuoteRight } from 'react-icons/fa';
import reviews from '../reviews';

const Review = () => {

    //index state to pull a review from the array
    const [index, setIndex] = useState(0);
    const { id, name, image, text } = reviews[index];

    //reset index to 0 or last one if outside of reviews array length
    const checkIndex = (index) => {
        if (index > reviews.length - 1) {
            return 0;
        }
        if (index < 0) {
            return reviews.length - 1;
        }
        return index;
    };

    //show previous review
    const showPrevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }

    //show next review
    const showNextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }

    return (
        <div>
            <div className='review'>
                <h2>Reviews</h2>
                <div className='review-img-container'>
                    <img className='avatar' src={image} alt="" />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h3 className='review-name'>{name}</h3>
                <p className='review-description'>{text}</p>
                <div className="btn-container">
                    <button className="btn-prev" onClick={showPrevReview}>
                        <FaChevronLeft />
                    </button>
                    <button className="btn-next" onClick={showNextReview}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Review;