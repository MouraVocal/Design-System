import { Heading, IHeadingProps } from '@moura-vocal/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<IHeadingProps>

export const Primary = {} as StoryObj<IHeadingProps>

export const CustomTag = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
} as StoryObj<IHeadingProps>
