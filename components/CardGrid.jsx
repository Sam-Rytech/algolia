import React from 'react'
import RestaurantCard from './RestaurantCard'
import './styles.css'

export default function CardGrid() {
  const mockData = [
    {
      name: 'Anchor & James',
      type: 'American',
      location: 'Downtown Union Street',
      price: '$30 and under',
      reviews: '1897',
      img: 'https://via.placeholder.com/300x200',
    },
    {
      name: 'Anchor & James',
      type: 'American',
      location: 'Downtown Union Street',
      price: '$51 and over',
      reviews: '1897',
      img: 'https://via.placeholder.com/300x200',
    },
  ]

  return (
    <div className="card-grid">
      {mockData.map((item, idx) => (
        <RestaurantCard key={idx} {...item} />
      ))}
    </div>
  )
}
