<template>
  <aside class="static-data" ref="static">
    <button class="community-button arrow_down" @click="push" type="button">
      {{ button_info }}
    </button>
    <ul class="contacts-list list none" ref="contacts">
      <li
        v-for="contact in contacts"
        class="contacts-list-item"
        :key="contact.id"
      >
        {{ contact }}
      </li>
    </ul>
    <ul class="pages-list list none" ref="pages">
      <li v-for="page in pages" class="pages-list-item" :key="page.id">
        <router-link :to="page.href" class="page-link link link-hvr-act">{{
          page.name
        }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "staticData",
  data() {
    return {
      button_info: "Контакты и др. информация",

      contacts: ["Адрес", "E-mail", "8 800 123 23 23"],

      pages: [
        { href: "/michael-structure", name: "Структура общины" },
        { href: "/michael-materials", name: "Материалы для обучения" },
        { href: "/michael-timetable", name: "Личное расписание" },
        { href: "/michael-news", name: "Внутренние новости" },
      ],
    };
  },

  methods: {
    push: function (event) {
      event.target.classList.toggle("arrow");
      if (this.$refs.contacts.classList.contains("none")) {
        this.$refs.contacts.classList.remove("none");
        this.$refs.pages.classList.remove("none");
        this.$refs.static.classList.add("shadow");
      } else {
        this.$refs.contacts.classList.add("none");
        this.$refs.pages.classList.add("none");
        this.$refs.static.classList.remove("shadow");
      }
    },
  },
};
</script>