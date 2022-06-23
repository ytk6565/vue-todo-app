import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyButton from "../components/MyButton.vue";

export default {
  title: "Button",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withJSX = () => ({
  render() {
    return (
      <MyButton onClick={linkTo("Button", "With Some Emoji")}>
        With JSX
      </MyButton>
    );
  },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withSomeEmoji = () => ({
  components: { MyButton },
  template: "<my-button>😀 😎 👍 💯</my-button>",
});
