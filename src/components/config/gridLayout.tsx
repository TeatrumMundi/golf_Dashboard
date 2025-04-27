'use client';

import { useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import Speedometer from "@/components/dashBoard/cards/Speedometer";

export default function GridStackLayout() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;

        const cellHeight = 50; // Height of each cell in pixels
        const margin = 5; // Margin between cells in pixels
        const screenRows = Math.floor(window.innerHeight / (cellHeight + margin)); // Calculate the number of rows that fit on the screen

        const grid = GridStack.init(
            {
                resizable: {handles: 'all'},
                float: true,
                margin: margin,
                cellHeight: cellHeight,
                maxRow: screenRows,
            },
            gridRef.current
        );

        return () => {grid.destroy();}; // Cleanup on unmounting
    }, []);

    return (
        <div className="p-4">
            <div ref={gridRef} className="grid-stack">
                <Speedometer
                    speedometerValue={60}
                    maxValue={350}
                    title={'Speed'}
                    unit={'Km/h'}
                    gridX={0}
                    gridY={0}
                    gridW={2}
                    gridH={5}
                />
            </div>
        </div>
    );
}
