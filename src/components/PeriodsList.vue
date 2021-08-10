<template>
  <ul class="periods-list list">
    <li
      v-for="period in periods"
      class="periods-list-item flex"
      :class="{ 'periods-item-input': period.status }"
      :id="period.id"
      :key="period.id"
    >
      <label
        class="periods-label"
        :class="{ 'label-clock': period.status_clock }"
      >
        <p class="periods-text">{{ period.label }}</p>
        <input
          class="periods-input"
          :type="period.type"
          :value="period.value1"
          :placeholder="period.placeholder"
          :id="period.input"
        />
        <p class="period-hyphen">-</p>
        <input
          class="periods-input"
          :type="period.type"
          :value="period.value2"
        />
        <button
          class="periods-button"
          type="button"
          @click="editItem('input_wor')"
        ></button>
      </label>
      <button
        class="data-button"
        type="button"
        @click="editItem('.periods-input')"
        :id="period.input"
      ></button>
      <button
        class="data-button"
        type="button"
        @click="closeItem('.periods-list-item')"
        :id="period.id"
      ></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "periodsList",

  methods: {
    closeItem: function (data) {
      var items = document.querySelectorAll(data);
      items.forEach(function (item) {
        if (event.target.id === item.id) {
          item.classList.add("none");
          item.classList.remove("flex");
        }
      });
    },

    editItem: function (data) {
      var inputs = document.querySelectorAll(data);
      inputs.forEach(function (input) {
        if (event.target.id === input.id) {
          input.focus();
        }
      });
    },
  },

  data() {
    return {
      periods: [
        {
          label: "Утренние занятия",
          type: "time",
          value1: "07:00",
          value2: "11:00",
          status: false,
          status_clock: false,
          input: "input1",
          id: "period1",
        },
        {
          label: "Название",
          type: "text",
          placeholder: "Утренние занятия 7:00 - 11:00",
          status: true,
          status_clock: false,
          input: "input2",
          id: "period2",
        },
        {
          label: "Начало",
          type: "time",
          value1: "07:00",
          status: true,
          status_clock: true,
          input: "input3",
          id: "period3",
        },
        {
          label: "Конец",
          type: "time",
          value1: "11:00",
          status: true,
          status_clock: true,
          input: "input4",
          id: "period4",
        },
        {
          label: "Обучение чтению",
          type: "time",
          value1: "10:00",
          value2: "15:00",
          status: false,
          status_clock: false,
          input: "input5",
          id: "period5",
        },
        {
          label: "Просветительские беседы (по истории)",
          type: "time",
          value1: "10:30",
          value2: "11:30",
          status: false,
          status_clock: false,
          input: "input6",
          id: "period6",
        },
        {
          label: "Просветительские беседы (по латыни)",
          type: "time",
          value1: "12:00",
          value2: "13:00",
          status: false,
          status_clock: false,
          input: "input7",
          id: "period7",
        },
        {
          label: "Просветительские беседы (по геометрии)",
          type: "time",
          value1: "16:30",
          value2: "17:00",
          status: false,
          status_clock: false,
          input: "input8",
          id: "period8",
        },
        {
          label: "Вечерние занятия",
          type: "time",
          value1: "17:00",
          value2: "17:50",
          status: false,
          status_clock: false,
          input: "input9",
          id: "period9",
        },
        {
          label: "Общие занятия",
          type: "time",
          value1: "17:50",
          value2: "18:05",
          status: false,
          status_clock: false,
          input: "input10",
          id: "period10",
        },
      ],
    };
  },
};
</script>