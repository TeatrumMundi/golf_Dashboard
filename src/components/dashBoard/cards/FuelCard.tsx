import { GridItemProps } from "@/types/common";
import BaseCard from "@/components/dashBoard/cards/BaseCard";
import { TriangleAlert, Fuel } from 'lucide-react';
import { useState } from "react";

interface FuelCard extends GridItemProps {
    fuelLevel: number;
    tankMaxCapacity?: number;
}

export default function FuelCard(props: FuelCard) {
    const {
        fuelLevel,
        tankMaxCapacity = 100,
        gridX = 0,
        gridY = 0,
        gridW = 2,
        gridH = 2,
        minW = 0,
        minH = 0,
        isEditable,
    } = props;

    const [showLiters, setShowLiters] = useState(false);

    const fuelPercentage = (fuelLevel / 100) * 100;
    const remainingLiters = (fuelPercentage / 100) * tankMaxCapacity;

    const barColor =
        fuelPercentage > 75
            ? "bg-green-500"
            : fuelPercentage > 50
                ? "bg-lime-500"
                : fuelPercentage > 35
                    ? "bg-yellow-500"
                    : fuelPercentage > 20
                        ? "bg-orange-500"
                        : "bg-red-500";

    const isCritical = fuelPercentage <= 20;

    return (
        <BaseCard
            gridX={gridX}
            gridY={gridY}
            gridW={gridW}
            gridH={gridH}
            minW={minW}
            minH={minH}
            isEditable={isEditable}
        >
            <div
                className="bg-gray-700 w-3/4 h-10 rounded-xs overflow-hidden relative"
                onClick={() => setShowLiters(!showLiters)}
            >
                {/* Fuel bar */}
                <div
                    className={`${barColor} h-full flex items-center justify-center text-white font-bold text-xl`}
                    style={{ width: `${fuelPercentage}%` }}
                >
                    {!isCritical && (
                        showLiters
                            ? `${remainingLiters.toFixed(1)}L`
                            : `${Math.round(fuelPercentage)}%`
                    )}
                </div>

                {/* Critical fuel warning - always centered */}
                {isCritical && (
                    <div className="absolute inset-0 flex items-center justify-center text-red-500 font-bold animate-pulse">
                        <TriangleAlert size={18} />
                        <span className="ml-1 text-xl">
                            {showLiters ? `${remainingLiters.toFixed(1)}L` : `${Math.round(fuelPercentage)}%`}
                        </span>
                    </div>
                )}

                {/* Fuel icon */}
                <Fuel className="absolute right-1 bottom-1/2 translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
        </BaseCard>
    );
}