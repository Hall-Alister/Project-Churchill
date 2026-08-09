import { getConfig } from "./core/config/store"

import app from "ags/gtk4/app"

import barCss from "./bar/bar.scss"
import themeCss from "./generated/theme.css"

import Bar from "./bar/Bar"
import BarControlWindow from "./bar/modules/bar-control/BarControlWindow"

app.start({
    css: themeCss + barCss,

    main() {
        const config = getConfig()

        print("Churchill configuration loaded")
        print(JSON.stringify(config, null, 2))

        Bar()
        BarControlWindow()
    },
})
