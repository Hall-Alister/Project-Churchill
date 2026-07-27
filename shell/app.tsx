import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"

app.start({
    main() {
        const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

        return (
            <window
                visible
                anchor={TOP | LEFT | RIGHT}
                exclusivity="exclusive"
            >
                <label label="Project Churchill" />
            </window>
        )
    },
})
