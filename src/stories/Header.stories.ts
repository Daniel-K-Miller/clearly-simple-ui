import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../components/Header";

const meta = {
	title: "Example/Header",
	component: Header,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {},
	args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {};
