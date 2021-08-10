<template>
  <div class="enter">
    <enterAside />

    <article class="enter-news">
      <section class="enter-news-birthdays">
        <h1 class="main-headline">{{ enter_news_headline }}</h1>
        <ul class="birthdays-list list">
          <li
            v-for="birthday in birthdays"
            class="birthdays-list-item flex"
            :id="birthday.item_id"
            :key="birthday.id"
          >
            <input
              type="text"
              class="birthday-input birthday-input-date"
              :placeholder="birthday.date"
              :id="birthday.input_id"
            />
            <input
              type="text"
              class="birthday-input"
              :placeholder="birthday.name"
            />
            <button
              class="data-button"
              type="button"
              @click="editItem('.birthday-input-date')"
              :id="birthday.input_id"
            ></button>
            <button
              class="data-button"
              type="button"
              @click="closeItem('.birthdays-list-item')"
              :id="birthday.item_id"
            ></button>
          </li>
        </ul>
        <router-link to="/enter-news-birthday" class="grey-button link"
          >Добавить</router-link
        >
      </section>

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
        <router-link to="/enter-news-edit" class="grey-button link"
          >Добавить</router-link
        >
      </section>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";

export default {
  name: "EnterNews",
  components: {
    enterAside,
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
      enter_news_headline: "Дни рождения",
      news_headline: "Новости",

      birthdays: [
        {
          date: "19.04.1982",
          name: "Фамилия Имя Отчество",
          input_id: "input1",
          item_id: "item1",
        },
        {
          date: "19.04.1982",
          name: "Фамилия Имя Отчество",
          input_id: "input2",
          item_id: "item2",
        },
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
    };
  },
};
</script>