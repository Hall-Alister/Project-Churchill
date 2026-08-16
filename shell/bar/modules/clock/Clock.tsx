import { createPoll } from "ags/time"

const time = createPoll(
    "",
    1000,
    () =>
        new Date().toLocaleTimeString(
            "en-AU",
            {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            },
        ),
)

export default function Clock() {
    return (
        <label
            class="clock"
            label={time}
        />
    )
}
