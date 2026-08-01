import app from "ags/gtk4/app"
import css from "./bar/bar.scss"
import Bar from "./bar/Bar"

app.start({
    css,

    main() {
        Bar()
    },
})
