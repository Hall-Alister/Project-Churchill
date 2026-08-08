import theme from "../../theme/theme.json"

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


export function compileTheme(): string {

    const variables = flattenTheme(theme)

    let css = ":root {\n"

    for (const [key, value] of Object.entries(variables)) {

        css += `    --churchill-${key}: ${value};\n`

    }

    css += "}\n"

    return css
}
