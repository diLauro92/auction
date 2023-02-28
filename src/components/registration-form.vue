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
                  type="text"
                  id="firstName"
                  placeholder="Иван"
              >
              <p class="error-validation error-name d-none">Пожалуйста, введите имя</p>
            </div>
            <div class="lastname-block">
              <p class="lastname-block__title input_label">Фамилия</p>
              <input
                  type="text"
                  id="lastName"
                  placeholder="Иванов"
              >
              <p class="error-validation error-name d-none">Пожалуйста, введите фамилию</p>
            </div>
            <div class="surname-block">
              <p class="surname-block__title input_label">Отчество</p>
              <input
                  type="text"
                  id="surname"
                  placeholder="Иванович"
              >
              <p class="error-validation error-name d-none">Пожалуйста, введите отчество</p>
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
                    type="text"
                    id="phone"
                    placeholder="(___)___-__-__"
                >
              </div>
              <p class="error-validation error-name d-none">Пожалуйста, введите телефон</p>
            </div>
            <div class="email-block">
              <p class="phone-block__title input_label">E-mail</p>
              <input
                  type="text"
                  id="email"
                  placeholder="pochta@mail.ru"
              >
              <p class="error-validation error-name d-none">Пожалуйста, введите E-mail</p>
            </div>
            <div class="city-block">
              <p class="city-block__title input_label">Город</p>
              <input
                  type="text"
                  id="city"
                  placeholder="Москва"
              >
              <p class="error-validation error-name d-none">Пожалуйста, введите город</p>
            </div>
            <div class="btn-block">
              <button
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
export default {
  name: "registration-form",
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
      document.body.classList.remove('showModal')
    }
  }
}
</script>
