import {GridItemProps} from "@/types/common";
import BaseCard from "@/components/dashBoard/cards/BaseCard";
import GlowingText from "@/components/common/GlowingText";
import { Car } from 'lucide-react';

interface MileageCard extends GridItemProps
{
    mileage: number;
}

export default function MileageCard(props: MileageCard)
{
    const {
        mileage,
        gridX = 0,
        gridY = 0,
        gridW = 2,
        gridH = 2,
        minW = 2,
        minH = 2,
        maxW = 2,
        maxH = 2,
        isEditable,
    } = props;

    return (
        <BaseCard
            gridX={gridX}
            gridY={gridY}
            gridW={gridW}
            gridH={gridH}
            minW={minW}
            minH={minH}
            maxW={maxW}
            maxH={maxH}
            isEditable={isEditable}
        >
            <div className="flex flex-col items-center justify-center h-full select-none">
                <span className="text-xs text-gray-500 tracking-wide">Total Distance</span>
                <GlowingText className="text-3xl ">{mileage} km</GlowingText>
            </div>

            <Car className="absolute left-4 bottom-1/2 translate-y-1/2 text-gray-500 w-8 h-8" />
        </BaseCard>
    );
}