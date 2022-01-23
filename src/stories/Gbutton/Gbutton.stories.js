import React from 'react';
import Gbutton from '../../components/Gbutton/Gbutton';

// exportar ek modulo del componente para que aparezca en storybook
export default {
    title: 'Button/Gbutton',
    component: Gbutton,
}

// recibir los props por medio de argumentos, para hacer el cambio de colores
const Template = (args) => <Gbutton {...args} />;

// mostrar el color seleccionado
export const Props = Template.bind({});
Props.args = {
    color: 'primary',
    round: false,
    label: 'Button',
    type: 'button',
    disabled: false,
    block: false,
}

