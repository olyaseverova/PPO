<template>
  <div class="general-information">
    <input
      class="general-information-input"
      type="text"
      :placeholder="generalInput"
    />
    <ul class="information-kinds-list list">
      <li
        v-for="kind in kinds"
        class="information-kinds-list-item"
        :key="kind.id"
      >
        <img
          :src="kind.src"
          :width="kind.width"
          :height="kind.height"
          :alt="kind.alt"
          :id="kind.id"
          @click="changeTextType"
        />
      </li>
    </ul>
    <textarea
      class="general-information-textarea"
      :placeholder="generalText"
      type="text"
      ref="information"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "generalInfo",
  props: {
    generalInput: String,
    generalText: String,
  },

  methods: {
    changeTextType: function (event) {
      var classInfo = event.target.id;
      if (this.$refs.information.classList.contains(classInfo)) {
        this.$refs.information.classList.remove(classInfo);
      } else {
        this.$refs.information.classList.add(classInfo);
      }
    },
  },

  data() {
    return {
      kinds: [
        {
          src: require("@/img/pin.png"),
          width: 18,
          height: 18,
          alt: "Дать ссылку",
          id: "pin",
        },
        {
          src: require("@/img/bold.png"),
          width: 10,
          height: 14,
          alt: "Добавить жирный текст",
          id: "bold",
        },
        {
          src: require("@/img/italik.png"),
          width: 10,
          height: 14,
          alt: "Добавить италик",
          id: "italik",
        },
        {
          src: require("@/img/underline.png"),
          width: 14,
          height: 17,
          alt: "Подчеркнуть текст",
          id: "underline",
        },
        {
          src: require("@/img/strike.png"),
          width: 16,
          height: 14,
          alt: "Зачеркнуть текст",
          id: "strike",
        },
      ],
    };
  },
};
</script>