<template>
  <div class="topic-michael">
    <ul class="timetable-links-list list">
      <li
        v-for="page in pages"
        class="timetable-links-list-item"
        :key="page.id"
      >
        <router-link :to="page.href" class="timetable-link link">{{
          page.name
        }}</router-link>
        <p class="slash p">/</p>
      </li>
    </ul>
    <p class="topic-michael-page">{{ topicPage }}</p>
  </div>
</template>

<script>
export default {
  name: "topicLinks",
  props: ['pages', 'topicPage']
};
</script>