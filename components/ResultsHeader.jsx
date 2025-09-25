import React from 'react'

export default function ResultsHeader() {
  return (
    <div className="results-header">
      <span className="results-count">Found 376 results in 54 seconds</span>
      <div className="results-sort">
        <select>
          <option>Sort by Rating: Low to High</option>
          <option>Sort by Rating: High to Low</option>
          <option>Sort by Price: Low to High</option>
          <option>Sort by Price: High to Low</option>
        </select>
        <select>
          <option>Results 1 - 5</option>
          <option>Results 6 - 10</option>
        </select>
      </div>
    </div>
  )
}
