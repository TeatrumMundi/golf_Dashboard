import React, { ReactNode } from 'react';
import { GridItemProps } from "@/types/common";

interface BaseCardProps extends GridItemProps {
    children: ReactNode;
}

export default function BaseCard({
    children,
    gridX = 0,
    gridY = 0,
    gridW = 2,
    gridH = 2,
    minW = 0,
    minH = 0,
    maxW = 0,
    maxH = 0,
    isEditable
}: BaseCardProps) {
    if (!children) return null;

    const gridAttributes = {
        'gs-x': gridX.toString(),
        'gs-y': gridY.toString(),
        'gs-w': gridW.toString(),
        'gs-h': gridH.toString(),
        'gs-min-w': minW.toString(),
        'gs-min-h': minH.toString(),
        'gs-max-w': maxW.toString(),
        'gs-max-h': maxH.toString(),
    };

    const cardClass = `grid-stack-item-content rounded-sm ${
        isEditable ? 'cursor-grab bg-gray-800' : 'cursor-default bg-none'
    }`;

    return (
        <div className="grid-stack-item" {...gridAttributes}>
            <div className={cardClass}>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}