import { useMemo } from 'react';

import Chip from 'components/common/Chip';
import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import { IExperience } from 'types/experience';

interface IExperienceItemProps extends IExperience {
    isFreelance?: boolean;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({
    company,
    from,
    location,
    position,
    summaries = [],
    to,
    type,
}) => {
    const companyLocation = useMemo(() => [company, location].join(' | '), [company, location]);
    const duration = useMemo(() => [from, to || 'Present'].filter(value => !!value).join(' - '), [from, to]);

    return (
        <div className="relative w-full pl-xl before:absolute before:-top-3 before:-left-[17px] before:h-8 before:w-8 before:rounded-full before:border-8 before:border-secondaryDark before:bg-primaryLight before:content-['']">
            <FlexLayout className="flex-col rounded-md bg-secondaryLight p-m transition-all hover:scale-105">
                <FlexLayout className="items-center gap-s">
                    <Text as="p" className="flex-1 text-m font-bold" text={position} />
                    <Chip size="small" text={type} />
                </FlexLayout>

                <Text className="text-[14px]" text={duration} />
                <Text className="text-[14px]" text={companyLocation} />

                {summaries.length > 0 && (
                    <ul className="mt-4 list-outside list-disc pl-4">
                        {summaries.map((summary, index) => (
                            <li className="pb-xs last:pb-0 md:text-justify" key={index}>
                                <Text className="text-[14px]" text={summary} />
                            </li>
                        ))}
                    </ul>
                )}
            </FlexLayout>
        </div>
    );
};

export default ExperienceItem;
