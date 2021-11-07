import MainTitle from "./main-title";

const Template = (args, { argTypes }) => ({
  components: { MainTitle },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    };
  },
  template: `
    <MainTitle v-bind="args"/>
    `,
});


export default {
    title: 'main-title',
    component: { MainTitle },
}

export const title = Template.bind({});
title.storyName = "Главный заголовок";
