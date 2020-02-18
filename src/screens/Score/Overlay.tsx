import React from 'react';
import LottieView from 'lottie-react-native';

import {
    OverlayContent,
    OverlayHeader,
    OverlayTitle,
    OverlayDescription,
} from './styles';
import { SCORE_STRINGS } from '../../language';

interface Props {
    score: number
}

const Overlay: React.FC<Props> = ({ score }) => {
    return (
        <OverlayContent>
            <OverlayHeader>
                <OverlayTitle>{SCORE_STRINGS.title}</OverlayTitle>
                <OverlayDescription>{score}/10</OverlayDescription>
            </OverlayHeader>
            <LottieView
                speed={0.4}
                autoPlay
                style={{
                    width: 200,
                    height: 400,
                }}
                source={require('../../../assets/animations/score.json')}
            />
        </OverlayContent>
    );
};

export default Overlay;
