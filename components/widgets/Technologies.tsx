import { useMemo } from 'react';

import NextImage from 'next/image';

import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import useMediaQuery from 'lib/hooks/useMediaQuery';
import { ITechnology } from 'types/technology';

const Technologies: React.FC = () => {
    const technologies = useMemo(
        (): ITechnology[] => [
            // Frontend
            { icon: 'javascript', label: 'JavaScript' },
            { icon: 'react', label: 'ReactJS' },
            { icon: 'nextjs', label: 'NextJS' },
            { icon: 'vuejs', label: 'VueJS' },
            { icon: 'html5', label: 'HTML5' },
            { icon: 'css3', label: 'CSS3' },
            { icon: 'sass', label: 'SASS' },
            { icon: 'less', label: 'LESS' },
            { icon: 'jquery', label: 'jQuery' },
            { icon: 'bootstrap', label: 'Bootstrap' },
            { icon: 'materialui', label: 'MaterialUI' },
            { icon: 'semanticui', label: 'SemanticUI' },
            { icon: 'tailwindcss', label: 'TailwindCSS' },
            { icon: 'storybook', label: 'Storybook' },
            { icon: 'cypressjs', label: 'CypressJS' },
            { icon: 'jest', label: 'Jest' },
            { icon: 'typescript', label: 'Typescript' },
            { icon: 'webpack', label: 'Webpack' },
            { icon: 'babel', label: 'BabelJS' },
            { icon: 'redux', label: 'Redux' },
            { icon: 'react', label: 'React Native' },
            // Backend
            { icon: 'nodejs', label: 'NodeJS' },
            { icon: 'express', label: 'ExpressJS' },
            { icon: 'graphql', label: 'GraphQL' },
            { icon: 'python', label: 'Python' },
            { icon: 'flask', label: 'Flask' },
            { icon: 'elixir', label: 'Elixir' },
            { icon: 'dot-net', label: 'ASP.NET' },
            { icon: 'csharp', label: 'C#' },
            { icon: 'php', label: 'PHP' },
            { icon: 'laravel', label: 'Laravel' },
            { icon: 'codeigniter', label: 'CodeIgniter' },
            { icon: 'amazonwebservices', label: 'AWS Services' },
            { icon: 'serverless', label: 'Serverless' },
            { icon: 'redis', label: 'Redis' },
            // Database
            { icon: 'mongodb', label: 'MongoDB' },
            { icon: 'postgresql', label: 'PostgreSQL' },
            { icon: 'mysql', label: 'MySQL' },
            { icon: 'microsoftsqlserver', label: 'MSSQL' },
            { icon: 'dynamodb', label: 'DynamoDB' },
            // Others/Tools
            { icon: 'docker', label: 'Docker' },
            { icon: 'kubernetes', label: 'Kubernetes' },
            { icon: 'eslint', label: 'ESLint' },
            { icon: 'prettier', label: 'Prettier' },
            { icon: 'commitlint', label: 'Commitlint' },
            { icon: 'sonarqube', label: 'SonarQube' },
            { icon: 'git', label: 'Git' },
            { icon: 'github', label: 'Github' },
            { icon: 'gitlab', label: 'Gitlab' },
            { icon: 'bitbucket', label: 'Bitbucket' },
            { icon: 'jira', label: 'Jira' },
            { icon: 'heroku', label: 'Heroku' },
            { icon: 'vercel', label: 'Vercel' },
            { icon: 'netlify', label: 'Netlify' },
            { icon: 'figma', label: 'Figma' },
            { icon: 'xd', label: 'AdobeXD' },
            { icon: 'photoshop', label: 'Photoshop' },
        ],
        []
    );

    const isMobile = useMediaQuery({ value: 768 });

    const iconSize = useMemo((): number => (isMobile ? 32 : 48), [isMobile]);

    return (
        <FlexLayout className="flex-col gap-m">
            <div className="mx-auto w-full">
                <div className="relative h-40 w-full md:h-52">
                    <NextImage layout="fill" objectFit="contain" src="/images/version-control.svg" />
                </div>
            </div>
            <Text
                as="h2"
                className="px-m text-center text-secondaryDark md:px-0"
                text="Tools & Technologies I used..."
            />
            <FlexLayout className="mt-m flex-wrap justify-center gap-l md:gap-xl md:px-l">
                {technologies.map(({ icon, label }) => (
                    <FlexLayout className="w-max flex-col gap-m transition-all hover:scale-125" key={label}>
                        <NextImage alt={label} height={iconSize} src={`/icons/tech/${icon}.svg`} width={iconSize} />
                        <Text as="p" className="text-center text-[12px] text-generalDark" text={label} />
                    </FlexLayout>
                ))}
            </FlexLayout>
        </FlexLayout>
    );
};

export default Technologies;
