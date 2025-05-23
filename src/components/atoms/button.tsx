import { buttonSizes, buttonVariants } from '../variants';

type ButtonVariant = keyof typeof buttonVariants;

interface ButtonProps {
    variant?: ButtonVariant;
    size?: 'sm' | 'md' | 'lg';
    rightSideIcon?: React.ReactNode;
    leftSideIcon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const base = 'focus:outline-none transition cursor-pointer flex gap-3 items-center';

export const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    rightSideIcon,
    leftSideIcon,
    className = '',
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${base} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
        >
            {leftSideIcon}
            {children}
            {rightSideIcon && <img src={rightSideIcon as string} width={24} alt="Button icon" />}
        </button>
    );
};
