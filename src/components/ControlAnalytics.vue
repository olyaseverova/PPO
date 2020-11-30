<template>
  <div id="ControlAnalytics" class="ControlAnalytics">
    <button
      class="control-button arrow-down"
      type="button"
      @click="showButtons"
    >
      Таблицы
    </button>
    <ul class="analytics-buttons-list list flex">
      <li
        v-for="button in buttons"
        class="analytics-buttons-list-item"
        :class="{ none: button.status }"
        :id="button.id"
        :key="button.id"
      >
        <button
          class="grey-button"
          type="button"
          @click="showTable($event, '.statistics-list-item')"
          :id="button.id"
          :class="{ active_button: button.status_button }"
        >
          {{ button.name }}
        </button>
        <button
          class="grey-button"
          type="button"
          @click="showTable($event, '.analytics-mob-list-item')"
          :id="button.id"
          :class="{ active_button: button.status_button }"
        >
          {{ button.name }}
        </button>
      </li>
    </ul>
    <div class="analytics-desktop" id="analytics">
      <ul class="statistics-list list table" :id="statistic_id">
        <li
          v-for="statistic in statistics"
          class="statistics-list-item"
          :class="{ none: statistic.status }"
          :id="statistic.id"
          :key="statistic.id"
        >
          <table class="statistic-table">
            <tr
              class="statistic-table-line"
              v-for="cell in statistic.table"
              :key="cell.id"
            >
              <th class="cell-th">{{ cell.th }}</th>
              <td class="cell-td">{{ cell.td_1 }}</td>
              <td class="cell-td">{{ cell.td_2 }}</td>
              <td class="cell-td">{{ cell.td_3 }}</td>
              <td class="cell-td">{{ cell.td_4 }}</td>
              <td class="cell-td">{{ cell.td_5 }}</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
    <div class="analytics-mob">
      <ul class="analytics-mob-list list">
        <li
          v-for="analytic in analytics"
          class="analytics-mob-list-item"
          :class="{ none: analytic.status }"
          :id="analytic.id"
          ref="mob_stats"
          :key="analytic.id"
        >
          <ul class="home-mob-list list">
            <li
              v-for="community in analytic.home"
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlAnalytics",
  methods: {
    showButtons: function (event) {
      event.target.classList.toggle("arrow");
      var buttonsItems = document.querySelectorAll(
        ".analytics-buttons-list-item"
      );
      buttonsItems.forEach(function (item) {
        item.classList.toggle("none");
      });
    },

    showTable: function (event, item) {
      var statistics = document.querySelectorAll(item);
      var activeButtons = document.querySelectorAll(".active_button");
      activeButtons.forEach(function (activeButton) {
        activeButton.classList.remove("active_button");
      });

      event.target.classList.add("active_button");
      var buttonsItems = document.querySelectorAll(
        ".analytics-buttons-list-item"
      );
      buttonsItems.forEach(function (item) {
        item.classList.toggle("none");
      });
      var controlButton = document.querySelector(".control-button");
      controlButton.classList.toggle("arrow");

      statistics.forEach(function (statistic) {
        statistic.classList.add("none");
        if (event.target.id === statistic.id) {
          statistic.classList.remove("none");
        }
      });
    },
  },
  data() {
    return {
      buttons: [
        {
          name: "Утренние молитвы",
          status: true,
          id: "statistic1",
          href: "/morningpray",
          status_button: true,
        },
        {
          name: "Обучение чтению",
          status: true,
          id: "statistic2",
          href: "/morningpray",
          status_button: false,
        },
        {
          name: "Просветительские беседы Свят. Николая",
          status: true,
          id: "3button",
          href: "/morningpray",
          status_button: false,
        },
        {
          name: "Просветительские беседы Свят. Варвары",
          status: true,
          id: "4button",
          href: "/morningpray",
          status_button: false,
        },
        {
          name: "Просветительские беседы о. Алипий",
          status: true,
          id: "5button",
          href: "/morningpray",
          status_button: false,
        },
        {
          name: "Вечерние молитвы",
          status: true,
          id: "6button",
          href: "/morningpray",
          status_button: false,
        },
        {
          name: "Общая молитва",
          status: true,
          id: "7button",
          href: "/morningpray",
          status_button: false,
        },
      ],

      statistics: [
        {
          headline: "Утренние молитвы",
          status: false,
          id: "statistic1",
          table: [
            {
              th: "Община",
              td_1: "План",
              td_2: "Онлайн",
              td_3: "Храм",
              td_4: "Отсутствуют",
              td_5: "Факт",
            },
            {
              th: "Община архистратига Божия Михаила",
              td_1: 92,
              td_2: 69,
              td_3: 5,
              td_4: 18,
              td_5: 74,
            },
            {
              th: "Община святителя Феофана Затворника",
              td_1: 20,
              td_2: 17,
              td_3: 1,
              td_4: 2,
              td_5: 19,
            },
            {
              th: "Община святителя Николая",
              td_1: 21,
              td_2: 4,
              td_3: 7,
              td_4: 10,
              td_5: 11,
            },
            {
              th: "Община архангела Гавриила",
              td_1: 43,
              td_2: 23,
              td_3: 9,
              td_4: 11,
              td_5: 32,
            },
            {
              th: "Община великомученицы Варвары",
              td_1: 15,
              td_2: 14,
              td_3: 0,
              td_4: 1,
              td_5: 14,
            },
            {
              th: "Община Рождества Богородицы",
              td_1: 11,
              td_2: 6,
              td_3: 1,
              td_4: 4,
              td_5: 7,
            },
            {
              th: "Итого",
              td_1: 202,
              td_2: 133,
              td_3: 23,
              td_4: 46,
              td_5: 156,
            },
          ],
        },
        {
          headline: "Обучение чтению",
          status: true,
          id: "statistic2",
          table: [
            {
              th: "Община",
              td_1: "План",
              td_2: "Онлайн",
              td_3: "Храм",
              td_4: "Отсутствуют",
              td_5: "Факт",
            },
            {
              th: "Община архистратига Божия Михаила",
              td_1: 14,
              td_2: 10,
              td_3: 0,
              td_4: 4,
              td_5: 10,
            },
            {
              th: "Община святителя Николая",
              td_1: 8,
              td_2: 3,
              td_3: 0,
              td_4: 5,
              td_5: 3,
            },
            {
              th: "Община великомученицы Варвары",
              td_1: 13,
              td_2: 10,
              td_3: 0,
              td_4: 3,
              td_5: 10,
            },
            {
              th: "Община Рождества Богородицы",
              td_1: 6,
              td_2: 0,
              td_3: 0,
              td_4: 6,
              td_5: 0,
            },
            { th: "Итого", td_1: 41, td_2: 23, td_3: 0, td_4: 18, td_5: 23 },
          ],
        },
      ],

      analytics: [
        {
          status: false,
          id: "statistic1",

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
                "Итого",
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
        },
        {
          status: true,
          id: "statistic2",

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
        },
      ],
    };
  },
};
</script>
