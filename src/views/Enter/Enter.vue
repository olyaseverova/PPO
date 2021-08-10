<template>
  <div class="enter">
    <enterAside />

    <article class="enter-main">
      <h1 class="main-headline">{{ com_headline }}</h1>
      <ul class="communities-list list">
        <li
          v-for="community in enter"
          class="communities-list-item"
          :key="community.id"
        >
          <ul class="organizations-list list">
            <li
              v-for="organization in community.organizations"
              class="organizations-list-item flex"
              :id="organization.id"
              :key="organization.id"
            >
              <router-link
                :to="organization.href"
                class="organization-link link link-hvr-act"
                >{{ organization.name }}</router-link
              >
              <button
                class="data-button"
                type="button"
                @click="editItem('inputs')"
              ></button>
              <button
                class="data-button"
                type="button"
                @click="closeItem('.organizations-list-item')"
                :id="organization.id"
              ></button>
            </li>
          </ul>
          <a class="community-button" type="button">Добавить общину</a>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import store from "@/store/index.js";

export default {
  name: "Enter",
  components: {
    enterAside,
  },

  computed: {
    enter() {
      store.state.enter.forEach((p, i) => {
        p.id = "block" + (i + 1);
        p.organizations.forEach((o, n) => {
          o.id = p.id + "item" + (n + 1);
        });
      });
      return store.state.enter;
    },
  },
  async mounted() {
    store.dispatch("fetchEnter");
  },

  methods: {
    closeItem: function (data) {
      var blocks = document.querySelectorAll(data);
      blocks.forEach(function (block) {
        if (event.target.id === block.id) {
          block.classList.remove("flex");
          block.classList.add("none");
        }
      });
    },
  },

  data() {
    return {
      com_headline: "Редактирование общин",
    };
  },
};
</script>