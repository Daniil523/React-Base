import React from 'react'
import CardList from '../card-list/CardList'
import './Main.css'
import CardFilter from '../card-filter/CardFilter'
function Main(props) {
  const { changeFilter, data, filter } = props

  return (
    <div className="Main">
      <CardFilter changeFilter={changeFilter} filter={filter} />
      <CardList data={data} filter={filter} />
    </div>
  )
}
export default Main
