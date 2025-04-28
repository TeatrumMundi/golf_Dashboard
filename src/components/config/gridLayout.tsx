'use client';

import { useEffect, useRef, useState } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import Speedometer from "@/components/dashBoard/cards/Speedometer";
import FuelCard from "@/components/dashBoard/cards/FuelCard";
import MileageCard from "@/components/dashBoard/cards/MileageCard";
import EditableToggleButton from "@/components/dashBoard/buttons/EditableToggleButton";

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
                <FuelCard
                    fuelLevel={14}
                    tankMaxCapacity={55}
                    gridX={5}
                    gridY={6}
                    minW={2}
                    minH={2}
                    isEditable={isEditable}
                />
                <MileageCard
                    mileage={123456}
                    gridX={0}
                    gridY={0}
                    gridW={2}
                    gridH={2}
                    minW={2}
                    minH={2}
                    isEditable={isEditable}

                />
            </div>
            <EditableToggleButton
                isEditable={isEditable}
                toggleEditable={() => setIsEditable(!isEditable)}
            />
        </div>
    );
}