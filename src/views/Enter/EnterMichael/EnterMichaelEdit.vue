<template>
  <div class="enter">
    <enterAside />

    <article class="enter-michael-edit">
      <topicLinks
        :pages="pages"
        topic-page="Редактирование материалов"
      ></topicLinks>

      <h1 class="main-headline">{{ materials_headline }}</h1>
      <input
        class="materials-input"
        type="text"
        :placeholder="morning_prayers"
      />
      <generalInfo
        general-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
      />
      <router-link to="/enter-michael" class="grey-button link">{{
        save
      }}</router-link>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import topicLinks from "@/components/TopicLinks";
import generalInfo from "@/components/GeneralInfo";

export default {
  name: "EnterNews",
  components: {
    enterAside,
    topicLinks,
    generalInfo,
  },

  data() {
    return {
      save: "Сохранить",
      morning_prayers: "Утренние занятия",
      reg_headline: "Редактируемые страницы",
      materials_headline: "Материалы для обучения",

      pages: [{ href: "/enter-michael", name: "Образовательная община" }],
    };
  },
};
</script>
