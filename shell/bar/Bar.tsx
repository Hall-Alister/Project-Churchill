import { Astal } from "ags/gtk4"
import { createComputed } from "ags"

import { configState } from "../core/config/store"
import Regions from "./Regions"

const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

const barHeight = createComputed(
    () => Math.round(configState().bar.thickness),
)

export default function Bar() {
    return (
        <window
            name="churchill-bar"
            namespace="churchill"
            class="bar"
            anchor={TOP | LEFT | RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            visible
            $={(self) => {
                self.set_default_size(-1, barHeight())

                self.connect("notify::default-height", () => {
                    self.set_default_size(-1, barHeight())
                })

                barHeight.subscribe((height) => {
                    self.set_default_size(-1, height)
                })
            }}
        >
            <box class="bar">
                <Regions />
            </box>
        </window>
    )
}
