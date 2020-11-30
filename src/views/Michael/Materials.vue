<template>
  <div class="michael-info michael-materials">
    <div class="left-side">
      <topicLinks :pages="pages" topic-page="Материалы для обучения"></topicLinks>
      <ul class="timetable-headlines-list list">
        <li
          v-for="headline in headlines"
          class="timetable-headlines-list-item"
          :key="headline.id"
        >
          <h1 class="main-headline">{{ headline }}</h1>
        </li>
      </ul>
      <ul class="materials-list list">
        <li
          v-for="material in materials"
          class="materials-list-item"
          :class="{ 'new-material': material.status }"
          :key="material.id"
        >
          <h1 class="main-headline">{{ material.time }}</h1>
          <router-link :to="material.href" class="grey-button link">{{
            material.action
          }}</router-link>
        </li>
      </ul>
    </div>
    <staticData />
  </div>
</template>

<script>
import staticData from "@/components/AsideData";
import topicLinks from "@/components/TopicLinks";

export default {
  name: "Materials",
  components: {
    staticData,
    topicLinks
  },

  data() {
    return {
      headlines: ["Община архистратига Михаила", "Материалы для обучения"],

      pages: [
        { href: "/", name: "Общины" },
        {
          href: "/michael",
          name: "Община архистратига Михаила",
        },
      ],

      materials: [
        {
          time: "08:00",
          href: "/michael/prayer",
          action: "Утренние молитвы",
          status: false,
        },
        {
          action: "Помянник для общины  архистратига Божия Михаила",
          href: "/michael/prayer",
          status: false,
        },
        {
          action: "Помянник для общины святителя Феофана Затворника",
          href: "/michael/prayer",
          status: false,
        },
        {
          action: "Помянник для общины святителя Николая",
          href: "/michael/prayer",
          status: false,
        },
        {
          action: "Помянник для общины архангела Гавриила",
          href: "/michael/prayer",
          status: false,
        },
        {
          time: "08:50",
          action: "Последование ежедневного молебна",
          href: "/michael/prayer",
          status: true,
        },
      ],
    };
  },
};
</script>