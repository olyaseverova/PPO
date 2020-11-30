<template>
  <div class="enter">
    <enterAside />
    <article class="enter-control">
      <enterControlTopic :buttons="buttons" />
      <ul class="home-mob-list list">
        <li
          v-for="community in home"
          class="home-mob-list-item"
          :key="community.id"
        >
          <ul class="statistic-mob-list list">
            <li
              v-for="mob in community.statistic_mob"
              class="statistic-mob-list-item"
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

export default {
  name: "EnterControlPray",
  components: {
    enterAside,
    enterControlTopic,
  },

  data() {
    return {
      buttons: [
        {
          name: "Обучение чтению",
          href: "/enter/control/reading",
        },
        { name: "Утренние молитвы", href: "/enter/control/pray" },
        {
          name: "Просветительские беседы Свят. Николая",

          href: "/enter/control/pray",
        },
        {
          name: "Просветительские беседы Свят. Варвары",

          href: "/enter/control/pray",
        },
        {
          name: "Просветительские беседы о. Алипий",

          href: "/enter/control/pray",
        },
        { name: "Вечерние молитвы", href: "/enter/control/pray" },
        { name: "Общая молитва", href: "/enter/control/pray" },
      ],

      home: [
        {
          statistic_mob: [
            "Община архистратига Божия Михаила",
            "План",
            "14",
            "Онлайн",
            "10",
            "Храм",
            "0",
            "Отсутствуют",
            "4",
            "Факт",
            "10",
          ],
        },
        {
          statistic_mob: [
            "Община святителя Николая",
            "План",
            "8",
            "Онлайн",
            "3",
            "Храм",
            "0",
            "Отсутствуют",
            "5",
            "Факт",
            "3",
          ],
        },
        {
          statistic_mob: [
            "Община великомученицы Варвары",
            "План",
            "13",
            "Онлайн",
            "10",
            "Храм",
            "0",
            "Отсутствуют",
            "3",
            "Факт",
            "10",
          ],
        },
        {
          statistic_mob: [
            "Община Рождества Богородицы",
            "План",
            "6",
            "Онлайн",
            "0",
            "Храм",
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
            "Храм",
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