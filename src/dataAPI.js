class dataAPI {
  deleteCard(id) {
    this.data = this.data.filter((el) => el.id !== id)
  }
  editingCard(dataForEditing, id) {
    this.data[this.data.findIndex((el) => el.id === id)] = {
      id: dataForEditing.id,
      filter: dataForEditing.filter,
      brand_name: dataForEditing.value_brand_name,
      card_description: dataForEditing.value_card_description,
      modal_description: dataForEditing.value_modal_description,
      spec_ofer: dataForEditing.value_spec_ofer,
      site_name: dataForEditing.value_site_name,
      duration: dataForEditing.value_duration,
      email: dataForEditing.value_email,
      phone_number: dataForEditing.value_phone_number,
      logo_url: dataForEditing.value_logo_url,
    }
  }
  addCard(dataForAdd) {
    this.data.push({ ...dataForAdd, id: this.dataCounter })
    this.dataCounter++
    console.log(this.data)
  }

  dataCounter = 11
  data = [
    {
      id: 0,
      filter: 'sport',
      brand_name: 'x-fit',
      card_description: 'Сеть фитнес-клубов',
      modal_description:
        'Можно получить скидки при покупке годового абонемента.',
      spec_ofer: 'Скидка от 15%',
      site_name: 'http://www.xfit.ru',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://www.xfit.ru/upload/medialibrary/6d2/NEW_LOGO_Gray_web.png',
    },
    {
      id: 1,
      filter: 'sport',
      brand_name: 'СССР',
      card_description: 'Сеть фитнес-клубов',
      modal_description:
        'Можно получить скидки при одновременной покупке двух и более клубных карт. Обратитесь к персональному менеджеру Компании Тимуру Максутову.',
      spec_ofer: 'Скидка от 35%',
      site_name: 'http://www.xfit.ru',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url:
        'https://fitness-cccp.ru/wp-content/themes/custom/img/sssr-logo-gold.png',
    },
    {
      id: 2,
      filter: 'beauty',
      brand_name: 'Лэтуаль',
      card_description: 'Сеть магазинов косметики и парфюмерии',
      modal_description: 'Можно получить скидку при покупке от 2000р. На кассе скажите кодовое слово "React".',
      spec_ofer: 'Скидка от 10%',
      site_name: 'https://www.letu.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logotip_Letual.svg/2560px-Logotip_Letual.svg.png',
    },
    {
      id: 3,
      filter: 'health',
      brand_name: 'ЕАПТЕКА',
      card_description: 'Интернет-аптека',
      modal_description: 'Скидка на первые 3 заказа по промокоду "React"',
      spec_ofer: 'Скидка от 300р',
      site_name: 'https://www.eapteka.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://tadviser.ru/images/6/60/%D0%A1%D0%B1%D0%B5%D1%80_%D0%95%D0%B0%D0%BF%D1%82%D0%B5%D0%BA%D0%B0_%D0%BB%D0%BE%D0%B3%D0%BE_2020.png',
    },
    {
      id: 4,
      filter: 'leisure',
      brand_name: 'Формула Кино',
      card_description: 'Сеть кинотеатров',
      modal_description: 'Скидка при покупке билетов в день премьеры фильма',
      spec_ofer: 'Скидка от 25%',
      site_name: 'https://kinoteatr.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://alllogos.ru/images/logotip-formula-kino.png',
    },
    {
      id: 5,
      filter: 'leisure',
      brand_name: 'Netflix',
      card_description: 'Онлайн кинотеатор',
      modal_description: 'Первые 3 месяца подписки бесплатно по промокоду "React"',
      spec_ofer: '3 месяца бесплатно',
      site_name: 'https://www.netflix.com/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png',
    },
    {
      id: 6,
      filter: 'techniq',
      brand_name: 'МВидео',
      card_description: 'Сеть магазинов электроники',
      modal_description: 'Скидка 500р при покупке от 4000р по промокоду "React"',
      spec_ofer: 'Скидка от 500р',
      site_name: 'https://www.mvideo.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Mvideo.svg/2560px-Mvideo.svg.png',
    },
    {
      id: 7,
      filter: 'techniq',
      brand_name: 'DNS',
      card_description: 'Сеть магазинов электроники',
      modal_description: 'Скидка 20% при покупке любой бытовой техники по промокоду "React"',
      spec_ofer: 'Скидка от 20%',
      site_name: 'https://www.dns-shop.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://upload.wikimedia.org/wikipedia/ru/c/c0/DNSLogo.png',
    },
    {
      id: 8,
      filter: 'other',
      brand_name: 'Delivery Club',
      card_description: 'Cервис доставки еды',
      modal_description: 'Скидка 25% при покупке от 2000р по промокоду "React"',
      spec_ofer: 'Скидка от 25%',
      site_name: 'https://www.delivery-club.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://im-business.com/wp-content/uploads/2022/05/logo-22.png',
    },
    {
      id: 9,
      filter: 'other',
      brand_name: 'Читай Город',
      card_description: 'Сеть книжных магазинов',
      modal_description: 'Скидка 10% при покупке любой художественной литературы по промокоду "React"',
      spec_ofer: 'Скидка от 10%',
      site_name: 'https://www.chitai-gorod.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://рио.москва/storage/app/uploads/public/620/646/f1b/620646f1b5436298171246.png',
    },
    {
      id: 10,
      filter: 'other',
      brand_name: 'Четыре Лапы',
      card_description: 'Сеть магазинов товаров для животных',
      modal_description: 'Скидка 15% при покупке корма для собак по промокоду "React"',
      spec_ofer: 'Скидка от 15%',
      site_name: 'https://4lapy.ru/',
      duration: 'Без срока',
      email: 'example@mail.ru',
      phone_number: '+7 (903) 203-06-99',
      logo_url: 'https://zoobrands.ru/media/djcatalog2/images/item/4/chetyre-lapy.png',
    }
  ]
}

export default dataAPI
