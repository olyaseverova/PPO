<template>
  <div id="ControlAnalytics">
    <button
      class="control-button arrow_down"
      type="button"
      @click="showButtons"
    >
      Таблицы
    </button>
    <ul class="analytics-buttons-list list flex">
      <li
        v-for="button in control.buttons"
        class="analytics-buttons-list-item none"
        :id="button.id"
        :key="button.id"
      >
        <button
          class="grey-button"
          type="button"
          @click="showTable($event, '.analytics-list-item')"
          :class="{ active_button: button.status }"
          :id="button.id"
        >
          {{ button.name }}
        </button>
        <button
          class="grey-button"
          type="button"
          @click="showTable($event, '.analytics-mob-list-item')"
          :id="button.id"
          :class="{ active_button: button.status }"
        >
          {{ button.name }}
        </button>
      </li>
    </ul>

    <div class="control-desktop" id="analytics">
      <ul class="analytics-list list table" :id="analytic_id">
        <li
          v-for="analytic in control.analytics"
          class="analytics-list-item"
          :class="{ none: analytic.status }"
          :id="analytic.id"
          :key="analytic.id"
        >
          <table class="control-table">
            <tr
              class="control-table-line"
              v-for="cell in analytic.table"
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

    <div class="control-mob">
      <ul class="analytics-mob-list list ul">
        <li
          v-for="analytic in control.analytics_mob"
          class="analytics-mob-list-item"
          :class="{ none: analytic.status }"
          :id="analytic.id"
          :key="analytic.id"
        >
          <ul class="analytics-block-list list ul">
            <li
              v-for="community in analytic.block"
              class="analytics-block-list-item"
              :key="community.id"
            >
              <ul class="analytics-community-list list ul">
                <li
                  v-for="mob in community.analytic_community"
                  class="analytics-community-list-item"
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
import store from "@/store/index.js";

export default {
  name: "ControlAnalytics",

  computed: {
    control() {
      if (store.state.control.buttons) {
        store.state.control.buttons.forEach((p, i) => {
          p.status = i === 0;
        });
      }
      if (store.state.control.analytics) {
        store.state.control.analytics.forEach((p, i) => {
          p.id = "analytic" + (i + 1);
          p.status = i !== 0;
        });
      }
      if (store.state.control.analytics_mob) {
        store.state.control.analytics_mob.forEach((p, i) => {
          p.id = "analytic" + (i + 1);
          p.status = i !== 0;
        });
      }
      return store.state.control;
    },
  },
  async mounted() {
    store.dispatch("fetchControl");
  },

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
      var analytics = document.querySelectorAll(item);
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

      analytics.forEach(function (analytic) {
        analytic.classList.add("none");
        if (event.target.id === analytic.id) {
          analytic.classList.remove("none");
        }
      });
    },
  },
};
</script>
