import React from 'react';

import { Button } from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
};

const Template = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: "m-4",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
  className: "m-4",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  secondary: true,
  className: "m-4",
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  className: "m-4",
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  className: "m-4",
};
