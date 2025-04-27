import React, { ReactNode } from 'react';
import {GridItemProps} from "@/types/common";

interface BaseCardProps extends GridItemProps{
    children: ReactNode;
    title?: string;
}

export default function BaseCard(props: BaseCardProps) {
    const {
        children,
        title,
        gridX = 0,
        gridY = 0,
        gridW = 2,
        gridH = 2
    } = props;

    if (!children) {return null;}

    return (
        <div
            className="grid-stack-item"
            gs-x={gridX.toString()}
            gs-y={gridY.toString()}
            gs-w={gridW.toString()}
            gs-h={gridH.toString()}
        >
            <div className="grid-stack-item-content cursor-move">
                <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    {title && <h2 className="text-xl font-bold text-white">{title}</h2>}
                    {children}
                </div>
            </div>
        </div>
    );
}