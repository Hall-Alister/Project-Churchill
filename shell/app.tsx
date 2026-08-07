import app from "ags/gtk4/app"

import barCss from "./bar/bar.scss"
import themeCss from "./generated/theme.css"

import Bar from "./bar/Bar"


app.start({

    css: themeCss + barCss,

    main() {

        Bar()

    },

})
