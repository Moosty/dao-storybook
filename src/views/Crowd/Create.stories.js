import React from 'react';
import { Create } from './Create';
import {Meta} from "@storybook/addon-docs/blocks";

<Meta title="Pages/Create" component={Create}/>


export default {
  title: 'Crowd/Pages/Create',
  component: Create,
};

const Template = (args) => <Create {...args} />;

export const create = Template.bind({});
create.args = {};

