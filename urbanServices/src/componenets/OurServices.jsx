import React from 'react'
import acImg from '../assets/ac.webp'

export const OurServices = () => {
  return (
    <section class="services container">
    <h3>Popular Services</h3>
    <div class="card-grid">
        <div class="card">
            <img src={acImg} alt="AC Repair" />
            <p>AC Repair</p>
        </div>
        <div class="card">
            <img src={acImg} alt="Salon at Home" />
            <p>Salon at Home</p>
        </div>
        <div class="card">
            <img src={acImg} alt="Home Cleaning" />
            <p>Home Cleaning</p>
        </div>

    </div>
</section>
  )
}
