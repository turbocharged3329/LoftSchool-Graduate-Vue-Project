import ProgressBar from "./progress-bar";

const Template = (args, { argTypes }) => ({
  components: { ProgressBar },
  props: Object.keys(argTypes),
  data() {
      return {
          args
      }
  },
  template: `
  <ProgressBar v-bind="args"/>
  `,
});

export default {
    title: "progress-bar",
    component: ProgressBar,
};

export const progress = Template.bind({});

progress.storyName = 'Строка прогресса';
