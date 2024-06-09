import React from "react";

interface IconButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
    className,
    onClick,
    children,
}) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;
