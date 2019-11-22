import React from 'react'

const useOriginPricingModalTitle = () => {}
const useFormInitializer = () => {}
const useOverlapWarningFactory = () => {}
const OriginPricingModal = () => {}

export const NoWrapperHell = (props) => {
    const title = useOriginPricingModalTitle(props)
    const [initialValues, submit] = useFormInitializer(props)
    const [LeftOverlapWarning, RightOverlapWarning] = useOverlapWarningFactory(props)

    return (<OriginPricingModal 
        title={title}
        initialValues={initialValues}
        submit={submit}
        LeftAdditionalContent={LeftOverlapWarning}
        RightAdditionalContent={RightOverlapWarning}
    />)
}
