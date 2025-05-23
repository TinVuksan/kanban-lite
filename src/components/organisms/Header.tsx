import PlaceholderLogo from '../../assets/PlaceholderLogo.svg';
import { HeaderDisplayOptions } from '../molecules/HeaderDisplayOptions';
import { HeaderSortOptions } from '../molecules/HeaderSortOptions';

export const Header = () => {
    return (
        <>
            <img src={PlaceholderLogo} alt="Placeholder logo" />
            <div className="flex w-full flex-col">
                <div className="flex justify-between">
                    <h1 className="text-[30px] font-semibold text-gray-900">Project PlanetX</h1>
                    <HeaderSortOptions />
                </div>

                <div className="mt-[12px] flex h-full items-center justify-between">
                    <HeaderDisplayOptions />
                </div>
            </div>
        </>
    );
};
