import BaseCard from './BaseCard';
import {GridItemProps} from "@/types/common";
import {describeArc} from "@/utils/describeArc";

interface SpeedometerProps extends GridItemProps{
    speedometerValue: number;
    maxValue: number;
    unit: string;
}

export default function Speedometer(props: SpeedometerProps) {
    const {
        speedometerValue,
        maxValue,
        unit,
        gridX = 0,
        gridY = 0,
        gridW = 2,
        gridH = 2,
        isEditable,
    } = props;

    const arcY = 60; // Y-coordinate of the middle of the arc
    const arcX = 50; // X-coordinate of the middle of the arc

    // Start angle of the speedometer arc (in degrees)
    const ARC_START = 150;
    // End angle of the speedometer arc (in degrees)
    const ARC_END = 390;
    // Total angle span of the arc
    const arcSpan = ARC_END - ARC_START;
    // Current value as a percentage of the maximum, clamped to 1
    const valuePercent = Math.min(speedometerValue / maxValue, 1);
    // Angle corresponding to the current value on the arc
    const valueAngle = ARC_START + arcSpan * valuePercent;

    const svgStyle = {
        transition: 'ease-out 0.2s',
    };

    return (
        <BaseCard
            gridX={gridX}
            gridY={gridY}
            gridW={gridW}
            gridH={gridH}
            isEditable={isEditable}
        >
            <div className="flex items-center justify-center w-full h-full">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Background arc */}
                    <path
                        d={describeArc(arcX, arcY, 45, ARC_START, ARC_END)}
                        stroke="#4A5568"
                        strokeWidth="1"
                        fill="none"
                    />
                    {/* Value arc */}
                    <path
                        d={describeArc(arcX, arcY, 45, ARC_START, valueAngle)}
                        stroke="#00CFFF"
                        strokeWidth="1"
                        fill="none"
                        filter="url(#glow)"
                        style={svgStyle}
                    />

                    <text
                        x={arcX} // Center horizontally
                        y={arcY - 5} // Position vertically
                        textAnchor="middle" // Horizontally center the text
                        dominantBaseline="middle" // Vertically center the text
                        fill="#00CFFF"
                        fontWeight="bold"
                        className="select-none" // Prevent text selection
                        filter="url(#glow)"
                    >
                        {/* Value */}
                        <tspan fontSize="22">{speedometerValue}</tspan>
                        {/* Unit */}
                        <tspan x="50" dy="15" fontSize="7">{unit}</tspan>
                    </text>
                </svg>
            </div>
        </BaseCard>
    );
}