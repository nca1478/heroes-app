import React from 'react'
import queryString from 'query-string'
import useForm from '../../hooks/useForm'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useLocation } from 'react-router-dom'

export const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const [{ search }, handleInputChange] = useForm({
    search: q
  })
  const heroesFiltered = heroes

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${search}`)
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row animate__animated animate__fadeIn">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <div className="form-group">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Find your hero"
                autoComplete="off"
                value={search}
                onChange={handleInputChange}
                // ref={inputRef}
              />
              <button
                type="submit"
                className="btn btn-block btn-outline-primary mt-2"
              >
                Search...
              </button>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <div key={hero.id} className="mb-2">
              <HeroCard key={hero.id} {...hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
