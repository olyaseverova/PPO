<template>
  <div class="home" id="home">
    <ul class="communities-list list">
      <li
        v-for="community in communities"
        class="communities-list-item"
        :key="community.id"
      >
        <button
          :id="community.id"
          @click="push"
          class="community-button arrow_down"
          type="button"
          :class="{ arrow: community.status_arrow }"
        >
          {{ community.name }}
        </button>
        <div class="community-content" :id="community.id">
          <ul
            class="organizations-list list"
            ref="organizations"
            :class="{ none: community.status }"
          >
            <li
              v-for="organization in community.organizations"
              class="organizations-list-item"
              :key="organization.id"
            >
              <router-link :to="organization.href" class="link link-hvr-act">{{
                organization.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Home",

  computed: {
    communities() {
      store.state.communities.forEach((p, i) => {
        p.status = i !== 0;
        p.status_arrow = i === 0;
        p.id = i;
      });
      return store.state.communities;
    },
  },
  async mounted() {
    store.dispatch("fetchPosts");
  },

  methods: {
    push: function (event) {
      event.target.classList.toggle("arrow");
      var contentItems = document.querySelectorAll(".community-content");
      contentItems.forEach(function (content) {
        if (event.target.id === content.id) {
          var organization = content.querySelector(".organizations-list");
          if (organization.classList.contains("none")) {
            organization.classList.remove("none");
          } else {
            organization.classList.add("none");
          }
        }
      });
    },
  },
};
</script>
