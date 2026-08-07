/*
============================================================
Churchill Theme Compiler

Converts theme.json into GTK CSS variables.

Nothing in Churchill should directly depend on JSON.

Everything depends on CSS variables.

============================================================
*/

import Theme from "./Theme"

export function compileTheme(): string {

    const t = Theme

    return `
:root {

    --churchill-background: ${t.colors.background};
    --churchill-background-secondary: ${t.colors.backgroundSecondary};

    --churchill-text: ${t.colors.text};
    --churchill-text-secondary: ${t.colors.textSecondary};

    --churchill-accent: ${t.colors.accent};

    --churchill-workspace-active: ${t.colors.workspaceActive};
    --churchill-workspace-occupied: ${t.colors.workspaceOccupied};

    --churchill-radius: ${t.geometry.radius}px;

    --churchill-padding: ${t.geometry.padding}px;

    --churchill-module-spacing: ${t.geometry.moduleSpacing}px;

}
`
}
