<template>
  <div class="enter">
    <enterAside />

    <article class="enter-michael-edit">
      <topicLinks
        :pages="pages"
        topic-page="Редактирование материалов"
      ></topicLinks>

      <h1 class="main-headline">{{ materials_headline }}</h1>
      <input
        class="materials-input"
        type="text"
        :placeholder="morning_prayers"
      />
      <generalInfo general-text='Святые отцы о молитве
От деятельности по своей воле и по своему разуму немедленно явится попечительность о себе, предстанут уму различные соображения... уничтожат внимательную молитву.
святитель Игнатий Брянчанинов

Аще ќтрєнніе мlтвы совершаютсz мирскимъ чиномъ, начинаемъ:

Мlтвами с™hхъ nтє1цъ нaшихъ, гDи ї}се хrтE б9е нaшъ, поми1луй нaсъ. Ґми1нь.

 Аще есть їерeй, творитъ начало:

Їерeй: Бlгословeнъ бGъ нaшъ, всегдA, нhнэ и3 при1снw, и3 во вёки вэкHвъ.

ЧтEцъ: Ґми1нь.

( 1 ) Слaва тебЁ б9е нaшъ, слaва тебЁ.

Мlтва с™0му д¦у:
' />
      <router-link to="/enter/michael" class="grey-button link">{{
        save
      }}</router-link>
    </article>
  </div>
</template>

<script>
import enterAside from "@/components/EnterAside";
import topicLinks from "@/components/TopicLinks";
import generalInfo from "@/components/GeneralInfo";

export default {
  name: "EnterNews",
  components: {
    enterAside,
    topicLinks,
    generalInfo,
  },

  data() {
    return {
      save: "Сохранить",
      morning_prayers: "Утренние молитвы",
      reg_headline: "Редактируемые страницы",
      materials_headline: "Материалы для обучения",

      pages: [{ href: "/enter/michael", name: "Община архистратига Михаила" }],
    };
  },
};
</script>
