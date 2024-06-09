import { FC } from 'react';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import {
    faSearch,
    faStar as solidStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ValueOf, IconName } from '../../constants/constants';




const iconNameToSvgIcon = {
    [IconName.SEARCH]: faSearch,
    [IconName.STAR_SOLID]: solidStar,
    [IconName.STAR_REGULAR]: regularStar,
};

type IconProps = {
    className?: string;
    color?: string;
    name: ValueOf<typeof IconName>;
    onClick?: () => void;
};

export const Icon: FC<IconProps> = ({
    color,
    name,
    className = '',
    onClick,
}) => {
    return (
        <FontAwesomeIcon
            onClick={onClick}
            className={className}
            icon={iconNameToSvgIcon[name]}
            color={color}
        />
    );
};
