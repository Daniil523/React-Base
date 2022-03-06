import Card from '../card/Card'
import './CardList.css'

function CardList(props) {
  const { data, filter } = props
  function filterCard(data, filter) {
    let arrFilter = data.filter((item) => item.filter === filter)
    return arrFilter
  }
  const Cards = filterCard(data, filter).map((item) => {
    return (
      <Card
        key={item.id}
        brand_name={item.brand_name}
        card_description={item.card_description}
        modal_description={item.modal_description}
        spec_ofer={item.spec_ofer}
        site_name={item.site_name}
        duration={item.duration}
        email={item.email}
        phone_number={item.phone_number}
        logo_url={item.logo_url}
      />
    )
  })
  return <div className="CardList">{Cards}</div>
}

export default CardList
