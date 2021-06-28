<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
import "./button.css";

export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    classes() {
      return {
        "storybook-button": true,
        "storybook-button--primary": this.primary,
        "storybook-button--secondary": !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
