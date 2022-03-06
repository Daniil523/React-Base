import CardAdmin from '../card-admin/CardAdmin'
import { useState } from 'react'
import Modal from '../modal/Modal'
import './CardListAdmin.css'
import plus from '../../images/fi_plus.svg'

function CardListAdmin(props) {
  const { editingCard, deleteCard, addCard, data, filter } = props
  const [modalActive, setModalActive] = useState(false)
  function filterCard(data, filter) {
    let arrFilter = data.filter((item) => item.filter === filter)
    return arrFilter
  }
  function ClearForm() {
    document.getElementById('form').reset()
  }
  const Cards = filterCard(data, filter).map((item) => {
    return (
      <CardAdmin
        key={item.id}
        id={item.id}
        filter={item.filter}
        brand_name={item.brand_name}
        card_description={item.card_description}
        modal_description={item.modal_description}
        spec_ofer={item.spec_ofer}
        site_name={item.site_name}
        duration={item.duration}
        email={item.email}
        phone_number={item.phone_number}
        logo_url={item.logo_url}
        deleteCard={deleteCard}
        editingCard={editingCard}
      />
    )
  })
  let dataFoAdd = {
    filter: filter,
    brand_name: '',
    card_description: '',
    modal_description: '',
    spec_ofer: '',
    site_name: '',
    duration: '',
    email: '',
    phone_number: '',
    logo_url: '',
  }

  return (
    <div className="CardList">
      {Cards}
      <div className="CardForAdd" onClick={() => setModalActive(true)}>
        <div className="Card__logo">
          <img className="Card__logo_url" src={plus} alt="" />
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        ClearForm={ClearForm}
      >
        <h1>Добавление карточки:</h1>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault()
            addCard(dataFoAdd)
            ClearForm()
            setModalActive(false)
          }}
        >
          <h4>Название бренда:</h4>
          <input
            className="forClear Form__input"
            type="text"
            onChange={(event) => {
              dataFoAdd.brand_name = event.target.value
            }}
            placeholder="Введите текст"
          />
          <h4>Описание бренда (кратко):</h4>
          <input
            className="forClear Form__input"
            type="text"
            onChange={(event) => {
              dataFoAdd.card_description = event.target.value
            }}
            placeholder="Введите текст для отображения на карточке"
          />
          <h4>Специальное предложение:</h4>
          <input
            className="forClear Form__input"
            type="text"
            onChange={(event) => {
              dataFoAdd.spec_ofer = event.target.value
            }}
            placeholder="Введите текст"
          />
          <h4>Сайт:</h4>
          <input
            className="forClear Form__input"
            type="url"
            onChange={(event) => {
              dataFoAdd.site_name = event.target.value
            }}
            placeholder="Введите URL"
          />
          <h4>Срок действия:</h4>
          <input
            className="forClear Form__input"
            type="text"
            onChange={(event) => {
              dataFoAdd.duration = event.target.value
            }}
            placeholder="Введите текст"
          />
          <h4>Как использовать:</h4>
          <input
            className="forClear Form__input"
            type="text"
            onChange={(event) => {
              dataFoAdd.modal_description = event.target.value
            }}
            placeholder="Введите текст"
          />
          <h4>Почта:</h4>
          <input
            className="forClear Form__input"
            type="email"
            onChange={(event) => {
              dataFoAdd.email = event.target.value
            }}
            placeholder="Введите email"
          />
          <h4>Телефон</h4>
          <input
            className="forClear Form__input"
            type="tel"
            onChange={(event) => {
              dataFoAdd.phone_number = event.target.value
            }}
            placeholder="Введите phone"
          />
          <h4>Введите ссылку на логотип</h4>
          <input
            className="forClear Form__input"
            type="url"
            onChange={(event) => {
              dataFoAdd.logo_url = event.target.value
            }}
            placeholder="Введите URL"
          />

          <button
            className="btn_red"
            onClick={(e) => {
              e.preventDefault()
              setModalActive(false)
              ClearForm()
            }}
          >
            Отмена
          </button>
          <input className="btn_green" type="submit" value="Добавить" />
        </form>
      </Modal>
    </div>
  )
}

export default CardListAdmin
