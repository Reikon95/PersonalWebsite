import React from 'react'
import { EuiFlexGrid, EuiFlexItem, EuiText } from '@elastic/eui';
export default function Techs() {
    return (
        <>
            <EuiText><h1>What I Work With</h1></EuiText>
            <EuiFlexGrid columns={4} direction="row">
                <EuiFlexItem>
                    ReactJS
                </EuiFlexItem>
                <EuiFlexItem>
                    Javascript 
                </EuiFlexItem>
                <EuiFlexItem>
                    NodeJS
                </EuiFlexItem>
                <EuiFlexItem>
                    Python 
                </EuiFlexItem>
                <EuiFlexItem>
                    CSS
                </EuiFlexItem>
                <EuiFlexItem>
                    Docker
                </EuiFlexItem>
                <EuiFlexItem>
                    HTML
                </EuiFlexItem>
                <EuiFlexItem>
                    Git
                </EuiFlexItem>
            </EuiFlexGrid>
        </>
    )
}