<template>
  <div class="michael-analytics" id="statistics">
    <div class="analytics-desktop">
      <table
        class="reports-table statistic-table table"
        ref="report"
        :id="report_id"
      >
        <tr
          class="reports-table-line"
          v-for="report in reports"
          :key="report.id"
        >
          <th
            class="report-th"
            :class="{
              'border-bot-none': report.status_bot,
              'border-top-none': report.status_top,
            }"
          >
            {{ report.th }}
          </th>
          <td
            class="report-td"
            :class="{
              'border-bot-none': report.status_bot,
              'border-top-none': report.status_top,
            }"
          >
            {{ report.td_1 }}
          </td>
          <td
            class="report-td"
            :class="{
              'border-bot-none': report.status_bot,
              'border-top-none': report.status_top,
            }"
          >
            {{ report.td_2 }}
          </td>
          <td class="report-td" :colspan="report.colspan_5">
            {{ report.td_3 }}
          </td>
          <td class="report-td">{{ report.td_4 }}</td>
          <td class="report-td" :class="{ none: report.status }">
            {{ report.td_5 }}
          </td>
          <td class="report-td" :class="{ none: report.status }">
            {{ report.td_6 }}
          </td>
          <td class="report-td" :class="{ none: report.status }">
            {{ report.td_7 }}
          </td>
          <td class="report-td" :class="{ none: report.status }">
            {{ report.td_8 }}
          </td>
        </tr>
      </table>
    </div>

    <div class="analytics-mob">
      <ul class="generals-mob-list list">
        <li
          v-for="general in generals"
          class="generals-mob-list-item"
          :key="general.id"
        >
          <h3 class="general-cell grey-button">{{ general.headline }}</h3>
          <p class="general-cell general-data">{{ general.data }}</p>
          <p class="general-cell general-number">{{ general.number }}</p>
          <p class="general-cell general-data">{{ general.data2 }}</p>
          <p class="general-cell general-number">{{ general.number2 }}</p>
          <h3 class="general-cell general-online">{{ general.online }}</h3>
          <p class="general-cell general-data">{{ general.data3 }}</p>
          <p class="general-cell general-number">{{ general.number3 }}</p>
          <p class="general-cell general-data">{{ general.data4 }}</p>
          <p class="general-cell general-number">{{ general.number4 }}</p>
          <p class="general-cell general-data">{{ general.data5 }}</p>
          <p class="general-cell general-number">{{ general.number5 }}</p>
          <p class="general-cell general-data">{{ general.data6 }}</p>
          <p class="general-cell general-number">{{ general.number6 }}</p>
          <p class="general-cell general-data">{{ general.data7 }}</p>
          <p class="general-cell general-number">{{ general.number7 }}</p>
          <p class="general-cell general-data">{{ general.data8 }}</p>
          <p class="general-cell general-number">{{ general.number8 }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      statistic_id: "statistic",
      report_id: "report",

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

      generals: [
        {
          headline: "Община архистратига Божия Михаила",
          data: "Всего",
          number: "195",
          data2: "План онлайн",
          number2: "119",
          online: "Факт онлайн за последние 7 дней",
          data3: "Читало",
          number3: "84",
          data4: "Обучалось",
          number4: "29",
          data5: "Беседы",
          number5: "67",
          data6: "Общая молитва",
          number6: "92",
          data7: "Не участвовали",
          number7: "15",
          data8: "Не охвачено",
          number8: "76",
        },
        {
          headline: "Община святителя Феофана Затворника",
          data: "Всего",
          number: "24",
          data2: "План онлайн",
          number2: "21",
          online: "Факт онлайн за последние 7 дней",
          data3: "Читало",
          number3: "18",
          data4: "Обучалось",
          number4: "0",
          data5: "Беседы",
          number5: "16",
          data6: "Общая молитва",
          number6: "20",
          data7: "Не участвовали",
          number7: "1",
          data8: "Не охвачено",
          number8: "3",
        },
        {
          headline: "Община святителя Николая",
          data: "Всего",
          number: "48",
          data2: "План онлайн",
          number2: "48",
          online: "Факт онлайн за последние 7 дней",
          data3: "Читало",
          number3: "18",
          data4: "Обучалось",
          number4: "7",
          data5: "Беседы",
          number5: "30",
          data6: "Общая молитва",
          number6: "22",
          data7: "Не участвовали",
          number7: "17",
          data8: "Не охвачено",
          number8: "0",
        },
        {
          headline: "Община архангела Гавриила",
          data: "Всего",
          number: "167",
          data2: "План онлайн",
          number2: "73",
          online: "Факт онлайн за последние 7 дней",
          data3: "Читало",
          number3: "35",
          data4: "Обучалось",
          number4: "0",
          data5: "Беседы",
          number5: "25",
          data6: "Общая молитва",
          number6: "44",
          data7: "Не участвовали",
          number7: "29",
          data8: "Не охвачено",
          number8: "94",
        },
        {
          headline: "Община великомученицы Варвары",
          data: "Всего",
          number: "68",
          data2: "План онлайн",
          number2: "67",
          online: "Факт онлайн за последние 7 дней",
          data3: "Читало",
          number3: "14",
          data4: "Обучалось",
          number4: "23",
          data5: "Беседы",
          number5: "34",
          data6: "Общая молитва",
          number6: "62",
          data7: "Не участвовали",
          number7: "5",
          data8: "Не охвачено",
          number8: "1",
        },
        {
          headline: "Община Рождества Богородицы",
          data: "Всего",
          number: "786",
          data2: "План онлайн",
          number2: "23",
          online: "Факт онлайн за последние 7 дней",
          data3: "Читало",
          number3: "9",
          data4: "Обучалось",
          number4: "8",
          data5: "Беседы",
          number5: "0",
          data6: "Общая молитва",
          number6: "11",
          data7: "Не участвовали",
          number7: "6",
          data8: "Не охвачено",
          number8: "736",
        },
      ],

      reports: [
        {
          th: "",
          td_1: "",
          td_2: "",
          td_3: "Факт онлайн за последние 7 дней",
          td_8: "",
          colspan_5: 5,
          colspan_0: 0,
          status: true,
          status_bot: true,
        },
        {
          th: "Община",
          td_1: "Всего",
          td_2: "План онлайн",
          td_3: "Читало",
          td_4: "Обучалось",
          td_5: "Беседы",
          td_6: "Общая молитва",
          td_7: "Не участвовали",
          td_8: "Не охвачено",
          status_top: true,
        },
        {
          th: "Община архистратига Божия Михаила",
          td_1: 195,
          td_2: 119,
          td_3: 84,
          td_4: 29,
          td_5: 67,
          td_6: 92,
          td_7: 15,
          td_8: 76,
        },
        {
          th: "Община святителя Феофана Затворника",
          td_1: 24,
          td_2: 21,
          td_3: 18,
          td_4: 0,
          td_5: 16,
          td_6: 20,
          td_7: 1,
          td_8: 3,
        },
        {
          th: "Община святителя Николая",
          td_1: 48,
          td_2: 48,
          td_3: 18,
          td_4: 7,
          td_5: 30,
          td_6: 22,
          td_7: 17,
          td_8: 0,
        },
        {
          th: "Община архангела Гавриила",
          td_1: 167,
          td_2: 73,
          td_3: 35,
          td_4: 0,
          td_5: 25,
          td_6: 44,
          td_7: 29,
          td_8: 94,
        },
        {
          th: "Община великомученицы Варвары",
          td_1: 68,
          td_2: 67,
          td_3: 14,
          td_4: 23,
          td_5: 34,
          td_6: 62,
          td_7: 5,
          td_8: 1,
        },
        {
          th: "Община Рождества Богородицы",
          td_1: 786,
          td_2: 23,
          td_3: 9,
          td_4: 8,
          td_5: 0,
          td_6: 11,
          td_7: 6,
          td_8: 736,
        },
      ],
    };
  },
};
</script>

