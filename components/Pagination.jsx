import React from 'react'

export default function Pagination() {
  return (
    <div className="pagination">
      <button className="page-btn">01</button>
      <button className="page-btn active">02</button>
      <button className="page-btn">03</button>
      <span>...</span>
      <button className="page-btn">08</button>
    </div>
  )
}
