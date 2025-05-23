import GridFour_Gray from '../../assets/filterIcons/GridFour_Gray.svg';
import Sliders from '../../assets/filterIcons/Sliders.svg';
import SortDescending from '../../assets/filterIcons/SortDescending.svg';
import { FilterOption } from './FilterOption';
export const HeaderSortOptions = () => {
    return (
        <div className="flex gap-[20px]">
            <FilterOption
                leftSideIcon={GridFour_Gray}
                className="text-lg font-semibold text-gray-600"
            >
                Grid View
            </FilterOption>
            <FilterOption leftSideIcon={Sliders} className="text-lg font-semibold text-gray-600">
                Filter
            </FilterOption>
            <FilterOption
                leftSideIcon={SortDescending}
                className="text-lg font-semibold text-gray-600"
            >
                Sort
            </FilterOption>
        </div>
    );
};
