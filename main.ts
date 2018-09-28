//% weight=70 icon="\uf1e6" color=#00FF00 block="赤外線"
namespace infrared {
    let scroll: number
    const arr = [2550, 2550, 850, 850, 850, 850, 850, 1912, 850, 1912, 850, 1912, 850, 1912, 850, 850, 850, 850, 850]
    const arr2 = [2550, 2550, 850, 850, 850, 1912, 850, 850, 850, 850, 850, 1912, 850, 850, 850, 1912, 850, 1912, 850]
    //% blockId=on block="ON"
    export function on(): void {
        for (let j = 0; j < 2; j++){
            for (let i = 0, r = 0, time = 0; i <= arr.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(arr[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = arr[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P0, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P0, 0)
                        r = r - 26
                    }
                }
            }
            control.waitMicros(54400)    
        }
        basic.showString("ON")
    }
    //% blockId=off block="OFF"
    export function off(): void {
        for (let j = 0; j < 2; j++) {
            for (let i = 0, r = 0, time = 0; i <= arr2.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(arr2[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = arr2[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P0, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P0, 0)
                        r = r - 26
                    }
                }
            }
            control.waitMicros(54400)  
        }
        basic.showString("OFF")
    }
}