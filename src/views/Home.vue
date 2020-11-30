<template>
  <div class="home" id="home">
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
        <div class="community-content" :id="community.cycle">
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
export default {
  name: "Home",

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

  data() {
    return {
      home: [
        {
          cycle: "1time",
          name: "ДБ D1",
          status: false,
          status_arrow: true,
          organizations: [
            { href: "/Michael", name: "Община архистратига Михаила" },
            { href: "/Michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/Michael", name: "Свято-Введенская община" },
            { href: "/Michael", name: "Свято-Николаевская община" },
            { href: "/Michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/Michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/Michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/Michael", name: "Свято-Параскевская община" },
          ],
        },
        {
          cycle: "2time",
          name: "ДБ D2",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/Michael", name: "Община архистратига Михаила" },
            { href: "/Michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/Michael", name: "Свято-Введенская община" },
            { href: "/Michael", name: "Свято-Николаевская община" },
            { href: "/Michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/Michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/Michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/Michael", name: "Свято-Параскевская община" },
          ],
        },
        {
          cycle: "3time",
          name: "Агротис",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/Michael", name: "Община архистратига Михаила" },
            { href: "/Michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/Michael", name: "Свято-Введенская община" },
            { href: "/Michael", name: "Свято-Николаевская община" },
            { href: "/Michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/Michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/Michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/Michael", name: "Свято-Параскевская община" },
          ],
        },
        {
          cycle: "4time",
          name: "Москва",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/Michael", name: "Община архистратига Михаила" },
            { href: "/Michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/Michael", name: "Свято-Введенская община" },
            { href: "/Michael", name: "Свято-Николаевская община" },
            { href: "/Michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/Michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/Michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/Michael", name: "Свято-Параскевская община" },
          ],
        },
        {
          cycle: "5time",
          name: "Кузбасс",
          status: true,
          status_arrow: false,
          organizations: [
            { href: "/Michael", name: "Община архистратига Михаила" },
            { href: "/Michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/Michael", name: "Свято-Введенская община" },
            { href: "/Michael", name: "Свято-Николаевская община" },
            { href: "/Michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/Michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/Michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/Michael", name: "Свято-Параскевская община" },
          ],
        },
      ],
    };
  },
};
</script>

