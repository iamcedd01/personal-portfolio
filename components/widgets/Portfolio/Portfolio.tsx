import { useMemo, useState } from 'react';

import Tabs from 'components/common/Tabs';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import { EPortfolioType, IPortfolioItem } from 'types/portfolio';

import PortfolioItem from './components/PortfolioItem';

const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabItems = useMemo(
        () => [
            { label: 'All Projects', value: 'all' },
            { label: 'Personal Projects', value: 'personal' },
            { label: 'Professional Projects', value: 'professional' },
        ],
        []
    );

    const items = useMemo(
        (): IPortfolioItem[] => [
            {
                id: '1',
                name: 'DoctorLink',
                shortDescription: 'Microservice application that allows doctors to process ',
                thumbnail: '/images/projects/hospital.png',
                type: EPortfolioType.Professional,
            },
            {
                id: '2',
                name: 'RegisterMe',
                thumbnail: '/images/projects/hospital.png',
                type: EPortfolioType.Professional,
            },
            {
                id: '3',
                name: 'AccountLink',
                thumbnail: '/images/projects/hospital.png',
                type: EPortfolioType.Professional,
            },
        ],
        []
    );

    return (
        <FlexLayout className="flex-col gap-m">
            <Text as="h2" className="text-center text-secondaryDark" text="Portfolio" />
            <Tabs activeIndex={activeTab} onChangeTab={setActiveTab} tabItems={tabItems} />

            <div className="relative grid h-auto w-full grid-cols-3 gap-m">
                {items.map(item => (
                    <PortfolioItem key={item.id} {...item} />
                ))}
            </div>
        </FlexLayout>
    );
};

export default Projects;
