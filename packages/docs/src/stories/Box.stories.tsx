import { Meta, StoryObj } from '@storybook/react'
import { Box, IBoxProps, Text } from '@moura-vocal/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<IBoxProps>

export const Primary = {} as StoryObj<IBoxProps>
