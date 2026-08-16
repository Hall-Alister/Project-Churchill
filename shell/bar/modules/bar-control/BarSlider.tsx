import { Gtk } from "ags/gtk4"
import { createState } from "ags"

type BarSliderProps = {
    label: string
    value: number
    min: number
    max: number
    step: number
    suffix?: string
    onChange: (value: number) => void
}

export default function BarSlider({
    label,
    value,
    min,
    max,
    step,
    suffix = "",
    onChange,
}: BarSliderProps) {
    const [current, setCurrent] = createState(value)

    return (
        <box
            class="bar-control-slider-row"
            orientation={Gtk.Orientation.VERTICAL}
            spacing={6}
        >
            <box orientation={Gtk.Orientation.HORIZONTAL}>
                <label
                    class="bar-control-slider-label"
                    label={label}
                    halign={Gtk.Align.START}
                    hexpand
                />

                <label
                    class="bar-control-slider-value"
                    label={current.as(v => `${v}${suffix}`)}
                    halign={Gtk.Align.END}
                />
            </box>

            <slider
                class="bar-control-slider"
                min={min}
                max={max}
                step={step}
                value={current}
                onValueChanged={(self) => {
                    const next = self.value

                    setCurrent(next)
                    onChange(next)
                }}
            />
        </box>
    )
}
