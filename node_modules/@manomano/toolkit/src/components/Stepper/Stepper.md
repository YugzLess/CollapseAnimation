Warning

- It includes react-spring as dependency (31.79KB)

Stepper:

- Stepper with automatic transition.
- Need function to increment/decrement activeStep props (You can use <b>StepController</b> component).
- Set step and label on every children to display automatically step indicator.
- Step has props to pass validation design (Check step component).

Stepper without controller :

```js
<Stepper>
  <div step="1" label="One">
    <h4>step 1 container</h4>
    <p>This is step One container</p>
  </div>
</Stepper>
```

Stepper with StepController and Toggle components example :

- I combine Stepper, StepController, Toggle and different tricks to show some possibilities. You can reproduce or choose an other way
- Check StepController and Toggle section to read methods and use case.

```js
import Button from '../Button';
import Modal from '../Modal';
import Toggle from '../Toggle';
import StepController from '../StepController';
import Wrapper from '../Wrapper';

const click = (next, toggle, lastStep) => {
  lastStep && toggle();
  next();
};

<Toggle>
  {({ on, toggle }) => (
    <StepController>
      {({
        prevStep,
        nextStep,
        activeStep,
        setTotalStep,
        direction,
        lastStep,
        totalStep,
      }) => (
        <div>
          <Stepper
            activeStep={activeStep}
            getLength={setTotalStep}
            direction={direction}
          >
            <div step="1" label="One">
              <h4>step 1 container</h4>
              <p>This is step One container</p>
            </div>

            <div step="2" label="Two">
              <h4>step 2 container</h4>
              <p>This is step Two container</p>
            </div>

            <div step="3" label="Three">
              <h4>step 3 container</h4>
              <p>This is step Three container</p>
            </div>

            <div step="4" label="Four" done={lastStep ? 1 : 0}>
              <h4>step 4 container</h4>
              <p>This is step Three container</p>
            </div>
          </Stepper>

          <div>
            <Button
              style={{ marginRight: 16 }}
              disabled={activeStep === 0}
              onClick={prevStep}
            >
              Prev
            </Button>
            <Button
              onClick={() =>
                click(nextStep, toggle, activeStep === totalStep - 1)
              }
              disabled={lastStep}
            >
              {activeStep !== totalStep - 1
                ? 'Next'
                : lastStep
                ? 'Done'
                : 'Send'}
            </Button>
          </div>
          <Modal on={on} toggle={toggle}>
            <Wrapper>
              <p>Successfull</p>
            </Wrapper>
          </Modal>
        </div>
      )}
    </StepController>
  )}
</Toggle>;
```

Stepper with controller extension and step initialization :

```js
import Button from '../Button';
import StepController from '../StepController';

<StepController getActiveStep={2}>
  {({ prevStep, nextStep, activeStep, setTotalStep, direction }) => (
    <div>
      <Stepper
        activeStep={activeStep}
        getLength={setTotalStep}
        direction={direction}
      >
        <div step="1" label="One">
          <h4>step 1 container</h4>
          <p>This is step One container</p>
        </div>

        <div step="2" label="Two">
          <h4>step 2 container</h4>
          <p>This is step Two container</p>
        </div>

        <div step="3" label="Three">
          <h4>Start at step 3 container</h4>
          <p>This is step Three container</p>
        </div>

        <div step="4" label="Four">
          <h4>step 4 container</h4>
          <p>This is step Four container</p>
        </div>
        <div step="5" label="Five">
          <h4>step 5 container</h4>
          <p>This is step Five container</p>
        </div>
      </Stepper>

      <div>
        <Button style={{ marginRight: 16 }} onClick={prevStep}>
          Prev
        </Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  )}
</StepController>;
```
