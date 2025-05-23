export const labelVariants = {
    primary: 'bg-primary/15 text-primary font-bold',
    success: 'bg-success/15 text-success font-bold',
    warning: 'bg-warning/15 text-warning font-bold',
    danger: 'bg-danger/15 text-danger font-bold',
} as const;

export const buttonVariants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-gray-600 hover:bg-gray-200',
    transparent: 'bg-transparent text-primary hover:bg-gray-200',
} as const;

export const buttonSizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
} as const;

export const iconSizes = {
    sm: 'text-[12px]',
    md: 'text-[24px]',
    lg: 'text-[32px]',
    xl: 'text-[48px]',
} as const;
