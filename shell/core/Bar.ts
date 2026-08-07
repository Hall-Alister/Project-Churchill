/*
============================================================
Churchill Bar Configuration

This file contains user-facing layout settings.

The bar should be customisable without editing
the actual widget code.

Future:
- Settings application edits this file
- Theme engine overrides these values
- Community themes can provide alternatives

============================================================
*/


/*
============================================================
DIMENSIONS

Basic physical layout values.

These should eventually become theme variables.
============================================================
*/

export const BAR = {

    /*
    Height of the top bar.

    Increasing this creates more room for larger widgets.
    */
    height: 42,


    /*
    Space between the outside edge of the screen
    and the first/last widget.
    */
    horizontalPadding: 12,


    /*
    Internal spacing between modules.
    */
    moduleSpacing: 8,


    /*
    Corner radius of the bar.

    0 = rectangle
    Larger values = rounded/pill style
    */
    radius: 14,

}



/*
============================================================
DOCK SYSTEM

The right side of Churchill is not a random collection
of buttons.

It is a grid of identical widget slots.

This allows:
- user widgets
- community widgets
- custom layouts
============================================================
*/

export const DOCK = {

    /*
    Number of available widget positions.
    */
    slots: 8,


    /*
    Size of each widget square.
    */
    slotSize: 34,


    /*
    Gap between widget squares.
    */
    spacing: 6,

}



/*
============================================================
MODULE SETTINGS

Enable or disable built-in modules.

Eventually these become editable through Settings.
============================================================
*/

export const MODULES = {

    activeWindow: true,

    workspaces: true,

    clock: true,

    menu: true,

}



/*
============================================================
CLOCK SETTINGS
============================================================
*/

export const CLOCK = {

    /*
    Use 24 hour time.
    */
    twentyFourHour: true,

}



/*
============================================================
DEVELOPMENT

Useful while building Churchill.

Disable before stable releases.
============================================================
*/

export const DEVELOPMENT = {

    showDebugBorders: false,

}
