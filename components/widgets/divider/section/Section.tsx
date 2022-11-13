import { useMemo } from 'react';

import Section from 'components/common/Section';
import { ICommonProps } from 'types/globals';

import DiagonalDivider from './Diagonal';
import LineDivider from './Line';
import TriangleDivider from './Triangle';
import WaveDivider from './Wave';
import WaveOpacityDivider from './WaveOpacity';

enum ESectionDivider {
    Diagonal = 'Diagonal',
    Line = 'Line',
    Triangle = 'Triangle',
    Wave = 'Wave',
    WaveOpacity = 'Wave Opacity',
}

interface ISectionDividerProps extends ICommonProps {
    shape: keyof typeof ESectionDivider;
}

const SectionDivider: React.FC<ISectionDividerProps> = ({ className, shape }) => {
    const shapeDivider = useMemo((): React.ReactNode => {
        switch (ESectionDivider[shape]) {
            case ESectionDivider.Triangle:
                return <TriangleDivider />;
            case ESectionDivider.Diagonal:
                return <DiagonalDivider />;
            case ESectionDivider.Line:
                return <LineDivider />;
            case ESectionDivider.Wave:
                return <WaveDivider />;
            case ESectionDivider.WaveOpacity:
                return <WaveOpacityDivider />;
            default:
                return null;
        }
    }, [shape]);

    return shapeDivider ? (
        <Section className={className} fullWidth padding="none">
            {shapeDivider}
        </Section>
    ) : null;
};

export default SectionDivider;
