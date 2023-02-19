<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">
          <img src="/images/icon/close.png" alt="">
        </div>
        <div class="modal-container">
          <slot name="title">
            <h3 class="modal-title">Создание аукциона</h3>
          </slot>
          <slot name="body">
            <div class="modal-header">
              <p class="modal-header__title">Город</p>
              <select name="choose_city" id="choose_city" class="select-city select-usable" aria-placeholder="Выберете город">
                <option>Выберете город</option>
                <option>Москва</option>
                <option>Казань</option>
                <option>Коломна</option>
                <option>Смоленск</option>
                <option>Мурманск</option>
              </select>
            </div>
            <div class="modal-body">
              <div class="modal-images">
                <img src="/images/no_images.png" class="modal-images-main__img">
                <div class="modal-images-bottom">
                  <div class="modal-pictures">
                    <img src="/images/no_images.png" class="modal-pictures__img">
                    <img src="/images/no_images.png" class="modal-pictures__img">
                    <img src="/images/no_images.png" class="modal-pictures__img">
                    <img src="/images/no_images.png" class="modal-pictures__img">
                  </div>
                  <button class="btn download-img">Загрузите фотографии</button>
                </div>
              </div>
              <div class="modal-info">
                <p class="modal-info__title">Название аукциона</p>
                <input type="text" name="cake-name" placeholder="Продается торт Наполеон">
                <div class="modal-info-sem">
                  <div class="modal-info-bet">
                    <p class="modal-info-bet__title modal-info__title">
                      Начальная ставка
                    </p>
                    <div class="currency-type">
                      <input type="number" name="first-amount" placeholder="500" class="currency-type">
                      <p class="label-for-currency-type">₽</p>
                    </div>
                  </div>
                  <div class="modal-info-step">
                    <p class="modal-info-step__title modal-info__title">
                      Минимальный шаг
                    </p>
                    <div class="currency-type">
                      <input type="number" name="min-step" placeholder="100">
                      <p class="label-for-currency-type">₽</p>
                    </div>
                  </div>
                </div>
                <div class="modal-info-sem">
                  <div class="modal-info-date">
                    <p class="modal-info-date__title modal-info__title">
                      Дата и время начала аукциона
                    </p>
                    <div class="input-semi-sem">
                      <div class="datepicker-type">
                        <input type="date" value="" name="choose-date" placeholder="02.01.2023" class="currency-type" onchange="this.className=(this.value!==''?'has-value':'')">
                        <img class="label-for-datepicker-type" src="/images/icon/calendar.png">
                      </div>
                      <div class="clock-type">
                        <input type="time" name="choose-time" placeholder="12:00" class="currency-type" onchange="this.className=(this.value!==''?'has-value':'')">
                        <img class="label-for-clock-type" src="/images/icon/clock.png">
                      </div>
                    </div>
                  </div>
                  <div class="modal-info-duration">
                    <p class="modal-info-duration__title modal-info__title">
                      Продолжительность аукциона
                    </p>
                    <div class="clock-type">
                      <input type="number" name="duration" placeholder="12 часов">
                      <img class="label-for-clock-type" src="/images/icon/clock.png">
                    </div>
                  </div>
                </div>
                <div class="modal-info-sem row-with-radio filling-radio">
                  <div class="modal-info-standard-filling">
                    <p
                        class="radio-button active modal-info__title modal-info-standard-filling__title choose-radio-title"
                        v-on:click="chooseStandard"
                    >
                      Стандартная начинка
                    </p>
                    <select
                        name="choose_filling"
                        id="choose_filling"
                        class="select-city select-usable radio-element"
                        aria-placeholder="Выберете начинку"
                    >
                      <option>Выберете начинку</option>
                      <option>Суфле</option>
                      <option>Радуга</option>
                      <option>Бисквит</option>
                      <option>Гвозди</option>
                      <option>Разные вкусняхи</option>
                    </select>
                  </div>
                  <div class="modal-info-personal-filling">
                    <p
                        class="radio-button modal-info__title modal-info-personal-filling__title choose-radio-title"
                        v-on:click="choosePersonal"
                    >
                      Индивидуальная начинка
                    </p>
                    <input
                        class="radio-element modal-info-inactive-input"
                        type="text"
                        id="personal_filling"
                        name="personal_filling"
                        placeholder="Напишите название"
                        disabled
                    >
                  </div>
                </div>

                <div class="modal-info-quarter row-with-radio">
                  <div class="modal-info-standard-weight">
                    <p
                        class="radio-button active modal-info__title modal-info-standard-weight__title choose-radio-quantity"
                        v-on:click="chooseWeight"
                    >
                      Вес (граммы)
                    </p>
                    <div class="currency-type">
                      <input
                          type="number"
                          name="weight"
                          placeholder="2 000"
                          class="currency-type radio-element-quantity"
                          id="weight"
                      >
                      <p class="label-for-currency-type">₽</p>
                    </div>
                  </div>

                  <div class="modal-info-standard-thing">
                    <p
                        class="radio-button modal-info__title modal-info-standard-thing__title choose-radio-quantity"
                        v-on:click="chooseThing"
                    >
                      Шт
                    </p>
                    <div class="currency-type">
                      <input
                          type="number"
                          name="thing"
                          placeholder=""
                          id="thing"
                          class="currency-type modal-info-inactive-input radio-element-quantity"
                          disabled
                      >
                      <p class="label-for-currency-type">₽</p>
                    </div>
                  </div>
                </div>

                <div class="delivery-address">
                  <p class="modal-info__title delivery-address__title">Адрес самовывоза</p>
                  <input type="text" name="delivery-address" placeholder="г. Москва, ул. Ленина, д. 3, кв. 1348" class="delivery-address__input">
                </div>

                <div class="delivery-checkpoint">
                  <div
                      v-on:click="checkDelivery"
                      id="delivery"
                      class="checkbox_input active"
                  >
                    Есть доставка
                  </div>
                </div>

                <div class="delivery-price">
                  <p class="modal-info__title delivery-price__title">Стоимость доставки</p>
                  <div class="currency-type">
                    <input type="text" id="delivery-price" name="delivery-price" placeholder="200" class="delivery-price__input currency-type">
                    <p class="label-for-currency-type">₽</p>
                  </div>
                </div>

                <div class="modal-info-description">
                  <p class="description__title modal-info__title">Описание</p>
                  <textarea id="description" name="description" class="description__input" placeholder="Торт как на фото, сделала вчера"></textarea>
                </div>

                <button
                    id="create-auction"
                    class="btn create-auction"
                >Создать аукцион
                </button>

                <p class="policy-warning">Нажимая на кнопку ”Создать аукцон” вы соглашаетесь<br>с
                  <router-link to="#">политикой конфиденциальности</router-link>
                </p>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "create-form",

  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
      document.body.classList.remove('showModal')
    },
    chooseStandard: function () {
      let radioTitleArr = document.getElementsByClassName('choose-radio-title')
      let radioElements = document.getElementsByClassName('radio-element')
      let inputIndividual = document.getElementById('personal_filling')
      if (!radioTitleArr[0].classList.contains('active')) {
        radioTitleArr[0].classList.add('active')
        radioElements[0].removeAttribute('disabled')
        radioTitleArr[1].classList.remove('active')
        radioElements[1].setAttribute('disabled', 'true')
        inputIndividual.classList.add('modal-info-inactive-input')
      }
    },
    choosePersonal: function () {
      let radioTitleArr = document.getElementsByClassName('choose-radio-title')
      let radioElements = document.getElementsByClassName('radio-element')
      let inputIndividual = document.getElementById('personal_filling')
      if (!radioTitleArr[1].classList.contains('active')) {
        radioTitleArr[0].classList.remove('active')
        radioElements[0].setAttribute('disabled', 'true')
        radioTitleArr[1].classList.add('active')
        radioElements[1].removeAttribute('disabled')
        inputIndividual.classList.remove('modal-info-inactive-input')
      }
    },
    chooseWeight: function () {
      let radioTitleArr = document.getElementsByClassName('choose-radio-quantity')
      let radioElements = document.getElementsByClassName('radio-element-quantity')
      let inputThing = document.getElementById('thing')
      let inputWeight = document.getElementById('weight')
      if (!radioTitleArr[0].classList.contains('active')) {
        radioTitleArr[0].classList.add('active')
        radioElements[0].removeAttribute('disabled')
        radioTitleArr[1].classList.remove('active')
        radioElements[1].setAttribute('disabled', 'true')
        inputThing.classList.add('modal-info-inactive-input')
        inputWeight.classList.remove('modal-info-inactive-input')
      }
    },
    chooseThing: function () {
      let radioTitleArr = document.getElementsByClassName('choose-radio-quantity')
      let radioElements = document.getElementsByClassName('radio-element-quantity')
      let inputThing = document.getElementById('thing')
      let inputWeight = document.getElementById('weight')
      if (!radioTitleArr[1].classList.contains('active')) {
        radioTitleArr[0].classList.remove('active')
        radioElements[0].setAttribute('disabled', 'true')
        radioTitleArr[1].classList.add('active')
        radioElements[1].removeAttribute('disabled')
        inputThing.classList.remove('modal-info-inactive-input')
        inputWeight.classList.add('modal-info-inactive-input')
      }
    },
    checkDelivery: function () {
      let checkboxDelivery = document.getElementById('delivery')
      let priceInput = document.getElementById('delivery-price')
      if (checkboxDelivery.classList.contains('active')) {
        checkboxDelivery.classList.remove('active')
        checkboxDelivery.classList.add('inactive')
        priceInput.classList.add('modal-info-inactive-input')
        priceInput.setAttribute('disabled', 'true')
      } else {
        checkboxDelivery.classList.add('active')
        checkboxDelivery.classList.remove('inactive')
        priceInput.classList.remove('modal-info-inactive-input')
        priceInput.removeAttribute('disabled')
      }
    }
  }
}
</script>
