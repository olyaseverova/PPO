<template>
  <div class="enter">
    <enterAside />

    <article class="enter-michael-add">
      <topicLinks :pages="pages" topic-page="Добавление Материалов"></topicLinks>
      <h1 class="main-headline">{{ materials_headline }}</h1>
      <generalInfo :general-text="add_text" :general-input="general_information" />
      <router-link to="/enter-michael" class="grey-button link">{{
        grey_add
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
      grey_add: "Добавить",
      add_text: "Добавление текста",
      general_information: "Заголовок",
      materials_headline: "Материалы для обучения",
      pages: [{ href: "/enter-michael", name: "Образовательная община" }]
    };
  },
};
</script>
