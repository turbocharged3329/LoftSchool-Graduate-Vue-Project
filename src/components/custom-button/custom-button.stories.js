import CustomButton from "./custom-button";

const Template = (args, { argTypes }) => ({
  components: { CustomButton },
  props: Object.keys(argTypes),
  data() {
      return {
          args
      }
  },
  template: `
  <CustomButton v-bind="args"/>
  `,
});

export default {
    title: "custom-button",
    component: CustomButton,
};

export const button = Template.bind({});

button.storyName = 'Кнопка системы';
