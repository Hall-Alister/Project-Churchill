import theme from "../../theme/theme.json"


export function compileTheme(): string {

    const variables = {

        ...theme.colors,

        ...theme.dimensions,

        ...theme.typography

    }


    let css = ":root {\n"


    for (const [key, value] of Object.entries(variables)) {

        css += `    --churchill-${key}: ${value};\n`

    }


    css += "}\n"


    return css

}
