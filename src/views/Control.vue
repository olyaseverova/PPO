<template>
  <div class="michael-analytics" id="control">
    <ul class="buttons-list list">
      <li
        v-for="button in top_buttons"
        class="buttons-list-item"
        :key="button.id"
      >
        <router-link :to="button.href" class="grey-button link">{{
          button.name
        }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      top_buttons: [
        {
          name: "Отчет по общинам",
          href: "/analytics",
        },
        {
          name: "Общая статистика",
          href: "/statistics",
        },
      ]
    };
  },
};
</script>
