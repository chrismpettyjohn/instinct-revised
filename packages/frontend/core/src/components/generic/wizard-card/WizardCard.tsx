import {Card} from '../card';
import {FormGroup} from 'reactstrap';
import React, {useEffect, useState} from 'react';
import {WizardCardProps} from './WizardCard.types';

export function WizardCard({steps, header, onSubmit}: WizardCardProps) {
  const [active, setActive] = useState(0);
  const [completedSteps, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    if (active < 1) {
      return;
    }
    if (!completedSteps.includes(active - 1)) {
      setCompleted(_ => [..._, active - 1]);
    }
  }, [active, completedSteps]);

  const canGoBack = active > 0;
  const canGoForward = active < steps.length - 1;

  function goBack() {
    if (canGoBack) {
      setActive(a => a - 1);
    }
  }

  function goForward() {
    if (canGoForward) {
      setActive(a => a + 1);
    }
  }

  function goToStep(step: number) {
    if (completedSteps.includes(step)) {
      setActive(step);
    }
  }

  return (
    <Card header={header}>
      <ul className="nav nav-tabs">
        {steps.map((step, i) => (
          <li className="nav-item" key={i}>
            <a
              className={`nav-link ${active === i ? 'active' : ''}`}
              style={{
                background: completedSteps.includes(i) ? '#33691E' : '',
                cursor: completedSteps.includes(i) ? 'pointer' : 'not-allowed',
              }}
              onClick={() => goToStep(i)}
            >
              <span className="mr-2">{i + 1}.</span>
              {step.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        {steps[active].children}
        <div className="row">
          <div className="col-6">&nbsp;</div>
          <div className="col-6 text-right">
            <FormGroup>
              {canGoBack && (
                <button
                  className="btn btn-dark mr-2"
                  onClick={goBack}
                  type="button"
                >
                  Last Step
                </button>
              )}
              {canGoForward ? (
                <button
                  className="btn btn-success mr-2"
                  onClick={goForward}
                  type="button"
                >
                  Next Step
                </button>
              ) : (
                <button
                  className="btn btn-success mr-2"
                  onClick={onSubmit}
                  type="button"
                >
                  Submit
                </button>
              )}
            </FormGroup>
          </div>
        </div>
      </div>
    </Card>
  );
}
