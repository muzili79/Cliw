//% color="#0000CD" weight=21 icon="\uf185"
namespace cliw_麦克比{
    //% blockId=cliw_superwave_callback block="超声波返回(cm)|发送 %trigvalue|接收 %echovalue"
    //% color="#006400"
    //% weight=98
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Ultrasonic_Car(trigvalue:DigitalPin,echovalue:DigitalPin): number {

        // send pulse
        pins.setPull(trigvalue, PinPullMode.PullNone);
        pins.digitalWritePin(trigvalue, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigvalue, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigvalue, 0);

        // read pulse
        let d = pins.pulseIn(echovalue, PulseValue.High, 43200);
        return d / 58;
    }
}