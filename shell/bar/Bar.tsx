import { Astal } from "ags/gtk4"
import Regions from "./Regions"

const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

export default function Bar() {
    return (
        <window
            name="churchill-bar"
            namespace="churchill"
            anchor={TOP | LEFT | RIGHT}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            visible
        >
            <box class="bar">
                <Regions />
            </box>
        </window>
    )
}
