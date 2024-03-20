import type { Meta, StoryObj } from '@storybook/svelte';
import Confirm from './Confirm.svelte';

const meta = {
	title: 'Component/Confirm',
	component: Confirm,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Confirm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Confirm',
		message: 'Are you sure you want to continue?',
		night: false
	}
};
