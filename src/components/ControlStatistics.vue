<template>
  <div id="ControlStatistics">
    <div class="control-desktop">
      <table class="statistics-table control-table table" :id="statistic_id">
        <tr
          class="statistics-table-line"
          v-for="statistic in control.statistics"
          :key="statistic.id"
        >
          <th
            class="statistic-th"
            :class="{
              'border-bot-none': statistic.status,
              'border-top-none': statistic.status_top,
            }"
          >
            {{ statistic.th }}
          </th>
          <td
            class="statistic-td"
            :class="{
              'border-bot-none': statistic.status,
              'border-top-none': statistic.status_top,
            }"
          >
            {{ statistic.td_1 }}
          </td>
          <td
            class="statistic-td"
            :class="{
              'border-bot-none': statistic.status,
              'border-top-none': statistic.status_top,
            }"
          >
            {{ statistic.td_2 }}
          </td>
          <td class="statistic-td" :colspan="statistic.colspan_5">
            {{ statistic.td_3 }}
          </td>
          <td class="statistic-td">{{ statistic.td_4 }}</td>
          <td class="statistic-td" :class="{ none: statistic.status }">
            {{ statistic.td_5 }}
          </td>
          <td class="statistic-td" :class="{ none: statistic.status }">
            {{ statistic.td_6 }}
          </td>
          <td class="statistic-td" :class="{ none: statistic.status }">
            {{ statistic.td_7 }}
          </td>
          <td class="statistic-td" :class="{ none: statistic.status }">
            {{ statistic.td_8 }}
          </td>
        </tr>
      </table>
    </div>

    <div class="control-mob">
      <ul class="statistics-mob-list list">
        <li
          v-for="mob in control.statistics_mob"
          class="statistics-mob-list-item"
          :key="mob.id"
        >
          <h3 class="statistics-mob-cell grey-button">{{ mob.headline }}</h3>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number }}
          </p>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data2 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number2 }}
          </p>
          <h3 class="statistics-mob-cell statistics-mob-online">
            {{ mob.online }}
          </h3>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data3 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number3 }}
          </p>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data4 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number4 }}
          </p>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data5 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number5 }}
          </p>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data6 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number6 }}
          </p>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data7 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number7 }}
          </p>
          <p class="statistics-mob-cell statistics-mob-data">{{ mob.data8 }}</p>
          <p class="statistics-mob-cell statistics-mob-number">
            {{ mob.number8 }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Statistics",

  computed: {
    control() {
      if (store.state.control.statistics) {
        store.state.control.statistics.forEach((p, i) => {
          p.status = i === 0;
          p.status_top = i === 1;
        });
      }
      return store.state.control;
    },
  },
  async mounted() {
    store.dispatch("fetchControl");
  },

  data() {
    return {
      statistic_id: "statistic",
    };
  },
};
</script>

