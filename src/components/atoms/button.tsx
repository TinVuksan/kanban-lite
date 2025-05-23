import { buttonSizes, buttonVariants } from '../variants';

type ButtonVariant = keyof typeof buttonVariants;

interface ButtonProps {
    variant?: ButtonVariant;
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const base = 'focus:outline-none transition cursor-pointer flex gap-3';

export const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    icon,
    className = '',
}: ButtonProps) => {
    return (
        <button className={`${base} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}>
            {children}
            {icon && <img src={icon as string} width={24} alt="Button icon" />}
        </button>
    );
};
