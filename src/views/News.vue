<template>
  <div class="news" id="news">
    <section class="news-birthdays">
      <div class="birthdays-grey-block"></div>
      <ul class="birthdays-list list">
        <li
          v-for="birthday in birthdays"
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
          v-for="novelty in noveltys"
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
export default {
  name: 'News',
  data() {
    return {
      news_headline: "Новости",
      birthdays: [
        "Ближайший день рождения",
        "Ближайший день рождения",
        "Ближайший день рождения",
      ],

      noveltys: [
        { topic: "Заголовок к новости", date: "5.08.2020" },
        { topic: "Заголовок к новости", date: "5.08.2020" },
        { topic: "Заголовок к новости", date: "5.08.2020" },
      ],
    };
  },
};
</script>

