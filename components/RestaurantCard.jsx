import React from 'react'

export default function RestaurantCard({
  name,
  type,
  location,
  price,
  reviews,
  img,
}) {
  return (
    <div className="restaurant-card">
      <img src={img} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>
          {type} | {location}
        </p>
        <p className="price">{price}</p>
        <p className="reviews">⭐ {reviews} reviews</p>
      </div>
    </div>
  )
}
