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
            v-for="community in home"
            class="home-list-item"
            :key="community.id"
          >
            <button
              :id="community.cycle"
              @click="push"
              class="community-button arrow-down"
              type="button"
              :class="{ arrow: community.status_arrow }"
            >
              {{ community.name }}
            </button>
            <ul
              class="organizations-list list"
              :id="community.cycle"
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
        <ul class="bottoms-buttons-list list">
          <li
            v-for="bottom in bottoms"
            class="bottoms-buttons-list-item"
            :key="bottom.id"
          >
            <button class="grey-button" type="button">{{ bottom }}</button>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import periodsList from "@/components/PeriodsList";

export default {
  name: "EnterReport",
  components: {
    enterAside,
    periodsList
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

      home: [
        {
          cycle: "1time",
          name: "A",
          status: false,
          status_arrow: true,
          organizations: [
            { href: "/enter/report/a1", name: "A1" },
            { href: "/enter/report/a1", name: "A2" },
            { href: "/enter/report/a1", name: "A3" },
            { href: "/enter/report/a1", name: "A4" },
            { href: "/enter/report/a1", name: "A5" },
            { href: "/enter/report/a1", name: "A6" },
            { href: "/enter/report/a1", name: "A7" },
            { href: "/enter/report/a1", name: "A8" },
            { href: "/enter/report/a1", name: "A9" },
            { href: "/enter/report/a1", name: "A10" },
            { href: "/enter/report/a1", name: "A11" },
            { href: "/enter/report/a1", name: "A12" },
            { href: "/enter/report/a1", name: "A13" },
            { href: "/enter/report/a1", name: "A14" },
            { href: "/enter/report/a1", name: "A15" },
            { href: "/enter/report/a1", name: "A16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "2time",
          name: "B",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "B1" },
            { href: "/enter/report/a1", name: "B2" },
            { href: "/enter/report/a1", name: "B3" },
            { href: "/enter/report/a1", name: "B4" },
            { href: "/enter/report/a1", name: "B5" },
            { href: "/enter/report/a1", name: "B6" },
            { href: "/enter/report/a1", name: "B7" },
            { href: "/enter/report/a1", name: "B8" },
            { href: "/enter/report/a1", name: "B9" },
            { href: "/enter/report/a1", name: "B10" },
            { href: "/enter/report/a1", name: "B11" },
            { href: "/enter/report/a1", name: "B12" },
            { href: "/enter/report/a1", name: "B13" },
            { href: "/enter/report/a1", name: "B14" },
            { href: "/enter/report/a1", name: "B15" },
            { href: "/enter/report/a1", name: "B16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "3time",
          name: "C",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "C1" },
            { href: "/enter/report/a1", name: "C2" },
            { href: "/enter/report/a1", name: "C3" },
            { href: "/enter/report/a1", name: "C4" },
            { href: "/enter/report/a1", name: "C5" },
            { href: "/enter/report/a1", name: "C6" },
            { href: "/enter/report/a1", name: "C7" },
            { href: "/enter/report/a1", name: "C8" },
            { href: "/enter/report/a1", name: "C9" },
            { href: "/enter/report/a1", name: "C10" },
            { href: "/enter/report/a1", name: "C11" },
            { href: "/enter/report/a1", name: "C12" },
            { href: "/enter/report/a1", name: "C13" },
            { href: "/enter/report/a1", name: "C14" },
            { href: "/enter/report/a1", name: "C15" },
            { href: "/enter/report/a1", name: "C16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "4time",
          name: "D",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "D1" },
            { href: "/enter/report/a1", name: "D2" },
            { href: "/enter/report/a1", name: "D3" },
            { href: "/enter/report/a1", name: "D4" },
            { href: "/enter/report/a1", name: "D5" },
            { href: "/enter/report/a1", name: "D6" },
            { href: "/enter/report/a1", name: "D7" },
            { href: "/enter/report/a1", name: "D8" },
            { href: "/enter/report/a1", name: "D9" },
            { href: "/enter/report/a1", name: "D10" },
            { href: "/enter/report/a1", name: "D11" },
            { href: "/enter/report/a1", name: "D12" },
            { href: "/enter/report/a1", name: "D13" },
            { href: "/enter/report/a1", name: "D14" },
            { href: "/enter/report/a1", name: "D15" },
            { href: "/enter/report/a1", name: "D16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "5time",
          name: "Dn",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "Dn1" },
            { href: "/enter/report/a1", name: "Dn2" },
            { href: "/enter/report/a1", name: "Dn3" },
            { href: "/enter/report/a1", name: "Dn4" },
            { href: "/enter/report/a1", name: "Dn5" },
            { href: "/enter/report/a1", name: "Dn6" },
            { href: "/enter/report/a1", name: "Dn7" },
            { href: "/enter/report/a1", name: "Dn8" },
            { href: "/enter/report/a1", name: "Dn9" },
            { href: "/enter/report/a1", name: "Dn10" },
            { href: "/enter/report/a1", name: "Dn11" },
            { href: "/enter/report/a1", name: "Dn12" },
            { href: "/enter/report/a1", name: "Dn13" },
            { href: "/enter/report/a1", name: "Dn14" },
            { href: "/enter/report/a1", name: "Dn15" },
            { href: "/enter/report/a1", name: "Dn16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "6time",
          name: "E",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "E1" },
            { href: "/enter/report/a1", name: "E2" },
            { href: "/enter/report/a1", name: "E3" },
            { href: "/enter/report/a1", name: "E4" },
            { href: "/enter/report/a1", name: "E5" },
            { href: "/enter/report/a1", name: "E6" },
            { href: "/enter/report/a1", name: "E7" },
            { href: "/enter/report/a1", name: "E8" },
            { href: "/enter/report/a1", name: "E9" },
            { href: "/enter/report/a1", name: "E10" },
            { href: "/enter/report/a1", name: "E11" },
            { href: "/enter/report/a1", name: "E12" },
            { href: "/enter/report/a1", name: "E13" },
            { href: "/enter/report/a1", name: "E14" },
            { href: "/enter/report/a1", name: "E15" },
            { href: "/enter/report/a1", name: "E16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "7time",
          name: "Kr",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "Kr1" },
            { href: "/enter/report/a1", name: "Kr2" },
            { href: "/enter/report/a1", name: "Kr3" },
            { href: "/enter/report/a1", name: "Kr4" },
            { href: "/enter/report/a1", name: "Kr5" },
            { href: "/enter/report/a1", name: "Kr6" },
            { href: "/enter/report/a1", name: "Kr7" },
            { href: "/enter/report/a1", name: "Kr8" },
            { href: "/enter/report/a1", name: "Kr9" },
            { href: "/enter/report/a1", name: "Kr10" },
            { href: "/enter/report/a1", name: "Kr11" },
            { href: "/enter/report/a1", name: "Kr12" },
            { href: "/enter/report/a1", name: "Kr13" },
            { href: "/enter/report/a1", name: "Kr14" },
            { href: "/enter/report/a1", name: "Kr15" },
            { href: "/enter/report/a1", name: "Kr16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "8time",
          name: "Кф",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "Кф1" },
            { href: "/enter/report/a1", name: "Кф2" },
            { href: "/enter/report/a1", name: "Кф3" },
            { href: "/enter/report/a1", name: "Кф4" },
            { href: "/enter/report/a1", name: "Кф5" },
            { href: "/enter/report/a1", name: "Кф6" },
            { href: "/enter/report/a1", name: "Кф7" },
            { href: "/enter/report/a1", name: "Кф8" },
            { href: "/enter/report/a1", name: "Кф9" },
            { href: "/enter/report/a1", name: "Кф10" },
            { href: "/enter/report/a1", name: "Кф11" },
            { href: "/enter/report/a1", name: "Кф12" },
            { href: "/enter/report/a1", name: "Кф13" },
            { href: "/enter/report/a1", name: "Кф14" },
            { href: "/enter/report/a1", name: "Кф15" },
            { href: "/enter/report/a1", name: "Кф16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "9time",
          name: "O",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "O1" },
            { href: "/enter/report/a1", name: "O2" },
            { href: "/enter/report/a1", name: "O3" },
            { href: "/enter/report/a1", name: "O4" },
            { href: "/enter/report/a1", name: "O5" },
            { href: "/enter/report/a1", name: "O6" },
            { href: "/enter/report/a1", name: "O7" },
            { href: "/enter/report/a1", name: "O8" },
            { href: "/enter/report/a1", name: "O9" },
            { href: "/enter/report/a1", name: "O10" },
            { href: "/enter/report/a1", name: "O11" },
            { href: "/enter/report/a1", name: "O12" },
            { href: "/enter/report/a1", name: "O13" },
            { href: "/enter/report/a1", name: "O14" },
            { href: "/enter/report/a1", name: "O15" },
            { href: "/enter/report/a1", name: "O16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
        {
          cycle: "10time",
          name: "Км",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/enter/report/a1", name: "Км1" },
            { href: "/enter/report/a1", name: "Км2" },
            { href: "/enter/report/a1", name: "Км3" },
            { href: "/enter/report/a1", name: "Км4" },
            { href: "/enter/report/a1", name: "Км5" },
            { href: "/enter/report/a1", name: "Км6" },
            { href: "/enter/report/a1", name: "Км7" },
            { href: "/enter/report/a1", name: "Км8" },
            { href: "/enter/report/a1", name: "Км9" },
            { href: "/enter/report/a1", name: "Км10" },
            { href: "/enter/report/a1", name: "Км11" },
            { href: "/enter/report/a1", name: "Км12" },
            { href: "/enter/report/a1", name: "Км13" },
            { href: "/enter/report/a1", name: "Км14" },
            { href: "/enter/report/a1", name: "Км15" },
            { href: "/enter/report/a1", name: "Км16" },
            { href: "/enter/report/a1", name: "Добавить конференцию" },
          ],
        },
      ],

      bottoms: ["Совместная молитва", "КмВ"],
    };
  },
};
</script>