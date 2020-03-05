import React from 'react';
import { EuiText, EuiPageBody } from '@elastic/eui';
export default function Intro() {
    return (
        <>
        <EuiPageBody verticalPosition="center" horizontalPosition="center">
        <EuiText><h1>Hello there!</h1></EuiText>
        <EuiText><h3>My name is Cam, I am a software engineer from London</h3></EuiText>
        <EuiText><h3>Want to find out more? Scroll on...</h3></EuiText>
        </EuiPageBody>
        </>
    )
}