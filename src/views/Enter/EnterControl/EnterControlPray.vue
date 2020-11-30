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
        { name: "Утренние молитвы", href: "/enter/control/pray" },
        {
          name: "Обучение чтению",
          href: "/enter/control/reading",
        },
        {
          name: "Просветительские беседы Свят. Николая",
          href: "/enter/control/pray"
        },
        {
          name: "Просветительские беседы Свят. Варвары",
          href: "/enter/control/pray"
        },
        {
          name: "Просветительские беседы о. Алипий",
          href: "/enter/control/pray"
        },
        { name: "Вечерние молитвы", href: "/enter/control/pray" },
        { name: "Общая молитва", href: "/enter/control/pray" },
      ],

      home: [
        {
          statistic_mob: [
            "Община архистратига Божия Михаила",
            "План",
            "92",
            "Онлайн",
            "69",
            "Храм",
            "5",
            "Отсутствуют",
            "18",
            "Факт",
            "74",
          ],
        },
        {
          statistic_mob: [
            "Община святителя Феофана Затворника",
            "План",
            "20",
            "Онлайн",
            "17",
            "Храм",
            "1",
            "Отсутствуют",
            "2",
            "Факт",
            "18",
          ],
        },
        {
          statistic_mob: [
            "Община святителя Николая",
            "План",
            "21",
            "Онлайн",
            "4",
            "Храм",
            "7",
            "Отсутствуют",
            "10",
            "Факт",
            "11",
          ],
        },
        {
          statistic_mob: [
            "Община архангела Гавриила",
            "План",
            "43",
            "Онлайн",
            "23",
            "Храм",
            "9",
            "Отсутствуют",
            "11",
            "Факт",
            "32",
          ],
        },
        {
          statistic_mob: [
            "Община великомученицы Варвары",
            "План",
            "15",
            "Онлайн",
            "14",
            "Храм",
            "0",
            "Отсутствуют",
            "1",
            "Факт",
            "14",
          ],
        },
        {
          statistic_mob: [
            "Община Рождества Богородицы",
            "План",
            "11",
            "Онлайн",
            "6",
            "Храм",
            "1",
            "Отсутствуют",
            "4",
            "Факт",
            "7",
          ],
        },
        {
          statistic_mob: [
            "Итого (общая статистика)",
            "План",
            "202",
            "Онлайн",
            "133",
            "Храм",
            "23",
            "Отсутствуют",
            "46",
            "Факт",
            "156",
          ],
        },
      ],
    };
  },
};
</script>