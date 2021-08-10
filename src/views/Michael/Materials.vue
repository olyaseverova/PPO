<template>
  <div class="michael-info michael-materials">
    <div class="left-side">
      <topicLinks
        :pages="pages"
        topic-page="Материалы для обучения"
      ></topicLinks>
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
import store from "@/store/index.js";

export default {
  name: "Materials",
  components: {
    staticData,
    topicLinks,
  },

  computed: {
    materials() {
      store.state.materials.forEach((p, i) => {
        p.status = i === 5;
      });
      return store.state.materials;
    },
  },
  async mounted() {
    store.dispatch("fetchMaterials");
  },

  data() {
    return {
      headlines: ["Образовательная община", "Материалы для обучения"],

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