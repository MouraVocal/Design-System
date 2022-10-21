import { Meta, StoryObj } from '@storybook/react'
import { Avatar, IAvatarProps } from '@moura-vocal/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/mouravocal.png',
    alt: 'Diego Moura',
  },
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {}

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
}
