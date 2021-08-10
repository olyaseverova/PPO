<template>
  <div class="news" id="news">
    <section class="news-birthdays">
      <div class="birthdays-grey-block"></div>
      <ul class="birthdays-list list">
        <li
          v-for="birthday in social.birthdays"
          class="birthdays-list-item"
          :key="birthday.id"
        >
          <p class="birthday-date">{{ birthday }}</p>
        </li>
      </ul>
    </section>
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
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "News",

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
      news_headline: "Новости",
    };
  },
};
</script>
