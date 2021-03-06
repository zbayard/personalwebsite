import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form"

function Contact(){
    const [successMessage, setSuccessMessage] = useState("")
    const { register, handleSubmit, errors } = useForm()

    const serviceID = "service_ID"
    const templateID = "template_ID"
    const userID = "user_cAxvafU9d2DiVu5mdqJK4"

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
            setSuccessMessage("yay! if you see this message then it means it worked... chat soon!")
        }).catch(err => console.error(`Something went wrong ${err}`));
    }
    
    return (
        <div id="contact" className="contact">
           <div className="text-center">
               <div className="contact-head">
                    <h1>say hey</h1>
                    <p>
                        I promise I'll say it back.
                    </p>
                    <span className="success-message">{successMessage}</span>
               </div>
           </div>
           <div className="container">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="NAME"
                                    name= "name"
                                    ref={
                                        register({
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 25,
                                                message: "Please enter a name with fewer than 25 characters"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"  
                                    className="form-control"
                                    placeholder="PHONE"
                                    name="phone"
                                    ref={
                                        register({
                                            required: "Please add your phone number",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"  
                                    className="form-control"
                                    placeholder="EMAIL"
                                    name= "email"
                                    ref={
                                        register({
                                            required: "Please provide your email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid Email"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="SUBJECT"
                                    name= "subject"
                                    ref={
                                        register({
                                            required: "OOPS, you forgot to add the subject",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea 
                                    type="text" 
                                    className="form-control"
                                    placeholder="MESSAGE..."
                                    name= "description"
                                    ref={
                                        register({
                                            required: "Don't forget a message! ",
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">SEND</button>
                        </div>
                    </div>
               </form>
           </div>
        </div>
    )
};
export default Contact