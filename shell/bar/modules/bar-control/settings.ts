import {
    getConfig,
    updateConfig,
} from "../../../core/config/store"

export type BarSetting =
    | "thickness"
    | "opacity"
    | "spacing"
    | "margin"
    | "radius"

export function updateBarSetting(
    setting: BarSetting,
    value: number,
): void {
    updateConfig({
        bar: {
            ...getConfig().bar,
            [setting]: value,
        },
    })

    print(
        `Churchill: bar.${setting} = ${value}`,
    )
}

export function resetBarSettings(): void {
    const config = getConfig()

    updateConfig({
        bar: {
            ...config.bar,
            thickness: 48,
            opacity: 0.72,
            spacing: 8,
            margin: 8,
            radius: 16,
        },
    })

    print("Churchill: bar settings reset")
}
