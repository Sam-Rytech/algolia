import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSearch from '@/components/HeroSearch'
import FilterSidebar from '@/components/FilterSidebar'
import ResultsHeader from '@/components/ResultsHeader'
import CardGrid from '@/components/CardGrid'
import Pagination from '@/components/Pagination'
import Footer from '@/components/Footer'
import './globals.css'

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <HeroSearch />

      <div className="results-page">
        <aside className="filter-sidebar">
          <FilterSidebar />
        </aside>

        <main className="results-main">
          <ResultsHeader />
          <CardGrid />
          <Pagination />
        </main>
      </div>

      <Footer />
    </div>
  )
}
