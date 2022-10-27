import Section from 'components/common/Section';

const WaveDivider: React.FC = () => {
    return (
        <Section className="relative bg-secondary" fullWidth padding="none">
            <svg
                className="z-[9] block w-full rotate-180"
                data-height="100"
                preserveAspectRatio="xMidYMax meet"
                viewBox="0 0 1600 100"
            >
                <path
                    className="fill-secondaryLight opacity-100"
                    d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"
                />
                <path
                    className="fill-secondaryDark"
                    d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"
                />
            </svg>
        </Section>
    );
};

export default WaveDivider;
