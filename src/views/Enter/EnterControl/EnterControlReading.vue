<template>
  <div class="enter">
    <enterAside />
    <article class="enter-control">
      <enterControlTopic :buttons="enter_control.buttons_enter_reading" />
      <ul class="enter-control-mob-list list">
        <li
          v-for="community in enter_control.enter_reading_statistics"
          class="enter-control-mob-list-item"
          :key="community.id"
        >
          <ul class="statistics-mob-list list">
            <li
              v-for="mob in community.statistic_mob"
              class="statistics-mob-list-item"
              :key="mob.id"
            >
              {{ mob }}
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import enterControlTopic from "@/components/EnterControlTopic";
import store from "@/store/index.js";

export default {
  name: "EnterControlPray",
  components: {
    enterAside,
    enterControlTopic,
  },

  computed: {
    enter_control() {
      return store.state.enter_control;
    },
  },
  async mounted() {
    store.dispatch("fetchEnterControl");
  },

  data() {
    return {
      buttons_enter_reading: [
        {
          name: "Обучение чтению",
          href: "/enter-control-reading",
        },
        { name: "Утренние занятия", href: "/enter-control-pray" },
        {
          name: "Просветительские беседы по истории",

          href: "/enter-control-pray",
        },
        {
          name: "Просветительские беседы по географии",

          href: "/enter-control-pray",
        },
        {
          name: "Занятия музыкой",

          href: "/enter-control-pray",
        },
        { name: "Вечерние занятия", href: "/enter-control-pray" },
        { name: "Общие занятия", href: "/enter-control-pray" },
      ],

      enter_reading_statistics: [
        {
          statistic_mob: [
            "Образовательная община",
            "План",
            "14",
            "Онлайн",
            "10",
            "Школа",
            "0",
            "Отсутствуют",
            "4",
            "Факт",
            "10",
          ],
        },
        {
          statistic_mob: [
            "Вторая община",
            "План",
            "8",
            "Онлайн",
            "3",
            "Школа",
            "0",
            "Отсутствуют",
            "5",
            "Факт",
            "3",
          ],
        },
        {
          statistic_mob: [
            "Четвертая община",
            "План",
            "13",
            "Онлайн",
            "10",
            "Школа",
            "0",
            "Отсутствуют",
            "3",
            "Факт",
            "10",
          ],
        },
        {
          statistic_mob: [
            "Пятая община",
            "План",
            "6",
            "Онлайн",
            "0",
            "Школа",
            "0",
            "Отсутствуют",
            "6",
            "Факт",
            "0",
          ],
        },
        {
          statistic_mob: [
            "Итого",
            "План",
            "41",
            "Онлайн",
            "23",
            "Школа",
            "0",
            "Отсутствуют",
            "18",
            "Факт",
            "23",
          ],
        },
      ],
    };
  },
};
</script>