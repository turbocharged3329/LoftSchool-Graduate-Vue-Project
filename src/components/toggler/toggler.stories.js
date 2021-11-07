import Toggler from "./toggler";
import { action } from "@storybook/addon-actions";

const methods = {
    onToggle: action("onToggle")
}

const Template = (args, {argTypes}) => ({
    components: { Toggler },
    props: Object.keys(argTypes),
    data() {
        return {
            args
        }
    },
    argTypes: { onClick: { action: 'clicked' } },
    template: `
        <Toggler v-bind="args" />
    `,
    methods
});

export default {
  title: "toggler",
  component: Toggler,
};

export const toggler = Template.bind({});

toggler.storyName = 'Раскрывающийся список';
toggler.args = {
    isHidden: false,
    items: [
        {
            title: "joshua_l",
            description:
            "Enable performance measuring in production, at the user's request",
        },
        {
            title: "Camille",
            description: "It's Impossible to Rename an Inherited Slot",
        },
        {
            title: "Marselle",
            description:
            "transition-group with flex parent causes removed items to fly",
        },
    ],
}