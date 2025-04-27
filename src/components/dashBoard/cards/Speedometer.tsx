import BaseCard from './BaseCard';
import {GridItemProps} from "@/types/common";

interface SpeedometerProps extends GridItemProps{
    speedometerValue: number;
    maxValue: number;
    title: string;
    unit: string;
}

export default function Speedometer(props: SpeedometerProps) {
    const {
        speedometerValue,
        maxValue,
        title,
        unit,
        gridX = 0,
        gridY = 0,
        gridW = 2,
        gridH = 2
    } = props;

    return (
        <BaseCard
            title={title}
            gridX={gridX}
            gridY={gridY}
            gridW={gridW}
            gridH={gridH}
        >
            <div className="flex items-center justify-center mt-4 w-full h-full">
                <svg
                    viewBox="0 0 100 100"
                    className="w-3/4 h-3/4"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#4A5568"
                        strokeWidth="10"
                        fill="none"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#38B2AC"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${(speedometerValue / maxValue) * 283} 283`}
                    />
                </svg>
                <div className="absolute text-2xl font-bold text-white">
                    {speedometerValue} {unit}
                </div>
            </div>
        </BaseCard>
    );
}