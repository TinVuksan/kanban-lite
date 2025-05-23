interface FilterOptionProps {
    children: React.ReactNode;
    leftSideIcon?: React.ReactNode;
    rightSideIcon?: React.ReactNode;
    iconSize?: number;
    className?: string;
}

export const FilterOption = ({
    children,
    leftSideIcon,
    rightSideIcon,
    iconSize = 20,
    className,
}: FilterOptionProps) => {
    return (
        <div className={`flex items-center gap-[8px] ${className} cursor-pointer`}>
            {leftSideIcon && (
                <img width={iconSize} src={leftSideIcon as string} alt="Filter icon" />
            )}
            <span>{children}</span>
            {rightSideIcon && (
                <img width={iconSize} src={rightSideIcon as string} alt="Filter icon" />
            )}
        </div>
    );
};
