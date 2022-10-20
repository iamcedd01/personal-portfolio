import { useEffect, useState } from 'react';

import Text from 'components/common/Text';

enum EPhase {
    Typing,
    Pausing,
    Deleting,
}

interface ITypedProps {
    values: string[];
}

const TYPING_INTERVAL = 30;
const PAUSE_MS = 2300;
const DELETING_INTERVAL = 25;

const Typed: React.FC<ITypedProps> = ({ values }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [phase, setPhase] = useState<EPhase>(EPhase.Typing);
    const [currentValue, setCurrentValue] = useState<string>('');

    useEffect(() => {
        switch (phase) {
            case EPhase.Typing: {
                const nextValue = values[selectedIndex].slice(0, currentValue.length + 1);

                if (nextValue === currentValue) {
                    setPhase(EPhase.Pausing);

                    return;
                }

                const timeout = setTimeout(() => setCurrentValue(nextValue), TYPING_INTERVAL);

                return () => clearTimeout(timeout);
            }
            case EPhase.Deleting: {
                if (!currentValue) {
                    setPhase(EPhase.Typing);

                    const nextIndex = selectedIndex + 1;

                    if (nextIndex === values.length) {
                        setSelectedIndex(0);
                    } else {
                        setSelectedIndex(nextIndex);
                    }

                    return;
                }

                const nextRemaining = values[selectedIndex].slice(0, currentValue.length - 1);

                const timeout = setTimeout(() => {
                    setCurrentValue(nextRemaining);
                }, DELETING_INTERVAL);

                return () => clearTimeout(timeout);
            }

            case EPhase.Pausing:
            default: {
                const timeout = setTimeout(() => setPhase(EPhase.Deleting), PAUSE_MS);

                return () => clearTimeout(timeout);
            }
        }
    }, [currentValue, phase, selectedIndex, values]);

    return (
        <Text className="text-primaryLight after:animate-blink after:font-normal after:text-gray-300 after:content-['|']">
            {currentValue}
        </Text>
    );
};

export default Typed;
