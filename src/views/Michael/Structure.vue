<template>
  <div class="michael-structure">
    <topicLinks :pages="pages" topic-page="Структура общины"></topicLinks>
    <article class="michael-info">
      <div class="left-side">
        <ul class="main-headlines-list list">
          <li
            v-for="headline in headlines"
            class="main-headlines-item"
            :key="headline.id"
          >
            <h1 class="main-headline">{{ headline }}</h1>
          </li>
        </ul>
        <ul class="staff-list list">
          <li v-for="person in staff" class="staff-list-item" :key="person.id">
            <h3 class="person-role">{{ person.role }}</h3>
            <p class="person-name">{{ person.name }}</p>
            <p class="person-name">{{ person.name_2 }}</p>
          </li>
        </ul>
      </div>
      <staticData />
    </article>
  </div>
</template>

<script>
import staticData from "@/components/AsideData";
import topicLinks from "@/components/TopicLinks";

export default {
  name: "structure",
  components: {
    staticData,
    topicLinks,
  },

  data() {
    return {
      headlines: ["Община архистратига Михаила", "Структура общины"],

      pages: [
        { href: "/", name: "Общины" },
        {
          href: "/michael",
          name: "Община архистратига Михаила",
        },
      ],

      staff: [
        { role: "Настоятель:", name: "прот. Николай Соколов" },
        {
          role: "Клирики:",
          name: "иерей Иоанн Попович,",
          name_2: "прот. Вадим Бондаренко",
        },
        { role: "Екклесиарх:", name: "Мальченко А." },
        { role: "Регент:", name: "Угроватая Т." },
        { role: "Председатель приходского совета:", name: "Олищук Л.Д." },
        {
          role: "Попечительский совет:",
          name: "Голосенин И.А.,",
          name_2: " Олищук Л.Д.",
        },
      ],
    };
  },
};
</script>