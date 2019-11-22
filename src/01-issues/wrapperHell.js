import React from 'react'

const TitleProvider = () => {}
const FormInitializer = () => {}
const OverlapWarningFactory = () => {}

const useOriginPricingModalTitle = () => {}
const useFormInitializer = () => {}
const useOverlapWarningFactory = () => {}

const OriginPricingModal = () => {}

const WrapperHell = () => {
    return (
        <TitleProvider>
            {
                ({ title }) => (
                    <FormInitializer>
                        {
                            ({ initialValues, submit }) => (
                                <OverlapWarningFactory>
                                    {
                                        ({ LeftOverlapWarning, RightOverlapWarning }) => (
                                            <OriginPricingModal 
                                                title={title}
                                                initialValues={initialValues}
                                                submit={submit}
                                                LeftAdditionalContent={LeftOverlapWarning}
                                                RightAdditionalContent={RightOverlapWarning}
                                            />
                                        )
                                    }
                                </OverlapWarningFactory>
                            )
                        }
                    </FormInitializer>
                )
            }
        </TitleProvider>
    )
}

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

export default WrapperHell
