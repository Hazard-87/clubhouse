import { useState } from 'react';
import { WelcomeStep } from '../components/steps/WelcomeStep';

const stepsComponents = {
  0: WelcomeStep,

}

export default function Home() {
  const [step, setStep] = useState<number>(0)
  const Step = stepsComponents[step]

  return (
    <div>
      <Step />
    </div>
  );
}
