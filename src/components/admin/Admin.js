import React from 'react'
import './Admin.css'
import CardFilter from '../card-filter/CardFilter'
import CardListAdmin from '../card-list-admin/CardListAdmin'
function Admin(props) {
  const { editingCard, deleteCard, data, addCard, filter, changeFilter } = props
  return (
    <div className="Admin">
      <CardFilter changeFilter={changeFilter} filter={filter} />
      <CardListAdmin
        editingCard={editingCard}
        deleteCard={deleteCard}
        addCard={addCard}
        data={data}
        filter={filter}
      />
    </div>
  )
}
export default Admin
