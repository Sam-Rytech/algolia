import React from 'react'

export default function FilterSidebar() {
  return (
    <div className="filters">
      <h3>Filter</h3>
      <div className="filter-section">
        <h4>Price, $</h4>
        <label>
          <input type="checkbox" /> Cheap (20)
        </label>
        <label>
          <input type="checkbox" /> Affordable (20)
        </label>
        <label>
          <input type="checkbox" /> Expensive (50)
        </label>
        <label>
          <input type="checkbox" /> Every expensive (5)
        </label>
      </div>

      <div className="filter-section">
        <h4>Cuisine/Food Type</h4>
        <label>
          <input type="checkbox" /> American (200)
        </label>
        <label>
          <input type="checkbox" /> Italian (20)
        </label>
        <label>
          <input type="checkbox" /> French (50)
        </label>
        <label>
          <input type="checkbox" /> Japanese (5)
        </label>
      </div>

      <div className="filter-section">
        <h4>Ratings</h4>
        <label>
          <input type="checkbox" /> ★★★★★
        </label>
        <label>
          <input type="checkbox" /> ★★★★☆
        </label>
        <label>
          <input type="checkbox" /> ★★★☆☆
        </label>
      </div>
    </div>
  )
}
