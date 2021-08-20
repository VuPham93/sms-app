import {ComponentMeta, ComponentStory} from '@storybook/react';
import LoginPage from "./LoginPage";
import React from "react";

export default {
    title: 'SMS-APP',
    component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage/>;

export const login = Template.bind({});
