<template>
  <div class="enter">
    <enterAside></enterAside>

    <article class="enter-michael-content">
      <article class="enter-michael-information">
        <h1 class="main-headline">{{ michael_headline }}</h1>
        <h1 class="main-headline info-headline">{{ info_headline }}</h1>
        <generalInfo :general-text="general_information" />
        <ul class="datas-list list">
          <li
            v-for="data in datas"
            class="datas-list-item flex"
            :id="data.id"
            :key="data.id"
          >
            <label class="data-label">
              <p class="data-label-text">{{ data.label }}</p>
              <input
                :id="data.id"
                class="data-input"
                type="text"
                :value="data.value"
              />
            </label>
            <button
              class="data-button"
              type="button"
              @click="editItem('.data-input')"
              :id="data.id"
            ></button>
            <button
              class="data-button"
              type="button"
              @click="closeItem('.datas-list-item')"
              :id="data.id"
            ></button>
          </li>
        </ul>
      </article>

      <section class="materials-buttons">
        <h1 class="main-headline">{{ materials_button }}</h1>
        <ul class="materials-buttons-list list">
          <li
            v-for="material in worship.materials"
            class="materials-buttons-list-item"
            :key="material.id"
          >
            <router-link :to="material.href" class="grey-button link">{{
              material.name
            }}</router-link>
          </li>
        </ul>
      </section>

      <article class="enter-michael-worships">
        <h1 class="main-headline">{{ worship_headline }}</h1>
        <ul class="worships-list list">
          <li
            v-for="worship in worship.worships"
            class="worships-list-item flex"
            :key="worship.id"
          >
            <label class="worships-label">
              <p class="main-headline">{{ worship.name }}</p>
              <input
                class="worships-input"
                type="text"
                :placeholder="worship.name"
              />
            </label>
            <button class="data-button none" type="button"></button>
            <button class="data-button none" type="button"></button>
          </li>
        </ul>
        <button class="grey-button" type="button">{{ grey_save }}</button>
        <button class="grey-button" type="button">{{ grey_add }}</button>
      </article>

      <section class="news-noveltys">
        <h1 class="main-headline">{{ news_headline }}</h1>
        <ul class="noveltys-list list">
          <li
            v-for="novelty in worship.noveltys"
            class="nov-list-item flex"
            :key="novelty.id"
          >
            <div class="inputs">
              <input
                type="text"
                class="novelty-topic"
                :placeholder="novelty.topic"
              />
              <input
                type="text"
                class="novelty-date"
                :placeholder="novelty.date"
              />
            </div>
            <button class="data-button" type="button"></button>
            <button class="data-button" type="button"></button>
          </li>
        </ul>
        <button class="grey-button" type="button">{{ grey_add_news }}</button>
      </section>

      <section class="michael-social">
        <h3 class="main-headline">{{ social_headline }}</h3>
        <ul class="social-list list">
          <li
            v-for="society in worship.social"
            class="social-list-item flex"
            :id="society.item"
            :key="society.id"
          >
            <input
              type="text"
              class="social-text"
              :placeholder="society.name"
              :id="society.input_id"
            />
            <button class="data-button" type="button"></button>
            <button class="data-button" type="button"></button>
          </li>
        </ul>
        <ul class="buttons-list list">
          <li
            v-for="button in worship.buttons"
            class="buttons-list-item"
            :key="button.id"
          >
            <button class="grey-button" type="button">{{ button }}</button>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import generalInfo from "@/components/GeneralInfo";
import store from "@/store/index.js";

export default {
  name: "Enter",
  components: {
    enterAside,
    generalInfo,
  },

  computed: {
    worship() {
      return store.state.worship;
    },
  },
  async mounted() {
    store.dispatch("fetchWorship");
  },

  methods: {
    closeItem: function (data) {
      var items = document.querySelectorAll(data);
      items.forEach(function (item) {
        if (event.target.id === item.id) {
          item.classList.add("none");
          item.classList.remove("flex");
        }
      });
    },

    editItem: function (data) {
      var inputs = document.querySelectorAll(data);
      inputs.forEach(function (input) {
        if (event.target.id === input.id) {
          input.focus();
        }
      });
    },
  },

  data() {
    return {
      michael_headline: "Образовательная община",
      general_information: "Блок с общей информацией",
      materials_button: "Материалы для обучения",
      worship_headline: "Расписание занятий",
      news_headline: "Новости",
      social_headline: "Социальная деятельность ",
      grey_save: "Сохранить",
      grey_add: "Добавить",
      grey_add_news: "Добавить новость",
      reg_headline: "Редактируемые страницы",
      info_headline: "Общая информация",

      datas: [
        { label: "Адрес", value: "г. Москва ул. Пушкина 156а", id: "address" },
        { label: "Телефон", value: "8 (923) 123 23 23", id: "phone" },
        { label: "E-mail", value: "ppo@mail.ru", id: "mail" },
        { label: "Структура общины", id: "structure" },
        { label: "Личное расписание", id: "timetable" },
        { label: "Внутренние новости", id: "news" },
      ],

      kinds: [
        {
          src: require("@/img/pin.png"),
          width: 18,
          height: 18,
          alt: "Дать ссылку",
          id: "pin",
        },
        {
          src: require("@/img/bold.png"),
          width: 10,
          height: 14,
          alt: "Добавить жирный текст",
          id: "bold",
        },
        {
          src: require("@/img/italik.png"),
          width: 10,
          height: 14,
          alt: "Добавить италик",
          id: "italik",
        },
        {
          src: require("@/img/underline.png"),
          width: 14,
          height: 17,
          alt: "Подчеркнуть текст",
          id: "underline",
        },
        {
          src: require("@/img/strike.png"),
          width: 16,
          height: 14,
          alt: "Зачеркнуть текст",
          id: "strike",
        },
      ],
    };
  },
};
</script>
