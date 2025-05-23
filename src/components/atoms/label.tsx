import { labelVariants } from '../variants';

interface LabelProps {
    variant?: LabelVariant;
    children: React.ReactNode;
}

type LabelVariant = keyof typeof labelVariants;

export const Label = ({ variant = 'danger', children }: LabelProps) => {
    return <span className={`rounded-2xl px-3 py-2 ${labelVariants[variant]}`}>{children}</span>;
};
