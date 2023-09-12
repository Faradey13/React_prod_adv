import type {Meta, StoryObj} from "@storybook/react";
import {Modal} from "widgets/Modal";


const meta: Meta<typeof Modal> = {
    title: 'widgets/Modal',
    component: Modal
}
export default meta

type Story = StoryObj<typeof Modal>

export const BaseModal:Story = {
    args: {
        isOpen: true,
        children: ' sdfsdf sdfsdfsdf   sdfsdfsdfsdf'
    }
}