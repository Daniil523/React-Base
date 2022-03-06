import { useState } from 'react'
import Modal from '../modal/Modal'
import { ReactComponent as More } from '../../images/More.svg'
import './Card.css'
function Card(props) {
  const [modalActive, setModalActive] = useState(false)
  const {
    brand_name,
    card_description,
    modal_description,
    spec_ofer,
    site_name,
    duration,
    email,
    phone_number,
    logo_url,
  } = props

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
      <button
        href="/"
        onClick={() => setModalActive(true)}
        className="Card__btn"
      >
        <More className="imgBtn" />
        <p>Подробнее</p>
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        {card_description ? (
          <h1 className="Card__card_description_modal">
            <p>{card_description}</p>
          </h1>
        ) : (
          ''
        )}
        {site_name ? (
          <div>
            <h3>Сайт:</h3>
            <p>{site_name}</p>
          </div>
        ) : (
          ''
        )}
        {duration ? (
          <div>
            <h3>Срок действия:</h3>
            <p>{duration}</p>
          </div>
        ) : (
          ''
        )}
        {modal_description ? (
          <div>
            <h3>Как использовать</h3>
            <p>{modal_description}</p>
          </div>
        ) : (
          ''
        )}
        {phone_number || email ? (
          <div>
            <h3>Контактная информация</h3>
            <p>
              <a href={'tel:' + phone_number}>{phone_number}</a>
            </p>
            <p>
              <a href={'mailto:vlad@htmlbook.ru' + email}>{email} </a>
            </p>
          </div>
        ) : (
          ''
        )}
      </Modal>
    </div>
  )
}

export default Card
