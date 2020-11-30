<template>
  <div class="enter">
    <enterAside />

    <article class="enter-main">
      <h1 class="main-headline">{{ com_headline }}</h1>
      <ul class="home-list list">
        <li
          v-for="community in home"
          class="home-list-item"
          :key="community.id"
        >
          <ul
            class="organizations-list list"
            :id="community.cycle"
            ref="organizations"
          >
            <li
              v-for="organization in community.organizations"
              class="organizations-list-item flex"
              :id="organization.id"
              :key="organization.id"
            >
              <router-link
                :to="organization.href"
                class="organization-link link link-hvr-act"
                @click="closeMenu"
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

export default {
  name: "Enter",
  components: {
    enterAside,
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

      home: [
        {
          cycle: "1time",
          name: "ДБ D1",
          organizations: [
            { href: "/enter/michael", name: "ДБ D1", id: "item_1" },
            {
              href: "/enter/michael",
              name: "Община архистратига Михаила",
              id: "item_2",
            },
            {
              href: "/enter/michael",
              name: "Рождества Пресвятой Богородицы",
              id: "item_3",
            },
            {
              href: "/enter/michael",
              name: "Свято-Введенская община",
              id: "item_4",
            },
            {
              href: "/enter/michael",
              name: "Свято-Николаевская община",
              id: "item_5",
            },
            {
              href: "/enter/michael",
              name: "Община Свт.Игнатия Мариупольского",
              id: "item_6",
            },
            {
              href: "/enter/michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
              id: "item_7",
            },
            {
              href: "/enter/michael",
              name: "Община Вмч.Пантелеимона Целителя",
              id: "item_8",
            },
            {
              href: "/enter/michael",
              name: "Свято-Параскевская община",
              id: "item_9",
            },
          ],
        },
        {
          cycle: "2time",
          name: "ДБ D2",
          id: "item_2",
          organizations: [
            { href: "/enter/michael", name: "ДБ D2", id: "item_10" },
            {
              href: "/enter/michael",
              name: "Община архистратига Михаила",
              id: "item_11",
            },
            {
              href: "/enter/michael",
              name: "Рождества Пресвятой Богородицы",
              id: "item_12",
            },
            {
              href: "/enter/michael",
              name: "Свято-Введенская община",
              id: "item_13",
            },
            {
              href: "/enter/michael",
              name: "Свято-Николаевская община",
              id: "item_14",
            },
            {
              href: "/enter/michael",
              name: "Община Свт.Игнатия Мариупольского",
              id: "item_15",
            },
            {
              href: "/enter/michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
              id: "item_16",
            },
            {
              href: "/enter/michael",
              name: "Община Вмч.Пантелеимона Целителя",
              id: "item_17",
            },
            {
              href: "/enter/michael",
              name: "Свято-Параскевская община",
              id: "item_18",
            },
          ],
        },
        {
          cycle: "3time",
          name: "Агротис",
          id: "item_3",
          organizations: [
            { href: "/enter/michael", name: "Агротис" },
            { href: "/enter/michael", name: "Община архистратига Михаила" },
            { href: "/enter/michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/enter/michael", name: "Свято-Введенская община" },
            { href: "/enter/michael", name: "Свято-Николаевская община" },
            { href: "/enter/michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/enter/michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/enter/michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/enter/michael", name: "Свято-Параскевская община" },
          ],
        },
        {
          cycle: "4time",
          name: "Москва",
          id: "item_4",
          organizations: [
            { href: "/enter/michael", name: "Москва" },
            { href: "/enter/michael", name: "Община архистратига Михаила" },
            { href: "/enter/michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/enter/michael", name: "Свято-Введенская община" },
            { href: "/enter/michael", name: "Свято-Николаевская община" },
            { href: "/enter/michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/enter/michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/enter/michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/enter/michael", name: "Свято-Параскевская община" },
          ],
        },
        {
          cycle: "5time",
          name: "Кузбасс",
          id: "item_5",
          organizations: [
            { href: "/enter/michael", name: "Кузбасс" },
            { href: "/enter/michael", name: "Община архистратига Михаила" },
            { href: "/enter/michael", name: "Рождества Пресвятой Богородицы" },
            { href: "/enter/michael", name: "Свято-Введенская община" },
            { href: "/enter/michael", name: "Свято-Николаевская община" },
            { href: "/enter/michael", name: "Община Свт.Игнатия Мариупольского" },
            {
              href: "/enter/michael",
              name: 'Община в честь Почаевской иконы Божией Матери БФ "Витязь"',
            },
            { href: "/enter/michael", name: "Община Вмч.Пантелеимона Целителя" },
            { href: "/enter/michael", name: "Свято-Параскевская община" },
          ],
        },
      ],
    };
  },
};
</script>