<template>
  <div class="michael-prayer michael-info">
    <topicLinks :pages="pages" :topic-page="prayer_headline"></topicLinks>
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
      prayer_headline: "Утренние занятия",

      pages: [
        { href: "/", name: "Общины" },
        {
          href: "/michael",
          name: "Образовательная община",
        },
        {
          href: "/michael/materials",
          name: "Материалы для обучения",
        },
      ],

      prayers: [
        { text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium", status: false },
        {
          text:
            "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et",
          status: false,
        },
        {
          text: "quasi architecto beatae vitae dicta sunt explicabo.",
          status: false,
        },
        { text: "учитель Игнатий Ковылов", status: true },
      ],
    };
  },
};
</script>
