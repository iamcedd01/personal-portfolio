import Section from 'components/common/Section';

const DiagonalDivider: React.FC = () => {
    return (
        <Section className="bg-generalLight" fullWidth padding="none">
            <div>
                <svg id="" preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 200">
                    <polygon className="fill-secondaryDark" points="-4,0 1604,198 1604,204 -4,204"></polygon>
                    <polygon className="fill-generalDark  opacity-100" points="1604,198 1604,186 -4,0 -4,0"></polygon>
                    <polygon className="fill-general opacity-100" points="1604,186 1604,174 -4,0 -4,0"></polygon>
                </svg>
            </div>
        </Section>
    );
};

export default DiagonalDivider;
