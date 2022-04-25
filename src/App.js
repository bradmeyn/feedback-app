import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";

function App(){
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 7,
            text: 'Enjoyed the experience, would visit again'
        },

        {
            id: 2,
            rating: 10,
            text: "Might be the best meal I've ever had"
        },

        {
            id: 3,
            rating: 4,
            text: 'Too fancy for me. Serving sizes were too small'
        }
    ]);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => 
                item.id !== id
            ))
        }
        
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
        
    )
}

export default App