import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface IMultiStepProps {
  currentStep: number
  size: number
}

export const MultiStep = ({ currentStep, size }: IMultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}