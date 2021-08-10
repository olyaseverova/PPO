<template>
  <header>
    <button class="header-button" type="button" @click="openMenu">
      <img src="@/img/menu.png" width="18" height="16" alt="Меню" />
    </button>
    <ul class="tabs-list list none" ref="tabs">
      <li v-for="tab in tabs" class="tabs-list-item" :key="tab.id">
        <router-link :to="tab.href" class="tab-link link" @click="closeMenu">{{
          tab.name
        }}</router-link>
      </li>
    </ul>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: "Общины", href: "/" },
        { name: "Новости", href: "/news" },
        { name: "Общие распоряжения", href: "/orders" },
        { name: "Аналитика и контроль", href: "/analytics" },
        { name: "Отчет по общинам", href: "/analytics" },
        { name: "Общая статистика", href: "/statistics" },
        { name: "Вход/Регистрация", href: "/enter" },
        { name: "Уведомления", href: "/notifications" },
      ],
    };
  },

  methods: {
    openMenu: function (event) {
      event.target.classList.toggle("rotate");
      this.$refs.tabs.classList.toggle("none");
      this.$refs.tabs.classList.toggle("flex");
    },

    closeMenu: function () {
      this.$refs.tabs.classList.toggle("none");
      this.$refs.tabs.classList.toggle("flex");
    },
  },
};
</script>
