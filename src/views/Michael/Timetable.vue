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

export default {
  name: "Timetable",
  components: {
    staticData,
    topicLinks,
  },

  data() {
    return {
      headlines: [
        "Община архистратига Михаила",
        "Личное расписание для молитв онлайн",
      ],

      pages: [
        { href: "/", name: "Общины" },
        {
          href: "/michael",
          name: "Община архистратига Михаила",
        },
      ],

      timetable: [
        { time: "", action: "06.08.2020 Четверг" },
        { time: "08:00", action: "Утренние молитвы" },
        { time: "12:00", action: "обучение чтению" },
        { time: "15:00", action: "дежурство в храме" },
        { time: "16:30", action: "Просветительские беседы" },
        { time: "17:30", action: "Вечерние молитвы" },
        { time: "18:00", action: "Соборная молитва" },
      ],
    };
  },
};
</script>