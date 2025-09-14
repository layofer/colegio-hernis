control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P0,
    EventBusValue.MICROBIT_PIN_EVT_PULSE_LO
    )
})
