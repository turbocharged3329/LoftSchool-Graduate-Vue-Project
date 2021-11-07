import UserActions from "./user-actions";

const Template = (args, { argTypes }) => ({
  components: { UserActions },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    };
  },
  template: `
  <UserActions />
  `,
});

export default {
  title: "user-actions",
  component: UserActions,
};

export const logo = Template.bind({});

logo.storyName = "Кнопки действий для пользователя в header";
