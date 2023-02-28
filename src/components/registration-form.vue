<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow modal-shadow-notification" @click.self="closeModal">
      <div class="modal modal-registration">
        <div class="modal-close" @click="closeModal">
          <img src="images/icon/close.png" alt="">
        </div>
        <div class="modal-container text-notification-container">
          <slot name="title">
            <h3 class="modal-title">Регистрация</h3>
            <p class="text-secondary">Для участия в аукционе необходимо зарегистрироваться</p>
          </slot>
          <div class="registration-form">
            <div class="firstname-block">
              <p class="firstname-block__title input_label">Имя</p>
              <input
                  v-on:change="setFirstname"
                  type="text"
                  id="firstName"
                  placeholder="Иван"
              >
              <p class="error-validation error-firstname d-none">Пожалуйста, введите имя</p>
            </div>
            <div class="lastname-block">
              <p class="lastname-block__title input_label">Фамилия</p>
              <input
                  v-on:change="setLastName"
                  type="text"
                  id="lastName"
                  placeholder="Иванов"
              >
              <p class="error-validation error-lastname d-none">Пожалуйста, введите фамилию</p>
            </div>
            <div class="surname-block">
              <p class="surname-block__title input_label">Отчество</p>
              <input
                  v-on:change="setSurname"
                  type="text"
                  id="surname"
                  placeholder="Иванович"
              >
              <p class="error-validation error-surname d-none">Пожалуйста, введите отчество</p>
            </div>
            <div class="phone-block">
              <p class="phone-block__title input_label">Телефон</p>
              <div class="block-with-selector">
                <select
                    id="choose_phone-mask"
                    class="select-city select-usable radio-element"
                    aria-placeholder="+7"
                >
                  <option
                      id="rus"
                      value="+7"
                  >
                    +7
                  </option>
                </select>
                <input
                    v-on:change="setPhone"
                    type="text"
                    id="phone"
                    placeholder="(___)___-__-__"
                >
              </div>
              <p class="error-validation error-phone d-none">Пожалуйста, введите телефон</p>
              <p class="error-validation error-incorrectPhone d-none">Пожалуйста, введите корректный номер</p>
            </div>
            <div class="email-block">
              <p class="phone-block__title input_label">E-mail</p>
              <input
                  v-on:change="setEmail"
                  type="text"
                  id="email"
                  placeholder="pochta@mail.ru"
              >
              <p class="error-validation error-email d-none">Пожалуйста, введите E-mail</p>
            </div>
            <div class="city-block">
              <p class="city-block__title input_label">Город</p>
              <input
                  v-on:change="setCity"
                  type="text"
                  id="city"
                  placeholder="Москва"
              >
              <p class="error-validation error-city d-none">Пожалуйста, введите город</p>
            </div>
            <div class="btn-block">
              <button
                  v-on:click="submitForm"
                  id="registration-btn"
                  class="btn registration-form-submit"
              >Зарегистрироваться
              </button>
            </div>
            <div class="policy-block">
              <p class="policy-warning">Нажимая на кнопку ”Создать аукцион” вы соглашаетесь<br>с
                <router-link to="#">политикой конфиденциальности</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IMask from "imask";

export default {
  name: "registration-form",
  data: function () {
    return {
      show: false,
      newUser:
          {
            firstname: "",
            lastname: "",
            surname: "",
            phone: "",
            email: "",
            city: ""
          }
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
      document.body.classList.remove('showModal')
    },
    setFirstname: function () {
      let errorNotify = document.getElementsByClassName('error-firstname')
      this.newUser.firstname = document.getElementById('firstName').value
      errorNotify[0].classList.add('d-none')
    },
    setLastName: function () {
      let errorNotify = document.getElementsByClassName('error-lastname')
      this.newUser.lastname = document.getElementById('lastName').value
      errorNotify[0].classList.add('d-none')
    },
    setSurname: function () {
      let errorNotify = document.getElementsByClassName('error-surname')
      this.newUser.surname = document.getElementById('surname').value
      errorNotify[0].classList.add('d-none')
    },
    setPhone: function () {
      let errorNotify = document.getElementsByClassName('error-phone')
      let phoneInput = document.getElementById('phone')
      const phoneMask = new IMask(phoneInput, {
        mask: "(000)000-00-00"
      })
      if (phoneMask.masked.isComplete) {
        this.newUser.phone = phoneMask.unmaskedValue
        errorNotify[0].classList.add('d-none')
        document.getElementsByClassName('error-incorrectPhone')[0].classList.add('d-none')
      } else {
        document.getElementsByClassName('error-incorrectPhone')[0].classList.remove('d-none')
      }
    },
    setEmail: function () {
      let errorNotify = document.getElementsByClassName('error-email')
      this.newUser.email = document.getElementById('email').value
      errorNotify[0].classList.add('d-none')
    },
    setCity: function () {
      let errorNotify = document.getElementsByClassName('error-city')
      this.newUser.city = document.getElementById('city').value
      errorNotify[0].classList.add('d-none')
    },
    validationData: function () {
      for (let key in this.newUser) {
        if (this.newUser[key] === "") {
          let error = document.getElementsByClassName('error-' + key) // получаем поле у которого вызываем сообщение с ошибкой
          error[0].classList.remove('d-none')
        }
      }
    },
    submitForm: function () {
      let validationCount = Object.keys(this.newUser).length
      for (let input in this.newUser) {
        if (this.newUser[input] === "") {
          this.validationData()
        } else {
          validationCount = validationCount - 1
        }
      }
      if (validationCount === 0) {
        this.closeModal()
        this.newUser.phone = "+7" + this.newUser.phone
        console.log(this.newUser)
      }
    }
  }
}
</script>
