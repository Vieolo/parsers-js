// Parsers
import { 
    parseHourAndMinute, 
    parseDecimalTime,
    parseMinuteCount,
    parseFormattedTime
} from '../src/time_parsers/time_parsers'


describe("Time Parsers", () => {

    it("parses hour and minute correctly", () => {

        //#region variables

        let _0 = [20, 0]; // Hour, Minute
        let _1 = [20, 1];
        let _2 = [20, 2];
        let _3 = [20, 3];
        let _4 = [20, 4];
        let _5 = [20, 5];
        let _6 = [20, 6];
        let _7 = [20, 7];
        let _8 = [20, 8];
        let _9 = [20, 9];
        let _10 = [20, 10];
        let _11 = [20, 11];
        let _12 = [20, 12];
        let _13 = [20, 13];
        let _14 = [20, 14];
        let _15 = [20, 15];
        let _16 = [20, 16];
        let _17 = [20, 17];
        let _18 = [20, 18];
        let _19 = [20, 19];
        let _20 = [20, 20];
        let _21 = [20, 21];
        let _22 = [20, 22];
        let _23 = [20, 23];
        let _24 = [20, 24];
        let _25 = [20, 25];
        let _26 = [20, 26];
        let _27 = [20, 27];
        let _28 = [20, 28];
        let _29 = [20, 29];
        let _30 = [20, 30];
        let _31 = [20, 31];
        let _32 = [20, 32];
        let _33 = [20, 33];
        let _34 = [20, 34];
        let _35 = [20, 35];
        let _36 = [20, 36];
        let _37 = [20, 37];
        let _38 = [20, 38];
        let _39 = [20, 39];
        let _40 = [20, 40];
        let _41 = [20, 41];
        let _42 = [20, 42];
        let _43 = [20, 43];
        let _44 = [20, 44];
        let _45 = [20, 45];
        let _46 = [20, 46];
        let _47 = [20, 47];
        let _48 = [20, 48];
        let _49 = [20, 49];
        let _50 = [20, 50];
        let _51 = [20, 51];
        let _52 = [20, 52];
        let _53 = [20, 53];
        let _54 = [20, 54];
        let _55 = [20, 55];
        let _56 = [20, 56];
        let _57 = [20, 57];
        let _58 = [20, 58];
        let _59 = [20, 59];

        //#endregion


        //#region to string

        expect(parseHourAndMinute(2, 20, "string")).toBe("02:20");
        expect(parseHourAndMinute(_0[0], _0[1], "string")).toBe("20:00");
        expect(parseHourAndMinute(_1[0], _1[1], "string")).toBe("20:01");
        expect(parseHourAndMinute(_2[0], _2[1], "string")).toBe("20:02");
        expect(parseHourAndMinute(_3[0], _3[1], "string")).toBe("20:03");
        expect(parseHourAndMinute(_4[0], _4[1], "string")).toBe("20:04");
        expect(parseHourAndMinute(_5[0], _5[1], "string")).toBe("20:05");
        expect(parseHourAndMinute(_6[0], _6[1], "string")).toBe("20:06");
        expect(parseHourAndMinute(_7[0], _7[1], "string")).toBe("20:07");
        expect(parseHourAndMinute(_8[0], _8[1], "string")).toBe("20:08");
        expect(parseHourAndMinute(_9[0], _9[1], "string")).toBe("20:09");
        expect(parseHourAndMinute(_10[0], _10[1], "string")).toBe("20:10");
        expect(parseHourAndMinute(_11[0], _11[1], "string")).toBe("20:11");
        expect(parseHourAndMinute(_12[0], _12[1], "string")).toBe("20:12");
        expect(parseHourAndMinute(_13[0], _13[1], "string")).toBe("20:13");
        expect(parseHourAndMinute(_14[0], _14[1], "string")).toBe("20:14");
        expect(parseHourAndMinute(_15[0], _15[1], "string")).toBe("20:15");
        expect(parseHourAndMinute(_16[0], _16[1], "string")).toBe("20:16");
        expect(parseHourAndMinute(_17[0], _17[1], "string")).toBe("20:17");
        expect(parseHourAndMinute(_18[0], _18[1], "string")).toBe("20:18");
        expect(parseHourAndMinute(_19[0], _19[1], "string")).toBe("20:19");
        expect(parseHourAndMinute(_20[0], _20[1], "string")).toBe("20:20");
        expect(parseHourAndMinute(_21[0], _21[1], "string")).toBe("20:21");
        expect(parseHourAndMinute(_22[0], _22[1], "string")).toBe("20:22");
        expect(parseHourAndMinute(_23[0], _23[1], "string")).toBe("20:23");
        expect(parseHourAndMinute(_24[0], _24[1], "string")).toBe("20:24");
        expect(parseHourAndMinute(_25[0], _25[1], "string")).toBe("20:25");
        expect(parseHourAndMinute(_26[0], _26[1], "string")).toBe("20:26");
        expect(parseHourAndMinute(_27[0], _27[1], "string")).toBe("20:27");
        expect(parseHourAndMinute(_28[0], _28[1], "string")).toBe("20:28");
        expect(parseHourAndMinute(_29[0], _29[1], "string")).toBe("20:29");
        expect(parseHourAndMinute(_30[0], _30[1], "string")).toBe("20:30");
        expect(parseHourAndMinute(_31[0], _31[1], "string")).toBe("20:31");
        expect(parseHourAndMinute(_32[0], _32[1], "string")).toBe("20:32");
        expect(parseHourAndMinute(_33[0], _33[1], "string")).toBe("20:33");
        expect(parseHourAndMinute(_34[0], _34[1], "string")).toBe("20:34");
        expect(parseHourAndMinute(_35[0], _35[1], "string")).toBe("20:35");
        expect(parseHourAndMinute(_36[0], _36[1], "string")).toBe("20:36");
        expect(parseHourAndMinute(_37[0], _37[1], "string")).toBe("20:37");
        expect(parseHourAndMinute(_38[0], _38[1], "string")).toBe("20:38");
        expect(parseHourAndMinute(_39[0], _39[1], "string")).toBe("20:39");
        expect(parseHourAndMinute(_40[0], _40[1], "string")).toBe("20:40");
        expect(parseHourAndMinute(_41[0], _41[1], "string")).toBe("20:41");
        expect(parseHourAndMinute(_42[0], _42[1], "string")).toBe("20:42");
        expect(parseHourAndMinute(_43[0], _43[1], "string")).toBe("20:43");
        expect(parseHourAndMinute(_44[0], _44[1], "string")).toBe("20:44");
        expect(parseHourAndMinute(_45[0], _45[1], "string")).toBe("20:45");
        expect(parseHourAndMinute(_46[0], _46[1], "string")).toBe("20:46");
        expect(parseHourAndMinute(_47[0], _47[1], "string")).toBe("20:47");
        expect(parseHourAndMinute(_48[0], _48[1], "string")).toBe("20:48");
        expect(parseHourAndMinute(_49[0], _49[1], "string")).toBe("20:49");
        expect(parseHourAndMinute(_50[0], _50[1], "string")).toBe("20:50");
        expect(parseHourAndMinute(_51[0], _51[1], "string")).toBe("20:51");
        expect(parseHourAndMinute(_52[0], _52[1], "string")).toBe("20:52");
        expect(parseHourAndMinute(_53[0], _53[1], "string")).toBe("20:53");
        expect(parseHourAndMinute(_54[0], _54[1], "string")).toBe("20:54");
        expect(parseHourAndMinute(_55[0], _55[1], "string")).toBe("20:55");
        expect(parseHourAndMinute(_56[0], _56[1], "string")).toBe("20:56");
        expect(parseHourAndMinute(_57[0], _57[1], "string")).toBe("20:57");
        expect(parseHourAndMinute(_58[0], _58[1], "string")).toBe("20:58");
        expect(parseHourAndMinute(_59[0], _59[1], "string")).toBe("20:59");

        //#endregion


        //#region to date

        expect(parseHourAndMinute(_0[0], _0[1], "date").getHours()).toBe(_0[0]);
        expect(parseHourAndMinute(_0[0], _0[1], "date").getMinutes()).toBe(_0[1]);
        expect(parseHourAndMinute(_1[0], _1[1], "date").getHours()).toBe(_1[0]);
        expect(parseHourAndMinute(_1[0], _1[1], "date").getMinutes()).toBe(_1[1]);
        expect(parseHourAndMinute(_2[0], _2[1], "date").getHours()).toBe(_2[0]);
        expect(parseHourAndMinute(_2[0], _2[1], "date").getMinutes()).toBe(_2[1]);
        expect(parseHourAndMinute(_3[0], _3[1], "date").getHours()).toBe(_3[0]);
        expect(parseHourAndMinute(_3[0], _3[1], "date").getMinutes()).toBe(_3[1]);
        expect(parseHourAndMinute(_4[0], _4[1], "date").getHours()).toBe(_4[0]);
        expect(parseHourAndMinute(_4[0], _4[1], "date").getMinutes()).toBe(_4[1]);
        expect(parseHourAndMinute(_5[0], _5[1], "date").getHours()).toBe(_5[0]);
        expect(parseHourAndMinute(_5[0], _5[1], "date").getMinutes()).toBe(_5[1]);
        expect(parseHourAndMinute(_6[0], _6[1], "date").getHours()).toBe(_6[0]);
        expect(parseHourAndMinute(_6[0], _6[1], "date").getMinutes()).toBe(_6[1]);
        expect(parseHourAndMinute(_7[0], _7[1], "date").getHours()).toBe(_7[0]);
        expect(parseHourAndMinute(_7[0], _7[1], "date").getMinutes()).toBe(_7[1]);
        expect(parseHourAndMinute(_8[0], _8[1], "date").getHours()).toBe(_8[0]);
        expect(parseHourAndMinute(_8[0], _8[1], "date").getMinutes()).toBe(_8[1]);
        expect(parseHourAndMinute(_9[0], _9[1], "date").getHours()).toBe(_9[0]);
        expect(parseHourAndMinute(_9[0], _9[1], "date").getMinutes()).toBe(_9[1]);
        expect(parseHourAndMinute(_10[0], _10[1], "date").getHours()).toBe(_10[0]);
        expect(parseHourAndMinute(_10[0], _10[1], "date").getMinutes()).toBe(_10[1]);
        expect(parseHourAndMinute(_11[0], _11[1], "date").getHours()).toBe(_11[0]);
        expect(parseHourAndMinute(_11[0], _11[1], "date").getMinutes()).toBe(_11[1]);
        expect(parseHourAndMinute(_12[0], _12[1], "date").getHours()).toBe(_12[0]);
        expect(parseHourAndMinute(_12[0], _12[1], "date").getMinutes()).toBe(_12[1]);
        expect(parseHourAndMinute(_13[0], _13[1], "date").getHours()).toBe(_13[0]);
        expect(parseHourAndMinute(_13[0], _13[1], "date").getMinutes()).toBe(_13[1]);
        expect(parseHourAndMinute(_14[0], _14[1], "date").getHours()).toBe(_14[0]);
        expect(parseHourAndMinute(_14[0], _14[1], "date").getMinutes()).toBe(_14[1]);
        expect(parseHourAndMinute(_15[0], _15[1], "date").getHours()).toBe(_15[0]);
        expect(parseHourAndMinute(_15[0], _15[1], "date").getMinutes()).toBe(_15[1]);
        expect(parseHourAndMinute(_16[0], _16[1], "date").getHours()).toBe(_16[0]);
        expect(parseHourAndMinute(_16[0], _16[1], "date").getMinutes()).toBe(_16[1]);
        expect(parseHourAndMinute(_17[0], _17[1], "date").getHours()).toBe(_17[0]);
        expect(parseHourAndMinute(_17[0], _17[1], "date").getMinutes()).toBe(_17[1]);
        expect(parseHourAndMinute(_18[0], _18[1], "date").getHours()).toBe(_18[0]);
        expect(parseHourAndMinute(_18[0], _18[1], "date").getMinutes()).toBe(_18[1]);
        expect(parseHourAndMinute(_19[0], _19[1], "date").getHours()).toBe(_19[0]);
        expect(parseHourAndMinute(_19[0], _19[1], "date").getMinutes()).toBe(_19[1]);
        expect(parseHourAndMinute(_20[0], _20[1], "date").getHours()).toBe(_20[0]);
        expect(parseHourAndMinute(_20[0], _20[1], "date").getMinutes()).toBe(_20[1]);
        expect(parseHourAndMinute(_21[0], _21[1], "date").getHours()).toBe(_21[0]);
        expect(parseHourAndMinute(_21[0], _21[1], "date").getMinutes()).toBe(_21[1]);
        expect(parseHourAndMinute(_22[0], _22[1], "date").getHours()).toBe(_22[0]);
        expect(parseHourAndMinute(_22[0], _22[1], "date").getMinutes()).toBe(_22[1]);
        expect(parseHourAndMinute(_23[0], _23[1], "date").getHours()).toBe(_23[0]);
        expect(parseHourAndMinute(_23[0], _23[1], "date").getMinutes()).toBe(_23[1]);
        expect(parseHourAndMinute(_24[0], _24[1], "date").getHours()).toBe(_24[0]);
        expect(parseHourAndMinute(_24[0], _24[1], "date").getMinutes()).toBe(_24[1]);
        expect(parseHourAndMinute(_25[0], _25[1], "date").getHours()).toBe(_25[0]);
        expect(parseHourAndMinute(_25[0], _25[1], "date").getMinutes()).toBe(_25[1]);
        expect(parseHourAndMinute(_26[0], _26[1], "date").getHours()).toBe(_26[0]);
        expect(parseHourAndMinute(_26[0], _26[1], "date").getMinutes()).toBe(_26[1]);
        expect(parseHourAndMinute(_27[0], _27[1], "date").getHours()).toBe(_27[0]);
        expect(parseHourAndMinute(_27[0], _27[1], "date").getMinutes()).toBe(_27[1]);
        expect(parseHourAndMinute(_28[0], _28[1], "date").getHours()).toBe(_28[0]);
        expect(parseHourAndMinute(_28[0], _28[1], "date").getMinutes()).toBe(_28[1]);
        expect(parseHourAndMinute(_29[0], _29[1], "date").getHours()).toBe(_29[0]);
        expect(parseHourAndMinute(_29[0], _29[1], "date").getMinutes()).toBe(_29[1]);
        expect(parseHourAndMinute(_30[0], _30[1], "date").getHours()).toBe(_30[0]);
        expect(parseHourAndMinute(_30[0], _30[1], "date").getMinutes()).toBe(_30[1]);
        expect(parseHourAndMinute(_31[0], _31[1], "date").getHours()).toBe(_31[0]);
        expect(parseHourAndMinute(_31[0], _31[1], "date").getMinutes()).toBe(_31[1]);
        expect(parseHourAndMinute(_32[0], _32[1], "date").getHours()).toBe(_32[0]);
        expect(parseHourAndMinute(_32[0], _32[1], "date").getMinutes()).toBe(_32[1]);
        expect(parseHourAndMinute(_33[0], _33[1], "date").getHours()).toBe(_33[0]);
        expect(parseHourAndMinute(_33[0], _33[1], "date").getMinutes()).toBe(_33[1]);
        expect(parseHourAndMinute(_34[0], _34[1], "date").getHours()).toBe(_34[0]);
        expect(parseHourAndMinute(_34[0], _34[1], "date").getMinutes()).toBe(_34[1]);
        expect(parseHourAndMinute(_35[0], _35[1], "date").getHours()).toBe(_35[0]);
        expect(parseHourAndMinute(_35[0], _35[1], "date").getMinutes()).toBe(_35[1]);
        expect(parseHourAndMinute(_36[0], _36[1], "date").getHours()).toBe(_36[0]);
        expect(parseHourAndMinute(_36[0], _36[1], "date").getMinutes()).toBe(_36[1]);
        expect(parseHourAndMinute(_37[0], _37[1], "date").getHours()).toBe(_37[0]);
        expect(parseHourAndMinute(_37[0], _37[1], "date").getMinutes()).toBe(_37[1]);
        expect(parseHourAndMinute(_38[0], _38[1], "date").getHours()).toBe(_38[0]);
        expect(parseHourAndMinute(_38[0], _38[1], "date").getMinutes()).toBe(_38[1]);
        expect(parseHourAndMinute(_39[0], _39[1], "date").getHours()).toBe(_39[0]);
        expect(parseHourAndMinute(_39[0], _39[1], "date").getMinutes()).toBe(_39[1]);
        expect(parseHourAndMinute(_40[0], _40[1], "date").getHours()).toBe(_40[0]);
        expect(parseHourAndMinute(_40[0], _40[1], "date").getMinutes()).toBe(_40[1]);
        expect(parseHourAndMinute(_41[0], _41[1], "date").getHours()).toBe(_41[0]);
        expect(parseHourAndMinute(_41[0], _41[1], "date").getMinutes()).toBe(_41[1]);
        expect(parseHourAndMinute(_42[0], _42[1], "date").getHours()).toBe(_42[0]);
        expect(parseHourAndMinute(_42[0], _42[1], "date").getMinutes()).toBe(_42[1]);
        expect(parseHourAndMinute(_43[0], _43[1], "date").getHours()).toBe(_43[0]);
        expect(parseHourAndMinute(_43[0], _43[1], "date").getMinutes()).toBe(_43[1]);
        expect(parseHourAndMinute(_44[0], _44[1], "date").getHours()).toBe(_44[0]);
        expect(parseHourAndMinute(_44[0], _44[1], "date").getMinutes()).toBe(_44[1]);
        expect(parseHourAndMinute(_45[0], _45[1], "date").getHours()).toBe(_45[0]);
        expect(parseHourAndMinute(_45[0], _45[1], "date").getMinutes()).toBe(_45[1]);
        expect(parseHourAndMinute(_46[0], _46[1], "date").getHours()).toBe(_46[0]);
        expect(parseHourAndMinute(_46[0], _46[1], "date").getMinutes()).toBe(_46[1]);
        expect(parseHourAndMinute(_47[0], _47[1], "date").getHours()).toBe(_47[0]);
        expect(parseHourAndMinute(_47[0], _47[1], "date").getMinutes()).toBe(_47[1]);
        expect(parseHourAndMinute(_48[0], _48[1], "date").getHours()).toBe(_48[0]);
        expect(parseHourAndMinute(_48[0], _48[1], "date").getMinutes()).toBe(_48[1]);
        expect(parseHourAndMinute(_49[0], _49[1], "date").getHours()).toBe(_49[0]);
        expect(parseHourAndMinute(_49[0], _49[1], "date").getMinutes()).toBe(_49[1]);
        expect(parseHourAndMinute(_50[0], _50[1], "date").getHours()).toBe(_50[0]);
        expect(parseHourAndMinute(_50[0], _50[1], "date").getMinutes()).toBe(_50[1]);
        expect(parseHourAndMinute(_51[0], _51[1], "date").getHours()).toBe(_51[0]);
        expect(parseHourAndMinute(_51[0], _51[1], "date").getMinutes()).toBe(_51[1]);
        expect(parseHourAndMinute(_52[0], _52[1], "date").getHours()).toBe(_52[0]);
        expect(parseHourAndMinute(_52[0], _52[1], "date").getMinutes()).toBe(_52[1]);
        expect(parseHourAndMinute(_53[0], _53[1], "date").getHours()).toBe(_53[0]);
        expect(parseHourAndMinute(_53[0], _53[1], "date").getMinutes()).toBe(_53[1]);
        expect(parseHourAndMinute(_54[0], _54[1], "date").getHours()).toBe(_54[0]);
        expect(parseHourAndMinute(_54[0], _54[1], "date").getMinutes()).toBe(_54[1]);
        expect(parseHourAndMinute(_55[0], _55[1], "date").getHours()).toBe(_55[0]);
        expect(parseHourAndMinute(_55[0], _55[1], "date").getMinutes()).toBe(_55[1]);
        expect(parseHourAndMinute(_56[0], _56[1], "date").getHours()).toBe(_56[0]);
        expect(parseHourAndMinute(_56[0], _56[1], "date").getMinutes()).toBe(_56[1]);
        expect(parseHourAndMinute(_57[0], _57[1], "date").getHours()).toBe(_57[0]);
        expect(parseHourAndMinute(_57[0], _57[1], "date").getMinutes()).toBe(_57[1]);
        expect(parseHourAndMinute(_58[0], _58[1], "date").getHours()).toBe(_58[0]);
        expect(parseHourAndMinute(_58[0], _58[1], "date").getMinutes()).toBe(_58[1]);
        expect(parseHourAndMinute(_59[0], _59[1], "date").getHours()).toBe(_59[0]);
        expect(parseHourAndMinute(_59[0], _59[1], "date").getMinutes()).toBe(_59[1]);

        //#endregion


        //#region to vdate

        expect(parseHourAndMinute(_0[0], _0[1], "vdate").getHours()).toBe(_0[0]);
        expect(parseHourAndMinute(_0[0], _0[1], "vdate").getMinutes()).toBe(_0[1]);
        expect(parseHourAndMinute(_1[0], _1[1], "vdate").getHours()).toBe(_1[0]);
        expect(parseHourAndMinute(_1[0], _1[1], "vdate").getMinutes()).toBe(_1[1]);
        expect(parseHourAndMinute(_2[0], _2[1], "vdate").getHours()).toBe(_2[0]);
        expect(parseHourAndMinute(_2[0], _2[1], "vdate").getMinutes()).toBe(_2[1]);
        expect(parseHourAndMinute(_3[0], _3[1], "vdate").getHours()).toBe(_3[0]);
        expect(parseHourAndMinute(_3[0], _3[1], "vdate").getMinutes()).toBe(_3[1]);
        expect(parseHourAndMinute(_4[0], _4[1], "vdate").getHours()).toBe(_4[0]);
        expect(parseHourAndMinute(_4[0], _4[1], "vdate").getMinutes()).toBe(_4[1]);
        expect(parseHourAndMinute(_5[0], _5[1], "vdate").getHours()).toBe(_5[0]);
        expect(parseHourAndMinute(_5[0], _5[1], "vdate").getMinutes()).toBe(_5[1]);
        expect(parseHourAndMinute(_6[0], _6[1], "vdate").getHours()).toBe(_6[0]);
        expect(parseHourAndMinute(_6[0], _6[1], "vdate").getMinutes()).toBe(_6[1]);
        expect(parseHourAndMinute(_7[0], _7[1], "vdate").getHours()).toBe(_7[0]);
        expect(parseHourAndMinute(_7[0], _7[1], "vdate").getMinutes()).toBe(_7[1]);
        expect(parseHourAndMinute(_8[0], _8[1], "vdate").getHours()).toBe(_8[0]);
        expect(parseHourAndMinute(_8[0], _8[1], "vdate").getMinutes()).toBe(_8[1]);
        expect(parseHourAndMinute(_9[0], _9[1], "vdate").getHours()).toBe(_9[0]);
        expect(parseHourAndMinute(_9[0], _9[1], "vdate").getMinutes()).toBe(_9[1]);
        expect(parseHourAndMinute(_10[0], _10[1], "vdate").getHours()).toBe(_10[0]);
        expect(parseHourAndMinute(_10[0], _10[1], "vdate").getMinutes()).toBe(_10[1]);
        expect(parseHourAndMinute(_11[0], _11[1], "vdate").getHours()).toBe(_11[0]);
        expect(parseHourAndMinute(_11[0], _11[1], "vdate").getMinutes()).toBe(_11[1]);
        expect(parseHourAndMinute(_12[0], _12[1], "vdate").getHours()).toBe(_12[0]);
        expect(parseHourAndMinute(_12[0], _12[1], "vdate").getMinutes()).toBe(_12[1]);
        expect(parseHourAndMinute(_13[0], _13[1], "vdate").getHours()).toBe(_13[0]);
        expect(parseHourAndMinute(_13[0], _13[1], "vdate").getMinutes()).toBe(_13[1]);
        expect(parseHourAndMinute(_14[0], _14[1], "vdate").getHours()).toBe(_14[0]);
        expect(parseHourAndMinute(_14[0], _14[1], "vdate").getMinutes()).toBe(_14[1]);
        expect(parseHourAndMinute(_15[0], _15[1], "vdate").getHours()).toBe(_15[0]);
        expect(parseHourAndMinute(_15[0], _15[1], "vdate").getMinutes()).toBe(_15[1]);
        expect(parseHourAndMinute(_16[0], _16[1], "vdate").getHours()).toBe(_16[0]);
        expect(parseHourAndMinute(_16[0], _16[1], "vdate").getMinutes()).toBe(_16[1]);
        expect(parseHourAndMinute(_17[0], _17[1], "vdate").getHours()).toBe(_17[0]);
        expect(parseHourAndMinute(_17[0], _17[1], "vdate").getMinutes()).toBe(_17[1]);
        expect(parseHourAndMinute(_18[0], _18[1], "vdate").getHours()).toBe(_18[0]);
        expect(parseHourAndMinute(_18[0], _18[1], "vdate").getMinutes()).toBe(_18[1]);
        expect(parseHourAndMinute(_19[0], _19[1], "vdate").getHours()).toBe(_19[0]);
        expect(parseHourAndMinute(_19[0], _19[1], "vdate").getMinutes()).toBe(_19[1]);
        expect(parseHourAndMinute(_20[0], _20[1], "vdate").getHours()).toBe(_20[0]);
        expect(parseHourAndMinute(_20[0], _20[1], "vdate").getMinutes()).toBe(_20[1]);
        expect(parseHourAndMinute(_21[0], _21[1], "vdate").getHours()).toBe(_21[0]);
        expect(parseHourAndMinute(_21[0], _21[1], "vdate").getMinutes()).toBe(_21[1]);
        expect(parseHourAndMinute(_22[0], _22[1], "vdate").getHours()).toBe(_22[0]);
        expect(parseHourAndMinute(_22[0], _22[1], "vdate").getMinutes()).toBe(_22[1]);
        expect(parseHourAndMinute(_23[0], _23[1], "vdate").getHours()).toBe(_23[0]);
        expect(parseHourAndMinute(_23[0], _23[1], "vdate").getMinutes()).toBe(_23[1]);
        expect(parseHourAndMinute(_24[0], _24[1], "vdate").getHours()).toBe(_24[0]);
        expect(parseHourAndMinute(_24[0], _24[1], "vdate").getMinutes()).toBe(_24[1]);
        expect(parseHourAndMinute(_25[0], _25[1], "vdate").getHours()).toBe(_25[0]);
        expect(parseHourAndMinute(_25[0], _25[1], "vdate").getMinutes()).toBe(_25[1]);
        expect(parseHourAndMinute(_26[0], _26[1], "vdate").getHours()).toBe(_26[0]);
        expect(parseHourAndMinute(_26[0], _26[1], "vdate").getMinutes()).toBe(_26[1]);
        expect(parseHourAndMinute(_27[0], _27[1], "vdate").getHours()).toBe(_27[0]);
        expect(parseHourAndMinute(_27[0], _27[1], "vdate").getMinutes()).toBe(_27[1]);
        expect(parseHourAndMinute(_28[0], _28[1], "vdate").getHours()).toBe(_28[0]);
        expect(parseHourAndMinute(_28[0], _28[1], "vdate").getMinutes()).toBe(_28[1]);
        expect(parseHourAndMinute(_29[0], _29[1], "vdate").getHours()).toBe(_29[0]);
        expect(parseHourAndMinute(_29[0], _29[1], "vdate").getMinutes()).toBe(_29[1]);
        expect(parseHourAndMinute(_30[0], _30[1], "vdate").getHours()).toBe(_30[0]);
        expect(parseHourAndMinute(_30[0], _30[1], "vdate").getMinutes()).toBe(_30[1]);
        expect(parseHourAndMinute(_31[0], _31[1], "vdate").getHours()).toBe(_31[0]);
        expect(parseHourAndMinute(_31[0], _31[1], "vdate").getMinutes()).toBe(_31[1]);
        expect(parseHourAndMinute(_32[0], _32[1], "vdate").getHours()).toBe(_32[0]);
        expect(parseHourAndMinute(_32[0], _32[1], "vdate").getMinutes()).toBe(_32[1]);
        expect(parseHourAndMinute(_33[0], _33[1], "vdate").getHours()).toBe(_33[0]);
        expect(parseHourAndMinute(_33[0], _33[1], "vdate").getMinutes()).toBe(_33[1]);
        expect(parseHourAndMinute(_34[0], _34[1], "vdate").getHours()).toBe(_34[0]);
        expect(parseHourAndMinute(_34[0], _34[1], "vdate").getMinutes()).toBe(_34[1]);
        expect(parseHourAndMinute(_35[0], _35[1], "vdate").getHours()).toBe(_35[0]);
        expect(parseHourAndMinute(_35[0], _35[1], "vdate").getMinutes()).toBe(_35[1]);
        expect(parseHourAndMinute(_36[0], _36[1], "vdate").getHours()).toBe(_36[0]);
        expect(parseHourAndMinute(_36[0], _36[1], "vdate").getMinutes()).toBe(_36[1]);
        expect(parseHourAndMinute(_37[0], _37[1], "vdate").getHours()).toBe(_37[0]);
        expect(parseHourAndMinute(_37[0], _37[1], "vdate").getMinutes()).toBe(_37[1]);
        expect(parseHourAndMinute(_38[0], _38[1], "vdate").getHours()).toBe(_38[0]);
        expect(parseHourAndMinute(_38[0], _38[1], "vdate").getMinutes()).toBe(_38[1]);
        expect(parseHourAndMinute(_39[0], _39[1], "vdate").getHours()).toBe(_39[0]);
        expect(parseHourAndMinute(_39[0], _39[1], "vdate").getMinutes()).toBe(_39[1]);
        expect(parseHourAndMinute(_40[0], _40[1], "vdate").getHours()).toBe(_40[0]);
        expect(parseHourAndMinute(_40[0], _40[1], "vdate").getMinutes()).toBe(_40[1]);
        expect(parseHourAndMinute(_41[0], _41[1], "vdate").getHours()).toBe(_41[0]);
        expect(parseHourAndMinute(_41[0], _41[1], "vdate").getMinutes()).toBe(_41[1]);
        expect(parseHourAndMinute(_42[0], _42[1], "vdate").getHours()).toBe(_42[0]);
        expect(parseHourAndMinute(_42[0], _42[1], "vdate").getMinutes()).toBe(_42[1]);
        expect(parseHourAndMinute(_43[0], _43[1], "vdate").getHours()).toBe(_43[0]);
        expect(parseHourAndMinute(_43[0], _43[1], "vdate").getMinutes()).toBe(_43[1]);
        expect(parseHourAndMinute(_44[0], _44[1], "vdate").getHours()).toBe(_44[0]);
        expect(parseHourAndMinute(_44[0], _44[1], "vdate").getMinutes()).toBe(_44[1]);
        expect(parseHourAndMinute(_45[0], _45[1], "vdate").getHours()).toBe(_45[0]);
        expect(parseHourAndMinute(_45[0], _45[1], "vdate").getMinutes()).toBe(_45[1]);
        expect(parseHourAndMinute(_46[0], _46[1], "vdate").getHours()).toBe(_46[0]);
        expect(parseHourAndMinute(_46[0], _46[1], "vdate").getMinutes()).toBe(_46[1]);
        expect(parseHourAndMinute(_47[0], _47[1], "vdate").getHours()).toBe(_47[0]);
        expect(parseHourAndMinute(_47[0], _47[1], "vdate").getMinutes()).toBe(_47[1]);
        expect(parseHourAndMinute(_48[0], _48[1], "vdate").getHours()).toBe(_48[0]);
        expect(parseHourAndMinute(_48[0], _48[1], "vdate").getMinutes()).toBe(_48[1]);
        expect(parseHourAndMinute(_49[0], _49[1], "vdate").getHours()).toBe(_49[0]);
        expect(parseHourAndMinute(_49[0], _49[1], "vdate").getMinutes()).toBe(_49[1]);
        expect(parseHourAndMinute(_50[0], _50[1], "vdate").getHours()).toBe(_50[0]);
        expect(parseHourAndMinute(_50[0], _50[1], "vdate").getMinutes()).toBe(_50[1]);
        expect(parseHourAndMinute(_51[0], _51[1], "vdate").getHours()).toBe(_51[0]);
        expect(parseHourAndMinute(_51[0], _51[1], "vdate").getMinutes()).toBe(_51[1]);
        expect(parseHourAndMinute(_52[0], _52[1], "vdate").getHours()).toBe(_52[0]);
        expect(parseHourAndMinute(_52[0], _52[1], "vdate").getMinutes()).toBe(_52[1]);
        expect(parseHourAndMinute(_53[0], _53[1], "vdate").getHours()).toBe(_53[0]);
        expect(parseHourAndMinute(_53[0], _53[1], "vdate").getMinutes()).toBe(_53[1]);
        expect(parseHourAndMinute(_54[0], _54[1], "vdate").getHours()).toBe(_54[0]);
        expect(parseHourAndMinute(_54[0], _54[1], "vdate").getMinutes()).toBe(_54[1]);
        expect(parseHourAndMinute(_55[0], _55[1], "vdate").getHours()).toBe(_55[0]);
        expect(parseHourAndMinute(_55[0], _55[1], "vdate").getMinutes()).toBe(_55[1]);
        expect(parseHourAndMinute(_56[0], _56[1], "vdate").getHours()).toBe(_56[0]);
        expect(parseHourAndMinute(_56[0], _56[1], "vdate").getMinutes()).toBe(_56[1]);
        expect(parseHourAndMinute(_57[0], _57[1], "vdate").getHours()).toBe(_57[0]);
        expect(parseHourAndMinute(_57[0], _57[1], "vdate").getMinutes()).toBe(_57[1]);
        expect(parseHourAndMinute(_58[0], _58[1], "vdate").getHours()).toBe(_58[0]);
        expect(parseHourAndMinute(_58[0], _58[1], "vdate").getMinutes()).toBe(_58[1]);
        expect(parseHourAndMinute(_59[0], _59[1], "vdate").getHours()).toBe(_59[0]);
        expect(parseHourAndMinute(_59[0], _59[1], "vdate").getMinutes()).toBe(_59[1]);

        //#endregion


        //#region to decimal-string

        expect(parseHourAndMinute(_0[0], _0[1], "decimal-string")).toBe("20.00");
        expect(parseHourAndMinute(_1[0], _1[1], "decimal-string")).toBe("20.02");
        expect(parseHourAndMinute(_2[0], _2[1], "decimal-string")).toBe("20.03");
        expect(parseHourAndMinute(_3[0], _3[1], "decimal-string")).toBe("20.05");
        expect(parseHourAndMinute(_4[0], _4[1], "decimal-string")).toBe("20.07");
        expect(parseHourAndMinute(_5[0], _5[1], "decimal-string")).toBe("20.08");
        expect(parseHourAndMinute(_6[0], _6[1], "decimal-string")).toBe("20.10");
        expect(parseHourAndMinute(_7[0], _7[1], "decimal-string")).toBe("20.12");
        expect(parseHourAndMinute(_8[0], _8[1], "decimal-string")).toBe("20.13");
        expect(parseHourAndMinute(_9[0], _9[1], "decimal-string")).toBe("20.15");
        expect(parseHourAndMinute(_10[0], _10[1], "decimal-string")).toBe("20.17");
        expect(parseHourAndMinute(_11[0], _11[1], "decimal-string")).toBe("20.18");
        expect(parseHourAndMinute(_12[0], _12[1], "decimal-string")).toBe("20.20");
        expect(parseHourAndMinute(_13[0], _13[1], "decimal-string")).toBe("20.22");
        expect(parseHourAndMinute(_14[0], _14[1], "decimal-string")).toBe("20.23");
        expect(parseHourAndMinute(_15[0], _15[1], "decimal-string")).toBe("20.25");
        expect(parseHourAndMinute(_16[0], _16[1], "decimal-string")).toBe("20.27");
        expect(parseHourAndMinute(_17[0], _17[1], "decimal-string")).toBe("20.28");
        expect(parseHourAndMinute(_18[0], _18[1], "decimal-string")).toBe("20.30");
        expect(parseHourAndMinute(_19[0], _19[1], "decimal-string")).toBe("20.32");
        expect(parseHourAndMinute(_20[0], _20[1], "decimal-string")).toBe("20.33");
        expect(parseHourAndMinute(_21[0], _21[1], "decimal-string")).toBe("20.35");
        expect(parseHourAndMinute(_22[0], _22[1], "decimal-string")).toBe("20.37");
        expect(parseHourAndMinute(_23[0], _23[1], "decimal-string")).toBe("20.38");
        expect(parseHourAndMinute(_24[0], _24[1], "decimal-string")).toBe("20.40");
        expect(parseHourAndMinute(_25[0], _25[1], "decimal-string")).toBe("20.42");
        expect(parseHourAndMinute(_26[0], _26[1], "decimal-string")).toBe("20.43");
        expect(parseHourAndMinute(_27[0], _27[1], "decimal-string")).toBe("20.45");
        expect(parseHourAndMinute(_28[0], _28[1], "decimal-string")).toBe("20.47");
        expect(parseHourAndMinute(_29[0], _29[1], "decimal-string")).toBe("20.48");
        expect(parseHourAndMinute(_30[0], _30[1], "decimal-string")).toBe("20.50");
        expect(parseHourAndMinute(_31[0], _31[1], "decimal-string")).toBe("20.52");
        expect(parseHourAndMinute(_32[0], _32[1], "decimal-string")).toBe("20.53");
        expect(parseHourAndMinute(_33[0], _33[1], "decimal-string")).toBe("20.55");
        expect(parseHourAndMinute(_34[0], _34[1], "decimal-string")).toBe("20.57");
        expect(parseHourAndMinute(_35[0], _35[1], "decimal-string")).toBe("20.58");
        expect(parseHourAndMinute(_36[0], _36[1], "decimal-string")).toBe("20.60");
        expect(parseHourAndMinute(_37[0], _37[1], "decimal-string")).toBe("20.62");
        expect(parseHourAndMinute(_38[0], _38[1], "decimal-string")).toBe("20.63");
        expect(parseHourAndMinute(_39[0], _39[1], "decimal-string")).toBe("20.65");
        expect(parseHourAndMinute(_40[0], _40[1], "decimal-string")).toBe("20.67");
        expect(parseHourAndMinute(_41[0], _41[1], "decimal-string")).toBe("20.68");
        expect(parseHourAndMinute(_42[0], _42[1], "decimal-string")).toBe("20.70");
        expect(parseHourAndMinute(_43[0], _43[1], "decimal-string")).toBe("20.72");
        expect(parseHourAndMinute(_44[0], _44[1], "decimal-string")).toBe("20.73");
        expect(parseHourAndMinute(_45[0], _45[1], "decimal-string")).toBe("20.75");
        expect(parseHourAndMinute(_46[0], _46[1], "decimal-string")).toBe("20.77");
        expect(parseHourAndMinute(_47[0], _47[1], "decimal-string")).toBe("20.78");
        expect(parseHourAndMinute(_48[0], _48[1], "decimal-string")).toBe("20.80");
        expect(parseHourAndMinute(_49[0], _49[1], "decimal-string")).toBe("20.82");
        expect(parseHourAndMinute(_50[0], _50[1], "decimal-string")).toBe("20.83");
        expect(parseHourAndMinute(_51[0], _51[1], "decimal-string")).toBe("20.85");
        expect(parseHourAndMinute(_52[0], _52[1], "decimal-string")).toBe("20.87");
        expect(parseHourAndMinute(_53[0], _53[1], "decimal-string")).toBe("20.88");
        expect(parseHourAndMinute(_54[0], _54[1], "decimal-string")).toBe("20.90");
        expect(parseHourAndMinute(_55[0], _55[1], "decimal-string")).toBe("20.92");
        expect(parseHourAndMinute(_56[0], _56[1], "decimal-string")).toBe("20.93");
        expect(parseHourAndMinute(_57[0], _57[1], "decimal-string")).toBe("20.95");
        expect(parseHourAndMinute(_58[0], _58[1], "decimal-string")).toBe("20.97");
        expect(parseHourAndMinute(_59[0], _59[1], "decimal-string")).toBe("20.98");

        expect(parseHourAndMinute(8, 5, "decimal-string")).toBe("8.08");
        expect(parseHourAndMinute(2, 26, "decimal-string")).toBe("2.43");
        expect(parseHourAndMinute(4, 55, "decimal-string")).toBe("4.92");
        expect(parseHourAndMinute(3, 20, "decimal-string")).toBe("3.33");
        expect(parseHourAndMinute(11, 34, "decimal-string")).toBe("11.57");
        expect(parseHourAndMinute(6, 40, "decimal-string")).toBe("6.67");
        expect(parseHourAndMinute(9, 13, "decimal-string")).toBe("9.22");
        expect(parseHourAndMinute(4, 25, "decimal-string")).toBe("4.42");
        expect(parseHourAndMinute(3, 58, "decimal-string")).toBe("3.97");
        expect(parseHourAndMinute(2, 42, "decimal-string")).toBe("2.70");

        //#endregion



        //#region to decimal-float

        expect(parseHourAndMinute(_0[0], _0[1], "decimal-float")).toBe(20.00);
        expect(parseHourAndMinute(_1[0], _1[1], "decimal-float")).toBe(20.02);
        expect(parseHourAndMinute(_2[0], _2[1], "decimal-float")).toBe(20.03);
        expect(parseHourAndMinute(_3[0], _3[1], "decimal-float")).toBe(20.05);
        expect(parseHourAndMinute(_4[0], _4[1], "decimal-float")).toBe(20.07);
        expect(parseHourAndMinute(_5[0], _5[1], "decimal-float")).toBe(20.08);
        expect(parseHourAndMinute(_6[0], _6[1], "decimal-float")).toBe(20.10);
        expect(parseHourAndMinute(_7[0], _7[1], "decimal-float")).toBe(20.12);
        expect(parseHourAndMinute(_8[0], _8[1], "decimal-float")).toBe(20.13);
        expect(parseHourAndMinute(_9[0], _9[1], "decimal-float")).toBe(20.15);
        expect(parseHourAndMinute(_10[0], _10[1], "decimal-float")).toBe(20.17);
        expect(parseHourAndMinute(_11[0], _11[1], "decimal-float")).toBe(20.18);
        expect(parseHourAndMinute(_12[0], _12[1], "decimal-float")).toBe(20.20);
        expect(parseHourAndMinute(_13[0], _13[1], "decimal-float")).toBe(20.22);
        expect(parseHourAndMinute(_14[0], _14[1], "decimal-float")).toBe(20.23);
        expect(parseHourAndMinute(_15[0], _15[1], "decimal-float")).toBe(20.25);
        expect(parseHourAndMinute(_16[0], _16[1], "decimal-float")).toBe(20.27);
        expect(parseHourAndMinute(_17[0], _17[1], "decimal-float")).toBe(20.28);
        expect(parseHourAndMinute(_18[0], _18[1], "decimal-float")).toBe(20.30);
        expect(parseHourAndMinute(_19[0], _19[1], "decimal-float")).toBe(20.32);
        expect(parseHourAndMinute(_20[0], _20[1], "decimal-float")).toBe(20.33);
        expect(parseHourAndMinute(_21[0], _21[1], "decimal-float")).toBe(20.35);
        expect(parseHourAndMinute(_22[0], _22[1], "decimal-float")).toBe(20.37);
        expect(parseHourAndMinute(_23[0], _23[1], "decimal-float")).toBe(20.38);
        expect(parseHourAndMinute(_24[0], _24[1], "decimal-float")).toBe(20.40);
        expect(parseHourAndMinute(_25[0], _25[1], "decimal-float")).toBe(20.42);
        expect(parseHourAndMinute(_26[0], _26[1], "decimal-float")).toBe(20.43);
        expect(parseHourAndMinute(_27[0], _27[1], "decimal-float")).toBe(20.45);
        expect(parseHourAndMinute(_28[0], _28[1], "decimal-float")).toBe(20.47);
        expect(parseHourAndMinute(_29[0], _29[1], "decimal-float")).toBe(20.48);
        expect(parseHourAndMinute(_30[0], _30[1], "decimal-float")).toBe(20.50);
        expect(parseHourAndMinute(_31[0], _31[1], "decimal-float")).toBe(20.52);
        expect(parseHourAndMinute(_32[0], _32[1], "decimal-float")).toBe(20.53);
        expect(parseHourAndMinute(_33[0], _33[1], "decimal-float")).toBe(20.55);
        expect(parseHourAndMinute(_34[0], _34[1], "decimal-float")).toBe(20.57);
        expect(parseHourAndMinute(_35[0], _35[1], "decimal-float")).toBe(20.58);
        expect(parseHourAndMinute(_36[0], _36[1], "decimal-float")).toBe(20.60);
        expect(parseHourAndMinute(_37[0], _37[1], "decimal-float")).toBe(20.62);
        expect(parseHourAndMinute(_38[0], _38[1], "decimal-float")).toBe(20.63);
        expect(parseHourAndMinute(_39[0], _39[1], "decimal-float")).toBe(20.65);
        expect(parseHourAndMinute(_40[0], _40[1], "decimal-float")).toBe(20.67);
        expect(parseHourAndMinute(_41[0], _41[1], "decimal-float")).toBe(20.68);
        expect(parseHourAndMinute(_42[0], _42[1], "decimal-float")).toBe(20.70);
        expect(parseHourAndMinute(_43[0], _43[1], "decimal-float")).toBe(20.72);
        expect(parseHourAndMinute(_44[0], _44[1], "decimal-float")).toBe(20.73);
        expect(parseHourAndMinute(_45[0], _45[1], "decimal-float")).toBe(20.75);
        expect(parseHourAndMinute(_46[0], _46[1], "decimal-float")).toBe(20.77);
        expect(parseHourAndMinute(_47[0], _47[1], "decimal-float")).toBe(20.78);
        expect(parseHourAndMinute(_48[0], _48[1], "decimal-float")).toBe(20.80);
        expect(parseHourAndMinute(_49[0], _49[1], "decimal-float")).toBe(20.82);
        expect(parseHourAndMinute(_50[0], _50[1], "decimal-float")).toBe(20.83);
        expect(parseHourAndMinute(_51[0], _51[1], "decimal-float")).toBe(20.85);
        expect(parseHourAndMinute(_52[0], _52[1], "decimal-float")).toBe(20.87);
        expect(parseHourAndMinute(_53[0], _53[1], "decimal-float")).toBe(20.88);
        expect(parseHourAndMinute(_54[0], _54[1], "decimal-float")).toBe(20.90);
        expect(parseHourAndMinute(_55[0], _55[1], "decimal-float")).toBe(20.92);
        expect(parseHourAndMinute(_56[0], _56[1], "decimal-float")).toBe(20.93);
        expect(parseHourAndMinute(_57[0], _57[1], "decimal-float")).toBe(20.95);
        expect(parseHourAndMinute(_58[0], _58[1], "decimal-float")).toBe(20.97);
        expect(parseHourAndMinute(_59[0], _59[1], "decimal-float")).toBe(20.98);

        expect(parseHourAndMinute(8, 5, "decimal-float")).toBe(8.08);
        expect(parseHourAndMinute(2, 26, "decimal-float")).toBe(2.43);
        expect(parseHourAndMinute(4, 55, "decimal-float")).toBe(4.92);
        expect(parseHourAndMinute(3, 20, "decimal-float")).toBe(3.33);
        expect(parseHourAndMinute(11, 34, "decimal-float")).toBe(11.57);
        expect(parseHourAndMinute(6, 40, "decimal-float")).toBe(6.67);
        expect(parseHourAndMinute(9, 13, "decimal-float")).toBe(9.22);
        expect(parseHourAndMinute(4, 25, "decimal-float")).toBe(4.42);
        expect(parseHourAndMinute(3, 58, "decimal-float")).toBe(3.97);
        expect(parseHourAndMinute(2, 42, "decimal-float")).toBe(2.70);

        //#endregion




        //#region to integer-string

        expect(parseHourAndMinute(_0[0], _0[1], "integer-string")).toBe("2000");
        expect(parseHourAndMinute(_1[0], _1[1], "integer-string")).toBe("2002");
        expect(parseHourAndMinute(_2[0], _2[1], "integer-string")).toBe("2003");
        expect(parseHourAndMinute(_3[0], _3[1], "integer-string")).toBe("2005");
        expect(parseHourAndMinute(_4[0], _4[1], "integer-string")).toBe("2007");
        expect(parseHourAndMinute(_5[0], _5[1], "integer-string")).toBe("2008");
        expect(parseHourAndMinute(_6[0], _6[1], "integer-string")).toBe("2010");
        expect(parseHourAndMinute(_7[0], _7[1], "integer-string")).toBe("2012");
        expect(parseHourAndMinute(_8[0], _8[1], "integer-string")).toBe("2013");
        expect(parseHourAndMinute(_9[0], _9[1], "integer-string")).toBe("2015");
        expect(parseHourAndMinute(_10[0], _10[1], "integer-string")).toBe("2017");
        expect(parseHourAndMinute(_11[0], _11[1], "integer-string")).toBe("2018");
        expect(parseHourAndMinute(_12[0], _12[1], "integer-string")).toBe("2020");
        expect(parseHourAndMinute(_13[0], _13[1], "integer-string")).toBe("2022");
        expect(parseHourAndMinute(_14[0], _14[1], "integer-string")).toBe("2023");
        expect(parseHourAndMinute(_15[0], _15[1], "integer-string")).toBe("2025");
        expect(parseHourAndMinute(_16[0], _16[1], "integer-string")).toBe("2027");
        expect(parseHourAndMinute(_17[0], _17[1], "integer-string")).toBe("2028");
        expect(parseHourAndMinute(_18[0], _18[1], "integer-string")).toBe("2030");
        expect(parseHourAndMinute(_19[0], _19[1], "integer-string")).toBe("2032");
        expect(parseHourAndMinute(_20[0], _20[1], "integer-string")).toBe("2033");
        expect(parseHourAndMinute(_21[0], _21[1], "integer-string")).toBe("2035");
        expect(parseHourAndMinute(_22[0], _22[1], "integer-string")).toBe("2037");
        expect(parseHourAndMinute(_23[0], _23[1], "integer-string")).toBe("2038");
        expect(parseHourAndMinute(_24[0], _24[1], "integer-string")).toBe("2040");
        expect(parseHourAndMinute(_25[0], _25[1], "integer-string")).toBe("2042");
        expect(parseHourAndMinute(_26[0], _26[1], "integer-string")).toBe("2043");
        expect(parseHourAndMinute(_27[0], _27[1], "integer-string")).toBe("2045");
        expect(parseHourAndMinute(_28[0], _28[1], "integer-string")).toBe("2047");
        expect(parseHourAndMinute(_29[0], _29[1], "integer-string")).toBe("2048");
        expect(parseHourAndMinute(_30[0], _30[1], "integer-string")).toBe("2050");
        expect(parseHourAndMinute(_31[0], _31[1], "integer-string")).toBe("2052");
        expect(parseHourAndMinute(_32[0], _32[1], "integer-string")).toBe("2053");
        expect(parseHourAndMinute(_33[0], _33[1], "integer-string")).toBe("2055");
        expect(parseHourAndMinute(_34[0], _34[1], "integer-string")).toBe("2057");
        expect(parseHourAndMinute(_35[0], _35[1], "integer-string")).toBe("2058");
        expect(parseHourAndMinute(_36[0], _36[1], "integer-string")).toBe("2060");
        expect(parseHourAndMinute(_37[0], _37[1], "integer-string")).toBe("2062");
        expect(parseHourAndMinute(_38[0], _38[1], "integer-string")).toBe("2063");
        expect(parseHourAndMinute(_39[0], _39[1], "integer-string")).toBe("2065");
        expect(parseHourAndMinute(_40[0], _40[1], "integer-string")).toBe("2067");
        expect(parseHourAndMinute(_41[0], _41[1], "integer-string")).toBe("2068");
        expect(parseHourAndMinute(_42[0], _42[1], "integer-string")).toBe("2070");
        expect(parseHourAndMinute(_43[0], _43[1], "integer-string")).toBe("2072");
        expect(parseHourAndMinute(_44[0], _44[1], "integer-string")).toBe("2073");
        expect(parseHourAndMinute(_45[0], _45[1], "integer-string")).toBe("2075");
        expect(parseHourAndMinute(_46[0], _46[1], "integer-string")).toBe("2077");
        expect(parseHourAndMinute(_47[0], _47[1], "integer-string")).toBe("2078");
        expect(parseHourAndMinute(_48[0], _48[1], "integer-string")).toBe("2080");
        expect(parseHourAndMinute(_49[0], _49[1], "integer-string")).toBe("2082");
        expect(parseHourAndMinute(_50[0], _50[1], "integer-string")).toBe("2083");
        expect(parseHourAndMinute(_51[0], _51[1], "integer-string")).toBe("2085");
        expect(parseHourAndMinute(_52[0], _52[1], "integer-string")).toBe("2087");
        expect(parseHourAndMinute(_53[0], _53[1], "integer-string")).toBe("2088");
        expect(parseHourAndMinute(_54[0], _54[1], "integer-string")).toBe("2090");
        expect(parseHourAndMinute(_55[0], _55[1], "integer-string")).toBe("2092");
        expect(parseHourAndMinute(_56[0], _56[1], "integer-string")).toBe("2093");
        expect(parseHourAndMinute(_57[0], _57[1], "integer-string")).toBe("2095");
        expect(parseHourAndMinute(_58[0], _58[1], "integer-string")).toBe("2097");
        expect(parseHourAndMinute(_59[0], _59[1], "integer-string")).toBe("2098");

        expect(parseHourAndMinute(8, 5, "integer-string")).toBe("808");
        expect(parseHourAndMinute(2, 26, "integer-string")).toBe("243");
        expect(parseHourAndMinute(4, 55, "integer-string")).toBe("492");
        expect(parseHourAndMinute(3, 20, "integer-string")).toBe("333");
        expect(parseHourAndMinute(11, 34, "integer-string")).toBe("1157");
        expect(parseHourAndMinute(6, 40, "integer-string")).toBe("667");
        expect(parseHourAndMinute(9, 13, "integer-string")).toBe("922");
        expect(parseHourAndMinute(4, 25, "integer-string")).toBe("442");
        expect(parseHourAndMinute(3, 58, "integer-string")).toBe("397");
        expect(parseHourAndMinute(2, 42, "integer-string")).toBe("270");

        //#endregion



        //#region to decimal-float

        expect(parseHourAndMinute(_0[0], _0[1], "integer-number")).toBe(2000);
        expect(parseHourAndMinute(_1[0], _1[1], "integer-number")).toBe(2002);
        expect(parseHourAndMinute(_2[0], _2[1], "integer-number")).toBe(2003);
        expect(parseHourAndMinute(_3[0], _3[1], "integer-number")).toBe(2005);
        expect(parseHourAndMinute(_4[0], _4[1], "integer-number")).toBe(2007);
        expect(parseHourAndMinute(_5[0], _5[1], "integer-number")).toBe(2008);
        expect(parseHourAndMinute(_6[0], _6[1], "integer-number")).toBe(2010);
        expect(parseHourAndMinute(_7[0], _7[1], "integer-number")).toBe(2012);
        expect(parseHourAndMinute(_8[0], _8[1], "integer-number")).toBe(2013);
        expect(parseHourAndMinute(_9[0], _9[1], "integer-number")).toBe(2015);
        expect(parseHourAndMinute(_10[0], _10[1], "integer-number")).toBe(2017);
        expect(parseHourAndMinute(_11[0], _11[1], "integer-number")).toBe(2018);
        expect(parseHourAndMinute(_12[0], _12[1], "integer-number")).toBe(2020);
        expect(parseHourAndMinute(_13[0], _13[1], "integer-number")).toBe(2022);
        expect(parseHourAndMinute(_14[0], _14[1], "integer-number")).toBe(2023);
        expect(parseHourAndMinute(_15[0], _15[1], "integer-number")).toBe(2025);
        expect(parseHourAndMinute(_16[0], _16[1], "integer-number")).toBe(2027);
        expect(parseHourAndMinute(_17[0], _17[1], "integer-number")).toBe(2028);
        expect(parseHourAndMinute(_18[0], _18[1], "integer-number")).toBe(2030);
        expect(parseHourAndMinute(_19[0], _19[1], "integer-number")).toBe(2032);
        expect(parseHourAndMinute(_20[0], _20[1], "integer-number")).toBe(2033);
        expect(parseHourAndMinute(_21[0], _21[1], "integer-number")).toBe(2035);
        expect(parseHourAndMinute(_22[0], _22[1], "integer-number")).toBe(2037);
        expect(parseHourAndMinute(_23[0], _23[1], "integer-number")).toBe(2038);
        expect(parseHourAndMinute(_24[0], _24[1], "integer-number")).toBe(2040);
        expect(parseHourAndMinute(_25[0], _25[1], "integer-number")).toBe(2042);
        expect(parseHourAndMinute(_26[0], _26[1], "integer-number")).toBe(2043);
        expect(parseHourAndMinute(_27[0], _27[1], "integer-number")).toBe(2045);
        expect(parseHourAndMinute(_28[0], _28[1], "integer-number")).toBe(2047);
        expect(parseHourAndMinute(_29[0], _29[1], "integer-number")).toBe(2048);
        expect(parseHourAndMinute(_30[0], _30[1], "integer-number")).toBe(2050);
        expect(parseHourAndMinute(_31[0], _31[1], "integer-number")).toBe(2052);
        expect(parseHourAndMinute(_32[0], _32[1], "integer-number")).toBe(2053);
        expect(parseHourAndMinute(_33[0], _33[1], "integer-number")).toBe(2055);
        expect(parseHourAndMinute(_34[0], _34[1], "integer-number")).toBe(2057);
        expect(parseHourAndMinute(_35[0], _35[1], "integer-number")).toBe(2058);
        expect(parseHourAndMinute(_36[0], _36[1], "integer-number")).toBe(2060);
        expect(parseHourAndMinute(_37[0], _37[1], "integer-number")).toBe(2062);
        expect(parseHourAndMinute(_38[0], _38[1], "integer-number")).toBe(2063);
        expect(parseHourAndMinute(_39[0], _39[1], "integer-number")).toBe(2065);
        expect(parseHourAndMinute(_40[0], _40[1], "integer-number")).toBe(2067);
        expect(parseHourAndMinute(_41[0], _41[1], "integer-number")).toBe(2068);
        expect(parseHourAndMinute(_42[0], _42[1], "integer-number")).toBe(2070);
        expect(parseHourAndMinute(_43[0], _43[1], "integer-number")).toBe(2072);
        expect(parseHourAndMinute(_44[0], _44[1], "integer-number")).toBe(2073);
        expect(parseHourAndMinute(_45[0], _45[1], "integer-number")).toBe(2075);
        expect(parseHourAndMinute(_46[0], _46[1], "integer-number")).toBe(2077);
        expect(parseHourAndMinute(_47[0], _47[1], "integer-number")).toBe(2078);
        expect(parseHourAndMinute(_48[0], _48[1], "integer-number")).toBe(2080);
        expect(parseHourAndMinute(_49[0], _49[1], "integer-number")).toBe(2082);
        expect(parseHourAndMinute(_50[0], _50[1], "integer-number")).toBe(2083);
        expect(parseHourAndMinute(_51[0], _51[1], "integer-number")).toBe(2085);
        expect(parseHourAndMinute(_52[0], _52[1], "integer-number")).toBe(2087);
        expect(parseHourAndMinute(_53[0], _53[1], "integer-number")).toBe(2088);
        expect(parseHourAndMinute(_54[0], _54[1], "integer-number")).toBe(2090);
        expect(parseHourAndMinute(_55[0], _55[1], "integer-number")).toBe(2092);
        expect(parseHourAndMinute(_56[0], _56[1], "integer-number")).toBe(2093);
        expect(parseHourAndMinute(_57[0], _57[1], "integer-number")).toBe(2095);
        expect(parseHourAndMinute(_58[0], _58[1], "integer-number")).toBe(2097);
        expect(parseHourAndMinute(_59[0], _59[1], "integer-number")).toBe(2098);

        expect(parseHourAndMinute(8, 5, "integer-number")).toBe(808);
        expect(parseHourAndMinute(2, 26, "integer-number")).toBe(243);
        expect(parseHourAndMinute(4, 55, "integer-number")).toBe(492);
        expect(parseHourAndMinute(3, 20, "integer-number")).toBe(333);
        expect(parseHourAndMinute(11, 34, "integer-number")).toBe(1157);
        expect(parseHourAndMinute(6, 40, "integer-number")).toBe(667);
        expect(parseHourAndMinute(9, 13, "integer-number")).toBe(922);
        expect(parseHourAndMinute(4, 25, "integer-number")).toBe(442);
        expect(parseHourAndMinute(3, 58, "integer-number")).toBe(397);
        expect(parseHourAndMinute(2, 42, "integer-number")).toBe(270);

        //#endregion

    })


    it("parses decimal time correctly", () => {

        expect(parseDecimalTime(11.95)).toEqual("11:57");
        expect(parseDecimalTime(12.12)).toEqual("12:07");
        expect(parseDecimalTime(10.85)).toEqual("10:51");
        expect(parseDecimalTime(14.2)).toEqual("14:12");
        expect(parseDecimalTime(10.63)).toEqual("10:38");
        expect(parseDecimalTime(8.43)).toEqual("08:26");
        expect(parseDecimalTime(0)).toEqual("00:00");
        expect(parseDecimalTime(11.88)).toEqual("11:53");
        expect(parseDecimalTime(12.45)).toEqual("12:27");
        expect(parseDecimalTime(9.9)).toEqual("09:54");
        expect(parseDecimalTime(12.63)).toEqual("12:38");
        expect(parseDecimalTime(11.50)).toEqual("11:30");
        expect(parseDecimalTime(9.08)).toEqual("09:05");
        expect(parseDecimalTime(67.35)).toEqual("67:21")
        expect(parseDecimalTime(2.05)).toEqual("02:03")
        expect(parseDecimalTime(8.05)).toEqual("08:03")

        expect(parseDecimalTime(11.95, true)).toEqual("11:57:00");
        expect(parseDecimalTime(12.12, true)).toEqual("12:07:12");
        expect(parseDecimalTime(10.85, true)).toEqual("10:51:00");
        expect(parseDecimalTime(14.2, true)).toEqual("14:12:00");
        expect(parseDecimalTime(10.63, true)).toEqual("10:37:48");
        expect(parseDecimalTime(8.43, true)).toEqual("08:25:48");
        expect(parseDecimalTime(0, true)).toEqual("00:00:00");
        expect(parseDecimalTime(11.88, true)).toEqual("11:52:48");
        expect(parseDecimalTime(12.45, true)).toEqual("12:27:00");
        expect(parseDecimalTime(9.9, true)).toEqual("09:54:00");
        expect(parseDecimalTime(12.63, true)).toEqual("12:37:48");
        expect(parseDecimalTime(11.50, true)).toEqual("11:30:00");
        expect(parseDecimalTime(9.08, true)).toEqual("09:04:48");
        expect(parseDecimalTime(67.35, true)).toEqual("67:21:00")
        expect(parseDecimalTime(2.05, true)).toEqual("02:03:00")
        expect(parseDecimalTime(8.05, true)).toEqual("08:03:00")

    })


    it('parses minute count correctly', () => {

        //#region to decimal-string

        expect(parseMinuteCount(126, 'decimal-string')).toBe("2.10");
        expect(parseMinuteCount(0, 'decimal-string')).toBe("0.00");
        expect(parseMinuteCount(1, 'decimal-string')).toBe("0.02");
        expect(parseMinuteCount(60, 'decimal-string')).toBe("1.00");
        expect(parseMinuteCount(76, 'decimal-string')).toBe("1.27");

        //#endregion


        //#region to decimal-number

        expect(parseMinuteCount(126, 'decimal-number')).toBe(2.10);
        expect(parseMinuteCount(0, 'decimal-number')).toBe(0.00);
        expect(parseMinuteCount(1, 'decimal-number')).toBe(0.02);
        expect(parseMinuteCount(60, 'decimal-number')).toBe(1.00);
        expect(parseMinuteCount(76, 'decimal-number')).toBe(1.27);

        //#endregion



        //#region to formatted-hour-minute

        expect(parseMinuteCount(126, 'formatted-hour-minute')).toBe("2h 6m");
        expect(parseMinuteCount(0, 'formatted-hour-minute')).toBe("0m");
        expect(parseMinuteCount(1, 'formatted-hour-minute')).toBe("1m");
        expect(parseMinuteCount(60, 'formatted-hour-minute')).toBe("1h 0m");
        expect(parseMinuteCount(76, 'formatted-hour-minute')).toBe("1h 16m");

        //#endregion


        //#region to formatted-time

        expect(parseMinuteCount(126, 'formatted-time')).toBe("02:06");
        expect(parseMinuteCount(0, 'formatted-time')).toBe("00:00");
        expect(parseMinuteCount(1, 'formatted-time')).toBe("00:01");
        expect(parseMinuteCount(60, 'formatted-time')).toBe("01:00");
        expect(parseMinuteCount(76, 'formatted-time')).toBe("01:16");

        //#endregion


        //#region to VDate

        expect(parseMinuteCount(126, 'vdate').getHours()).toBe(2);
        expect(parseMinuteCount(126, 'vdate').getMinutes()).toBe(6);
        expect(parseMinuteCount(0, 'vdate').getHours()).toBe(0);
        expect(parseMinuteCount(0, 'vdate').getMinutes()).toBe(0);
        expect(parseMinuteCount(1, 'vdate').getHours()).toBe(0);
        expect(parseMinuteCount(1, 'vdate').getMinutes()).toBe(1);
        expect(parseMinuteCount(60, 'vdate').getHours()).toBe(1);
        expect(parseMinuteCount(60, 'vdate').getMinutes()).toBe(0);
        expect(parseMinuteCount(76, 'vdate').getHours()).toBe(1);
        expect(parseMinuteCount(76, 'vdate').getMinutes()).toBe(16);

        //#endregion

    })



    it("parses formatted time correctly", () => {

        //#region to decimal-number

        expect(parseFormattedTime("11:57", 'decimal-number')).toEqual(11.95);
        expect(parseFormattedTime("12:07", 'decimal-number')).toEqual(12.12);
        expect(parseFormattedTime("10:51", 'decimal-number')).toEqual(10.85);
        expect(parseFormattedTime("14:12", 'decimal-number')).toEqual(14.2);
        expect(parseFormattedTime("10:38", 'decimal-number')).toEqual(10.63);
        expect(parseFormattedTime("08:26", 'decimal-number')).toEqual(8.43);
        expect(parseFormattedTime("00:00", 'decimal-number')).toEqual(0);
        expect(parseFormattedTime("11:53", 'decimal-number')).toEqual(11.88);
        expect(parseFormattedTime("12:27", 'decimal-number')).toEqual(12.45);
        expect(parseFormattedTime("09:54", 'decimal-number')).toEqual(9.9);
        expect(parseFormattedTime("12:38", 'decimal-number')).toEqual(12.63);
        expect(parseFormattedTime("11:30", 'decimal-number')).toEqual(11.50);
        expect(parseFormattedTime("09:05", 'decimal-number')).toEqual(9.08);
        //expect(parseFormattedTime("67:21", 'decimal-number')).toThrowError("The given time is not valid")
        expect(parseFormattedTime("02:03", 'decimal-number')).toEqual(2.05)
        expect(parseFormattedTime("08:03", 'decimal-number')).toEqual(8.05)

        expect(parseFormattedTime("11:57:00", 'decimal-number')).toEqual(11.95);
        expect(parseFormattedTime("12:07:12", 'decimal-number')).toEqual(12.12);
        expect(parseFormattedTime("10:51:00", 'decimal-number')).toEqual(10.85);
        expect(parseFormattedTime("14:12:00", 'decimal-number')).toEqual(14.2);
        expect(parseFormattedTime("10:37:48", 'decimal-number')).toEqual(10.63);
        expect(parseFormattedTime("08:25:48", 'decimal-number')).toEqual(8.43);
        expect(parseFormattedTime("00:00:00", 'decimal-number')).toEqual(0);
        expect(parseFormattedTime("11:52:48", 'decimal-number')).toEqual(11.88);
        expect(parseFormattedTime("12:27:00", 'decimal-number')).toEqual(12.45);
        expect(parseFormattedTime("09:54:00", 'decimal-number')).toEqual(9.9);
        expect(parseFormattedTime("12:37:48", 'decimal-number')).toEqual(12.63);
        expect(parseFormattedTime("11:30:00", 'decimal-number')).toEqual(11.50);
        expect(parseFormattedTime("09:04:48", 'decimal-number')).toEqual(9.08);
        //expect(parseFormattedTime("67:21:00", 'decimal-number')).toThrow(new Error("The given time is not valid"))
        expect(parseFormattedTime("02:03:00", 'decimal-number')).toEqual(2.05)
        expect(parseFormattedTime("08:03:00", 'decimal-number')).toEqual(8.05)

        //#endregion


        //#region to decimal-string

        expect(parseFormattedTime("11:57", 'decimal-string')).toEqual("11.95");
        expect(parseFormattedTime("12:07", 'decimal-string')).toEqual("12.12");
        expect(parseFormattedTime("10:51", 'decimal-string')).toEqual("10.85");
        expect(parseFormattedTime("14:12", 'decimal-string')).toEqual("14.20");
        expect(parseFormattedTime("10:38", 'decimal-string')).toEqual("10.63");
        expect(parseFormattedTime("08:26", 'decimal-string')).toEqual("8.43");
        expect(parseFormattedTime("00:00", 'decimal-string')).toEqual("0.00");
        expect(parseFormattedTime("11:53", 'decimal-string')).toEqual("11.88");
        expect(parseFormattedTime("12:27", 'decimal-string')).toEqual("12.45");
        expect(parseFormattedTime("09:54", 'decimal-string')).toEqual("9.90");
        expect(parseFormattedTime("12:38", 'decimal-string')).toEqual("12.63");
        expect(parseFormattedTime("11:30", 'decimal-string')).toEqual("11.50");
        expect(parseFormattedTime("09:05", 'decimal-string')).toEqual("9.08");
        //expect(parseFormattedTime("67:21", 'decimal-number')).toThrowError("The given time is not valid")
        expect(parseFormattedTime("02:03", 'decimal-string')).toEqual("2.05")
        expect(parseFormattedTime("08:03", 'decimal-string')).toEqual("8.05")

        expect(parseFormattedTime("11:57:00", 'decimal-string')).toEqual("11.95");
        expect(parseFormattedTime("12:07:12", 'decimal-string')).toEqual("12.12");
        expect(parseFormattedTime("10:51:00", 'decimal-string')).toEqual("10.85");
        expect(parseFormattedTime("14:12:00", 'decimal-string')).toEqual("14.20");
        expect(parseFormattedTime("10:37:48", 'decimal-string')).toEqual("10.63");
        expect(parseFormattedTime("08:25:48", 'decimal-string')).toEqual("8.43");
        expect(parseFormattedTime("00:00:00", 'decimal-string')).toEqual("0.00");
        expect(parseFormattedTime("11:52:48", 'decimal-string')).toEqual("11.88");
        expect(parseFormattedTime("12:27:00", 'decimal-string')).toEqual("12.45");
        expect(parseFormattedTime("09:54:00", 'decimal-string')).toEqual("9.90");
        expect(parseFormattedTime("12:37:48", 'decimal-string')).toEqual("12.63");
        expect(parseFormattedTime("11:30:00", 'decimal-string')).toEqual("11.50");
        expect(parseFormattedTime("09:04:48", 'decimal-string')).toEqual("9.08");
        //expect(parseFormattedTime("67:21:00", 'decimal-number')).toThrow(new Error("The given time is not valid"))
        expect(parseFormattedTime("02:03:00", 'decimal-string')).toEqual("2.05")
        expect(parseFormattedTime("08:03:00", 'decimal-string')).toEqual("8.05")

        //#endregion

    })

})
