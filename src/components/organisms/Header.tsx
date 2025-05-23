import PlaceholderLogo from '../../assets/PlaceholderLogo.svg';
import { useIsMobile } from '../../hooks/useIsMobile';
import { HeaderDisplayOptions } from '../molecules/HeaderDisplayOptions';
import { HeaderSortOptions } from '../molecules/HeaderSortOptions';

export const Header = () => {
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile ? (
                <section className="flex flex-col gap-4 border-b-1 border-gray-200 px-4 py-6">
                    <img src={PlaceholderLogo} width={64} alt="Placeholder logo" />

                    <div className="flex flex-col justify-between gap-4">
                        <h1 className="text-[30px] font-semibold text-gray-900">Project PlanetX</h1>
                        <HeaderSortOptions />
                    </div>
                </section>
            ) : (
                <section className="flex gap-[16px] border-b-1 border-gray-200 p-[32px]">
                    <img src={PlaceholderLogo} alt="Placeholder logo" />
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-[30px] font-semibold text-gray-900">
                                Project PlanetX
                            </h1>
                            <HeaderSortOptions />
                        </div>

                        <div className="mt-[12px] flex h-full items-center justify-between">
                            <HeaderDisplayOptions />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
