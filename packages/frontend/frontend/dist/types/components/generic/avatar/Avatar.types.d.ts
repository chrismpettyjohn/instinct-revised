export interface AvatarProps {
    className?: string;
    look?: string;
    action?: 'std' | 'wav';
    gesture?: 'std' | 'sml';
    direction?: number;
    headDirection?: number;
    headOnly?: boolean;
    size?: 'l' | 's' | 'n';
    onClick?: () => void;
}
