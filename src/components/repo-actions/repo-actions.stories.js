import RepoActions from "./repo-actions";
// import { action } from "@storybook/addon-actions";

// const methods = {};

const Template = (args, { argTypes }) => ({
  components: { RepoActions },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    };
  },
  template: `
    <RepoActions v-bind="args"/>
    `,
});

export default {
  title: "repo-actions",
  component: RepoActions,
};

export const like = Template.bind({});

like.storyName = "Поставить лайк";
like.args = {
  action: { type: "like", count: 5 },
  isLeftRounded: true,
  isRightRounded: false,
};

export const fork = Template.bind({});

fork.storyName = "Форкнуть репозиторий";
fork.args = {
  action: { type: "fork", count: 5 },
  isLeftRounded: false,
  isRightRounded: true,
};
