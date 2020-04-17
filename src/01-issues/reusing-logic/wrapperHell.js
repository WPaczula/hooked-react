/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

const WrapperHell = () => {
  return (
    <TitleProvider>
      {({ title }) => (
        <FormInitializer>
          {({ initialValues, submit }) => (
            <OverlapWarningFactory>
              {({ LeftOverlapWarning, RightOverlapWarning }) => (
                <OriginPricingModal
                  title={title}
                  initialValues={initialValues}
                  submit={submit}
                  LeftAdditionalContent={LeftOverlapWarning}
                  RightAdditionalContent={RightOverlapWarning}
                />
              )}
            </OverlapWarningFactory>
          )}
        </FormInitializer>
      )}
    </TitleProvider>
  );
};

export default withTitle(withWindowSize(withTheKnowledge(WrapperHell)));
