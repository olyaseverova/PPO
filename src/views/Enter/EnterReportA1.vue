<template>
  <div class="enter">
    <enterAside />

    <article class="group-a1">
      <topicLinks :pages="pages" topic-page="A1"></topicLinks>
      <ul class="timetable-links-list list">
        <li
          v-for="link in links"
          class="timetable-links-list-item"
          :key="link.id"
        >
          <a class="timetable-link link" :href="link.href">{{ link.name }}</a>
          <p class="slash p">{{ link.slash }}</p>
        </li>
      </ul>

      <ul class="timetables-list list">
        <li
          v-for="timetable in timetables"
          class="timetables-list-item"
          :key="timetable.id"
        >
          <p class="timetable-group timetable-cell">{{ timetable.group }}</p>
          <button
            type="button"
            class="timetable-button timetable-cell"
            @click="showReports"
            :id="timetable.id"
          >
            {{ timetable.button }}
          </button>
        </li>
      </ul>

      <section class="report-periods none a1-block" id="report">
        <h1 class="main-headline">{{ report_periods_headline }}</h1>
        <periodsList />
      </section>

      <section class="people a1-block none" id="people">
        <ul class="people-list list">
          <li
            v-for="man in people"
            class="people-list-item flex"
            :id="man.id"
            :key="man.id"
          >
            <input
              class="man-input"
              type="text"
              :placeholder="man.name"
              :id="man.man_name"
            />
            <button
              class="data-button"
              type="button"
              @click="editItem('.man-input')"
              :id="man.man_name"
            ></button>
            <button
              class="data-button"
              type="button"
              @click="closeItem('.people-list-item')"
              :id="man.id"
            ></button>
          </li>
        </ul>
        <button type="button" class="grey-button">{{ grey_add }}</button>
      </section>

      <router-link to="/enter/report" class="grey-button link">{{
        save
      }}</router-link>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import topicLinks from "@/components/TopicLinks";
import periodsList from "@/components/PeriodsList";

export default {
  name: "EnterNews",
  components: {
    enterAside,
    topicLinks,
    periodsList,
  },

  methods: {
    showReports: function (event) {
      var blocks = document.querySelectorAll(".a1-block");
      blocks.forEach(function (block) {
        block.classList.add("none");
        if (event.target.id === block.id) {
          block.classList.toggle("none");
        }
      });
    },

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
  },

  data() {
    return {
      save: "Сохранить",
      grey_add: "Добавить",
      reg_headline: "Редактируемые страницы",

      pages: [{ href: "/enter/report", name: "Редактирование списка групп" }],

      timetables: [
        { group: "Группа", button: "А" },
        { group: "Конференция", button: "А1" },
        { group: "Отчетные периоды", button: "Посмотреть все", id: "report" },
        { group: "Люди", button: "Посмотреть все", id: "people" },
      ],

      people: [
        { name: "Имя Фамилия  Отчество", id: "1man", man_name: "name1" },
        { name: "Имя Фамилия  Отчество", id: "2man", man_name: "name2" },
        { name: "Имя Фамилия  Отчество", id: "3man", man_name: "name3" },
        { name: "Имя Фамилия  Отчество", id: "4man", man_name: "name4" },
        { name: "Имя Фамилия  Отчество", id: "5man", man_name: "name5" },
      ],
    };
  },
};
</script>