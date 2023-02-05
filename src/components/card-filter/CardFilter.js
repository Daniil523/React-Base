import './CardFilter.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Sport } from '../../images/sport.svg'
import { ReactComponent as Smile } from '../../images/smile.svg'
import { ReactComponent as Heart } from '../../images/heart.svg'
import { ReactComponent as Film } from '../../images/film.svg'
import { ReactComponent as Retro } from '../../images/retro.svg'
import { ReactComponent as Circle } from '../../images/circle.svg'
import {useState} from "react";
function CardFilter(props) {
  const { changeFilter, filter } = props
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <div className="CardFilter">
      <button
        className={
          filter === 'sport'
            ? 'CardFilter__btn ActiveBtnNav'
            : 'CardFilter__btn'
        }
        onClick={() => changeFilter('sport')}
      >
        <Sport className="imgBtn" />
        <p className="textBtn">Спорт</p>
      </button>
      <button
        className={
          filter === 'beauty'
            ? 'CardFilter__btn ActiveBtnNav'
            : 'CardFilter__btn'
        }
        onClick={() => changeFilter('beauty')}
      >
        <Smile className="imgBtn" />
        <p className="textBtn">Красота</p>
      </button>
      <button
        className={
          filter === 'health'
            ? 'CardFilter__btn ActiveBtnNav'
            : 'CardFilter__btn'
        }
        onClick={() => changeFilter('health')}
      >
        <Heart className="imgBtn" />
        <p className="textBtn">Здоровье</p>
      </button>
      <button
        className={
          filter === 'leisure'
            ? 'CardFilter__btn ActiveBtnNav'
            : 'CardFilter__btn'
        }
        onClick={() => changeFilter('leisure')}
      >
        <Film className="imgBtn" />
        <p className="textBtn">Досуг</p>
      </button>
      <button
        className={
          filter === 'techniq'
            ? 'CardFilter__btn ActiveBtnNav'
            : 'CardFilter__btn'
        }
        onClick={() => changeFilter('techniq')}
      >
        <Retro className="imgBtn" />
        <p className="textBtn">Техника</p>
      </button>
      <button
        className={
          filter === 'other'
            ? 'CardFilter__btn ActiveBtnNav'
            : 'CardFilter__btn'
        }
        onClick={() => changeFilter('other')}
      >
        <Circle className="imgBtn" />
        <p className="textBtn">Разное</p>
      </button>
        {
            window.location.pathname === '/admin' ?
                <Link to="/" className="CardFilter__btn">
                    Просмотр
                </Link>
                :
                <Link to="/admin" className="CardFilter__btn">
                    Редактирование
                </Link>
        }
    </div>
  )
}
export default CardFilter
