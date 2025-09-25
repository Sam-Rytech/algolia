import React from 'react'
import '@/app/globals.css'

export default function HeroSearch() {
  return (
    <section className="hero">
      <h1 className="hero-title">Stop looking for a restaurant - find it.</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Restaurants by Name, Cuisine, Location"
        />
        <button className="btn search">Search</button>
      </div>
    </section>
  )
}
