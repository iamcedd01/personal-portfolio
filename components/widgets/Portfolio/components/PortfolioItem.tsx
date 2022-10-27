import NextImage from 'next/image';

import Text from 'components/common/Text';
import { FlexLayout } from 'components/layouts/content';
import { ICommonProps } from 'types/globals';
import { IPortfolioItem } from 'types/portfolio';

type IPortfolioItemProps = ICommonProps & IPortfolioItem;

const PortfolioItem: React.FC<IPortfolioItemProps> = ({ name, shortDescription, thumbnail }) => {
    return (
        <div className="relative min-w-full">
            <NextImage alt={name} height="100%" layout="responsive" src={thumbnail} width="100%" />
            <div className="absolute top-0 left-0 h-full w-full bg-secondary bg-opacity-70 opacity-0 transition duration-300 hover:opacity-100">
                <FlexLayout className="h-full flex-col items-center justify-center">
                    <Text className="text-l font-bold text-white" text={name} />
                    {shortDescription && <Text className="text-white" text={shortDescription} />}
                </FlexLayout>
            </div>
        </div>
    );
};

export default PortfolioItem;
