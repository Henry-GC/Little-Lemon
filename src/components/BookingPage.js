import { useEffect, useReducer, useState } from "react"
import BookingForm from "./BookingForm"

const BookingPage = (props) => {

    const initializeTimes = () => {
        const today = new Date();
        const date = today.toISOString().split('T')[0];
        return(
                ["17:00","18:00","19:00","20:00","21:00","22:00"]
            )}
    const updateTimes = (state,action) =>{
        return ["17:00","18:00","19:00","20:00","21:00","22:00"]
    }
    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes())

    return(
        <section className="reserve-container">
            <div className="reserve">
                <h1>RESERVA UNA MESA</h1>
                <BookingForm availableTimes={availableTimes} updateAvaibleTimes={updateTimes}>
                    {props.children}
                </BookingForm>
            </div>
        </section>
    )
}
export default BookingPage