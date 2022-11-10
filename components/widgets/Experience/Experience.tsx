import { useMemo } from 'react';

import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import { EExperienceType, IExperience } from 'types/experience';

import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => {
    const sideHustles = useMemo(
        (): IExperience[] => [
            {
                company: 'Achieve Without Borders',
                from: 'Dec 2021',
                id: 'SH-003',
                location: 'Makati City, Metro Manila',
                position: 'JavaScript Developer',
                summaries: [
                    'Provided software development and maintenance for healthcare microservice applications using MERN Stack',
                    'Responsible for quickly identifying and correcting software and data errors, and providing a root cause analysis to share with the team',
                ],
                to: '',
                type: EExperienceType.PartTime,
            },
            {
                company: 'Jatis',
                from: 'Mar 2022',
                id: 'SH-002',
                location: 'Makati City, Metro Manila',
                position: 'React Developer',
                summaries: [],
                to: 'Sep 2022',
                type: EExperienceType.PartTime,
            },
            {
                company: 'Min Communications, Inc.',
                from: 'Aug 2015',
                id: 'SH-001',
                location: 'Daegu, South Korea',
                position: 'Remote Game Master',
                summaries: [
                    'Conducted daily in-game monitoring',
                    'Conducted internal investigations (hacking, bugs & system glitches)',
                    'Performed investigations of game exploit',
                    "Provided support to player's concerns and feedbacks",
                ],
                to: 'Aug 2019',
                type: EExperienceType.PartTime,
            },
        ],
        []
    );

    const professionalExperience = useMemo(
        (): IExperience[] => [
            {
                company: 'Luxclusif | Penbrothers Inc.',
                from: 'May 2022',
                id: 'PE-001',
                location: 'Makati City, Metro Manila',
                position: 'Software Engineer - Frontend',
                summaries: [
                    'Develop and maintain e-commerce and logistics applications',
                    'Create automation for end-to-end testing using CypressJS',
                    'Build design system and UI components with integration of Storybook',
                    'Employ best coding practices and techniques to work on different software projects',
                ],
                to: '',
                type: EExperienceType.FullTime,
            },
            {
                company: 'SwapooLabs',
                from: 'Apr 2021',
                id: 'PE-002',
                location: 'Taguig City, Metro Manila',
                position: 'Fullstack Developer',
                summaries: [
                    'Created architectural design for microservice applications',
                    'Develop and maintain trading applications',
                ],
                to: 'Apr 2022',
                type: EExperienceType.FullTime,
            },
            {
                company: 'MediLink Network Inc.',
                from: 'Sep 2020',
                id: 'PE-003',
                location: 'Makati City, Metro Manila',
                position: 'Lead Software Engineer III',
                summaries: [
                    'Created and designed technical documentations and ERD for healthcare applications',
                    'Created API documentations using Swagger',
                    'Conduct demos and technical overview using CypressJS for E2E testing',
                    'Introduce methodologies and best practices to enhance applications',
                ],
                to: 'Apr 2021',
                type: EExperienceType.FullTime,
            },
            {
                company: 'MediLink Network Inc.',
                from: 'Mar 2020',
                id: 'PE-004',
                location: 'Makati City, Metro Manila',
                position: 'Lead Software Engineer II',
                summaries: [
                    'Handle frontend development team using ReactJS and React Native',
                    'Made technology recommendations and keeping an eye for the right tool for the job',
                    'Worked in agile software development team to complete various epics through sprints',
                ],
                to: 'Sep 2020',
                type: EExperienceType.FullTime,
            },
            {
                company: 'MediLink Network Inc.',
                from: 'Apr 2019',
                id: 'PE-005',
                location: 'Makati City, Metro Manila',
                position: 'Software Engineer I',
                summaries: [
                    'Develop new features and maintain existing applications using ASP.NET',
                    'Execute database scripts and handle technical issues',
                    'Build new applications using ReactJS, Redux and React Hooks',
                ],
                to: 'Mar 2020',
                type: EExperienceType.FullTime,
            },
            {
                company: 'Personiv (Manila)',
                from: 'Jun 2018',
                id: 'PE-006',
                location: 'Muntinlupa City, Metro Manila',
                position: 'Web Designer',
                summaries: ['Create and design websites for clients', "Update and modify client's existing websites"],
                to: 'Feb 2019',
                type: EExperienceType.FullTime,
            },
        ],
        []
    );

    return (
        <FlexLayout className="flex-col gap-l">
            <Text as="h2" className="text-primaryLight" text="Experience" />
            <FlexLayout className="relative flex-col gap-xl pl-2 md:flex-row">
                <FlexLayout className="relative h-max flex-col gap-l border-l-2 border-solid border-generalDark">
                    {professionalExperience.map(item => (
                        <ExperienceItem key={item.id} {...item} />
                    ))}
                </FlexLayout>
                <div className="mt-8 h-max w-full md:sticky md:top-20 md:mt-0">
                    <FlexLayout className="relative flex-col gap-l border-l-2 border-solid border-generalDark">
                        {sideHustles.map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))}
                    </FlexLayout>
                </div>
            </FlexLayout>
        </FlexLayout>
    );
};

export default Experience;
