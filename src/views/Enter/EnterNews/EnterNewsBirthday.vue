<template>
  <div class="enter">
    <enterAside />

    <article class="birthday">
      <topicLinks :pages="pages" topic-page="Дни Рождения"></topicLinks>
      <section class="name">
        <h1 class="main-headline">{{ name_headline }}</h1>
        <ul class="names-list list">
          <li v-for="name in names" class="names-list-item" :key="name.id">
            <input class="name-input" :placeholder="name" />
          </li>
        </ul>
        <h1 class="main-headline date-headline">{{ date_headline }}</h1>
        <ul class="names-list list">
          <li v-for="data in datas" class="names-list-item" :key="data.id">
            <input class="name-input" :placeholder="data" />
          </li>
        </ul>
        <router-link to="/enter-news" class="grey-button link">{{
          save_button
        }}</router-link>
      </section>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import topicLinks from "@/components/TopicLinks";

export default {
  name: "EnterNews",
  components: {
    enterAside,
    topicLinks
  },

  data() {
    return {
      name_headline: "Именины",
      date_headline: "Дата",
      save_button: "Сохранить",

      pages: [
        { href: "/enter-news", name: "Новости" }
      ],

      names: ["Имя", "Фамилия", "Отчество"],

      datas: ["День", "Месяц", "Год"],
    };
  },
};
</script>