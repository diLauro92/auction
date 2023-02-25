<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
      <div class="modal">
        <div class="modal-close" @click="closeModal">
          <img src="/images/icon/close.png" alt="">
        </div>
        <div class="modal-container">
          <slot name="title">
            <h3
                v-text="modalTitle"
                class="modal-title"></h3>
          </slot>
          <div id="createFormBody">
            <slot name="body">
              <div class="modal-header">
                <p class="modal-header__title">Город</p>
                <select
                    v-on:change="setCities"
                    id="choose_city"
                    class="select-city select-usable"
                >
                  <option value="" disabled selected>Выберете город</option>
                  <option
                      v-for="(item, index) in cities"
                      :key="index"
                      :id="item.name"
                      :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <p class="error-validation error-city d-none">Пожалуйста, выберите город</p>
              </div>
              <div class="modal-body">
                <div class="modal-images">
                  <img
                      v-on:click="uploadChange"
                      id="upload-image-1"
                      src="/images/no_images.png"
                      class="modal-images-main__img upload-image"
                  >
                  <div class="modal-images-bottom">
                    <div v-on:click="uploadChange" class="modal-pictures">
                      <img id="upload-image-2" src="/images/no_images.png" class="modal-pictures__img upload-image">
                      <img id="upload-image-3" src="/images/no_images.png" class="modal-pictures__img upload-image">
                      <img id="upload-image-4" src="/images/no_images.png" class="modal-pictures__img upload-image">
                      <img id="upload-image-5" src="/images/no_images.png" class="modal-pictures__img upload-image">
                      <img id="upload-image-6" src="/images/no_images.png" class="modal-pictures__img upload-image d-none">
                      <img id="upload-image-7" src="/images/no_images.png" class="modal-pictures__img upload-image d-none">
                      <img id="upload-image-8" src="/images/no_images.png" class="modal-pictures__img upload-image d-none">
                      <img id="upload-image-9" src="/images/no_images.png" class="modal-pictures__img upload-image d-none">
                      <img id="upload-image-10" src="/images/no_images.png" class="modal-pictures__img upload-image d-none">
                    </div>
                    <button
                        v-on:click="uploadChange"
                        class="btn download-img"
                    >
                      Загрузите фотографии
                    </button>
                    <button
                        v-on:click="cleanImages"
                        class="btn clean-img d-none"
                    >
                      Очистить
                    </button>
                    <input v-on:change="imageSave" type="file" id="imageLoad" multiple class="d-none">
                    <p class="error-validation d-none" id="maxLengthImg">Можно загрузить не более 10 файлов</p>
                    <p class="error-validation error-img d-none">Пожалуйста, загрузите хотя бы одно изображение</p>
                  </div>
                </div>
                <div class="modal-info">
                  <p class="modal-info__title">Название аукциона</p>
                  <input
                      v-on:change="setName"
                      type="text"
                      id="cake_name"
                      placeholder="Продается торт Наполеон"
                  >
                  <p class="error-validation error-name d-none">Пожалуйста, введите название</p>
                  <div class="modal-info-sem">
                    <div class="modal-info-bet">
                      <p class="modal-info-bet__title modal-info__title">
                        Начальная ставка
                      </p>
                      <div class="currency-type">
                        <input
                            v-on:change="setFirstBet"
                            type="number"
                            id="first-amount"
                            placeholder="500"
                            class="currency-type"
                        >
                        <p class="label-for-currency-type">₽</p>
                        <p class="error-validation error-startBet d-none">Пожалуйста, введите ставку</p>
                      </div>
                    </div>
                    <div class="modal-info-step">
                      <p class="modal-info-step__title modal-info__title">
                        Минимальный шаг
                      </p>
                      <div class="currency-type">
                        <input
                            v-on:change="setMinStep"
                            type="number"
                            id="min-step"
                            placeholder="100"
                        >
                        <p class="label-for-currency-type">₽</p>
                        <p class="error-validation error-minStep d-none">Пожалуйста, введите шаг</p>
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
                          <input
                              v-on:change="setStartDate"
                              type="date"
                              value=""
                              id="choose-date"
                              placeholder="02.01.2023"
                              class="currency-type"
                              onchange="this.className=(this.value!==''?'has-value':'')"
                          >
                          <img class="label-for-datepicker-type" src="/images/icon/calendar.png">
                        </div>
                        <div class="clock-type">
                          <input
                              v-on:change="setStartClock"
                              type="time"
                              id="choose-time"
                              placeholder="12:00"
                              class="currency-type"
                              onchange="this.className=(this.value!==''?'has-value':'')"
                          >
                          <img class="label-for-clock-type" src="/images/icon/clock.png">
                        </div>
                      </div>
                      <p class="error-validation error-date error-startClock d-none">Пожалуйста, выберите дату и время</p>
                    </div>
                    <div class="modal-info-duration">
                      <p class="modal-info-duration__title modal-info__title">
                        Продолжительность аукциона
                      </p>
                      <div class="clock-type">
                        <input
                            v-on:change="setDuration"
                            type="number"
                            id="duration"
                            placeholder="12 часов">
                        <img class="label-for-clock-type" src="/images/icon/clock.png">
                      </div>
                      <p class="error-validation error-endDate d-none">Пожалуйста, выберите продолжительность</p>
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
                          v-on:change="setFillings"
                          id="choose_filling"
                          class="select-city select-usable radio-element"
                          aria-placeholder="Выберете начинку"
                      >
                        <option value="" disabled selected>Выберете начинку</option>
                        <option
                            v-for="(item, index) in fillings"
                            :key="index"
                            :data-id="item.id"
                            :id="item.name"
                            :value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                      <p class="error-validation error-filling d-none">Пожалуйста, выберите начинку</p>
                    </div>
                    <div class="modal-info-personal-filling">
                      <p
                          class="radio-button modal-info__title modal-info-personal-filling__title choose-radio-title"
                          v-on:click="choosePersonal"
                      >
                        Индивидуальная начинка
                      </p>
                      <input
                          v-on:change="setPersonalFilling"
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
                            v-on:change="setWeight"
                            type="number"
                            name="weight"
                            placeholder="2 000"
                            class="currency-type radio-element-quantity"
                            id="weight"
                        >
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
                            v-on:change="setAmount"
                            type="number"
                            placeholder=""
                            id="thing"
                            class="currency-type modal-info-inactive-input radio-element-quantity"
                            disabled
                        >
                      </div>
                    </div>
                  </div>
                  <p class="error-validation error-weight error-amount d-none">Пожалуйста, выберите вес или количество</p>
                  <div class="delivery-address">
                    <p class="modal-info__title delivery-address__title">Адрес самовывоза</p>
                    <input
                        v-on:change="setAddress"
                        type="text"
                        id="address"
                        placeholder="г. Москва, ул. Ленина, д. 3, кв. 1348"
                        class="delivery-address__input">
                  </div>
                  <p class="error-validation error-address d-none">Пожалуйста, введите адрес</p>

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
                      <input
                          v-on:change="setDeliveryPrice"
                          type="text"
                          id="delivery-price"
                          placeholder="200"
                          class="delivery-price__input currency-type">
                      <p class="label-for-currency-type">₽</p>
                    </div>
                  </div>
                  <p class="error-validation error-deliveryPrice d-none">Пожалуйста, введите стоимость</p>

                  <div class="modal-info-description">
                    <p class="description__title modal-info__title">Описание</p>
                    <textarea
                        v-on:change="setDescription"
                        id="description"
                        class="description__input"
                        placeholder="Торт как на фото, сделала вчера"></textarea>
                  </div>

                  <p class="error-validation error-description d-none">Пожалуйста, ведите описание</p>

                  <button
                      v-on:click="submitForm"
                      id="create-auction"
                      class="btn create-auction"
                  >Создать аукцион
                  </button>

                  <p class="policy-warning">Нажимая на кнопку ”Создать аукцион” вы соглашаетесь<br>с
                    <router-link to="#">политикой конфиденциальности</router-link>
                  </p>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <modal-notification ref="modal-notification" :h3-text="successCreateTitle"/>
</template>

<script>
import ModalNotification from "@/components/modal-notification";

export default {
  name: "create-form",
  components: {ModalNotification},
  data: function () {
    return {
      show: false,
      modalTitle: "Создание аукциона",
      successCreateTitle: "Ваш аукцион успешно создан",
      newAuction:
          {
            name: "",
            city: "",
            startBet: "",
            minStep: "",
            date: "",
            startDate: "0",
            startClock: "",
            endDate: "",
            filling: "",
            weight: "",
            amount: "",
            address: "",
            active: true,
            delivery: true,
            deliveryPrice: "",
            description: "",
            slug: "new-cake",
            img: "",
            id: 50,
            currency: "₽",
            slides: [
              {
                img: ""
              },
              {
                img: ""
              },
              {
                img: ""
              },
              {
                img: ""
              }
            ],
          }

    }
  },
  props: {
    cakesList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    cities() {
      return this.$store.getters.cities
    },
    fillings() {
      return this.$store.getters.fillings
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
      document.body.classList.remove('showModal')
      this.modalTitle = "Создание аукциона"
    },
    showModal: function () {
      this.$refs.modal.show = true
      document.body.classList.add('showModal')
    },
    showModalNotification: function () {
      this.$refs["modal-notification"].show = true
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
      this.setFillings()
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
      this.newAuction.filling = ""
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
      this.newAuction.amount = 1
      this.setWeight()
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
      this.newAuction.weight = "Не указан"
      this.setAmount()
    },
    checkDelivery: function () {
      let checkboxDelivery = document.getElementById('delivery')
      let priceInput = document.getElementById('delivery-price')
      if (checkboxDelivery.classList.contains('active')) {
        checkboxDelivery.classList.remove('active')
        checkboxDelivery.classList.add('inactive')
        priceInput.classList.add('modal-info-inactive-input')
        priceInput.setAttribute('disabled', 'true')
        this.setDeliveryPrice()
        this.newAuction.delivery = false
        this.newAuction.deliveryPrice = 0
      } else {
        checkboxDelivery.classList.add('active')
        checkboxDelivery.classList.remove('inactive')
        priceInput.classList.remove('modal-info-inactive-input')
        priceInput.removeAttribute('disabled')
        this.newAuction.delivery = true
      }
    },

    uploadChange: function () {
      document.getElementById('maxLengthImg').classList.add('d-none')
      document.getElementById('imageLoad').click()
    },

    cleanImages: function () {
      let images = document.getElementsByClassName('upload-image')
      let imagesArr = []
      for (let key in images) {
        if (typeof images[key] === "object") {
          imagesArr.push(images[key])
        }
      }
      for (let index in imagesArr) {
        images[index].src = '/images/no_images.png'
      }
      document.getElementsByClassName('clean-img')[0].classList.add('d-none')
      this.newAuction.img = ""
      document.getElementById('upload-image-1').classList.remove('uploaded')
    },
    //загружаем картинки в модалку
    imageSave: function () {
      let images = document.getElementsByClassName('upload-image')
      let imagesArr = []
      let files = document.getElementById('imageLoad').files

      for (let key in images) {
        if (typeof images[key] === "object") {
          imagesArr.push(images[key])
        }
      }

      for (let index = 0; (index < files.length); index++) {
        if (index < 10) {
          let reader = new FileReader()
          reader.onloadend = function () {
            imagesArr[index].src = reader.result
          }
          reader.readAsDataURL(files[index])
        } else {
          document.getElementById('maxLengthImg').classList.remove('d-none')
        }
      }
      document.getElementsByClassName('clean-img')[0].classList.remove('d-none')
      document.getElementById('upload-image-1').classList.add('uploaded')
      document.getElementsByClassName('error-img')[0].classList.add('d-none')
    },

    // собираем данные с полей в новый аукцион
    setCities: function () {
      let errorNotify = document.getElementsByClassName('error-city')
      errorNotify[0].classList.add('d-none')
      let select = document.getElementById('choose_city')
      this.newAuction.city = select.options[select.selectedIndex].value
    },
    setName: function () {
      let errorNotify = document.getElementsByClassName('error-name')
      this.newAuction.name = document.getElementById('cake_name').value
      errorNotify[0].classList.add('d-none')
    },
    setFirstBet: function () {
      let errorNotify = document.getElementsByClassName('error-startBet')
      this.newAuction.startBet = document.getElementById('first-amount').value
      errorNotify[0].classList.add('d-none')
    },
    setMinStep: function () {
      let errorNotify = document.getElementsByClassName('error-minStep')
      this.newAuction.minStep = document.getElementById('min-step').value
      errorNotify[0].classList.add('d-none')
    },
    setStartDate: function () {
      let errorNotify = document.getElementsByClassName('error-date')
      this.newAuction.date = document.getElementById('choose-date').value
      errorNotify[0].classList.add('d-none')
    },
    setStartClock: function () {
      let errorNotify = document.getElementsByClassName('error-startClock')
      this.newAuction.startClock = document.getElementById('choose-time').value
      errorNotify[0].classList.add('d-none')
    },
    setDuration: function () {
      let errorNotify = document.getElementsByClassName('error-endDate')
      this.newAuction.endDate = document.getElementById('duration').value
      errorNotify[0].classList.add('d-none')
    },
    setFillings: function () {
      let errorNotify = document.getElementsByClassName('error-filling')
      let select = document.getElementById('choose_filling')
      this.newAuction.filling = select.options[select.selectedIndex].dataset.id
      errorNotify[0].classList.add('d-none')
    },
    setPersonalFilling: function () {
      let errorNotify = document.getElementsByClassName('error-filling')
      this.newAuction.filling = document.getElementById('personal_filling').value
      errorNotify[0].classList.add('d-none')
    },
    setWeight: function () {
      let errorNotify = document.getElementsByClassName('error-weight')
      this.newAuction.weight = document.getElementById('weight').value
      this.newAuction.amount = 1
      errorNotify[0].classList.add('d-none')
    },
    setAmount: function () {
      let errorNotify = document.getElementsByClassName('error-amount')
      this.newAuction.amount = document.getElementById('thing').value
      this.newAuction.weight = "Не указан"
      errorNotify[0].classList.add('d-none')
    },
    setAddress: function () {
      let errorNotify = document.getElementsByClassName('error-address')
      this.newAuction.address = document.getElementById('address').value
      errorNotify[0].classList.add('d-none')
    },
    setDeliveryPrice: function () {
      let errorNotify = document.getElementsByClassName('error-deliveryPrice')
      this.newAuction.deliveryPrice = document.getElementById('delivery-price').value
      errorNotify[0].classList.add('d-none')
    },
    setDescription: function () {
      let errorNotify = document.getElementsByClassName('error-description')
      this.newAuction.description = document.getElementById('description').value
      errorNotify[0].classList.add('d-none')
    },
    setImages: function () {
      this.newAuction.img = document.getElementById('upload-image-1').src
      let slideArr = this.newAuction.slides
      for (let index in slideArr) {
        slideArr[index].img = document.getElementById('upload-image-' + (Number(index)+1).toString()).src
      }
    },
    checkUploadedMainImg: function () {
      let el = document.getElementById('upload-image-1')
      return el.classList.contains('uploaded');
    },

    //проверяем поля на пустоту
    validationData: function () {
      for (let key in this.newAuction) {
        if (key !== "startDate" && key !== "delivery") { // исключаем ключи без полей
          if (this.newAuction[key] === "") {
            let error = document.getElementsByClassName('error-' + key) // получаем поле у которого вызываем сообщение с ошибкой
            error[0].classList.remove('d-none')
          }
        }
      }
    },
    submitForm: function () {
      this.setImages()
      if (!this.checkUploadedMainImg()) {
        document.getElementsByClassName('error-img')[0].classList.remove('d-none')
      }
      let validationCount = Object.keys(this.newAuction).length
      let updateCakeList = this.cakesList
      for (let input in this.newAuction) {
        if (this.newAuction[input] === "") {
          validationCount = validationCount - 1 // исключаем дублирующее поле с начинкой
          this.validationData()
        }
      }

      if (validationCount === Object.keys(this.newAuction).length) {
        this.closeModal()
        this.showModalNotification()
        this.newAuction.startBet = Number(this.newAuction.startBet)
        this.newAuction.minStep = Number(this.newAuction.minStep)
        this.newAuction.filling = Number(this.newAuction.filling)
        this.newAuction.startDate = this.newAuction.date + "T" + this.newAuction.startClock
        if (this.newAuction.weight !== "Не указан") {
          this.newAuction.weight = Number(this.newAuction.weight)
        }
        this.newAuction.deliveryPrice = Number(this.newAuction.deliveryPrice)
        updateCakeList.push(this.newAuction)
        updateCakeList.sort((cake1, cake2) => cake1.id < cake2.id ? 1 : -1)
        console.log(this.newAuction)
      }
    }
  }
}
</script>
