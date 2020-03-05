import React from 'react';
import { EuiText, EuiPageBody } from '@elastic/eui';

export default function About() {
    return (
        <EuiPageBody verticalPosition="center" horizontalPosition="center">
        <EuiText><h1>About Me</h1></EuiText>
        <EuiText>
        Born in Germany, I moved around a fair bit as a kid, eventually settling in the suburbs of London. I've now lived in various parts of the capital for the past 15 years, making me the most English sounding Scot you'll ever encounter - though when rugby's on, there's no doubt of my origins!
        </EuiText>
        <EuiText>
        I started learning engineering in 2018 inspired by conversations with candidates due to my five year career in technical recruitment. During a stint at ThirdEye Labs as their talent acquisition manager, they offered me the chance to be an engineer part time.
        After loving this experience, I attended Kodiri to firm up on my MERN stack skills. Subsequnetly, I secured a role as a software engineer at Claimer, a fintech startup where I've been working since!
        </EuiText>
        <EuiText>
        When I'm not coding, you can often find me playing ice hockey for the Streatham Wolves, watching rugby or reading the weirdest articles I can find on Wikipedia.
        </EuiText>

        </EuiPageBody>
    )
}