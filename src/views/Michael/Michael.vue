<template>
  <div class="michael" id="michael">
    <h1 class="main-headline">{{ michael_headline }}</h1>
    <article class="michael-info">
      <div class="worship">
        <section class="general-information">
          <textarea
            class="general-information-textarea"
            :placeholder="general_information"
            type="text"
          ></textarea>
        </section>
        <h1 class="main-headline">{{ worship_headline }}</h1>
        <section class="calendar">
          <ul class="topics-list list">
            <li
              v-for="topic in topics"
              class="topics-list-item"
              :key="topic.id"
            >
              <p class="topic-part p">{{ topic }}</p>
            </li>
          </ul>
          <ul class="days-list list">
            <li v-for="day in days" class="days-list-item" :key="day.id">
              <p class="day p">{{ day }}</p>
            </li>
          </ul>
          <ul class="dates-list list">
            <li
              v-for="date in dates"
              :id="date.id"
              class="dates-list-item"
              :key="date.id"
            >
              <p class="date p">{{ date.number }}</p>
            </li>
          </ul>
        </section>
      </div>

      <staticData />
    </article>

    <article class="michael-news">
      <section class="news-noveltys">
        <h1 class="main-headline">{{ news_headline }}</h1>
        <ul class="noveltys-list list">
          <li
            v-for="novelty in noveltys"
            class="noveltys-list-item"
            :key="novelty.id"
          >
            <p class="novelty-topic">{{ novelty.topic }}</p>
            <p class="novelty-date">{{ novelty.date }}</p>
          </li>
        </ul>
      </section>
    </article>

    <section class="michael-social">
      <h1 class="main-headline">{{ social_headline }}</h1>
      <ul class="social-list list">
        <li
          v-for="society in social"
          class="social-list-item"
          :key="society.id"
        >
          <p class="social-text p">{{ society }}</p>
        </li>
      </ul>
    </section>

    <ul class="petitions-list list">
      <li
        v-for="petition in petitions"
        class="petitions-list-item"
        :key="petition.id"
      >
        <button class="petition-button" type="button">{{ petition }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import staticData from "@/components/AsideData";

export default {
  name: "Michael",
  components: {
    staticData,
  },

  data() {
    return {
      michael_headline: "Община архистратига Михаила",
      general_information: "Блок с общей информацией",
      news_headline: "Новости",
      worship_headline: "Расписание богослужений",
      social_headline: "Социальная деятельность",

      topics: ["2020", "Август", "", ""],

      days: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],

      dates: [
        { id: "disabled_date", number: 27 },
        { id: "disabled_date", number: 28 },
        { id: "disabled_date", number: 29 },
        { id: "disabled_date", number: 30 },
        { id: "disabled_date", number: 31 },
        { id: "active_date", number: 1 },
        { id: "active_date", number: 2 },
        { id: "active_date", number: 3 },
        { id: "active_date", number: 4 },
        { id: "selected_date", number: 5 },
        { id: "active_date", number: 6 },
        { id: "active_date", number: 7 },
        { id: "active_date", number: 8 },
        { id: "active_date", number: 9 },
        { id: "active_date", number: 10 },
        { id: "active_date", number: 11 },
        { id: "active_date", number: 12 },
        { id: "active_date", number: 13 },
        { id: "active_date", number: 14 },
        { id: "active_date", number: 15 },
        { id: "active_date", number: 16 },
        { id: "active_date", number: 17 },
        { id: "active_date", number: 18 },
        { id: "active_date", number: 19 },
        { id: "active_date", number: 20 },
        { id: "active_date", number: 21 },
        { id: "active_date", number: 22 },
        { id: "active_date", number: 23 },
        { id: "active_date", number: 24 },
        { id: "active_date", number: 25 },
        { id: "active_date", number: 26 },
        { id: "active_date", number: 27 },
        { id: "active_date", number: 28 },
        { id: "active_date", number: 29 },
        { id: "active_date", number: 30 },
        { id: "active_date", number: 31 },
        { id: "disabled_date", number: 1 },
        { id: "disabled_date", number: 2 },
        { id: "disabled_date", number: 3 },
        { id: "disabled_date", number: 4 },
        { id: "disabled_date", number: 5 },
        { id: "disabled_date", number: 6 },
      ],

      noveltys: [
        { topic: "Заголовок к новости", date: "5.08.2020" },
        { topic: "Заголовок к новости", date: "5.08.2020" },
        { topic: "Заголовок к новости", date: "5.08.2020" },
      ],

      social: [
        "Социальная акция",
        "Благотворительное мероприятие",
        "Социальная акция",
        "Благотворительное мероприятие",
      ],

      petitions: ["Создать прошение", "Создать прошение"],
    };
  },
};
</script>
