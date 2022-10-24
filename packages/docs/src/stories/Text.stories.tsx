import { Text, ITextProps } from '@moura-vocal/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, accusamus numquam a nobis enim fugiat repellendus optio eveniet dolorum quas iste, ratione veritatis eos earum magni nesciunt rerum nisi? Ipsa.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITextProps>

export const Primary = {} as StoryObj<ITextProps>

export const Strong = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
} as StoryObj<ITextProps>
