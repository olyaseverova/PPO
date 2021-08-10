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
              v-for="topic in social.topics"
              class="topics-list-item"
              :key="topic.id"
            >
              <p class="topic-part p">{{ topic }}</p>
            </li>
          </ul>
          <ul class="days-list list">
            <li v-for="day in social.days" class="days-list-item" :key="day.id">
              <p class="day p">{{ day }}</p>
            </li>
          </ul>
          <ul class="dates-list list">
            <li
              v-for="date in social.dates"
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
            v-for="novelty in social.noveltys"
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
          v-for="society in social.social"
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
import store from "@/store/index.js";
import staticData from "@/components/AsideData";

export default {
  name: "Michael",
  components: {
    staticData,
  },

  computed: {
    social() {
      return store.state.social;
    },
  },
  async mounted() {
    store.dispatch("fetchSocial");
  },

  data() {
    return {
      michael_headline: "Образовательная община",
      general_information: "Блок с общей информацией",
      news_headline: "Новости",
      worship_headline: "Расписание занятий",
      social_headline: "Социальная деятельность",
    };
  },
};
</script>
