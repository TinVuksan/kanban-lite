import Export from '../../assets/Export.svg';
import Columns from '../../assets/filterIcons/Columns.svg';
import GridFour from '../../assets/filterIcons/GridFour.svg';
import List from '../../assets/filterIcons/List.svg';
import Rows from '../../assets/filterIcons/Rows.svg';
import { Button } from '../atoms/button';
import { FilterOption } from './FilterOption';

export const HeaderDisplayOptions = () => {
    return (
        <>
            <div className="flex h-full gap-2 rounded-2xl bg-gray-200 font-semibold text-gray-600">
                <FilterOption className="px-[16px]" leftSideIcon={GridFour}>
                    Grid View
                </FilterOption>
                <FilterOption
                    className="h-[80%] self-center rounded-full bg-white px-[16px] text-gray-800 shadow-md"
                    leftSideIcon={List}
                >
                    List View
                </FilterOption>
                <FilterOption className="px-[16px]" leftSideIcon={Columns}>
                    Column View
                </FilterOption>
                <FilterOption className="px-[16px]" leftSideIcon={Rows}>
                    Row View
                </FilterOption>
            </div>

            {/* Export button aligned to the right */}
            <div>
                <Button icon={Export} className="rounded-full font-bold" size="lg">
                    Export Data
                </Button>
            </div>
        </>
    );
};
