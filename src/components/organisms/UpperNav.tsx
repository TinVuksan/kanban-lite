import { FaChevronLeft } from 'react-icons/fa6';
import Plus from '../../assets/Plus.svg';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { Button } from '../atoms/button';
import { AvatarStack } from '../molecules/AvatarStack';
import { BreadCrumbs } from '../molecules/Breadcrumbs';
import { SearchInput } from '../molecules/SearchInput';

export const UpperNav = () => {
    const isMobile = useIsMobile();
    const isOnline = useOnlineStatus();

    return (
        <>
            {isMobile ? (
                //* Mobile header layout
                <header className="px-4 py-6">
                    <div className="flex items-center">
                        <Button
                            leftSideIcon={<FaChevronLeft />}
                            variant="transparent"
                            className="font-semibold"
                        >
                            Back To Project
                        </Button>
                    </div>

                    <div className="flex items-center gap-4">
                        <SearchInput />
                        <div className="flex items-center gap-2">
                            <AvatarStack maxDisplayed={4} spacing={15} />
                            <Button
                                variant="secondary"
                                className="cursor-pointer rounded-full border-1 border-gray-200 font-semibold"
                                rightSideIcon={Plus}
                            >
                                Invite
                            </Button>
                        </div>
                    </div>
                </header>
            ) : (
                //* Desktop header layout
                <>
                    {!isOnline && (
                        <div className="bg-danger flex h-[100px] w-full items-center justify-center">
                            <strong>You are currently offline - changes will be synced</strong>
                        </div>
                    )}

                    <header className="flex items-center justify-between bg-gray-100 px-[32px] py-[20px]">
                        <BreadCrumbs />
                        <div className="flex gap-4">
                            <SearchInput />
                            <div className="flex items-center gap-2">
                                <AvatarStack maxDisplayed={7} spacing={15} />
                                <Button
                                    variant="secondary"
                                    className="cursor-pointer rounded-full border-1 border-gray-200 font-semibold"
                                    rightSideIcon={Plus}
                                >
                                    Invite
                                </Button>
                            </div>
                        </div>
                    </header>
                </>
            )}
        </>
    );
};
