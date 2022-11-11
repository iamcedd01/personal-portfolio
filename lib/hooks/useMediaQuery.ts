import { useCallback, useEffect, useState } from 'react';

type IMediaType = 'max-width' | 'min-width';

interface IMediaQueryProps {
    type?: IMediaType;
    value: number;
}

const useMediaQuery = ({ type = 'max-width', value }: IMediaQueryProps) => {
    const [targetReached, setTargetReached] = useState<boolean>(false);

    const updateTarget = useCallback(e => setTargetReached(!!e.matches), [setTargetReached]);

    useEffect(() => {
        const media = window.matchMedia(`(${type}: ${value}px)`);

        media.addEventListener('change', updateTarget);

        // Check on mount, callback is not called until a change occurs.
        setTargetReached(!!media.matches);

        return () => media.removeEventListener('change', updateTarget);
    }, [value, updateTarget, type]);

    return targetReached;
};

export default useMediaQuery;
