import React from 'react';
import { EuiText, EuiAccordion } from '@elastic/eui'

export default function FAQ() {
    return (
        <>
            <EuiText><h1>FAQs</h1></EuiText>
            <EuiAccordion
                id="accordion1"
                buttonContent="Click me to toggle open / close">
                <EuiText>
                    <p>
                        Any content inside of will appear
                        here.
        </p>
                </EuiText>
            </EuiAccordion>


        </>
    )
}