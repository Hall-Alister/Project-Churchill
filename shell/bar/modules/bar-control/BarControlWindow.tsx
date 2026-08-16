import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"

import { getConfig } from "../../../core/config/store"

import {
    isModuleEnabled,
    toggleModule,
    type ChurchillModule,
} from "./modules"

import {
    updateBarSetting,
    resetBarSettings,
} from "./settings"

import {
    closeBarControl,
    resetChurchill,
} from "./actions"

import BarSlider from "./BarSlider"

const { TOP, RIGHT, BOTTOM } = Astal.WindowAnchor

const MODULES: Array<[ChurchillModule, string]> = [
    ["active_window", "Active Window"],
    ["workspaces", "Workspaces"],
    ["wifi_bluetooth", "Wi-Fi & Bluetooth"],
    ["fastfetch_htop", "Fastfetch / Htop"],
    ["processes", "Processes"],
]

export default function BarControlWindow() {
    const config = getConfig()
    const bar = config.bar

    return (
        <window
            name="churchill-bar-control"
            application={app}
            anchor={TOP | RIGHT | BOTTOM}
            exclusivity={Astal.Exclusivity.IGNORE}
            visible={false}
            keymode={Astal.Keymode.ON_DEMAND}
            class="bar-control-window"
        >
            <scrolledwindow
                class="bar-control-scroll"
                hscrollbarPolicy={Gtk.PolicyType.NEVER}
                vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                propagateNaturalWidth={true}
                propagateNaturalHeight={false}
            >
                <box
                    class="bar-control-panel"
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={16}
                    valign={Gtk.Align.START}
                >
                    <box
                        orientation={Gtk.Orientation.HORIZONTAL}
                        spacing={12}
                    >
                        <box
                            orientation={Gtk.Orientation.VERTICAL}
                            hexpand
                        >
                            <label
                                class="bar-control-heading"
                                label="Churchill"
                                halign={Gtk.Align.START}
                            />

                            <label
                                class="bar-control-subheading"
                                label="Bar Controls"
                                halign={Gtk.Align.START}
                            />
                        </box>

                        <button
                            class="bar-control-close"
                            onClicked={closeBarControl}
                        >
                            <label label="×" />
                        </button>
                    </box>

                    <box
                        class="bar-control-section"
                        orientation={Gtk.Orientation.VERTICAL}
                        spacing={10}
                    >
                        <label
                            class="bar-control-section-title"
                            label="Modules"
                            halign={Gtk.Align.START}
                        />

                        {MODULES.map(([module, label]) => (
                            <button
                                class={
                                    isModuleEnabled(module)
                                        ? "bar-control-module active"
                                        : "bar-control-module"
                                }
                                onClicked={() => toggleModule(module)}
                            >
                                <box
                                    orientation={Gtk.Orientation.HORIZONTAL}
                                    spacing={10}
                                >
                                    <label
                                        label={
                                            isModuleEnabled(module)
                                                ? "✓"
                                                : "○"
                                        }
                                    />

                                    <label
                                        label={label}
                                        hexpand
                                        halign={Gtk.Align.START}
                                    />
                                </box>
                            </button>
                        ))}
                    </box>

                    <box
                        class="bar-control-section"
                        orientation={Gtk.Orientation.VERTICAL}
                        spacing={14}
                    >
                        <label
                            class="bar-control-section-title"
                            label="Bar Appearance"
                            halign={Gtk.Align.START}
                        />

                        <BarSlider
                            label="Thickness"
                            value={bar.thickness}
                            min={32}
                            max={80}
                            step={1}
                            suffix=" px"
                            onChange={(value) =>
                                updateBarSetting(
                                    "thickness",
                                    value,
                                )
                            }
                        />

                        <BarSlider
                            label="Opacity"
                            value={bar.opacity}
                            min={0.2}
                            max={1}
                            step={0.01}
                            onChange={(value) =>
                                updateBarSetting(
                                    "opacity",
                                    value,
                                )
                            }
                        />

                        <BarSlider
                            label="Spacing"
                            value={bar.spacing}
                            min={0}
                            max={24}
                            step={1}
                            suffix=" px"
                            onChange={(value) =>
                                updateBarSetting(
                                    "spacing",
                                    value,
                                )
                            }
                        />

                        <BarSlider
                            label="Margin"
                            value={bar.margin}
                            min={0}
                            max={24}
                            step={1}
                            suffix=" px"
                            onChange={(value) =>
                                updateBarSetting(
                                    "margin",
                                    value,
                                )
                            }
                        />

                        <BarSlider
                            label="Radius"
                            value={bar.radius}
                            min={0}
                            max={32}
                            step={1}
                            suffix=" px"
                            onChange={(value) =>
                                updateBarSetting(
                                    "radius",
                                    value,
                                )
                            }
                        />
                    </box>

                    <box
                        orientation={Gtk.Orientation.HORIZONTAL}
                        spacing={10}
                    >
                        <button
                            class="bar-control-action"
                            onClicked={resetBarSettings}
                        >
                            <label label="Reset Bar" />
                        </button>

                        <button
                            class="bar-control-action"
                            onClicked={resetChurchill}
                        >
                            <label label="Reset Everything" />
                        </button>
                    </box>
                </box>
            </scrolledwindow>
        </window>
    )
}
