<template>
  <div class="enter">
    <enterAside />
    <article class="enter-control">
      <enterControlTopic :buttons="enter_control.buttons_enter_pray" />
      <ul class="enter-control-mob-list list">
        <li
          v-for="community in enter_control.enter_pray_statistics"
          class="enter-control-mob-list-item"
          :key="community.id"
        >
          <ul class="statistics-mob-list list">
            <li
              v-for="mob in community.statistic_mob"
              class="statistics-mob-list-item"
              :key="mob.id"
            >
              {{ mob }}
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import enterControlTopic from "@/components/EnterControlTopic";
import store from "@/store/index.js";

export default {
  name: "EnterControlPray",
  components: {
    enterAside,
    enterControlTopic,
  },

  computed: {
    enter_control() {
      return store.state.enter_control;
    },
  },
  async mounted() {
    store.dispatch("fetchEnterControl");
  },
};
</script>