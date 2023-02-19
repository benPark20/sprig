/*
@title: Pocket Piano
@author: Odysseus Kirikopoulos
*/

const tune_c = tune`
500,
500: c4^500,
15000`;
const tune_d = tune`
500,
500: d4^500,
15000`;
const tune_e = tune`
500,
500: e4^500,
15000`;
const tune_f = tune`
500,
500: f4^500,
15000`;
const tune_g = tune`
500,
500: g4^500,
15000`;
const tune_a = tune`
500,
500: a4^500,
15000`;
const tune_b = tune`
500,
500: b4^500,
15000`;
const tune_c_high = tune`
500,
500: c5^500,
15000`;

const note_c = "c";
const note_d = "d";
const note_e = "e";
const note_f = "f";
const note_g = "g";
const note_a = "a";
const note_b = "b";
const press = "p";

setLegend(
  [ note_c, bitmap`
3333333333333333
3333333333333333
3333322222233333
3332222222222333
3332000220002333
3322022020202233
3322022020202233
3322022020202233
3322022020202233
3322022020202233
3322022020202233
3332000220002333
3332222222222333
3333322222233333
3333333333333333
3333333333333333`],
  [ note_d, bitmap`
9999999999999999
9999999999999999
9999922222299999
9992222222222999
9992000020002999
9922022020222299
9922022020222299
9922000020022299
9922002220022299
9922020220222299
9922020220222299
9992022020002999
9992222222222999
9999922222299999
9999999999999999
9999999999999999`],
  [ note_e, bitmap`
6666666666666666
6666666666666666
6666622222266666
6662222222222666
6662002002202666
6622000002202266
6622020202202266
6622022202202266
6622022202202266
6622022202202266
6622022202202266
6662022202202666
6662222222222666
6666622222266666
6666666666666666
6666666666666666`],
  [ note_f, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDD222222DDDDD
DDD2222222222DDD
DDD2000020002DDD
DD220222202022DD
DD220222202022DD
DD220002202022DD
DD220222200022DD
DD220222202022DD
DD220222202022DD
DDD2022220202DDD
DDD2222222222DDD
DDDDD222222DDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
  [ note_g, bitmap`
7777777777777777
7777777777777777
7777722222277777
7772222222222777
7770002000202777
7720222020202277
7720222020202277
7720002020202277
7722202020202277
7722202020202277
7720002000200277
7772222222222777
7772222222222777
7777722222277777
7777777777777777
7777777777777777`],
  [ note_a, bitmap`
5555555555555555
5555555555555555
5555522222255555
5552222222222555
5552022200002555
5522022202202255
5522022202202255
5522022200002255
5522022202202255
5522022202202255
5522000202202255
5552222222222555
5552222222222555
5555522222255555
5555555555555555
5555555555555555`],
  [ note_b, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHH222222HHHHH
HHH2222222222HHH
HHH2000222022HHH
HH220222220222HH
HH220222220222HH
HH220022220222HH
HH222002220222HH
HH222202220222HH
HH222202220222HH
HHH2000222022HHH
HHH2222222222HHH
HHHHH222222HHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
);

setSolids([note_a, note_b, note_c, note_d, note_e, note_f, note_g, press]);

const piano = map`
cdefgabc`;

setMap(piano);

onInput("w", () => {
  playTune(tune_c);
  setMap(piano);
});

onInput("a", () => {
  playTune(tune_d);
  setMap(piano);
});

onInput("s", () => {
  playTune(tune_e);
  setMap(piano);
});

onInput("d", () => {
  playTune(tune_f);
  setMap(piano);
});

onInput("i", () => {
  playTune(tune_g);
  setMap(piano);
});

onInput("j", () => {
  playTune(tune_a);
  setMap(piano);
});

onInput("k", () => {
  playTune(tune_b);
  setMap(piano);
});

onInput("l", () => {
  playTune(tune_c_high);
  setMap(piano);
});