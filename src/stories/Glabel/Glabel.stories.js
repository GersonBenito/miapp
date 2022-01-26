import React from 'react';

import Glabel from '../../components/Glabel/Glabel';

export default {
    title: 'Label/Glabel',
    component: Glabel
}

const Template = (args) => <Glabel {...args} />

export const Props = Template.bind({});

Props.args = {
    type: 'text',
    placeholder: 'Ingrese un texto',
    error: false
}