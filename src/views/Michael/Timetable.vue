<template>
  <div class="michael-timetable">
    <topicLinks :pages="pages" topic-page="Личное расписание"></topicLinks>
    <ul class="timetable-headlines-list list">
      <li
        v-for="headline in headlines"
        class="timetable-headlines-list-item"
        :key="headline.id"
      >
        <h1 class="main-headline">{{ headline }}</h1>
      </li>
    </ul>

    <article class="michael-info">
      <table class="timetable">
        <tr class="timetable-graph" v-for="graph in timetable" :key="graph.id">
          <th class="left-graph grey-graph">{{ graph.time }}</th>
          <th class="right-graph">{{ graph.action }}</th>
        </tr>
      </table>

      <staticData />
    </article>
  </div>
</template>

<script>
import staticData from "@/components/AsideData";
import topicLinks from "@/components/TopicLinks";
import store from "@/store/index.js";

export default {
  name: "Timetable",
  components: {
    staticData,
    topicLinks,
  },

  computed: {
    timetable() {
      return store.state.timetable;
    },
  },
  async mounted() {
    store.dispatch("fetchTimetable");
  },

  data() {
    return {
      headlines: [
        "Образовательная община",
        "Личное расписание для занятий онлайн",
      ],

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