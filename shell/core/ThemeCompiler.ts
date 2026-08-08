import theme from "../../theme/theme.json"

function hexToRgba(hex: string, opacity: number): string {
    const clean = hex.replace("#", "")

    const r = parseInt(clean.slice(0, 2), 16)
    const g = parseInt(clean.slice(2, 4), 16)
    const b = parseInt(clean.slice(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

function flattenTheme(
    object: Record<string, unknown>,
    prefix = "",
): Record<string, string> {

    const result: Record<string, string> = {}

    for (const [key, value] of Object.entries(object)) {

        const name = prefix
            ? `${prefix}_${key}`
            : key

        if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
        ) {

            Object.assign(
                result,
                flattenTheme(
                    value as Record<string, unknown>,
                    name,
                ),
            )

        } else {

            result[name] = String(value)
        }
    }

    return result
}

function compileMaterialColors(
    object: Record<string, unknown>,
    prefix = "",
): Record<string, string> {

    const result: Record<string, string> = {}

    for (const [key, value] of Object.entries(object)) {

        const name = prefix
            ? `${prefix}_${key}`
            : key

        if (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)
        ) {

            Object.assign(
                result,
                compileMaterialColors(
                    value as Record<string, unknown>,
                    name,
                ),
            )

        } else {

            result[name] = String(value)
        }
    }

    return result
}

export function compileTheme(): string {

    const variables = flattenTheme(theme)

    const material = theme.material as Record<string, unknown>

    const materialColors: Record<string, string> = {}

    for (const [materialName, materialValue] of Object.entries(material)) {

        if (
            typeof materialValue !== "object" ||
            materialValue === null ||
            Array.isArray(materialValue)
        ) {
            continue
        }

        const materialObject =
            materialValue as Record<string, unknown>

        const background =
            materialObject.background

        const opacity =
            materialObject.opacity

        if (
            typeof background === "string" &&
            typeof opacity === "number"
        ) {

            materialColors[
                `material_${materialName}_background`
            ] = hexToRgba(
                background,
                opacity,
            )
        }

        const border =
            materialObject.border

        const borderOpacity =
            materialObject.border_opacity

        if (
            typeof border === "string" &&
            typeof borderOpacity === "number"
        ) {

            materialColors[
                `material_${materialName}_border`
            ] = hexToRgba(
                border,
                borderOpacity,
            )
        }
    }

    Object.assign(
        variables,
        materialColors,
    )

    let css = ":root {\n"

    for (const [key, value] of Object.entries(variables)) {

        css += `    --churchill-${key}: ${value};\n`
    }

    css += "}\n"

    return css
}
