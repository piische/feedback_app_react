import React from 'react'
import Proptypes from 'prop-types'

function FeedbackStats({ feedback }) {
// calculagte ratings average ,0 is the default for the accumulator

let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
}, 0) / feedback.length

average = average.toFixed(1)

console.log(average)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: Proptypes.array.isRequired
}

export default FeedbackStats