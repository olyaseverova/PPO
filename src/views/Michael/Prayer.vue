<template>
  <div class="michael-prayer michael-info">
    <topicLinks :pages="pages" :topic-page=prayer_headline></topicLinks>
    <div class="left-side">
      <h1 class="main-headline">{{ prayer_headline }}</h1>
      <ul class="prayers-list list">
        <li
          v-for="prayer in prayers"
          class="prayers-list-item"
          :key="prayer.id"
        >
          <p class="prayer-text" :class="{ 'indent-prayer': prayer.status }">
            {{ prayer.text }}
          </p>
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
  name: "Prayer",
  components: {
    staticData,
    topicLinks,
  },

  data() {
    return {
      prayer_headline: "Утренние молитвы",

      pages: [
        { href: "/", name: "Общины" },
        {
          href: "/michael",
          name: "Община архистратига Михаила",
        },
        {
          href: "/michael/materials",
          name: "Материалы для обучения",
        },
      ],

      prayers: [
        { text: "Святые отцы о молитве", status: false },
        {
          text:
            "От деятельности по своей воле и по своему разуму немедленно явится попечительность о себе, предстанут",
          status: false,
        },
        {
          text: "уму различные соображения... уничтожат внимательную молитву.",
          status: false,
        },
        { text: "святитель Игнатий Брянчанинов", status: true },
      ],
    };
  },
};
</script>