'use client';

import { useEffect, useRef, useState } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import Speedometer from "@/components/dashBoard/cards/Speedometer";
import { Eye, EyeOff } from 'lucide-react';

const GRID_CONFIG = {
    CELL_HEIGHT: 35,
    MARGIN: 5,
    MAX_SPEED: 300,
    MAX_RPM: 8000,
    INITIAL_SPEED: 20,
    INITIAL_RPM: 6000,
};


export default function GridStackLayout() {
    const gridRef = useRef<HTMLDivElement>(null);
    const gridInstance = useRef<GridStack | null>(null);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        if (!gridRef.current) return;

        const screenRows = Math.floor(window.innerHeight / (GRID_CONFIG.CELL_HEIGHT + GRID_CONFIG.MARGIN * 2));

        gridInstance.current = GridStack.init(
            {
                resizable: { handles: 'all' },
                float: true,
                margin: GRID_CONFIG.MARGIN,
                cellHeight: GRID_CONFIG.CELL_HEIGHT,
                maxRow: screenRows,
            }, gridRef.current);
    }, []);

    useEffect(() => {
        if (gridInstance.current) {
            gridInstance.current.enableMove(isEditable);
            gridInstance.current.enableResize(isEditable);
        }
    }, [isEditable]);

    return (
        <div className="p-4">
            <div ref={gridRef} className="grid-stack">
                <Speedometer
                    speedometerValue={GRID_CONFIG.INITIAL_SPEED}
                    maxValue={GRID_CONFIG.MAX_SPEED}
                    unit={'km/h'}
                    gridX={0}
                    gridY={6}
                    gridW={5}
                    gridH={12}
                    isEditable={isEditable}
                />
                <Speedometer
                    speedometerValue={GRID_CONFIG.INITIAL_RPM}
                    maxValue={GRID_CONFIG.MAX_RPM}
                    unit={'RPM'}
                    gridX={7}
                    gridY={6}
                    gridW={5}
                    gridH={12}
                    isEditable={isEditable}
                />
            </div>
            <button
                onClick={() => setIsEditable(!isEditable)}
                className="btn-primary absolute bottom-1 left-1 bg-zinc-700 rounded-sm p-0.5 hover:bg-zinc-600"
            >
                {isEditable ? (
                    <EyeOff className="w-6 h-6 text-cyan-400 hover:text-cyan-700" />
                ) : (
                    <Eye className="w-6 h-6 text-cyan-400 hover:text-cyan-700" />
                )}
            </button>
        </div>
    );
}