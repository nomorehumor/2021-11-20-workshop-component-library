import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
