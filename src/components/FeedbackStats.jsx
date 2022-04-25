import React from 'react'

function FeedbackStats({feedback}) {

    //calculate average rating of feedback
    let average = (feedback.reduce((acc, cur) => {return acc + cur.rating}, 0) / feedback.length).toFixed(1)

  return (
    <div className='feedback-stats'>
        <h4>{FeedbackStats.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

export default FeedbackStats