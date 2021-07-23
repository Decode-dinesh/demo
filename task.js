var TechnicalSpecifications = [{
    dimension: {
        overallLength_mm: 3.500,
        overallWidth_mm: 1600,
        overallHeight_mm: 1490,
        wheelBase_mm: 2360,
        trackWidth: {
            front_mm: 1405,
            rear_mm: 1400,
        },
        minimumTurning_Radius_m: 4.5,
        minimumGround_clearence_mm: 170,
    },
    capacities: {
        seatingCapacity_Persons: 5,
        FuelTankCapaity_liters: 35

    },
    engine: {
        type: kb - series,
        numberOfCylinders: 3,
        numberOfValves: 12,
        capacity_cc: 998,
        bore_X_Stroke_mm: 73.0 * 79.5,
        compressionRatio: 10.1,
        maximumPower: 67 / 6200,
        maximumTorque: 90 / 3500,
        fuelDistribution: 'multipointinjection',

    },
    transmission: {
        type: 5 - speed_Mt
    },
    chasis: {
        steering: 'rack & pinion, power assisted',
        brakes: {
            front: 'ventilated disk',
            rear: 'drum'
        },
        suspension: {
            front: 'macphersonstruct & coil spring',
            rear: 'isolated trailing link & coil spring',
        },
        shockAbsorbers: 'gasFilled',
        type_Tubeless: 155 / 8013,
    },
    weights: {
        krebWeight_MinWithFullOptions_Kg: 860 - 880,
        gross_Vechicle_weight_Kg: 1320
    }
}]
