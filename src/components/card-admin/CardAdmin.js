import { useState } from 'react'
import Modal from '../modal/Modal'
import pencil from '../../images/pencil.svg'
import trash from '../../images/trash.svg'
import './CardAdmin.css'
function CardAdmin(props) {
  const [modalActive, setModalActive] = useState(false)
  const {
    id,
    filter,
    brand_name,
    card_description,
    modal_description,
    spec_ofer,
    site_name,
    duration,
    email,
    phone_number,
    logo_url,
    deleteCard,
    editingCard,
  } = props

  let dataForEditing = {
    id: id,
    filter: filter,
    value_brand_name: brand_name,
    value_card_description: card_description,
    value_modal_description: modal_description,
    value_spec_ofer: spec_ofer,
    value_site_name: site_name,
    value_duration: duration,
    value_email: email,
    value_phone_number: phone_number,
    value_logo_url: logo_url,
  }
  function ClearForm() {
    document.getElementById(id).reset()
  }
  return (
    <div className="Card">
      <div className="Card__logo">
        <img className="Card__logo_url" src={logo_url} alt="" />
      </div>

      {brand_name ? (
        <p className="Card__brand_name">
          <b>{brand_name}</b>
        </p>
      ) : (
        ''
      )}
      {card_description ? (
        <p className="Card__card_description">
          <b>Описание:</b>
          <br />
          {card_description}
        </p>
      ) : (
        ''
      )}

      {spec_ofer ? (
        <p className="Card__spec_ofer">
          <b>Специальное предложение</b>
          <br />
          {spec_ofer}
        </p>
      ) : (
        ''
      )}
      <div className="wrapForBtn">
        <button
          className="btn_yellow"
          onClick={() => {
            setModalActive(true)
          }}
        >
          {' '}
          <img className="imgBtnAdmin" src={pencil} alt="" />
          <p>Изменить</p>
        </button>
        <button className="btn_del" onClick={() => deleteCard(id)}>
          <img className="imgBtnAdmin" src={trash} alt="" />
          <p>Удалить</p>
        </button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        ClearForm={ClearForm}
      >
        <h1>Редактирование контента:</h1>
        <form
          id={id}
          onSubmit={(e) => {
            e.preventDefault()
            editingCard(dataForEditing, id)
            setModalActive(false)
          }}
        >
          <h4>Название бренда:</h4>
          <input
            className="Form__input"
            type="text"
            onChange={(event) => {
              dataForEditing.value_brand_name = event.target.value
            }}
            placeholder="Введите текст"
            defaultValue={brand_name}
          />
          <h4>Описание бренда (кратко):</h4>
          <input
            className="Form__input"
            type="text"
            onChange={(event) => {
              dataForEditing.value_card_description = event.target.value
            }}
            placeholder="Введите текст для отображения на карточке"
            defaultValue={card_description}
          />
          <h4>Специальное предложение:</h4>
          <input
            className="Form__input"
            type="text"
            onChange={(event) => {
              dataForEditing.value_spec_ofer = event.target.value
            }}
            placeholder="Введите текст"
            defaultValue={spec_ofer}
          />
          <h4>Сайт:</h4>
          <input
            className="Form__input"
            type="url"
            onChange={(event) => {
              dataForEditing.value_site_name = event.target.value
            }}
            placeholder="Введите URL"
            defaultValue={site_name}
          />
          <h4>Срок действия:</h4>
          <input
            className="Form__input"
            type="text"
            onChange={(event) => {
              dataForEditing.value_duration = event.target.value
            }}
            placeholder="Введите текст"
            defaultValue={duration}
          />
          <h4>Как использовать:</h4>
          <input
            className="Form__input"
            type="text"
            onChange={(event) => {
              dataForEditing.value_modal_description = event.target.value
            }}
            placeholder="Введите текст"
            defaultValue={modal_description}
          />
          <h4>Почта:</h4>
          <input
            className="Form__input"
            type="email"
            onChange={(event) => {
              dataForEditing.value_email = event.target.value
            }}
            placeholder="Введите email"
            defaultValue={email}
          />
          <h4>Телефон</h4>
          <input
            className="Form__input"
            type="tel"
            onChange={(event) => {
              dataForEditing.value_phone_number = event.target.value
            }}
            placeholder="Введите phone"
            defaultValue={phone_number}
          />
          <h4>Введите ссылку на логотип</h4>
          <input
            className="Form__input"
            type="url"
            onChange={(event) => {
              dataForEditing.value_logo_url = event.target.value
            }}
            placeholder="Введите URL"
            defaultValue={logo_url}
          />
          <button
            className="btn_red"
            onClick={(e) => {
              e.preventDefault()
              ClearForm()
              setModalActive(false)
            }}
          >
            Отмена
          </button>
          <input className="btn_green" type="submit" value="Сохранить" />
        </form>
      </Modal>
    </div>
  )
}

export default CardAdmin
