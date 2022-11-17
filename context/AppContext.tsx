import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import useMediaQuery from 'lib/hooks/useMediaQuery';

interface IAppContext {
    isDrawerOpen: boolean;
    isMobile: boolean;
    setIsDrawerOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<IAppContext>({
    isDrawerOpen: false,
    isMobile: false,
    setIsDrawerOpen: () => void 0,
});

const AppProvider: React.FC = ({ children }) => {
    const isMobile = useMediaQuery({ value: 768 });
    const [isDrawerOpen, setIsDrawerOpen] = useState<IAppContext['isDrawerOpen']>(false);

    const handleSetIsDrawerOpen = useCallback((isOpen: boolean) => setIsDrawerOpen(isOpen), []);

    useEffect(() => {
        if (!isMobile) {
            setIsDrawerOpen(false);
        }
    }, [isMobile]);

    useEffect(() => {
        return () => {
            setIsDrawerOpen(false);
        };
    }, []);

    return (
        <AppContext.Provider value={{ isDrawerOpen, isMobile, setIsDrawerOpen: handleSetIsDrawerOpen }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppContext must be used within AppProvider');
    }

    return context;
};

export { AppProvider, useAppContext };
