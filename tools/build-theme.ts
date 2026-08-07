/*
============================================================
Churchill Theme Builder

Reads:
    theme/theme.json

Produces:
    shell/generated/theme.css

This is the ONLY place that converts JSON into CSS.

============================================================
*/

import { writeFileSync } from "node:fs"

import { compileTheme } from "../shell/core/ThemeCompiler"

const css = compileTheme()

writeFileSync(
    "./shell/generated/theme.css",
    css,
)

console.log("✓ Churchill theme compiled.")
