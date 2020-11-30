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
            v-for="material in materials"
            class="materials-buttons-list-item"
            :key="material.id"
          >
            <router-link
              :to="material.href"
              class="grey-button link"
              >{{ material.name }}</router-link
            >
          </li>
        </ul>
      </section>

      <article class="enter-michael-worships">
        <h1 class="main-headline">{{ worship_headline }}</h1>
        <ul class="worships-list list" ref="worships_list">
          <li
            v-for="worship in worships"
            class="worships-list-item flex"
            :id="worship.line_id"
            :key="worship.id"
          >
            <label class="worships-label" :for="worship.name_id">
              <p class="main-headline">{{ worship.name }}</p>
              <input
                class="worships-input"
                type="text"
                :placeholder="worship.name"
                :id="worship.name_id"
              />
            </label>
            <button
              class="data-button none"
              type="button"
              @click="editItem('.worships-input')"
              :id="worship.name_id"
            ></button>
            <button
              class="data-button none"
              type="button"
              @click="closeItem('.worships-list-item')"
              :id="worship.line_id"
            ></button>
          </li>
        </ul>
        <button class="grey-button" type="button">{{ grey_save }}</button>
        <button class="grey-button" type="button">{{ grey_add }}</button>
      </article>

      <section class="news-noveltys">
        <h1 class="main-headline">{{ news_headline }}</h1>
        <ul class="noveltys-list list">
          <li
            v-for="novelty in noveltys"
            class="nov-list-item flex"
            :id="novelty.item"
            :key="novelty.id"
          >
            <div class="inputs">
              <input
                type="text"
                class="novelty-topic"
                :placeholder="novelty.topic"
                :id="novelty.input"
              />
              <input
                type="text"
                class="novelty-date"
                :placeholder="novelty.date"
              />
            </div>
            <button
              class="data-button"
              type="button"
              @click="editItem('.novelty-topic')"
              :id="novelty.input"
            ></button>
            <button
              class="data-button"
              type="button"
              @click="closeItem('.nov-list-item')"
              :id="novelty.item"
            ></button>
          </li>
        </ul>
        <button class="grey-button" type="button">{{ grey_add_news }}</button>
      </section>

      <section class="michael-social">
        <h3 class="main-headline">{{ social_headline }}</h3>
        <ul class="social-list list">
          <li
            v-for="society in social"
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
            <button
              class="data-button"
              type="button"
              @click="editItem('.social-text')"
              :id="society.input_id"
            ></button>
            <button
              class="data-button"
              type="button"
              @click="closeItem('.social-list-item')"
              :id="society.item"
            ></button>
          </li>
        </ul>
        <ul class="buttons-list list">
          <li
            v-for="button in buttons"
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

export default {
  name: "Enter",
  components: {
    enterAside,
    generalInfo
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
      michael_headline: "Община архистратига Михаила",
      general_information: "Блок с общей информацией",
      materials_button: "Материалы для обучения",
      worship_headline: "Расписание богослужений",
      news_headline: "Новости",
      social_headline: "Социальная деятельность ",
      grey_save: "Сохранить",
      grey_add: "Добавить",
      grey_add_news: "Добавить новость",
      reg_headline: "Редактируемые страницы",
      info_headline: "Общая информация",

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

      datas: [
        { label: "Адрес", value: "г. Москва ул. Пушкина 156а", id: "address" },
        { label: "Телефон", value: "8 (923) 123 23 23", id: "phone" },
        { label: "E-mail", value: "ppo@mail.ru", id: "mail" },
        { label: "Структура общины", id: "structure" },
        { label: "Личное расписание", id: "timetable" },
        { label: "Внутренние новости", id: "news" },
      ],

      materials: [
        { name: "Редактировать", href: "/enter/michael/edit" },
        { name: "Добавить", href: "/enter/michael/add" },
      ],

      worships: [
        { name: "Название", name_id: "name_1", line_id: "line_1" },
        { name: "21.09.2020", line_id: "line_1" },
        { name: "10:00", line_id: "line_1" },
        { name: "Название", name_id: "name_2", line_id: "line_2" },
        { name: "21.09.2020", line_id: "line_2" },
        { name: "10:00", line_id: "line_2" },
        { name: "Название", name_id: "name_3", line_id: "line_3" },
        { name: "21.09.2020", line_id: "line_3" },
        { name: "10:00", line_id: "line_3" },
      ],

      noveltys: [
        {
          topic: "Заголовок",
          date: "24.07.2020",
          input: "input_1",
          item: "id1",
        },
        {
          topic: "Заголовок",
          date: "24.07.2020",
          input: "input_2",
          item: "id2",
        },
      ],

      social: [
        { name: "Социальная акция", input_id: "input_1", item: "item_1" },
        {
          name: "Благотворительное мероприятие",
          input_id: "input_2",
          item: "item_2",
        },
      ],

      buttons: ["Создать прошение", "Создать мероприятие"],
    };
  },
};
</script>
