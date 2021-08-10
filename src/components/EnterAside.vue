<template>
  <aside class="enter-aside">
    <h1 class="main-headline">{{ reg_headline }}</h1>
    <ul class="redacts-list list">
      <li v-for="redact in redacts" class="redacts-list-item" :key="redact.id">
        <router-link :to="redact.href" class="redact-link link">{{
          redact.name
        }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "EnterAside",

  data() {
    return {
      reg_headline: "Редактируемые страницы",

      redacts: [
        { name: "Общины", href: "/enter" },
        { name: "Новости", href: "/enter-news" },
        { name: "Общие распоряжения", href: "/enter-orders" },
        {
          name: "Аналитика и контроль",
          href: "/enter-control-pray",
        },
      ],
    };
  },
};
</script>