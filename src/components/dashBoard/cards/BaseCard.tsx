import React, { ReactNode } from 'react';
import {GridItemProps} from "@/types/common";

interface BaseCardProps extends GridItemProps{
    children: ReactNode;
}

export default function BaseCard(props: BaseCardProps) {
    const {
        children,
        gridX = 0,
        gridY = 0,
        gridW = 2,
        gridH = 2,
        minW = 0,
        minH = 0,
        isEditable
    } = props;

    if (!children) {return null;}

    return (
        <div
            className="grid-stack-item"
            gs-x={gridX.toString()}
            gs-y={gridY.toString()}
            gs-w={gridW.toString()}
            gs-h={gridH.toString()}
            gs-min-w={minW?.toString()}
            gs-min-h={minH?.toString()}
        >
            <div className={`grid-stack-item-content rounded-sm ${isEditable ? 'cursor-grab bg-gray-800' : 'cursor-default bg-none'}`}>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}