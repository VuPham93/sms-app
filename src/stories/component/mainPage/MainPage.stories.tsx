import {ComponentMeta, ComponentStory} from '@storybook/react';
import MainPage from "./MainPage";
import React from "react";

export default {
    title: 'SMS-APP',
    component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const App = Template.bind({});
