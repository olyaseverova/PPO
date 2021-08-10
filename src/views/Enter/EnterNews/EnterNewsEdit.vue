<template>
  <div class="enter">
    <enterAside />

    <article class="news-edition">
      <topicLinks :pages="pages" topic-page="Добавление Новости"></topicLinks>
      <section class="name">
        <h1 class="main-headline">{{ news_headline }}</h1>
        <input
          class="news-content news-text"
          type="text"
          placeholder="Введите заголовок"
        />
        <label class="news-content news-date-label"
          >Дата
          <input class="news-date-input" type="date" placeholder="Дата" />
        </label>
        <section class="general-information">
          <textarea
            class="general-information-textarea"
            :placeholder="general_information"
            type="text"
            ref="information"
          ></textarea>
          <ul class="information-kinds-list list">
            <li
              v-for="kind in kinds"
              class="information-kinds-list-item"
              :key="kind.id"
            >
              <img
                :src="kind.src"
                :width="kind.width"
                :height="kind.height"
                :alt="kind.alt"
                @click="changeTextType"
              />
            </li>
          </ul>
        </section>
        <a class="download-link link">{{ download_link }}</a>
        <router-link to="/enter-news" class="grey-button link"
          >Добавить</router-link
        >
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
    topicLinks,
  },

  data() {
    return {
      news_headline: 'Новости',
      download_link: "Загрузить файл",
      pages: [{ href: "/enter-news", name: "Новости" }],
    };
  },
};
</script>
