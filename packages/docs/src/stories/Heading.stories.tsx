import { Heading, IHeadingProps } from '@mouravocal/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>

export const Primary = {} as StoryObj<IHeadingProps>

export const CustomTag = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading será sempre um `h2`, mas podemos alterar para outra tag usando a propriedade `as`',
      },
    },
  },
} as StoryObj<IHeadingProps>
