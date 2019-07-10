StepperControl with RenderChild pattern :

<br/>
<br/>
  
State to Props | Type | Description
-------------- | ---- | -----------
prevStep | func | Decrement (-1)
nextStep |func | Increment (+1)
setTotalStep | func | Set total children of controlled target
activeStep | number | index odd active step
direction | string | 'up' or 'down
lastStep | boolean | true when last step is active
totalStep | number | return total step (use setTotalStep before to set number)

```js
import Button from '../Button';
import Card from '../Card';
import Wrapper from '../Wrapper';

<StepController>
  {({ prevStep, nextStep, activeStep, setTotalStep }) => (
    <Wrapper
      direction="row"
      style={{ alignItems: 'center', justifyContent: 'space-around' }}
    >
      <Button onClick={prevStep}>previous step</Button>
      <Card>{activeStep}</Card>
      <Button onClick={nextStep}>next step</Button>
    </Wrapper>
  )}
</StepController>;
```
