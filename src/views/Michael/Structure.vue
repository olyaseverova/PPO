<template>
  <div class="michael-structure">
    <topicLinks :pages="pages" topic-page="Структура общины"></topicLinks>
    <article class="michael-info">
      <div class="left-side">
        <ul class="main-headlines-list list">
          <li
            v-for="headline in headlines"
            class="main-headlines-item"
            :key="headline.id"
          >
            <h1 class="main-headline">{{ headline }}</h1>
          </li>
        </ul>
        <ul class="staff-list list">
          <li v-for="person in staff" class="staff-list-item" :key="person.id">
            <h3 class="person-role">{{ person.role }}</h3>
            <p class="person-name">{{ person.name }}</p>
            <p class="person-name">{{ person.name_2 }}</p>
          </li>
        </ul>
      </div>
      <staticData />
    </article>
  </div>
</template>

<script>
import staticData from "@/components/AsideData";
import topicLinks from "@/components/TopicLinks";
import store from "@/store/index.js";

export default {
  name: "Structure",
  components: {
    staticData,
    topicLinks,
  },

  computed: {
    staff() {
      return store.state.staff;
    },
  },
  async mounted() {
    store.dispatch("fetchStaff");
  },

  data() {
    return {
      headlines: ["Образовательная община", "Структура общины"],

      pages: [
        { href: "/", name: "Общины" },
        {
          href: "/michael",
          name: "Образовательная община",
        },
      ],
    };
  },
};
</script>
