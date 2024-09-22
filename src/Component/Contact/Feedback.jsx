import React from 'react'
import ReactStars from "react-rating-stars-component";
import Footer from '../Home/footer';
import './Feedback.css'

const Feedback = () => {

    return (
        <>

            <div className="feedbackpage" style={{ minHeight: '20vh', paddingBottom: '10vh' }}>
               
                <div className="feedback-container">
                    <h2 className="title">We value your Opinion</h2>

                    <form className="feedback-form">
                        <div className="rating-section">
                            <ReactStars
                                count={5}
                                size={50}  // Set the star size here (50px in this example)
                                activeColor="#ffd700"
                                classNames="star-icon"
                            />
                        </div>
                        <div className="message-section">
                            <h3>Thanks, what is the reason for your rating?</h3>
                            <div className="message-input">
                                <textarea
                                    placeholder="Leave your feedback here..."
                                    rows="4"
                                    required
                                />
                            </div>
                        </div>
                        <div className="message-section">
                            <h3>Would you like to get an update from us?</h3>
                            <div className="message-input">
                                <input type="text" placeholder='If yes, please fill in your email here ...' />
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Feedback;
