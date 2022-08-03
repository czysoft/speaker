input.onButtonPressed(Button.A, function () {
    当前音符 = 0
    当前拍数 = 0
    basic.showString("1")
    for (let index = 0; index <= list2.length; index++) {
        当前音符 = list2[index]
        当前拍数 = list3[index]
        if (当前音符 == 0) {
            basic.pause(当前拍数)
        } else {
            czyminode.SpeakerOut(
            AnalogConnName.Analog_A0,
            SpeakerChannel.SPEAKER_RIGHT,
            10,
            list[当前音符],
            当前拍数
            )
        }
    }
    czyminode.SpeakerOut(
    AnalogConnName.Analog_A0,
    SpeakerChannel.SPEAKER_RIGHT,
    0,
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showString("324234")
})
let 当前拍数 = 0
let 当前音符 = 0
let list3: number[] = []
let list2: number[] = []
let list: number[] = []
list = [
0,
261,
293,
329,
349,
391,
440,
493,
532,
587,
659,
698,
783,
880,
987,
1046,
1174,
1318,
1396,
1567,
1760,
1975
]
list2 = [
1 + 7,
2 + 7,
3 + 7,
1 + 7,
1 + 7,
2 + 7,
3 + 7,
1 + 7,
3 + 7,
4 + 7,
5 + 7,
3 + 7,
4 + 7,
5 + 7,
5 + 7,
6 + 7,
5 + 7,
4 + 7,
3 + 7,
1 + 7,
5 + 7,
6 + 7,
5 + 7,
4 + 7,
3 + 7,
1 + 7,
3 + 7,
5,
1 + 7,
3 + 7,
5,
1 + 7
]
list3 = [
1000,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
2000,
1000,
1000,
2000,
500,
500,
500,
500,
1000,
1000,
500,
500,
500,
500,
1000,
1000,
1000,
1000,
2000,
1000,
1000,
2000
]
