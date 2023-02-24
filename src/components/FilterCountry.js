import React from 'react'

const FilterCountry = ({ filterCountries, searchCountry, search }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  return (
    <div className='container filter-component' id='filter'>
      <div className='flex space-between'>
        <div className='filter-bar'>
          <i className='fas fa-search'></i>
          <input
            type='text'
            className='search-country-input'
            placeholder='Search for a country...'
            title='Country or capital name'
            aria-label='Search country'
            aria-labelledby='filter'
            value={search}
            onChange={searchCountry}
          />
        </div>

        <select
          className='filter-region-select'
          onChange={filterCountries}
          title='Region'
          aria-labelledby='filter'
          aria-label='Filter countries by region'
        >
          <option value='DEFAULT'>Flter by Region</option>
          {regions.map(region => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterCountry