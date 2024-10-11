'use client'

import CountUp from "react-countup"

const statsData = [
    {
        value: 1.2,
        type: 'Hoteis',
        unit: 'k'
    },
    {
        value: 4.8,
        type: 'Quartos',
        unit: 'k'
    },
    {
        value: 186,
        type: 'Países',
        unit: null,
    }
]
export function Stats() {
    return (
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10">
            {statsData.map((Item, index) => {
                return (
                    <div key={index} className="flex">
                        <div className="flex items-baseline gap-x-2">
                            <h3 className="h3 text-soft_green">
                                <CountUp start={0} end={Item.value} decimals={Item.value % 1 !== 0 ? 1 : 0} duration={6} />
                                <span>{Item.unit}</span>
                            </h3>
                            <div className="text-black font-semibold">{Item.type}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}