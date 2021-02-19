import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
const Cards = () => {
  return (
    <div className="cards">
      <h1> check out these EPIC destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Island of balls in a Private cruise"
              label="Luxary"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Sat sail iin the atlantic ocean visiting uncharted water"
              label="Mystry"
              path="/services"
            />

            <CardItem
              src="images/img-4.jpg"
              text="Experiance Football on top of the himalyan mountains"
              label="Adventure"
              path="/Products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided Camel tour"
              label="Adrenline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
