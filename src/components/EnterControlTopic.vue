<template>
  <section class="enter-control-top">
    <button
      class="enter-control-top-button arrow_down"
      type="button"
      @click="showButtons"
    >
      Отчетные периоды
    </button>
    <label class="news-content news-date-label">
      <p class="news-date-label-text">21.09.2020</p>
      <input class="news-date-input" type="date" />
    </label>
    <router-link to="/enter-report" class="enter-control-top-link grey-button link">Редактировать</router-link>
    <ul class="analytics-buttons-list list flex">
      <li
        v-for="button in buttons"
        class="analytics-buttons-list-item none"
        :key="button.id"
      >
        <router-link :to="button.href" class="grey-button link">{{
          button.name
        }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "enterControlTopic",
  props: ["buttons"],

  methods: {
    showButtons: function () {
      event.target.classList.toggle("arrow");
      var buttonsItems = document.querySelectorAll(
        ".analytics-buttons-list-item"
      );
      buttonsItems.forEach(function (btn) {
        btn.classList.toggle("none");
      });
    },
  },
};
</script>