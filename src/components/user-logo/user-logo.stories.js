import UserLogo from "./user-logo";

const Template = (args, { argTypes }) => ({
  components: { UserLogo },
  props: Object.keys(argTypes),
  data() {
      return {
        args
      }
  },
  template: `
  <UserLogo 
  v-bind="args"
  />
  `,
});

export default {
    title: "user-logo",
    component: UserLogo,
};

export const logo = Template.bind({});

logo.storyName = 'Логотип с никнеймом пользователя';
logo.args = {
    repository: {
        name: 'joshua_l',
        avatar: 'https://avatars.githubusercontent.com/u/66388388?v=4'
    },
    isVertical: false,
    isActive: false,
    isBig: false,
}
