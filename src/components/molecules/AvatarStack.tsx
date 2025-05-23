import { Avatar, AvatarGroup } from '@mui/material';
import Ashley from '../../assets/avatars/Ashley.png';
import Kyle from '../../assets/avatars/Kyle.png';
import Lucy from '../../assets/avatars/Lucy.png';
import Luke from '../../assets/avatars/Luke.png';
import Maria from '../../assets/avatars/Maria.png';
import Mark from '../../assets/avatars/Mark.png';
import Naomi from '../../assets/avatars/Naomi.png';
type Avatars = {
    name: string;
    photo_url: string;
};

interface AvatarStackProps {
    maxDisplayed: number;
    spacing?: number;
    data?: Avatars[];
}

export const AvatarStack = ({ maxDisplayed, spacing = 14 }: AvatarStackProps) => {
    return (
        <AvatarGroup max={maxDisplayed} spacing={spacing}>
            <Avatar alt="Lucy" src={Lucy} />
            <Avatar alt="Ashley" src={Ashley} />
            <Avatar alt="Kyle" src={Kyle} />
            <Avatar alt="Luke" src={Luke} />
            <Avatar alt="Maria" src={Maria} />
            <Avatar alt="Mark" src={Mark} />
            <Avatar alt="Naomi" src={Naomi} />
        </AvatarGroup>
    );
};
