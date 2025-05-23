import Plus from '../../assets/Plus.svg';
import { Button } from '../atoms/button';
import { AvatarStack } from '../molecules/AvatarStack';
import { BreadCrumbs } from '../molecules/Breadcrumbs';
import { SearchInput } from '../molecules/SearchInput';

export const UpperNav = () => {
    return (
        <header className="flex items-center justify-between bg-gray-100 px-[32px] py-[20px]">
            <BreadCrumbs />
            <div className="flex gap-4">
                <SearchInput />
                <div className="flex items-center gap-2">
                    <AvatarStack maxDisplayed={7} spacing={15} />
                    <Button
                        variant="secondary"
                        className="cursor-pointer rounded-full border-1 border-gray-200 font-semibold"
                        icon={Plus}
                    >
                        Invite
                    </Button>
                </div>
            </div>
        </header>
    );
};
