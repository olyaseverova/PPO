<template>
  <div class="enter">
    <enterAside />

    <article class="enter-report">
      <h1 class="main-headline">{{ conferences_headline }}</h1>
      <ul class="buttons-list list">
        <li
          v-for="button in buttons"
          class="buttons-list-item"
          :key="button.id"
        >
          <button class="grey-button" type="button">{{ button }}</button>
        </li>
      </ul>

      <section class="report-periods">
        <h1 class="main-headline">{{ report_periods_headline }}</h1>
        <periodsList />
        <button type="button" class="grey-button">{{ add_period }}</button>
      </section>

      <section class="groups">
        <h1 class="main-headline">{{ groups_headline }}</h1>
        <ul class="home-list list">
          <li
            v-for="community in enter_report"
            class="home-list-item"
            :key="community.id"
          >
            <button
              :id="community.block"
              @click="push"
              class="community-button arrow_down"
              type="button"
              :class="{ arrow: community.status_arrow }"
            >
              {{ community.name }}
            </button>
            <ul
              class="organizations-list list"
              :id="community.block"
              :class="{ none: community.status }"
            >
              <li
                v-for="organization in community.organizations"
                class="organizations-list-item"
                :key="organization.id"
              >
                <router-link
                  :to="organization.href"
                  class="organization-link link link-hvr-act"
                  >{{ organization.name }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="bottom-buttons">
        <h1 class="main-headline">{{ bottom_buttons_headline }}</h1>
        <button class="grey-button" type="button">{{ bottom_button }}</button>
        <ul class="bottom-buttons-list list">
          <li
            v-for="button in bottom_buttons"
            class="bottom-buttons-list-item"
            :key="button.id"
          >
            <button class="grey-button" type="button">{{ button }}</button>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import periodsList from "@/components/PeriodsList";
import store from "@/store/index.js";

export default {
  name: "EnterReport",
  components: {
    enterAside,
    periodsList
  },

  computed: {
    enter_report() {
      store.state.enter_report.forEach((p, i) => {
       p.status = i !== 0;
       p.status_arrow = i === 0;
      });
      return store.state.enter_report;
    },
  },
  async mounted() {
    store.dispatch("fetchEnterReport");
  },

  methods: {
    closeItem: function (data) {
      var items = document.querySelectorAll(data);
      items.forEach(function (item) {
        if (event.target.id === item.id) {
          item.classList.add("none");
          item.classList.remove("flex");
        }
      });
    },

    editItem: function (data) {
      var inputs = document.querySelectorAll(data);
      inputs.forEach(function (input) {
        if (event.target.id === input.id) {
          input.focus();
        }
      });
    },

    push: function (event) {
      event.target.classList.toggle("arrow");
      var organizations = document.querySelectorAll(".organizations-list");
      organizations.forEach(function (organization) {
        if (event.target.id === organization.id) {
          if (organization.classList.contains("none")) {
            organization.classList.remove("none");
          } else {
            organization.classList.add("none");
          }
        }
      });
    },
  },

  data() {
    return {
      conferences_headline: "Конференции",
      report_periods_headline: "Отчетные периоды",
      add_period: "Добавить период",
      groups_headline: "Список групп",
      bottom_buttons_headline: "Община",
      bottom_button: "Добавить конференцию",
      reg_headline: "Редактируемые страницы",
      buttons: ["Генерировать отчет", "Добавить группу"],
      bottom_buttons: ["Совместное чтение", "КмВ"],
    };
  },
};
</script>