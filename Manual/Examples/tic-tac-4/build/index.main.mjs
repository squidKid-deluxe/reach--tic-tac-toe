// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function A(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    os: ctc4,
    xs: ctc4,
    xs_turn: ctc5
     });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc5, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc5]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v24 = await ctc.creationTime();
  const v27 = stdlib.protect(ctc0, await interact.getWager(), {
    at: './index.rsh:162:61:application',
    fs: ['at ./index.rsh:161:15:application call to [unknown function] (defined at: ./index.rsh:161:19:function exp)'],
    msg: 'getWager',
    who: 'A'
     });
  const v28 = stdlib.protect(ctc0, await interact.random(), {
    at: './index.rsh:163:47:application',
    fs: ['at ./index.rsh:161:15:application call to [unknown function] (defined at: ./index.rsh:161:19:function exp)'],
    msg: 'random',
    who: 'A'
     });
  const v29 = stdlib.digest(ctc1, [v28]);
  const txn1 = await (ctc.sendrecv('A', 1, 2, stdlib.checkedBigNumberify('./index.rsh:166:11:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc2], [v24, v27, v29], v27, [ctc0, ctc2], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:166:11:dot', stdlib.UInt_max, 0), v24]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:166:11:dot', stdlib.UInt_max, 0)]);
    const [v31, v32] = txn1.data;
    const v33 = txn1.value;
    const v37 = txn1.time;
    const v30 = txn1.from;
    
    const v34 = stdlib.eq(v33, v31);
    stdlib.assert(v34, {
      at: './index.rsh:166:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'A'
       });
    stdlib.assert(true, {
      at: './index.rsh:166:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
       });
    const v36 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v33);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:167:17:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v32, v36, v37]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:167:17:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v32, v36]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v31, v32] = txn1.data;
  const v33 = txn1.value;
  const v37 = txn1.time;
  const v30 = txn1.from;
  const v34 = stdlib.eq(v33, v31);
  stdlib.assert(v34, {
    at: './index.rsh:166:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'A'
     });
  stdlib.assert(true, {
    at: './index.rsh:166:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
     });
  const v36 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v33);
  const txn2 = await (ctc.recv('A', 2, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 240)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv('A', 3, 0, stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc2, ctc0, ctc0], [v30, v31, v32, v36, v37], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 1), v30, v31, v32, v36, v37]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 1), v30, v31, v32, v36]);
      const [] = txn3.data;
      const v994 = txn3.value;
      const v999 = txn3.time;
      const v993 = txn3.from;
      
      const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v995, {
        at: 'reach standard library:66:7:dot',
        fs: ['at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
        msg: 'pay amount correct',
        who: 'A'
         });
      const v996 = stdlib.addressEq(v30, v993);
      stdlib.assert(v996, {
        at: 'reach standard library:66:7:dot',
        fs: ['at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
        msg: 'sender correct',
        who: 'A'
         });
      const v998 = stdlib.add(v36, v994);
      sim_r.txns.push({
        amt: v998,
        to: v30
         });
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn3.data;
    const v994 = txn3.value;
    const v999 = txn3.time;
    const v993 = txn3.from;
    const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v995, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'pay amount correct',
      who: 'A'
       });
    const v996 = stdlib.addressEq(v30, v993);
    stdlib.assert(v996, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'sender correct',
      who: 'A'
       });
    const v998 = stdlib.add(v36, v994);
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:157:39:application',
      fs: ['at ./index.rsh:156:17:application call to [unknown function] (defined at: ./index.rsh:156:29:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./index.rsh:155:34:function exp)', 'at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'informTimeout',
      who: 'A'
       });
    return;
     }
  else {
    const [v42] = txn2.data;
    const v43 = txn2.value;
    const v47 = txn2.time;
    const v41 = txn2.from;
    const v44 = stdlib.eq(v43, v31);
    stdlib.assert(v44, {
      at: './index.rsh:174:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'A'
       });
    stdlib.assert(true, {
      at: './index.rsh:174:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
       });
    const txn3 = await (ctc.sendrecv('A', 4, 1, stdlib.checkedBigNumberify('./index.rsh:181:11:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc2, ctc3, ctc0, ctc0, ctc0], [v30, v31, v32, v41, v42, v47, v28], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:181:11:dot', stdlib.UInt_max, 2), v30, v31, v32, v41, v42, v47]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:181:11:dot', stdlib.UInt_max, 2), v30, v31, v32, v41, v42]);
      const [v51] = txn3.data;
      const v52 = txn3.value;
      const v57 = txn3.time;
      const v50 = txn3.from;
      
      const v53 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v53, {
        at: './index.rsh:181:11:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'A'
         });
      const v54 = stdlib.addressEq(v30, v50);
      stdlib.assert(v54, {
        at: './index.rsh:181:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'A'
         });
      const v58 = stdlib.digest(ctc1, [v51]);
      const v59 = stdlib.eq(v32, v58);
      stdlib.assert(v59, {
        at: './index.rsh:183:16:application',
        fs: [],
        msg: null,
        who: 'A'
         });
      const v60 = stdlib.mod(v51, stdlib.checkedBigNumberify('./index.rsh:184:40:decimal', stdlib.UInt_max, 2));
      const v61 = stdlib.mod(v42, stdlib.checkedBigNumberify('./index.rsh:184:58:decimal', stdlib.UInt_max, 2));
      const v62 = stdlib.add(v60, v61);
      const v63 = stdlib.mod(v62, stdlib.checkedBigNumberify('./index.rsh:184:64:decimal', stdlib.UInt_max, 2));
      const v64 = stdlib.eq(v63, stdlib.checkedBigNumberify('./index.rsh:184:69:decimal', stdlib.UInt_max, 0));
      const v68 = [stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0)];
      const v70 = {
        os: v68,
        xs: v68,
        xs_turn: v64
         };
      const v67 = v70;
      const v1015 = v57;
      
      if ((() => {
        const v75 = v67.xs;
        const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
        const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
        const v80 = stdlib.add(v78, v79);
        const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
        const v82 = stdlib.add(v80, v81);
        const v83 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
        const v84 = v83 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
        const v85 = v75[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
        const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
        const v87 = stdlib.add(v85, v86);
        const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
        const v89 = stdlib.add(v87, v88);
        const v90 = stdlib.eq(v89, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
        const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
        const v92 = stdlib.add(v84, v91);
        const v93 = v75[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
        const v94 = v75[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
        const v95 = stdlib.add(v93, v94);
        const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
        const v97 = stdlib.add(v95, v96);
        const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
        const v99 = v98 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
        const v100 = stdlib.add(v92, v99);
        const v103 = stdlib.add(v78, v85);
        const v105 = stdlib.add(v103, v93);
        const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
        const v107 = v106 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
        const v108 = stdlib.add(v100, v107);
        const v111 = stdlib.add(v79, v86);
        const v113 = stdlib.add(v111, v94);
        const v114 = stdlib.eq(v113, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
        const v115 = v114 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
        const v116 = stdlib.add(v108, v115);
        const v119 = stdlib.add(v81, v88);
        const v121 = stdlib.add(v119, v96);
        const v122 = stdlib.eq(v121, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
        const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
        const v124 = stdlib.add(v116, v123);
        const v127 = stdlib.add(v78, v86);
        const v129 = stdlib.add(v127, v96);
        const v130 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
        const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
        const v132 = stdlib.add(v124, v131);
        const v135 = stdlib.add(v81, v86);
        const v137 = stdlib.add(v135, v93);
        const v138 = stdlib.eq(v137, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
        const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
        const v140 = stdlib.add(v132, v139);
        const v142 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
        const v144 = v67.os;
        const v147 = v144[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
        const v148 = v144[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
        const v149 = stdlib.add(v147, v148);
        const v150 = v144[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
        const v151 = stdlib.add(v149, v150);
        const v152 = stdlib.eq(v151, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
        const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
        const v154 = v144[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
        const v155 = v144[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
        const v156 = stdlib.add(v154, v155);
        const v157 = v144[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
        const v158 = stdlib.add(v156, v157);
        const v159 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
        const v160 = v159 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
        const v161 = stdlib.add(v153, v160);
        const v162 = v144[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
        const v163 = v144[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
        const v164 = stdlib.add(v162, v163);
        const v165 = v144[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
        const v166 = stdlib.add(v164, v165);
        const v167 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
        const v168 = v167 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
        const v169 = stdlib.add(v161, v168);
        const v172 = stdlib.add(v147, v154);
        const v174 = stdlib.add(v172, v162);
        const v175 = stdlib.eq(v174, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
        const v176 = v175 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
        const v177 = stdlib.add(v169, v176);
        const v180 = stdlib.add(v148, v155);
        const v182 = stdlib.add(v180, v163);
        const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
        const v184 = v183 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
        const v185 = stdlib.add(v177, v184);
        const v188 = stdlib.add(v150, v157);
        const v190 = stdlib.add(v188, v165);
        const v191 = stdlib.eq(v190, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
        const v192 = v191 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
        const v193 = stdlib.add(v185, v192);
        const v196 = stdlib.add(v147, v155);
        const v198 = stdlib.add(v196, v165);
        const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
        const v200 = v199 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
        const v201 = stdlib.add(v193, v200);
        const v204 = stdlib.add(v150, v155);
        const v206 = stdlib.add(v204, v162);
        const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
        const v208 = v207 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
        const v209 = stdlib.add(v201, v208);
        const v211 = stdlib.gt(v209, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
        const v213 = v142 ? true : v211;
        const v234 = stdlib.add(v78, v147);
        const v243 = stdlib.add(v79, v148);
        const v252 = stdlib.add(v81, v150);
        const v261 = stdlib.add(v85, v154);
        const v270 = stdlib.add(v86, v155);
        const v279 = stdlib.add(v88, v157);
        const v288 = stdlib.add(v93, v162);
        const v297 = stdlib.add(v94, v163);
        const v306 = stdlib.add(v96, v165);
        const v322 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v234);
        const v325 = stdlib.add(v322, v243);
        const v328 = stdlib.add(v325, v252);
        const v331 = stdlib.add(v328, v261);
        const v334 = stdlib.add(v331, v270);
        const v337 = stdlib.add(v334, v279);
        const v340 = stdlib.add(v337, v288);
        const v343 = stdlib.add(v340, v297);
        const v346 = stdlib.add(v343, v306);
        const v350 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:71:40:decimal', stdlib.UInt_max, 9));
        const v352 = v213 ? true : v350;
        const v355 = v352 ? false : true;
        
        return v355; })()) {
        const v357 = v67.xs_turn;
        if (v357) {
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:196:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:196:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
          sim_r.isHalt = false;
           }
        else {
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:207:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:207:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
          sim_r.isHalt = false;
           } }
      else {
        const v488 = v67.xs;
        const v502 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
        const v503 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v502);
        const v506 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
        const v507 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v506);
        const v510 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
        const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v510);
        const v514 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
        const v515 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v514);
        const v518 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
        const v519 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v518);
        const v522 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
        const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v522);
        const v526 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
        const v527 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v526);
        const v530 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
        const v531 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v530);
        const v534 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
        const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v534);
        const v549 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v503);
        const v552 = stdlib.add(v549, v507);
        const v555 = stdlib.add(v552, v511);
        const v558 = stdlib.add(v555, v515);
        const v561 = stdlib.add(v558, v519);
        const v564 = stdlib.add(v561, v523);
        const v567 = stdlib.add(v564, v527);
        const v570 = stdlib.add(v567, v531);
        const v573 = stdlib.add(v570, v535);
        const v578 = stdlib.mul(v573, v31);
        const v579 = stdlib.div(v578, stdlib.checkedBigNumberify('./index.rsh:218:69:decimal', stdlib.UInt_max, 16));
        const v580 = v67.os;
        const v594 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
        const v595 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v594);
        const v598 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
        const v599 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v598);
        const v602 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
        const v603 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v602);
        const v606 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
        const v607 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v606);
        const v610 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
        const v611 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v610);
        const v614 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
        const v615 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v614);
        const v618 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
        const v619 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v618);
        const v622 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
        const v623 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v622);
        const v626 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
        const v627 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v626);
        const v641 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v595);
        const v644 = stdlib.add(v641, v599);
        const v647 = stdlib.add(v644, v603);
        const v650 = stdlib.add(v647, v607);
        const v653 = stdlib.add(v650, v611);
        const v656 = stdlib.add(v653, v615);
        const v659 = stdlib.add(v656, v619);
        const v662 = stdlib.add(v659, v623);
        const v665 = stdlib.add(v662, v627);
        const v670 = stdlib.mul(v665, v31);
        const v671 = stdlib.div(v670, stdlib.checkedBigNumberify('./index.rsh:219:69:decimal', stdlib.UInt_max, 16));
        const v672 = stdlib.sub(v31, v579);
        const v673 = stdlib.sub(v31, v671);
        const v674 = stdlib.add(v579, v671);
        const v681 = stdlib.add(v502, v506);
        const v683 = stdlib.add(v681, v510);
        const v684 = stdlib.eq(v683, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
        const v685 = v684 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
        const v688 = stdlib.add(v514, v518);
        const v690 = stdlib.add(v688, v522);
        const v691 = stdlib.eq(v690, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
        const v692 = v691 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
        const v693 = stdlib.add(v685, v692);
        const v696 = stdlib.add(v526, v530);
        const v698 = stdlib.add(v696, v534);
        const v699 = stdlib.eq(v698, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
        const v700 = v699 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
        const v701 = stdlib.add(v693, v700);
        const v704 = stdlib.add(v502, v514);
        const v706 = stdlib.add(v704, v526);
        const v707 = stdlib.eq(v706, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
        const v708 = v707 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
        const v709 = stdlib.add(v701, v708);
        const v712 = stdlib.add(v506, v518);
        const v714 = stdlib.add(v712, v530);
        const v715 = stdlib.eq(v714, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
        const v716 = v715 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
        const v717 = stdlib.add(v709, v716);
        const v720 = stdlib.add(v510, v522);
        const v722 = stdlib.add(v720, v534);
        const v723 = stdlib.eq(v722, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
        const v724 = v723 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
        const v725 = stdlib.add(v717, v724);
        const v728 = stdlib.add(v502, v518);
        const v730 = stdlib.add(v728, v534);
        const v731 = stdlib.eq(v730, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
        const v732 = v731 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
        const v733 = stdlib.add(v725, v732);
        const v736 = stdlib.add(v510, v518);
        const v738 = stdlib.add(v736, v526);
        const v739 = stdlib.eq(v738, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
        const v740 = v739 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
        const v741 = stdlib.add(v733, v740);
        const v743 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
        const v752 = stdlib.add(v594, v598);
        const v754 = stdlib.add(v752, v602);
        const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
        const v756 = v755 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
        const v759 = stdlib.add(v606, v610);
        const v761 = stdlib.add(v759, v614);
        const v762 = stdlib.eq(v761, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
        const v763 = v762 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
        const v764 = stdlib.add(v756, v763);
        const v767 = stdlib.add(v618, v622);
        const v769 = stdlib.add(v767, v626);
        const v770 = stdlib.eq(v769, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
        const v771 = v770 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
        const v772 = stdlib.add(v764, v771);
        const v775 = stdlib.add(v594, v606);
        const v777 = stdlib.add(v775, v618);
        const v778 = stdlib.eq(v777, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
        const v779 = v778 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
        const v780 = stdlib.add(v772, v779);
        const v783 = stdlib.add(v598, v610);
        const v785 = stdlib.add(v783, v622);
        const v786 = stdlib.eq(v785, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
        const v787 = v786 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
        const v788 = stdlib.add(v780, v787);
        const v791 = stdlib.add(v602, v614);
        const v793 = stdlib.add(v791, v626);
        const v794 = stdlib.eq(v793, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
        const v795 = v794 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
        const v796 = stdlib.add(v788, v795);
        const v799 = stdlib.add(v594, v610);
        const v801 = stdlib.add(v799, v626);
        const v802 = stdlib.eq(v801, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
        const v803 = v802 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
        const v804 = stdlib.add(v796, v803);
        const v807 = stdlib.add(v602, v610);
        const v809 = stdlib.add(v807, v618);
        const v810 = stdlib.eq(v809, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
        const v811 = v810 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
        const v812 = stdlib.add(v804, v811);
        const v814 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
        const v885 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
        const v956 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
        const v963 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, 2), v31);
        const v965 = stdlib.add(v674, v672);
        const v966 = stdlib.add(v674, v673);
        const v967 = stdlib.add(v671, v672);
        const v968 = stdlib.add(v579, v673);
        const v969 = [v672, v966];
        const v970 = [v967, v968];
        const v971 = v956 ? v969 : v970;
        const v972 = [v965, v673];
        const v973 = v885 ? v972 : v971;
        const v974 = [stdlib.checkedBigNumberify('./index.rsh:232:31:decimal', stdlib.UInt_max, 0), v963];
        const v975 = v814 ? v974 : v973;
        const v976 = [v963, stdlib.checkedBigNumberify('./index.rsh:231:44:decimal', stdlib.UInt_max, 0)];
        const v977 = v743 ? v976 : v975;
        const v978 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 0)];
        const v979 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 1)];
        sim_r.txns.push({
          amt: v978,
          to: v30
           });
        sim_r.txns.push({
          amt: v979,
          to: v41
           });
        sim_r.nextSt = stdlib.digest(ctc9, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
        sim_r.isHalt = true;
         }
      return sim_r;
       })));
    const [v51] = txn3.data;
    const v52 = txn3.value;
    const v57 = txn3.time;
    const v50 = txn3.from;
    const v53 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v53, {
      at: './index.rsh:181:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'A'
       });
    const v54 = stdlib.addressEq(v30, v50);
    stdlib.assert(v54, {
      at: './index.rsh:181:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
       });
    const v58 = stdlib.digest(ctc1, [v51]);
    const v59 = stdlib.eq(v32, v58);
    stdlib.assert(v59, {
      at: './index.rsh:183:16:application',
      fs: [],
      msg: null,
      who: 'A'
       });
    const v60 = stdlib.mod(v51, stdlib.checkedBigNumberify('./index.rsh:184:40:decimal', stdlib.UInt_max, 2));
    const v61 = stdlib.mod(v42, stdlib.checkedBigNumberify('./index.rsh:184:58:decimal', stdlib.UInt_max, 2));
    const v62 = stdlib.add(v60, v61);
    const v63 = stdlib.mod(v62, stdlib.checkedBigNumberify('./index.rsh:184:64:decimal', stdlib.UInt_max, 2));
    const v64 = stdlib.eq(v63, stdlib.checkedBigNumberify('./index.rsh:184:69:decimal', stdlib.UInt_max, 0));
    const v68 = [stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0)];
    const v70 = {
      os: v68,
      xs: v68,
      xs_turn: v64
       };
    let v67 = v70;
    let v1015 = v57;
    
    while ((() => {
      const v75 = v67.xs;
      const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
      const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
      const v80 = stdlib.add(v78, v79);
      const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
      const v82 = stdlib.add(v80, v81);
      const v83 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
      const v84 = v83 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
      const v85 = v75[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
      const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
      const v87 = stdlib.add(v85, v86);
      const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
      const v89 = stdlib.add(v87, v88);
      const v90 = stdlib.eq(v89, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
      const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
      const v92 = stdlib.add(v84, v91);
      const v93 = v75[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
      const v94 = v75[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
      const v95 = stdlib.add(v93, v94);
      const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
      const v97 = stdlib.add(v95, v96);
      const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
      const v99 = v98 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
      const v100 = stdlib.add(v92, v99);
      const v103 = stdlib.add(v78, v85);
      const v105 = stdlib.add(v103, v93);
      const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
      const v107 = v106 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
      const v108 = stdlib.add(v100, v107);
      const v111 = stdlib.add(v79, v86);
      const v113 = stdlib.add(v111, v94);
      const v114 = stdlib.eq(v113, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
      const v115 = v114 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
      const v116 = stdlib.add(v108, v115);
      const v119 = stdlib.add(v81, v88);
      const v121 = stdlib.add(v119, v96);
      const v122 = stdlib.eq(v121, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
      const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
      const v124 = stdlib.add(v116, v123);
      const v127 = stdlib.add(v78, v86);
      const v129 = stdlib.add(v127, v96);
      const v130 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
      const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
      const v132 = stdlib.add(v124, v131);
      const v135 = stdlib.add(v81, v86);
      const v137 = stdlib.add(v135, v93);
      const v138 = stdlib.eq(v137, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
      const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
      const v140 = stdlib.add(v132, v139);
      const v142 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
      const v144 = v67.os;
      const v147 = v144[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
      const v148 = v144[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
      const v149 = stdlib.add(v147, v148);
      const v150 = v144[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
      const v151 = stdlib.add(v149, v150);
      const v152 = stdlib.eq(v151, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
      const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
      const v154 = v144[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
      const v155 = v144[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
      const v156 = stdlib.add(v154, v155);
      const v157 = v144[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
      const v158 = stdlib.add(v156, v157);
      const v159 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
      const v160 = v159 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
      const v161 = stdlib.add(v153, v160);
      const v162 = v144[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
      const v163 = v144[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
      const v164 = stdlib.add(v162, v163);
      const v165 = v144[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
      const v166 = stdlib.add(v164, v165);
      const v167 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
      const v168 = v167 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
      const v169 = stdlib.add(v161, v168);
      const v172 = stdlib.add(v147, v154);
      const v174 = stdlib.add(v172, v162);
      const v175 = stdlib.eq(v174, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
      const v176 = v175 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
      const v177 = stdlib.add(v169, v176);
      const v180 = stdlib.add(v148, v155);
      const v182 = stdlib.add(v180, v163);
      const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
      const v184 = v183 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
      const v185 = stdlib.add(v177, v184);
      const v188 = stdlib.add(v150, v157);
      const v190 = stdlib.add(v188, v165);
      const v191 = stdlib.eq(v190, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
      const v192 = v191 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
      const v193 = stdlib.add(v185, v192);
      const v196 = stdlib.add(v147, v155);
      const v198 = stdlib.add(v196, v165);
      const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
      const v200 = v199 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
      const v201 = stdlib.add(v193, v200);
      const v204 = stdlib.add(v150, v155);
      const v206 = stdlib.add(v204, v162);
      const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
      const v208 = v207 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
      const v209 = stdlib.add(v201, v208);
      const v211 = stdlib.gt(v209, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
      const v213 = v142 ? true : v211;
      const v234 = stdlib.add(v78, v147);
      const v243 = stdlib.add(v79, v148);
      const v252 = stdlib.add(v81, v150);
      const v261 = stdlib.add(v85, v154);
      const v270 = stdlib.add(v86, v155);
      const v279 = stdlib.add(v88, v157);
      const v288 = stdlib.add(v93, v162);
      const v297 = stdlib.add(v94, v163);
      const v306 = stdlib.add(v96, v165);
      const v322 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v234);
      const v325 = stdlib.add(v322, v243);
      const v328 = stdlib.add(v325, v252);
      const v331 = stdlib.add(v328, v261);
      const v334 = stdlib.add(v331, v270);
      const v337 = stdlib.add(v334, v279);
      const v340 = stdlib.add(v337, v288);
      const v343 = stdlib.add(v340, v297);
      const v346 = stdlib.add(v343, v306);
      const v350 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:71:40:decimal', stdlib.UInt_max, 9));
      const v352 = v213 ? true : v350;
      const v355 = v352 ? false : true;
      
      return v355; })()) {
      const v357 = v67.xs_turn;
      if (v357) {
        const v361 = [stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3)];
        const v362 = stdlib.protect(ctc0, await interact.getMove(v67, v361), {
          at: './index.rsh:85:34:application',
          fs: ['at ./index.rsh:199:47:application call to "getValidMove" (defined at: ./index.rsh:84:1:function exp)', 'at ./index.rsh:198:23:application call to [unknown function] (defined at: ./index.rsh:198:27:function exp)'],
          msg: 'getMove',
          who: 'A'
           });
        const v364 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v362);
        const v365 = stdlib.lt(v362, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
        const v366 = v364 ? v365 : false;
        stdlib.assert(v366, {
          at: './index.rsh:86:11:application',
          fs: ['at ./index.rsh:199:47:application call to "getValidMove" (defined at: ./index.rsh:84:1:function exp)', 'at ./index.rsh:198:23:application call to [unknown function] (defined at: ./index.rsh:198:27:function exp)'],
          msg: null,
          who: 'A'
           });
        const v370 = v67.xs;
        const v372 = v370[v362];
        const v373 = v67.os;
        const v375 = v373[v362];
        const v376 = stdlib.add(v372, v375);
        const v378 = stdlib.eq(v376, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v378, {
          at: './index.rsh:87:11:application',
          fs: ['at ./index.rsh:199:47:application call to "getValidMove" (defined at: ./index.rsh:84:1:function exp)', 'at ./index.rsh:198:23:application call to [unknown function] (defined at: ./index.rsh:198:27:function exp)'],
          msg: null,
          who: 'A'
           });
        const txn4 = await (ctc.sendrecv('A', 7, 1, stdlib.checkedBigNumberify('./index.rsh:201:19:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc3, ctc6, ctc5, ctc0, ctc0], [v30, v31, v41, v67, v357, v1015, v362], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:201:19:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:201:19:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
          const [v382] = txn4.data;
          const v383 = txn4.value;
          const v388 = txn4.time;
          const v381 = txn4.from;
          
          const v384 = stdlib.eq(v383, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v384, {
            at: './index.rsh:201:19:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'A'
             });
          const v385 = stdlib.addressEq(v30, v381);
          stdlib.assert(v385, {
            at: './index.rsh:201:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'A'
             });
          const v391 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v382);
          const v392 = stdlib.lt(v382, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
          const v393 = v391 ? v392 : false;
          stdlib.assert(v393, {
            at: './index.rsh:94:12:application',
            fs: ['at ./index.rsh:203:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
            msg: null,
            who: 'A'
             });
          const v397 = v67.xs;
          const v399 = v397[v382];
          const v400 = v67.os;
          const v402 = v400[v382];
          const v403 = stdlib.add(v399, v402);
          const v405 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v405, {
            at: './index.rsh:95:12:application',
            fs: ['at ./index.rsh:203:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
            msg: null,
            who: 'A'
             });
          const v409 = v357 ? false : true;
          const v413 = stdlib.Array_set(v397, v382, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, 1));
          const v415 = v357 ? v413 : v397;
          const v419 = stdlib.Array_set(v400, v382, stdlib.checkedBigNumberify('./index.rsh:101:44:decimal', stdlib.UInt_max, 1));
          const v420 = v357 ? v400 : v419;
          const v422 = {
            os: v420,
            xs: v415,
            xs_turn: v409
             };
          const cv67 = v422;
          const cv1015 = v388;
          
          (() => {
            const v67 = cv67;
            const v1015 = cv1015;
            
            if ((() => {
              const v75 = v67.xs;
              const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
              const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
              const v80 = stdlib.add(v78, v79);
              const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
              const v82 = stdlib.add(v80, v81);
              const v83 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v84 = v83 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v85 = v75[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
              const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
              const v87 = stdlib.add(v85, v86);
              const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
              const v89 = stdlib.add(v87, v88);
              const v90 = stdlib.eq(v89, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v92 = stdlib.add(v84, v91);
              const v93 = v75[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
              const v94 = v75[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
              const v95 = stdlib.add(v93, v94);
              const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
              const v97 = stdlib.add(v95, v96);
              const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v99 = v98 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v100 = stdlib.add(v92, v99);
              const v103 = stdlib.add(v78, v85);
              const v105 = stdlib.add(v103, v93);
              const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v107 = v106 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v108 = stdlib.add(v100, v107);
              const v111 = stdlib.add(v79, v86);
              const v113 = stdlib.add(v111, v94);
              const v114 = stdlib.eq(v113, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v115 = v114 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v116 = stdlib.add(v108, v115);
              const v119 = stdlib.add(v81, v88);
              const v121 = stdlib.add(v119, v96);
              const v122 = stdlib.eq(v121, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v124 = stdlib.add(v116, v123);
              const v127 = stdlib.add(v78, v86);
              const v129 = stdlib.add(v127, v96);
              const v130 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v132 = stdlib.add(v124, v131);
              const v135 = stdlib.add(v81, v86);
              const v137 = stdlib.add(v135, v93);
              const v138 = stdlib.eq(v137, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v140 = stdlib.add(v132, v139);
              const v142 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v144 = v67.os;
              const v147 = v144[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
              const v148 = v144[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
              const v149 = stdlib.add(v147, v148);
              const v150 = v144[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
              const v151 = stdlib.add(v149, v150);
              const v152 = stdlib.eq(v151, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v154 = v144[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
              const v155 = v144[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
              const v156 = stdlib.add(v154, v155);
              const v157 = v144[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
              const v158 = stdlib.add(v156, v157);
              const v159 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v160 = v159 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v161 = stdlib.add(v153, v160);
              const v162 = v144[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
              const v163 = v144[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
              const v164 = stdlib.add(v162, v163);
              const v165 = v144[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
              const v166 = stdlib.add(v164, v165);
              const v167 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v168 = v167 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v169 = stdlib.add(v161, v168);
              const v172 = stdlib.add(v147, v154);
              const v174 = stdlib.add(v172, v162);
              const v175 = stdlib.eq(v174, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v176 = v175 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v177 = stdlib.add(v169, v176);
              const v180 = stdlib.add(v148, v155);
              const v182 = stdlib.add(v180, v163);
              const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v184 = v183 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v185 = stdlib.add(v177, v184);
              const v188 = stdlib.add(v150, v157);
              const v190 = stdlib.add(v188, v165);
              const v191 = stdlib.eq(v190, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v192 = v191 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v193 = stdlib.add(v185, v192);
              const v196 = stdlib.add(v147, v155);
              const v198 = stdlib.add(v196, v165);
              const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v200 = v199 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v201 = stdlib.add(v193, v200);
              const v204 = stdlib.add(v150, v155);
              const v206 = stdlib.add(v204, v162);
              const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v208 = v207 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v209 = stdlib.add(v201, v208);
              const v211 = stdlib.gt(v209, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v213 = v142 ? true : v211;
              const v234 = stdlib.add(v78, v147);
              const v243 = stdlib.add(v79, v148);
              const v252 = stdlib.add(v81, v150);
              const v261 = stdlib.add(v85, v154);
              const v270 = stdlib.add(v86, v155);
              const v279 = stdlib.add(v88, v157);
              const v288 = stdlib.add(v93, v162);
              const v297 = stdlib.add(v94, v163);
              const v306 = stdlib.add(v96, v165);
              const v322 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v234);
              const v325 = stdlib.add(v322, v243);
              const v328 = stdlib.add(v325, v252);
              const v331 = stdlib.add(v328, v261);
              const v334 = stdlib.add(v331, v270);
              const v337 = stdlib.add(v334, v279);
              const v340 = stdlib.add(v337, v288);
              const v343 = stdlib.add(v340, v297);
              const v346 = stdlib.add(v343, v306);
              const v350 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:71:40:decimal', stdlib.UInt_max, 9));
              const v352 = v213 ? true : v350;
              const v355 = v352 ? false : true;
              
              return v355; })()) {
              const v357 = v67.xs_turn;
              if (v357) {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:196:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:196:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
                sim_r.isHalt = false;
                 }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:207:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:207:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
                sim_r.isHalt = false;
                 } }
            else {
              const v488 = v67.xs;
              const v502 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
              const v503 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v502);
              const v506 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
              const v507 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v506);
              const v510 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
              const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v510);
              const v514 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
              const v515 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v514);
              const v518 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
              const v519 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v518);
              const v522 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
              const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v522);
              const v526 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
              const v527 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v526);
              const v530 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
              const v531 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v530);
              const v534 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
              const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v534);
              const v549 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v503);
              const v552 = stdlib.add(v549, v507);
              const v555 = stdlib.add(v552, v511);
              const v558 = stdlib.add(v555, v515);
              const v561 = stdlib.add(v558, v519);
              const v564 = stdlib.add(v561, v523);
              const v567 = stdlib.add(v564, v527);
              const v570 = stdlib.add(v567, v531);
              const v573 = stdlib.add(v570, v535);
              const v578 = stdlib.mul(v573, v31);
              const v579 = stdlib.div(v578, stdlib.checkedBigNumberify('./index.rsh:218:69:decimal', stdlib.UInt_max, 16));
              const v580 = v67.os;
              const v594 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
              const v595 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v594);
              const v598 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
              const v599 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v598);
              const v602 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
              const v603 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v602);
              const v606 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
              const v607 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v606);
              const v610 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
              const v611 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v610);
              const v614 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
              const v615 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v614);
              const v618 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
              const v619 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v618);
              const v622 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
              const v623 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v622);
              const v626 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
              const v627 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v626);
              const v641 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v595);
              const v644 = stdlib.add(v641, v599);
              const v647 = stdlib.add(v644, v603);
              const v650 = stdlib.add(v647, v607);
              const v653 = stdlib.add(v650, v611);
              const v656 = stdlib.add(v653, v615);
              const v659 = stdlib.add(v656, v619);
              const v662 = stdlib.add(v659, v623);
              const v665 = stdlib.add(v662, v627);
              const v670 = stdlib.mul(v665, v31);
              const v671 = stdlib.div(v670, stdlib.checkedBigNumberify('./index.rsh:219:69:decimal', stdlib.UInt_max, 16));
              const v672 = stdlib.sub(v31, v579);
              const v673 = stdlib.sub(v31, v671);
              const v674 = stdlib.add(v579, v671);
              const v681 = stdlib.add(v502, v506);
              const v683 = stdlib.add(v681, v510);
              const v684 = stdlib.eq(v683, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v685 = v684 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v688 = stdlib.add(v514, v518);
              const v690 = stdlib.add(v688, v522);
              const v691 = stdlib.eq(v690, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v692 = v691 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v693 = stdlib.add(v685, v692);
              const v696 = stdlib.add(v526, v530);
              const v698 = stdlib.add(v696, v534);
              const v699 = stdlib.eq(v698, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v700 = v699 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v701 = stdlib.add(v693, v700);
              const v704 = stdlib.add(v502, v514);
              const v706 = stdlib.add(v704, v526);
              const v707 = stdlib.eq(v706, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v708 = v707 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v709 = stdlib.add(v701, v708);
              const v712 = stdlib.add(v506, v518);
              const v714 = stdlib.add(v712, v530);
              const v715 = stdlib.eq(v714, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v716 = v715 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v717 = stdlib.add(v709, v716);
              const v720 = stdlib.add(v510, v522);
              const v722 = stdlib.add(v720, v534);
              const v723 = stdlib.eq(v722, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v724 = v723 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v725 = stdlib.add(v717, v724);
              const v728 = stdlib.add(v502, v518);
              const v730 = stdlib.add(v728, v534);
              const v731 = stdlib.eq(v730, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v732 = v731 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v733 = stdlib.add(v725, v732);
              const v736 = stdlib.add(v510, v518);
              const v738 = stdlib.add(v736, v526);
              const v739 = stdlib.eq(v738, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v740 = v739 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v741 = stdlib.add(v733, v740);
              const v743 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
              const v752 = stdlib.add(v594, v598);
              const v754 = stdlib.add(v752, v602);
              const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v756 = v755 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v759 = stdlib.add(v606, v610);
              const v761 = stdlib.add(v759, v614);
              const v762 = stdlib.eq(v761, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v763 = v762 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v764 = stdlib.add(v756, v763);
              const v767 = stdlib.add(v618, v622);
              const v769 = stdlib.add(v767, v626);
              const v770 = stdlib.eq(v769, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v771 = v770 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v772 = stdlib.add(v764, v771);
              const v775 = stdlib.add(v594, v606);
              const v777 = stdlib.add(v775, v618);
              const v778 = stdlib.eq(v777, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v779 = v778 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v780 = stdlib.add(v772, v779);
              const v783 = stdlib.add(v598, v610);
              const v785 = stdlib.add(v783, v622);
              const v786 = stdlib.eq(v785, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v787 = v786 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v788 = stdlib.add(v780, v787);
              const v791 = stdlib.add(v602, v614);
              const v793 = stdlib.add(v791, v626);
              const v794 = stdlib.eq(v793, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v795 = v794 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v796 = stdlib.add(v788, v795);
              const v799 = stdlib.add(v594, v610);
              const v801 = stdlib.add(v799, v626);
              const v802 = stdlib.eq(v801, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v803 = v802 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v804 = stdlib.add(v796, v803);
              const v807 = stdlib.add(v602, v610);
              const v809 = stdlib.add(v807, v618);
              const v810 = stdlib.eq(v809, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v811 = v810 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v812 = stdlib.add(v804, v811);
              const v814 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
              const v885 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v956 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v963 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, 2), v31);
              const v965 = stdlib.add(v674, v672);
              const v966 = stdlib.add(v674, v673);
              const v967 = stdlib.add(v671, v672);
              const v968 = stdlib.add(v579, v673);
              const v969 = [v672, v966];
              const v970 = [v967, v968];
              const v971 = v956 ? v969 : v970;
              const v972 = [v965, v673];
              const v973 = v885 ? v972 : v971;
              const v974 = [stdlib.checkedBigNumberify('./index.rsh:232:31:decimal', stdlib.UInt_max, 0), v963];
              const v975 = v814 ? v974 : v973;
              const v976 = [v963, stdlib.checkedBigNumberify('./index.rsh:231:44:decimal', stdlib.UInt_max, 0)];
              const v977 = v743 ? v976 : v975;
              const v978 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 0)];
              const v979 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 1)];
              sim_r.txns.push({
                amt: v978,
                to: v30
                 });
              sim_r.txns.push({
                amt: v979,
                to: v41
                 });
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.isHalt = true;
               } })();
          return sim_r;
           })));
        const [v382] = txn4.data;
        const v383 = txn4.value;
        const v388 = txn4.time;
        const v381 = txn4.from;
        const v384 = stdlib.eq(v383, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v384, {
          at: './index.rsh:201:19:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'A'
           });
        const v385 = stdlib.addressEq(v30, v381);
        stdlib.assert(v385, {
          at: './index.rsh:201:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'A'
           });
        const v391 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v382);
        const v392 = stdlib.lt(v382, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
        const v393 = v391 ? v392 : false;
        stdlib.assert(v393, {
          at: './index.rsh:94:12:application',
          fs: ['at ./index.rsh:203:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v397 = v67.xs;
        const v399 = v397[v382];
        const v400 = v67.os;
        const v402 = v400[v382];
        const v403 = stdlib.add(v399, v402);
        const v405 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v405, {
          at: './index.rsh:95:12:application',
          fs: ['at ./index.rsh:203:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v409 = v357 ? false : true;
        const v413 = stdlib.Array_set(v397, v382, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, 1));
        const v415 = v357 ? v413 : v397;
        const v419 = stdlib.Array_set(v400, v382, stdlib.checkedBigNumberify('./index.rsh:101:44:decimal', stdlib.UInt_max, 1));
        const v420 = v357 ? v400 : v419;
        const v422 = {
          os: v420,
          xs: v415,
          xs_turn: v409
           };
        const cv67 = v422;
        const cv1015 = v388;
        
        v67 = cv67;
        v1015 = cv1015;
        
        continue;
         }
      else {
        const txn4 = await (ctc.recv('A', 8, 1, [ctc0], false, false));
        const [v447] = txn4.data;
        const v448 = txn4.value;
        const v453 = txn4.time;
        const v446 = txn4.from;
        const v449 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v449, {
          at: './index.rsh:212:19:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'A'
           });
        const v450 = stdlib.addressEq(v41, v446);
        stdlib.assert(v450, {
          at: './index.rsh:212:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'A'
           });
        const v456 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v447);
        const v457 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
        const v458 = v456 ? v457 : false;
        stdlib.assert(v458, {
          at: './index.rsh:94:12:application',
          fs: ['at ./index.rsh:214:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v462 = v67.xs;
        const v464 = v462[v447];
        const v465 = v67.os;
        const v467 = v465[v447];
        const v468 = stdlib.add(v464, v467);
        const v470 = stdlib.eq(v468, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v470, {
          at: './index.rsh:95:12:application',
          fs: ['at ./index.rsh:214:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v474 = v357 ? false : true;
        const v478 = stdlib.Array_set(v462, v447, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, 1));
        const v480 = v357 ? v478 : v462;
        const v484 = stdlib.Array_set(v465, v447, stdlib.checkedBigNumberify('./index.rsh:101:44:decimal', stdlib.UInt_max, 1));
        const v485 = v357 ? v465 : v484;
        const v487 = {
          os: v485,
          xs: v480,
          xs_turn: v474
           };
        const cv67 = v487;
        const cv1015 = v453;
        
        v67 = cv67;
        v1015 = cv1015;
        
        continue;
         } }
    const v488 = v67.xs;
    const v502 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
    const v503 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v502);
    const v506 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
    const v507 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v506);
    const v510 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
    const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v510);
    const v514 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
    const v515 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v514);
    const v518 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
    const v519 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v518);
    const v522 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
    const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v522);
    const v526 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
    const v527 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v526);
    const v530 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
    const v531 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v530);
    const v534 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
    const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v534);
    const v549 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v503);
    const v552 = stdlib.add(v549, v507);
    const v555 = stdlib.add(v552, v511);
    const v558 = stdlib.add(v555, v515);
    const v561 = stdlib.add(v558, v519);
    const v564 = stdlib.add(v561, v523);
    const v567 = stdlib.add(v564, v527);
    const v570 = stdlib.add(v567, v531);
    const v573 = stdlib.add(v570, v535);
    const v578 = stdlib.mul(v573, v31);
    const v579 = stdlib.div(v578, stdlib.checkedBigNumberify('./index.rsh:218:69:decimal', stdlib.UInt_max, 16));
    const v580 = v67.os;
    const v594 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
    const v595 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v594);
    const v598 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
    const v599 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v598);
    const v602 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
    const v603 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v602);
    const v606 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
    const v607 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v606);
    const v610 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
    const v611 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v610);
    const v614 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
    const v615 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v614);
    const v618 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
    const v619 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v618);
    const v622 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
    const v623 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v622);
    const v626 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
    const v627 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v626);
    const v641 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v595);
    const v644 = stdlib.add(v641, v599);
    const v647 = stdlib.add(v644, v603);
    const v650 = stdlib.add(v647, v607);
    const v653 = stdlib.add(v650, v611);
    const v656 = stdlib.add(v653, v615);
    const v659 = stdlib.add(v656, v619);
    const v662 = stdlib.add(v659, v623);
    const v665 = stdlib.add(v662, v627);
    const v670 = stdlib.mul(v665, v31);
    const v671 = stdlib.div(v670, stdlib.checkedBigNumberify('./index.rsh:219:69:decimal', stdlib.UInt_max, 16));
    const v672 = stdlib.sub(v31, v579);
    const v673 = stdlib.sub(v31, v671);
    const v674 = stdlib.add(v579, v671);
    const v681 = stdlib.add(v502, v506);
    const v683 = stdlib.add(v681, v510);
    const v684 = stdlib.eq(v683, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
    const v685 = v684 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
    const v688 = stdlib.add(v514, v518);
    const v690 = stdlib.add(v688, v522);
    const v691 = stdlib.eq(v690, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
    const v692 = v691 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
    const v693 = stdlib.add(v685, v692);
    const v696 = stdlib.add(v526, v530);
    const v698 = stdlib.add(v696, v534);
    const v699 = stdlib.eq(v698, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
    const v700 = v699 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
    const v701 = stdlib.add(v693, v700);
    const v704 = stdlib.add(v502, v514);
    const v706 = stdlib.add(v704, v526);
    const v707 = stdlib.eq(v706, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
    const v708 = v707 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
    const v709 = stdlib.add(v701, v708);
    const v712 = stdlib.add(v506, v518);
    const v714 = stdlib.add(v712, v530);
    const v715 = stdlib.eq(v714, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
    const v716 = v715 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
    const v717 = stdlib.add(v709, v716);
    const v720 = stdlib.add(v510, v522);
    const v722 = stdlib.add(v720, v534);
    const v723 = stdlib.eq(v722, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
    const v724 = v723 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
    const v725 = stdlib.add(v717, v724);
    const v728 = stdlib.add(v502, v518);
    const v730 = stdlib.add(v728, v534);
    const v731 = stdlib.eq(v730, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
    const v732 = v731 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
    const v733 = stdlib.add(v725, v732);
    const v736 = stdlib.add(v510, v518);
    const v738 = stdlib.add(v736, v526);
    const v739 = stdlib.eq(v738, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
    const v740 = v739 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
    const v741 = stdlib.add(v733, v740);
    const v743 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
    const v752 = stdlib.add(v594, v598);
    const v754 = stdlib.add(v752, v602);
    const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
    const v756 = v755 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
    const v759 = stdlib.add(v606, v610);
    const v761 = stdlib.add(v759, v614);
    const v762 = stdlib.eq(v761, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
    const v763 = v762 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
    const v764 = stdlib.add(v756, v763);
    const v767 = stdlib.add(v618, v622);
    const v769 = stdlib.add(v767, v626);
    const v770 = stdlib.eq(v769, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
    const v771 = v770 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
    const v772 = stdlib.add(v764, v771);
    const v775 = stdlib.add(v594, v606);
    const v777 = stdlib.add(v775, v618);
    const v778 = stdlib.eq(v777, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
    const v779 = v778 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
    const v780 = stdlib.add(v772, v779);
    const v783 = stdlib.add(v598, v610);
    const v785 = stdlib.add(v783, v622);
    const v786 = stdlib.eq(v785, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
    const v787 = v786 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
    const v788 = stdlib.add(v780, v787);
    const v791 = stdlib.add(v602, v614);
    const v793 = stdlib.add(v791, v626);
    const v794 = stdlib.eq(v793, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
    const v795 = v794 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
    const v796 = stdlib.add(v788, v795);
    const v799 = stdlib.add(v594, v610);
    const v801 = stdlib.add(v799, v626);
    const v802 = stdlib.eq(v801, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
    const v803 = v802 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
    const v804 = stdlib.add(v796, v803);
    const v807 = stdlib.add(v602, v610);
    const v809 = stdlib.add(v807, v618);
    const v810 = stdlib.eq(v809, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
    const v811 = v810 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
    const v812 = stdlib.add(v804, v811);
    const v814 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
    const v885 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
    const v956 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
    const v963 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, 2), v31);
    const v965 = stdlib.add(v674, v672);
    const v966 = stdlib.add(v674, v673);
    const v967 = stdlib.add(v671, v672);
    const v968 = stdlib.add(v579, v673);
    const v969 = [v672, v966];
    const v970 = [v967, v968];
    const v971 = v956 ? v969 : v970;
    const v972 = [v965, v673];
    const v973 = v885 ? v972 : v971;
    const v974 = [stdlib.checkedBigNumberify('./index.rsh:232:31:decimal', stdlib.UInt_max, 0), v963];
    const v975 = v814 ? v974 : v973;
    const v976 = [v963, stdlib.checkedBigNumberify('./index.rsh:231:44:decimal', stdlib.UInt_max, 0)];
    const v977 = v743 ? v976 : v975;
    const v978 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 0)];
    const v979 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 1)];
    ;
    ;
    stdlib.protect(ctc10, await interact.endsWith(v67), {
      at: './index.rsh:245:30:application',
      fs: ['at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:25:function exp)'],
      msg: 'endsWith',
      who: 'A'
       });
    return;
     }
  
  
   }
export async function B(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    os: ctc5,
    xs: ctc5,
    xs_turn: ctc6
     });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc7, ctc6, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc7, ctc6]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc4, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc4, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0]);
  
  
  const v24 = await ctc.creationTime();
  const txn1 = await (ctc.recv('B', 1, 2, [ctc0, ctc1], false, false));
  const [v31, v32] = txn1.data;
  const v33 = txn1.value;
  const v37 = txn1.time;
  const v30 = txn1.from;
  const v34 = stdlib.eq(v33, v31);
  stdlib.assert(v34, {
    at: './index.rsh:166:11:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'B'
     });
  stdlib.assert(true, {
    at: './index.rsh:166:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
     });
  const v36 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v33);
  stdlib.protect(ctc2, await interact.acceptWager(v31), {
    at: './index.rsh:171:33:application',
    fs: ['at ./index.rsh:170:15:application call to [unknown function] (defined at: ./index.rsh:170:19:function exp)'],
    msg: 'acceptWager',
    who: 'B'
     });
  const v40 = stdlib.protect(ctc0, await interact.random(), {
    at: './index.rsh:172:57:application',
    fs: ['at ./index.rsh:170:15:application call to [unknown function] (defined at: ./index.rsh:170:19:function exp)'],
    msg: 'random',
    who: 'B'
     });
  const txn2 = await (ctc.sendrecv('B', 2, 1, stdlib.checkedBigNumberify('./index.rsh:174:11:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0], [v30, v31, v32, v36, v37, v40], v31, [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 240), ((txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:174:11:dot', stdlib.UInt_max, 1), v30, v31, v32, v36, v37]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:174:11:dot', stdlib.UInt_max, 1), v30, v31, v32, v36]);
    const [v42] = txn2.data;
    const v43 = txn2.value;
    const v47 = txn2.time;
    const v41 = txn2.from;
    
    const v44 = stdlib.eq(v43, v31);
    stdlib.assert(v44, {
      at: './index.rsh:174:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'B'
       });
    stdlib.assert(true, {
      at: './index.rsh:174:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'B'
       });
    sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:175:17:after expr stmt semicolon', stdlib.UInt_max, 2), v30, v31, v32, v41, v42, v47]);
    sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:175:17:after expr stmt semicolon', stdlib.UInt_max, 2), v30, v31, v32, v41, v42]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv('B', 3, 0, [], false, false));
    const [] = txn3.data;
    const v994 = txn3.value;
    const v999 = txn3.time;
    const v993 = txn3.from;
    const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v995, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'pay amount correct',
      who: 'B'
       });
    const v996 = stdlib.addressEq(v30, v993);
    stdlib.assert(v996, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'sender correct',
      who: 'B'
       });
    const v998 = stdlib.add(v36, v994);
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:157:39:application',
      fs: ['at ./index.rsh:156:17:application call to [unknown function] (defined at: ./index.rsh:156:29:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./index.rsh:155:34:function exp)', 'at ./index.rsh:174:78:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'informTimeout',
      who: 'B'
       });
    return;
     }
  else {
    const [v42] = txn2.data;
    const v43 = txn2.value;
    const v47 = txn2.time;
    const v41 = txn2.from;
    const v44 = stdlib.eq(v43, v31);
    stdlib.assert(v44, {
      at: './index.rsh:174:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'B'
       });
    stdlib.assert(true, {
      at: './index.rsh:174:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'B'
       });
    const txn3 = await (ctc.recv('B', 4, 1, [ctc0], false, false));
    const [v51] = txn3.data;
    const v52 = txn3.value;
    const v57 = txn3.time;
    const v50 = txn3.from;
    const v53 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v53, {
      at: './index.rsh:181:11:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'B'
       });
    const v54 = stdlib.addressEq(v30, v50);
    stdlib.assert(v54, {
      at: './index.rsh:181:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'B'
       });
    const v58 = stdlib.digest(ctc3, [v51]);
    const v59 = stdlib.eq(v32, v58);
    stdlib.assert(v59, {
      at: './index.rsh:183:16:application',
      fs: [],
      msg: null,
      who: 'B'
       });
    const v60 = stdlib.mod(v51, stdlib.checkedBigNumberify('./index.rsh:184:40:decimal', stdlib.UInt_max, 2));
    const v61 = stdlib.mod(v42, stdlib.checkedBigNumberify('./index.rsh:184:58:decimal', stdlib.UInt_max, 2));
    const v62 = stdlib.add(v60, v61);
    const v63 = stdlib.mod(v62, stdlib.checkedBigNumberify('./index.rsh:184:64:decimal', stdlib.UInt_max, 2));
    const v64 = stdlib.eq(v63, stdlib.checkedBigNumberify('./index.rsh:184:69:decimal', stdlib.UInt_max, 0));
    const v68 = [stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:28:41:decimal', stdlib.UInt_max, 0)];
    const v70 = {
      os: v68,
      xs: v68,
      xs_turn: v64
       };
    let v67 = v70;
    let v1015 = v57;
    
    while ((() => {
      const v75 = v67.xs;
      const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
      const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
      const v80 = stdlib.add(v78, v79);
      const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
      const v82 = stdlib.add(v80, v81);
      const v83 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
      const v84 = v83 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
      const v85 = v75[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
      const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
      const v87 = stdlib.add(v85, v86);
      const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
      const v89 = stdlib.add(v87, v88);
      const v90 = stdlib.eq(v89, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
      const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
      const v92 = stdlib.add(v84, v91);
      const v93 = v75[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
      const v94 = v75[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
      const v95 = stdlib.add(v93, v94);
      const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
      const v97 = stdlib.add(v95, v96);
      const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
      const v99 = v98 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
      const v100 = stdlib.add(v92, v99);
      const v103 = stdlib.add(v78, v85);
      const v105 = stdlib.add(v103, v93);
      const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
      const v107 = v106 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
      const v108 = stdlib.add(v100, v107);
      const v111 = stdlib.add(v79, v86);
      const v113 = stdlib.add(v111, v94);
      const v114 = stdlib.eq(v113, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
      const v115 = v114 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
      const v116 = stdlib.add(v108, v115);
      const v119 = stdlib.add(v81, v88);
      const v121 = stdlib.add(v119, v96);
      const v122 = stdlib.eq(v121, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
      const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
      const v124 = stdlib.add(v116, v123);
      const v127 = stdlib.add(v78, v86);
      const v129 = stdlib.add(v127, v96);
      const v130 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
      const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
      const v132 = stdlib.add(v124, v131);
      const v135 = stdlib.add(v81, v86);
      const v137 = stdlib.add(v135, v93);
      const v138 = stdlib.eq(v137, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
      const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
      const v140 = stdlib.add(v132, v139);
      const v142 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
      const v144 = v67.os;
      const v147 = v144[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
      const v148 = v144[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
      const v149 = stdlib.add(v147, v148);
      const v150 = v144[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
      const v151 = stdlib.add(v149, v150);
      const v152 = stdlib.eq(v151, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
      const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
      const v154 = v144[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
      const v155 = v144[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
      const v156 = stdlib.add(v154, v155);
      const v157 = v144[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
      const v158 = stdlib.add(v156, v157);
      const v159 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
      const v160 = v159 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
      const v161 = stdlib.add(v153, v160);
      const v162 = v144[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
      const v163 = v144[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
      const v164 = stdlib.add(v162, v163);
      const v165 = v144[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
      const v166 = stdlib.add(v164, v165);
      const v167 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
      const v168 = v167 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
      const v169 = stdlib.add(v161, v168);
      const v172 = stdlib.add(v147, v154);
      const v174 = stdlib.add(v172, v162);
      const v175 = stdlib.eq(v174, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
      const v176 = v175 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
      const v177 = stdlib.add(v169, v176);
      const v180 = stdlib.add(v148, v155);
      const v182 = stdlib.add(v180, v163);
      const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
      const v184 = v183 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
      const v185 = stdlib.add(v177, v184);
      const v188 = stdlib.add(v150, v157);
      const v190 = stdlib.add(v188, v165);
      const v191 = stdlib.eq(v190, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
      const v192 = v191 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
      const v193 = stdlib.add(v185, v192);
      const v196 = stdlib.add(v147, v155);
      const v198 = stdlib.add(v196, v165);
      const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
      const v200 = v199 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
      const v201 = stdlib.add(v193, v200);
      const v204 = stdlib.add(v150, v155);
      const v206 = stdlib.add(v204, v162);
      const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
      const v208 = v207 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
      const v209 = stdlib.add(v201, v208);
      const v211 = stdlib.gt(v209, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
      const v213 = v142 ? true : v211;
      const v234 = stdlib.add(v78, v147);
      const v243 = stdlib.add(v79, v148);
      const v252 = stdlib.add(v81, v150);
      const v261 = stdlib.add(v85, v154);
      const v270 = stdlib.add(v86, v155);
      const v279 = stdlib.add(v88, v157);
      const v288 = stdlib.add(v93, v162);
      const v297 = stdlib.add(v94, v163);
      const v306 = stdlib.add(v96, v165);
      const v322 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v234);
      const v325 = stdlib.add(v322, v243);
      const v328 = stdlib.add(v325, v252);
      const v331 = stdlib.add(v328, v261);
      const v334 = stdlib.add(v331, v270);
      const v337 = stdlib.add(v334, v279);
      const v340 = stdlib.add(v337, v288);
      const v343 = stdlib.add(v340, v297);
      const v346 = stdlib.add(v343, v306);
      const v350 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:71:40:decimal', stdlib.UInt_max, 9));
      const v352 = v213 ? true : v350;
      const v355 = v352 ? false : true;
      
      return v355; })()) {
      const v357 = v67.xs_turn;
      if (v357) {
        const txn4 = await (ctc.recv('B', 7, 1, [ctc0], false, false));
        const [v382] = txn4.data;
        const v383 = txn4.value;
        const v388 = txn4.time;
        const v381 = txn4.from;
        const v384 = stdlib.eq(v383, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v384, {
          at: './index.rsh:201:19:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'B'
           });
        const v385 = stdlib.addressEq(v30, v381);
        stdlib.assert(v385, {
          at: './index.rsh:201:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'B'
           });
        const v391 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v382);
        const v392 = stdlib.lt(v382, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
        const v393 = v391 ? v392 : false;
        stdlib.assert(v393, {
          at: './index.rsh:94:12:application',
          fs: ['at ./index.rsh:203:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v397 = v67.xs;
        const v399 = v397[v382];
        const v400 = v67.os;
        const v402 = v400[v382];
        const v403 = stdlib.add(v399, v402);
        const v405 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v405, {
          at: './index.rsh:95:12:application',
          fs: ['at ./index.rsh:203:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v409 = v357 ? false : true;
        const v413 = stdlib.Array_set(v397, v382, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, 1));
        const v415 = v357 ? v413 : v397;
        const v419 = stdlib.Array_set(v400, v382, stdlib.checkedBigNumberify('./index.rsh:101:44:decimal', stdlib.UInt_max, 1));
        const v420 = v357 ? v400 : v419;
        const v422 = {
          os: v420,
          xs: v415,
          xs_turn: v409
           };
        const cv67 = v422;
        const cv1015 = v388;
        
        v67 = cv67;
        v1015 = cv1015;
        
        continue;
         }
      else {
        const v426 = [stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3)];
        const v427 = stdlib.protect(ctc0, await interact.getMove(v67, v426), {
          at: './index.rsh:85:34:application',
          fs: ['at ./index.rsh:210:47:application call to "getValidMove" (defined at: ./index.rsh:84:1:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:27:function exp)'],
          msg: 'getMove',
          who: 'B'
           });
        const v429 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v427);
        const v430 = stdlib.lt(v427, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
        const v431 = v429 ? v430 : false;
        stdlib.assert(v431, {
          at: './index.rsh:86:11:application',
          fs: ['at ./index.rsh:210:47:application call to "getValidMove" (defined at: ./index.rsh:84:1:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:27:function exp)'],
          msg: null,
          who: 'B'
           });
        const v435 = v67.xs;
        const v437 = v435[v427];
        const v438 = v67.os;
        const v440 = v438[v427];
        const v441 = stdlib.add(v437, v440);
        const v443 = stdlib.eq(v441, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v443, {
          at: './index.rsh:87:11:application',
          fs: ['at ./index.rsh:210:47:application call to "getValidMove" (defined at: ./index.rsh:84:1:function exp)', 'at ./index.rsh:209:23:application call to [unknown function] (defined at: ./index.rsh:209:27:function exp)'],
          msg: null,
          who: 'B'
           });
        const txn4 = await (ctc.sendrecv('B', 8, 1, stdlib.checkedBigNumberify('./index.rsh:212:19:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc7, ctc6, ctc0, ctc0], [v30, v31, v41, v67, v357, v1015, v427], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:212:19:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:212:19:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
          const [v447] = txn4.data;
          const v448 = txn4.value;
          const v453 = txn4.time;
          const v446 = txn4.from;
          
          const v449 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v449, {
            at: './index.rsh:212:19:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'B'
             });
          const v450 = stdlib.addressEq(v41, v446);
          stdlib.assert(v450, {
            at: './index.rsh:212:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'B'
             });
          const v456 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v447);
          const v457 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
          const v458 = v456 ? v457 : false;
          stdlib.assert(v458, {
            at: './index.rsh:94:12:application',
            fs: ['at ./index.rsh:214:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
            msg: null,
            who: 'B'
             });
          const v462 = v67.xs;
          const v464 = v462[v447];
          const v465 = v67.os;
          const v467 = v465[v447];
          const v468 = stdlib.add(v464, v467);
          const v470 = stdlib.eq(v468, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v470, {
            at: './index.rsh:95:12:application',
            fs: ['at ./index.rsh:214:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
            msg: null,
            who: 'B'
             });
          const v474 = v357 ? false : true;
          const v478 = stdlib.Array_set(v462, v447, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, 1));
          const v480 = v357 ? v478 : v462;
          const v484 = stdlib.Array_set(v465, v447, stdlib.checkedBigNumberify('./index.rsh:101:44:decimal', stdlib.UInt_max, 1));
          const v485 = v357 ? v465 : v484;
          const v487 = {
            os: v485,
            xs: v480,
            xs_turn: v474
             };
          const cv67 = v487;
          const cv1015 = v453;
          
          (() => {
            const v67 = cv67;
            const v1015 = cv1015;
            
            if ((() => {
              const v75 = v67.xs;
              const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
              const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
              const v80 = stdlib.add(v78, v79);
              const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
              const v82 = stdlib.add(v80, v81);
              const v83 = stdlib.eq(v82, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v84 = v83 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v85 = v75[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
              const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
              const v87 = stdlib.add(v85, v86);
              const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
              const v89 = stdlib.add(v87, v88);
              const v90 = stdlib.eq(v89, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v92 = stdlib.add(v84, v91);
              const v93 = v75[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
              const v94 = v75[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
              const v95 = stdlib.add(v93, v94);
              const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
              const v97 = stdlib.add(v95, v96);
              const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v99 = v98 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v100 = stdlib.add(v92, v99);
              const v103 = stdlib.add(v78, v85);
              const v105 = stdlib.add(v103, v93);
              const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v107 = v106 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v108 = stdlib.add(v100, v107);
              const v111 = stdlib.add(v79, v86);
              const v113 = stdlib.add(v111, v94);
              const v114 = stdlib.eq(v113, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v115 = v114 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v116 = stdlib.add(v108, v115);
              const v119 = stdlib.add(v81, v88);
              const v121 = stdlib.add(v119, v96);
              const v122 = stdlib.eq(v121, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v123 = v122 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v124 = stdlib.add(v116, v123);
              const v127 = stdlib.add(v78, v86);
              const v129 = stdlib.add(v127, v96);
              const v130 = stdlib.eq(v129, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v131 = v130 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v132 = stdlib.add(v124, v131);
              const v135 = stdlib.add(v81, v86);
              const v137 = stdlib.add(v135, v93);
              const v138 = stdlib.eq(v137, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v140 = stdlib.add(v132, v139);
              const v142 = stdlib.gt(v140, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v144 = v67.os;
              const v147 = v144[stdlib.checkedBigNumberify('./index.rsh:52:8:array ref', stdlib.UInt_max, 0)];
              const v148 = v144[stdlib.checkedBigNumberify('./index.rsh:52:15:array ref', stdlib.UInt_max, 1)];
              const v149 = stdlib.add(v147, v148);
              const v150 = v144[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 2)];
              const v151 = stdlib.add(v149, v150);
              const v152 = stdlib.eq(v151, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v154 = v144[stdlib.checkedBigNumberify('./index.rsh:53:9:array ref', stdlib.UInt_max, 3)];
              const v155 = v144[stdlib.checkedBigNumberify('./index.rsh:53:16:array ref', stdlib.UInt_max, 4)];
              const v156 = stdlib.add(v154, v155);
              const v157 = v144[stdlib.checkedBigNumberify('./index.rsh:53:23:array ref', stdlib.UInt_max, 5)];
              const v158 = stdlib.add(v156, v157);
              const v159 = stdlib.eq(v158, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v160 = v159 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v161 = stdlib.add(v153, v160);
              const v162 = v144[stdlib.checkedBigNumberify('./index.rsh:54:9:array ref', stdlib.UInt_max, 6)];
              const v163 = v144[stdlib.checkedBigNumberify('./index.rsh:54:16:array ref', stdlib.UInt_max, 7)];
              const v164 = stdlib.add(v162, v163);
              const v165 = v144[stdlib.checkedBigNumberify('./index.rsh:54:23:array ref', stdlib.UInt_max, 8)];
              const v166 = stdlib.add(v164, v165);
              const v167 = stdlib.eq(v166, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v168 = v167 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v169 = stdlib.add(v161, v168);
              const v172 = stdlib.add(v147, v154);
              const v174 = stdlib.add(v172, v162);
              const v175 = stdlib.eq(v174, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v176 = v175 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v177 = stdlib.add(v169, v176);
              const v180 = stdlib.add(v148, v155);
              const v182 = stdlib.add(v180, v163);
              const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v184 = v183 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v185 = stdlib.add(v177, v184);
              const v188 = stdlib.add(v150, v157);
              const v190 = stdlib.add(v188, v165);
              const v191 = stdlib.eq(v190, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v192 = v191 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v193 = stdlib.add(v185, v192);
              const v196 = stdlib.add(v147, v155);
              const v198 = stdlib.add(v196, v165);
              const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v200 = v199 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v201 = stdlib.add(v193, v200);
              const v204 = stdlib.add(v150, v155);
              const v206 = stdlib.add(v204, v162);
              const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v208 = v207 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v209 = stdlib.add(v201, v208);
              const v211 = stdlib.gt(v209, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v213 = v142 ? true : v211;
              const v234 = stdlib.add(v78, v147);
              const v243 = stdlib.add(v79, v148);
              const v252 = stdlib.add(v81, v150);
              const v261 = stdlib.add(v85, v154);
              const v270 = stdlib.add(v86, v155);
              const v279 = stdlib.add(v88, v157);
              const v288 = stdlib.add(v93, v162);
              const v297 = stdlib.add(v94, v163);
              const v306 = stdlib.add(v96, v165);
              const v322 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v234);
              const v325 = stdlib.add(v322, v243);
              const v328 = stdlib.add(v325, v252);
              const v331 = stdlib.add(v328, v261);
              const v334 = stdlib.add(v331, v270);
              const v337 = stdlib.add(v334, v279);
              const v340 = stdlib.add(v337, v288);
              const v343 = stdlib.add(v340, v297);
              const v346 = stdlib.add(v343, v306);
              const v350 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:71:40:decimal', stdlib.UInt_max, 9));
              const v352 = v213 ? true : v350;
              const v355 = v352 ? false : true;
              
              return v355; })()) {
              const v357 = v67.xs_turn;
              if (v357) {
                sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:196:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:196:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
                sim_r.isHalt = false;
                 }
              else {
                sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:207:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357, v1015]);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:207:25:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v357]);
                sim_r.isHalt = false;
                 } }
            else {
              const v488 = v67.xs;
              const v502 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
              const v503 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v502);
              const v506 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
              const v507 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v506);
              const v510 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
              const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v510);
              const v514 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
              const v515 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v514);
              const v518 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
              const v519 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v518);
              const v522 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
              const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v522);
              const v526 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
              const v527 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v526);
              const v530 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
              const v531 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v530);
              const v534 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
              const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v534);
              const v549 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v503);
              const v552 = stdlib.add(v549, v507);
              const v555 = stdlib.add(v552, v511);
              const v558 = stdlib.add(v555, v515);
              const v561 = stdlib.add(v558, v519);
              const v564 = stdlib.add(v561, v523);
              const v567 = stdlib.add(v564, v527);
              const v570 = stdlib.add(v567, v531);
              const v573 = stdlib.add(v570, v535);
              const v578 = stdlib.mul(v573, v31);
              const v579 = stdlib.div(v578, stdlib.checkedBigNumberify('./index.rsh:218:69:decimal', stdlib.UInt_max, 16));
              const v580 = v67.os;
              const v594 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
              const v595 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v594);
              const v598 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
              const v599 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v598);
              const v602 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
              const v603 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v602);
              const v606 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
              const v607 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v606);
              const v610 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
              const v611 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v610);
              const v614 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
              const v615 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v614);
              const v618 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
              const v619 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v618);
              const v622 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
              const v623 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v622);
              const v626 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
              const v627 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v626);
              const v641 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v595);
              const v644 = stdlib.add(v641, v599);
              const v647 = stdlib.add(v644, v603);
              const v650 = stdlib.add(v647, v607);
              const v653 = stdlib.add(v650, v611);
              const v656 = stdlib.add(v653, v615);
              const v659 = stdlib.add(v656, v619);
              const v662 = stdlib.add(v659, v623);
              const v665 = stdlib.add(v662, v627);
              const v670 = stdlib.mul(v665, v31);
              const v671 = stdlib.div(v670, stdlib.checkedBigNumberify('./index.rsh:219:69:decimal', stdlib.UInt_max, 16));
              const v672 = stdlib.sub(v31, v579);
              const v673 = stdlib.sub(v31, v671);
              const v674 = stdlib.add(v579, v671);
              const v681 = stdlib.add(v502, v506);
              const v683 = stdlib.add(v681, v510);
              const v684 = stdlib.eq(v683, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v685 = v684 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v688 = stdlib.add(v514, v518);
              const v690 = stdlib.add(v688, v522);
              const v691 = stdlib.eq(v690, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v692 = v691 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v693 = stdlib.add(v685, v692);
              const v696 = stdlib.add(v526, v530);
              const v698 = stdlib.add(v696, v534);
              const v699 = stdlib.eq(v698, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v700 = v699 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v701 = stdlib.add(v693, v700);
              const v704 = stdlib.add(v502, v514);
              const v706 = stdlib.add(v704, v526);
              const v707 = stdlib.eq(v706, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v708 = v707 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v709 = stdlib.add(v701, v708);
              const v712 = stdlib.add(v506, v518);
              const v714 = stdlib.add(v712, v530);
              const v715 = stdlib.eq(v714, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v716 = v715 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v717 = stdlib.add(v709, v716);
              const v720 = stdlib.add(v510, v522);
              const v722 = stdlib.add(v720, v534);
              const v723 = stdlib.eq(v722, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v724 = v723 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v725 = stdlib.add(v717, v724);
              const v728 = stdlib.add(v502, v518);
              const v730 = stdlib.add(v728, v534);
              const v731 = stdlib.eq(v730, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v732 = v731 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v733 = stdlib.add(v725, v732);
              const v736 = stdlib.add(v510, v518);
              const v738 = stdlib.add(v736, v526);
              const v739 = stdlib.eq(v738, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v740 = v739 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v741 = stdlib.add(v733, v740);
              const v743 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
              const v752 = stdlib.add(v594, v598);
              const v754 = stdlib.add(v752, v602);
              const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
              const v756 = v755 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
              const v759 = stdlib.add(v606, v610);
              const v761 = stdlib.add(v759, v614);
              const v762 = stdlib.eq(v761, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
              const v763 = v762 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
              const v764 = stdlib.add(v756, v763);
              const v767 = stdlib.add(v618, v622);
              const v769 = stdlib.add(v767, v626);
              const v770 = stdlib.eq(v769, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
              const v771 = v770 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
              const v772 = stdlib.add(v764, v771);
              const v775 = stdlib.add(v594, v606);
              const v777 = stdlib.add(v775, v618);
              const v778 = stdlib.eq(v777, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
              const v779 = v778 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
              const v780 = stdlib.add(v772, v779);
              const v783 = stdlib.add(v598, v610);
              const v785 = stdlib.add(v783, v622);
              const v786 = stdlib.eq(v785, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
              const v787 = v786 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
              const v788 = stdlib.add(v780, v787);
              const v791 = stdlib.add(v602, v614);
              const v793 = stdlib.add(v791, v626);
              const v794 = stdlib.eq(v793, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
              const v795 = v794 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
              const v796 = stdlib.add(v788, v795);
              const v799 = stdlib.add(v594, v610);
              const v801 = stdlib.add(v799, v626);
              const v802 = stdlib.eq(v801, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
              const v803 = v802 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
              const v804 = stdlib.add(v796, v803);
              const v807 = stdlib.add(v602, v610);
              const v809 = stdlib.add(v807, v618);
              const v810 = stdlib.eq(v809, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
              const v811 = v810 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
              const v812 = stdlib.add(v804, v811);
              const v814 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
              const v885 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v956 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
              const v963 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, 2), v31);
              const v965 = stdlib.add(v674, v672);
              const v966 = stdlib.add(v674, v673);
              const v967 = stdlib.add(v671, v672);
              const v968 = stdlib.add(v579, v673);
              const v969 = [v672, v966];
              const v970 = [v967, v968];
              const v971 = v956 ? v969 : v970;
              const v972 = [v965, v673];
              const v973 = v885 ? v972 : v971;
              const v974 = [stdlib.checkedBigNumberify('./index.rsh:232:31:decimal', stdlib.UInt_max, 0), v963];
              const v975 = v814 ? v974 : v973;
              const v976 = [v963, stdlib.checkedBigNumberify('./index.rsh:231:44:decimal', stdlib.UInt_max, 0)];
              const v977 = v743 ? v976 : v975;
              const v978 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 0)];
              const v979 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 1)];
              sim_r.txns.push({
                amt: v978,
                to: v30
                 });
              sim_r.txns.push({
                amt: v979,
                to: v41
                 });
              sim_r.nextSt = stdlib.digest(ctc10, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
              sim_r.isHalt = true;
               } })();
          return sim_r;
           })));
        const [v447] = txn4.data;
        const v448 = txn4.value;
        const v453 = txn4.time;
        const v446 = txn4.from;
        const v449 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v449, {
          at: './index.rsh:212:19:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'B'
           });
        const v450 = stdlib.addressEq(v41, v446);
        stdlib.assert(v450, {
          at: './index.rsh:212:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'B'
           });
        const v456 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:77:28:decimal', stdlib.UInt_max, 0), v447);
        const v457 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:77:48:decimal', stdlib.UInt_max, 9));
        const v458 = v456 ? v457 : false;
        stdlib.assert(v458, {
          at: './index.rsh:94:12:application',
          fs: ['at ./index.rsh:214:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v462 = v67.xs;
        const v464 = v462[v447];
        const v465 = v67.os;
        const v467 = v465[v447];
        const v468 = stdlib.add(v464, v467);
        const v470 = stdlib.eq(v468, stdlib.checkedBigNumberify('./index.rsh:81:58:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v470, {
          at: './index.rsh:95:12:application',
          fs: ['at ./index.rsh:214:34:application call to "applyMove" (defined at: ./index.rsh:93:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v474 = v357 ? false : true;
        const v478 = stdlib.Array_set(v462, v447, stdlib.checkedBigNumberify('./index.rsh:100:36:decimal', stdlib.UInt_max, 1));
        const v480 = v357 ? v478 : v462;
        const v484 = stdlib.Array_set(v465, v447, stdlib.checkedBigNumberify('./index.rsh:101:44:decimal', stdlib.UInt_max, 1));
        const v485 = v357 ? v465 : v484;
        const v487 = {
          os: v485,
          xs: v480,
          xs_turn: v474
           };
        const cv67 = v487;
        const cv1015 = v453;
        
        v67 = cv67;
        v1015 = cv1015;
        
        continue;
         } }
    const v488 = v67.xs;
    const v502 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
    const v503 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v502);
    const v506 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
    const v507 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v506);
    const v510 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
    const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v510);
    const v514 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
    const v515 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v514);
    const v518 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
    const v519 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v518);
    const v522 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
    const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v522);
    const v526 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
    const v527 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v526);
    const v530 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
    const v531 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v530);
    const v534 = v488[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
    const v535 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v534);
    const v549 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v503);
    const v552 = stdlib.add(v549, v507);
    const v555 = stdlib.add(v552, v511);
    const v558 = stdlib.add(v555, v515);
    const v561 = stdlib.add(v558, v519);
    const v564 = stdlib.add(v561, v523);
    const v567 = stdlib.add(v564, v527);
    const v570 = stdlib.add(v567, v531);
    const v573 = stdlib.add(v570, v535);
    const v578 = stdlib.mul(v573, v31);
    const v579 = stdlib.div(v578, stdlib.checkedBigNumberify('./index.rsh:218:69:decimal', stdlib.UInt_max, 16));
    const v580 = v67.os;
    const v594 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 0)];
    const v595 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:33:decimal', stdlib.UInt_max, 3), v594);
    const v598 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 1)];
    const v599 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:36:decimal', stdlib.UInt_max, 2), v598);
    const v602 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 2)];
    const v603 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:39:decimal', stdlib.UInt_max, 3), v602);
    const v606 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 3)];
    const v607 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, 2), v606);
    const v610 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 4)];
    const v611 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:45:decimal', stdlib.UInt_max, 4), v610);
    const v614 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 5)];
    const v615 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, 2), v614);
    const v618 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 6)];
    const v619 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, 3), v618);
    const v622 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 7)];
    const v623 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:54:decimal', stdlib.UInt_max, 2), v622);
    const v626 = v580[stdlib.checkedBigNumberify('./index.rsh:32:71:array ref', stdlib.UInt_max, 8)];
    const v627 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:30:57:decimal', stdlib.UInt_max, 3), v626);
    const v641 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v595);
    const v644 = stdlib.add(v641, v599);
    const v647 = stdlib.add(v644, v603);
    const v650 = stdlib.add(v647, v607);
    const v653 = stdlib.add(v650, v611);
    const v656 = stdlib.add(v653, v615);
    const v659 = stdlib.add(v656, v619);
    const v662 = stdlib.add(v659, v623);
    const v665 = stdlib.add(v662, v627);
    const v670 = stdlib.mul(v665, v31);
    const v671 = stdlib.div(v670, stdlib.checkedBigNumberify('./index.rsh:219:69:decimal', stdlib.UInt_max, 16));
    const v672 = stdlib.sub(v31, v579);
    const v673 = stdlib.sub(v31, v671);
    const v674 = stdlib.add(v579, v671);
    const v681 = stdlib.add(v502, v506);
    const v683 = stdlib.add(v681, v510);
    const v684 = stdlib.eq(v683, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
    const v685 = v684 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
    const v688 = stdlib.add(v514, v518);
    const v690 = stdlib.add(v688, v522);
    const v691 = stdlib.eq(v690, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
    const v692 = v691 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
    const v693 = stdlib.add(v685, v692);
    const v696 = stdlib.add(v526, v530);
    const v698 = stdlib.add(v696, v534);
    const v699 = stdlib.eq(v698, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
    const v700 = v699 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
    const v701 = stdlib.add(v693, v700);
    const v704 = stdlib.add(v502, v514);
    const v706 = stdlib.add(v704, v526);
    const v707 = stdlib.eq(v706, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
    const v708 = v707 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
    const v709 = stdlib.add(v701, v708);
    const v712 = stdlib.add(v506, v518);
    const v714 = stdlib.add(v712, v530);
    const v715 = stdlib.eq(v714, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
    const v716 = v715 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
    const v717 = stdlib.add(v709, v716);
    const v720 = stdlib.add(v510, v522);
    const v722 = stdlib.add(v720, v534);
    const v723 = stdlib.eq(v722, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
    const v724 = v723 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
    const v725 = stdlib.add(v717, v724);
    const v728 = stdlib.add(v502, v518);
    const v730 = stdlib.add(v728, v534);
    const v731 = stdlib.eq(v730, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
    const v732 = v731 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
    const v733 = stdlib.add(v725, v732);
    const v736 = stdlib.add(v510, v518);
    const v738 = stdlib.add(v736, v526);
    const v739 = stdlib.eq(v738, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
    const v740 = v739 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
    const v741 = stdlib.add(v733, v740);
    const v743 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
    const v752 = stdlib.add(v594, v598);
    const v754 = stdlib.add(v752, v602);
    const v755 = stdlib.eq(v754, stdlib.checkedBigNumberify('./index.rsh:52:29:decimal', stdlib.UInt_max, 3));
    const v756 = v755 ? stdlib.checkedBigNumberify('./index.rsh:52:34:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:52:36:decimal', stdlib.UInt_max, 0);
    const v759 = stdlib.add(v606, v610);
    const v761 = stdlib.add(v759, v614);
    const v762 = stdlib.eq(v761, stdlib.checkedBigNumberify('./index.rsh:53:30:decimal', stdlib.UInt_max, 3));
    const v763 = v762 ? stdlib.checkedBigNumberify('./index.rsh:53:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, 0);
    const v764 = stdlib.add(v756, v763);
    const v767 = stdlib.add(v618, v622);
    const v769 = stdlib.add(v767, v626);
    const v770 = stdlib.eq(v769, stdlib.checkedBigNumberify('./index.rsh:54:30:decimal', stdlib.UInt_max, 3));
    const v771 = v770 ? stdlib.checkedBigNumberify('./index.rsh:54:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:54:37:decimal', stdlib.UInt_max, 0);
    const v772 = stdlib.add(v764, v771);
    const v775 = stdlib.add(v594, v606);
    const v777 = stdlib.add(v775, v618);
    const v778 = stdlib.eq(v777, stdlib.checkedBigNumberify('./index.rsh:56:30:decimal', stdlib.UInt_max, 3));
    const v779 = v778 ? stdlib.checkedBigNumberify('./index.rsh:56:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:56:37:decimal', stdlib.UInt_max, 0);
    const v780 = stdlib.add(v772, v779);
    const v783 = stdlib.add(v598, v610);
    const v785 = stdlib.add(v783, v622);
    const v786 = stdlib.eq(v785, stdlib.checkedBigNumberify('./index.rsh:57:30:decimal', stdlib.UInt_max, 3));
    const v787 = v786 ? stdlib.checkedBigNumberify('./index.rsh:57:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 0);
    const v788 = stdlib.add(v780, v787);
    const v791 = stdlib.add(v602, v614);
    const v793 = stdlib.add(v791, v626);
    const v794 = stdlib.eq(v793, stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, 3));
    const v795 = v794 ? stdlib.checkedBigNumberify('./index.rsh:58:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:58:37:decimal', stdlib.UInt_max, 0);
    const v796 = stdlib.add(v788, v795);
    const v799 = stdlib.add(v594, v610);
    const v801 = stdlib.add(v799, v626);
    const v802 = stdlib.eq(v801, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, 3));
    const v803 = v802 ? stdlib.checkedBigNumberify('./index.rsh:60:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:60:37:decimal', stdlib.UInt_max, 0);
    const v804 = stdlib.add(v796, v803);
    const v807 = stdlib.add(v602, v610);
    const v809 = stdlib.add(v807, v618);
    const v810 = stdlib.eq(v809, stdlib.checkedBigNumberify('./index.rsh:61:30:decimal', stdlib.UInt_max, 3));
    const v811 = v810 ? stdlib.checkedBigNumberify('./index.rsh:61:35:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, 0);
    const v812 = stdlib.add(v804, v811);
    const v814 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:68:40:decimal', stdlib.UInt_max, 1));
    const v885 = stdlib.gt(v741, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
    const v956 = stdlib.gt(v812, stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 0));
    const v963 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:29:decimal', stdlib.UInt_max, 2), v31);
    const v965 = stdlib.add(v674, v672);
    const v966 = stdlib.add(v674, v673);
    const v967 = stdlib.add(v671, v672);
    const v968 = stdlib.add(v579, v673);
    const v969 = [v672, v966];
    const v970 = [v967, v968];
    const v971 = v956 ? v969 : v970;
    const v972 = [v965, v673];
    const v973 = v885 ? v972 : v971;
    const v974 = [stdlib.checkedBigNumberify('./index.rsh:232:31:decimal', stdlib.UInt_max, 0), v963];
    const v975 = v814 ? v974 : v973;
    const v976 = [v963, stdlib.checkedBigNumberify('./index.rsh:231:44:decimal', stdlib.UInt_max, 0)];
    const v977 = v743 ? v976 : v975;
    const v978 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 0)];
    const v979 = v977[stdlib.checkedBigNumberify('./index.rsh:230:15:array', stdlib.UInt_max, 1)];
    ;
    ;
    stdlib.protect(ctc2, await interact.endsWith(v67), {
      at: './index.rsh:245:30:application',
      fs: ['at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:25:function exp)'],
      msg: 'endsWith',
      who: 'B'
       });
    return;
     }
  
  
   }

const _ALGO = {
  appApproval: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 2
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 8
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 2
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 2
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn CloseRemainderTo
global ZeroAddress
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 121, 169, 161, 201, 0, 0, 307, 307],
  steps: [null, `#pragma version 2
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:166:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./index.rsh:166:11:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 1
int 1
itob
gtxn 3 Sender
concat
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:174:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:174:11:dot"
// "[]"
int 1
assert
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxn 3 Sender
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 240
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 2
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:66:7:dot"
// "[at ./index.rsh:174:78:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:66:7:dot"
// "[at ./index.rsh:174:78:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 8
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 240
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 2
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:181:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:181:11:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
// Nothing
// "./index.rsh:183:16:application"
// "[]"
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 10
keccak256
==
assert
int 0
itob
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
dup
dup
store 255
concat
gtxna 0 ApplicationArgs 10
btoi
int 2
%
gtxna 0 ApplicationArgs 9
btoi
int 2
%
+
int 2
%
int 0
==
itob // bool
substring 7 8
concat
dup
store 254
substring 72 144
dup
store 253
substring 0 8
btoi
store 252
load 253
substring 8 16
btoi
store 251
load 253
substring 16 24
btoi
store 250
load 253
substring 24 32
btoi
store 249
load 253
substring 32 40
btoi
store 248
load 253
substring 40 48
btoi
store 247
load 253
substring 48 56
btoi
store 246
load 253
substring 56 64
btoi
store 245
load 253
substring 64 72
btoi
store 244
load 252
load 251
+
load 250
+
int 3
==
int 1
int 0
ite
load 249
load 248
+
load 247
+
int 3
==
int 1
int 0
ite
+
load 246
load 245
+
load 244
+
int 3
==
int 1
int 0
ite
+
load 252
load 249
+
load 246
+
int 3
==
int 1
int 0
ite
+
load 251
load 248
+
load 245
+
int 3
==
int 1
int 0
ite
+
load 250
load 247
+
load 244
+
int 3
==
int 1
int 0
ite
+
load 252
load 248
+
load 244
+
int 3
==
int 1
int 0
ite
+
load 250
load 248
+
load 246
+
int 3
==
int 1
int 0
ite
+
dup
store 243
int 0
>
store 242
load 254
substring 0 72
dup
store 241
substring 0 8
btoi
store 240
load 241
substring 8 16
btoi
store 239
load 241
substring 16 24
btoi
store 238
load 241
substring 24 32
btoi
store 237
load 241
substring 32 40
btoi
store 236
load 241
substring 40 48
btoi
store 235
load 241
substring 48 56
btoi
store 234
load 241
substring 56 64
btoi
store 233
load 241
substring 64 72
btoi
store 232
load 240
load 239
+
load 238
+
int 3
==
int 1
int 0
ite
load 237
load 236
+
load 235
+
int 3
==
int 1
int 0
ite
+
load 234
load 233
+
load 232
+
int 3
==
int 1
int 0
ite
+
load 240
load 237
+
load 234
+
int 3
==
int 1
int 0
ite
+
load 239
load 236
+
load 233
+
int 3
==
int 1
int 0
ite
+
load 238
load 235
+
load 232
+
int 3
==
int 1
int 0
ite
+
load 240
load 236
+
load 232
+
int 3
==
int 1
int 0
ite
+
load 238
load 236
+
load 234
+
int 3
==
int 1
int 0
ite
+
dup
store 231
int 0
>
store 230
load 242
load 230
||
int 0
load 252
load 240
+
+
load 251
load 239
+
+
load 250
load 238
+
+
load 249
load 237
+
+
load 248
load 236
+
+
load 247
load 235
+
+
load 246
load 234
+
+
load 245
load 233
+
+
load 244
load 232
+
+
int 9
==
||
!
bz l0
load 254
substring 144 145
btoi
store 229
// compute state in HM_Set 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 8
concat
load 254
concat
load 229
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
l0:
int 0
int 3
load 252
*
+
int 2
load 251
*
+
int 3
load 250
*
+
int 2
load 249
*
+
int 4
load 248
*
+
int 2
load 247
*
+
int 3
load 246
*
+
int 2
load 245
*
+
int 3
load 244
*
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 229
int 0
int 3
load 240
*
+
int 2
load 239
*
+
int 3
load 238
*
+
int 2
load 237
*
+
int 4
load 236
*
+
int 2
load 235
*
+
int 3
load 234
*
+
int 2
load 233
*
+
int 3
load 232
*
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 228
gtxna 0 ApplicationArgs 6
btoi
load 229
-
store 227
gtxna 0 ApplicationArgs 6
btoi
load 228
-
store 226
load 229
load 228
+
store 225
int 2
gtxna 0 ApplicationArgs 6
btoi
*
store 224
load 243
int 1
>
load 224
itob
int 0
itob
concat
load 231
int 1
>
int 0
itob
load 224
itob
concat
load 242
load 225
load 227
+
itob
load 226
itob
concat
load 230
load 227
itob
load 225
load 226
+
itob
concat
load 228
load 227
+
itob
load 229
load 226
+
itob
concat
ite
ite
ite
ite
store 223
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 223
substring 0 8
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxna 0 ApplicationArgs 8
==
assert
gtxn 5 Amount
load 223
substring 8 16
btoi
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 2
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:201:19:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:201:19:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
// Nothing
// "./index.rsh:94:12:application"
// "[at ./index.rsh:203:34:application call to \"applyMove\" (defined at: ./index.rsh:93:1:function exp)]"
int 0
gtxna 0 ApplicationArgs 10
btoi
<=
gtxna 0 ApplicationArgs 10
btoi
int 9
<
&&
assert
gtxna 0 ApplicationArgs 8
substring 72 144
store 255
gtxna 0 ApplicationArgs 8
substring 0 72
store 254
// Nothing
// "./index.rsh:95:12:application"
// "[at ./index.rsh:203:34:application call to \"applyMove\" (defined at: ./index.rsh:93:1:function exp)]"
load 255
int 8
gtxna 0 ApplicationArgs 10
btoi
*
dup
int 8
+
substring3
btoi
load 254
int 8
gtxna 0 ApplicationArgs 10
btoi
*
dup
int 8
+
substring3
btoi
+
int 0
==
assert
gtxna 0 ApplicationArgs 9
btoi
load 254
load 254
int 0
int 8
gtxna 0 ApplicationArgs 10
btoi
*
substring3
int 1
itob
concat
load 254
int 8
dup
gtxna 0 ApplicationArgs 10
btoi
*
+
int 72
substring3
concat
ite
gtxna 0 ApplicationArgs 9
btoi
load 255
int 0
int 8
gtxna 0 ApplicationArgs 10
btoi
*
substring3
int 1
itob
concat
load 255
int 8
dup
gtxna 0 ApplicationArgs 10
btoi
*
+
int 72
substring3
concat
load 255
ite
concat
gtxna 0 ApplicationArgs 9
btoi
!
itob // bool
substring 7 8
concat
dup
store 253
substring 72 144
dup
store 252
substring 0 8
btoi
store 251
load 252
substring 8 16
btoi
store 250
load 252
substring 16 24
btoi
store 249
load 252
substring 24 32
btoi
store 248
load 252
substring 32 40
btoi
store 247
load 252
substring 40 48
btoi
store 246
load 252
substring 48 56
btoi
store 245
load 252
substring 56 64
btoi
store 244
load 252
substring 64 72
btoi
store 243
load 251
load 250
+
load 249
+
int 3
==
int 1
int 0
ite
load 248
load 247
+
load 246
+
int 3
==
int 1
int 0
ite
+
load 245
load 244
+
load 243
+
int 3
==
int 1
int 0
ite
+
load 251
load 248
+
load 245
+
int 3
==
int 1
int 0
ite
+
load 250
load 247
+
load 244
+
int 3
==
int 1
int 0
ite
+
load 249
load 246
+
load 243
+
int 3
==
int 1
int 0
ite
+
load 251
load 247
+
load 243
+
int 3
==
int 1
int 0
ite
+
load 249
load 247
+
load 245
+
int 3
==
int 1
int 0
ite
+
dup
store 242
int 0
>
store 241
load 253
substring 0 72
dup
store 240
substring 0 8
btoi
store 239
load 240
substring 8 16
btoi
store 238
load 240
substring 16 24
btoi
store 237
load 240
substring 24 32
btoi
store 236
load 240
substring 32 40
btoi
store 235
load 240
substring 40 48
btoi
store 234
load 240
substring 48 56
btoi
store 233
load 240
substring 56 64
btoi
store 232
load 240
substring 64 72
btoi
store 231
load 239
load 238
+
load 237
+
int 3
==
int 1
int 0
ite
load 236
load 235
+
load 234
+
int 3
==
int 1
int 0
ite
+
load 233
load 232
+
load 231
+
int 3
==
int 1
int 0
ite
+
load 239
load 236
+
load 233
+
int 3
==
int 1
int 0
ite
+
load 238
load 235
+
load 232
+
int 3
==
int 1
int 0
ite
+
load 237
load 234
+
load 231
+
int 3
==
int 1
int 0
ite
+
load 239
load 235
+
load 231
+
int 3
==
int 1
int 0
ite
+
load 237
load 235
+
load 233
+
int 3
==
int 1
int 0
ite
+
dup
store 230
int 0
>
store 229
load 241
load 229
||
int 0
load 251
load 239
+
+
load 250
load 238
+
+
load 249
load 237
+
+
load 248
load 236
+
+
load 247
load 235
+
+
load 246
load 234
+
+
load 245
load 233
+
+
load 244
load 232
+
+
load 243
load 231
+
+
int 9
==
||
!
bz l0
load 253
substring 144 145
btoi
store 228
// compute state in HM_Set 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
load 253
concat
load 228
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
l0:
int 0
int 3
load 251
*
+
int 2
load 250
*
+
int 3
load 249
*
+
int 2
load 248
*
+
int 4
load 247
*
+
int 2
load 246
*
+
int 3
load 245
*
+
int 2
load 244
*
+
int 3
load 243
*
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 228
int 0
int 3
load 239
*
+
int 2
load 238
*
+
int 3
load 237
*
+
int 2
load 236
*
+
int 4
load 235
*
+
int 2
load 234
*
+
int 3
load 233
*
+
int 2
load 232
*
+
int 3
load 231
*
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 227
gtxna 0 ApplicationArgs 6
btoi
load 228
-
store 226
gtxna 0 ApplicationArgs 6
btoi
load 227
-
store 225
load 228
load 227
+
store 224
int 2
gtxna 0 ApplicationArgs 6
btoi
*
store 223
load 242
int 1
>
load 223
itob
int 0
itob
concat
load 230
int 1
>
int 0
itob
load 223
itob
concat
load 241
load 224
load 226
+
itob
load 225
itob
concat
load 229
load 226
itob
load 224
load 225
+
itob
concat
load 227
load 226
+
itob
load 228
load 225
+
itob
concat
ite
ite
ite
ite
store 222
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 222
substring 0 8
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 5 Amount
load 222
substring 8 16
btoi
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 2
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:212:19:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:212:19:dot"
// "[]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
==
assert
// Nothing
// "./index.rsh:94:12:application"
// "[at ./index.rsh:214:34:application call to \"applyMove\" (defined at: ./index.rsh:93:1:function exp)]"
int 0
gtxna 0 ApplicationArgs 10
btoi
<=
gtxna 0 ApplicationArgs 10
btoi
int 9
<
&&
assert
gtxna 0 ApplicationArgs 8
substring 72 144
store 255
gtxna 0 ApplicationArgs 8
substring 0 72
store 254
// Nothing
// "./index.rsh:95:12:application"
// "[at ./index.rsh:214:34:application call to \"applyMove\" (defined at: ./index.rsh:93:1:function exp)]"
load 255
int 8
gtxna 0 ApplicationArgs 10
btoi
*
dup
int 8
+
substring3
btoi
load 254
int 8
gtxna 0 ApplicationArgs 10
btoi
*
dup
int 8
+
substring3
btoi
+
int 0
==
assert
gtxna 0 ApplicationArgs 9
btoi
load 254
load 254
int 0
int 8
gtxna 0 ApplicationArgs 10
btoi
*
substring3
int 1
itob
concat
load 254
int 8
dup
gtxna 0 ApplicationArgs 10
btoi
*
+
int 72
substring3
concat
ite
gtxna 0 ApplicationArgs 9
btoi
load 255
int 0
int 8
gtxna 0 ApplicationArgs 10
btoi
*
substring3
int 1
itob
concat
load 255
int 8
dup
gtxna 0 ApplicationArgs 10
btoi
*
+
int 72
substring3
concat
load 255
ite
concat
gtxna 0 ApplicationArgs 9
btoi
!
itob // bool
substring 7 8
concat
dup
store 253
substring 72 144
dup
store 252
substring 0 8
btoi
store 251
load 252
substring 8 16
btoi
store 250
load 252
substring 16 24
btoi
store 249
load 252
substring 24 32
btoi
store 248
load 252
substring 32 40
btoi
store 247
load 252
substring 40 48
btoi
store 246
load 252
substring 48 56
btoi
store 245
load 252
substring 56 64
btoi
store 244
load 252
substring 64 72
btoi
store 243
load 251
load 250
+
load 249
+
int 3
==
int 1
int 0
ite
load 248
load 247
+
load 246
+
int 3
==
int 1
int 0
ite
+
load 245
load 244
+
load 243
+
int 3
==
int 1
int 0
ite
+
load 251
load 248
+
load 245
+
int 3
==
int 1
int 0
ite
+
load 250
load 247
+
load 244
+
int 3
==
int 1
int 0
ite
+
load 249
load 246
+
load 243
+
int 3
==
int 1
int 0
ite
+
load 251
load 247
+
load 243
+
int 3
==
int 1
int 0
ite
+
load 249
load 247
+
load 245
+
int 3
==
int 1
int 0
ite
+
dup
store 242
int 0
>
store 241
load 253
substring 0 72
dup
store 240
substring 0 8
btoi
store 239
load 240
substring 8 16
btoi
store 238
load 240
substring 16 24
btoi
store 237
load 240
substring 24 32
btoi
store 236
load 240
substring 32 40
btoi
store 235
load 240
substring 40 48
btoi
store 234
load 240
substring 48 56
btoi
store 233
load 240
substring 56 64
btoi
store 232
load 240
substring 64 72
btoi
store 231
load 239
load 238
+
load 237
+
int 3
==
int 1
int 0
ite
load 236
load 235
+
load 234
+
int 3
==
int 1
int 0
ite
+
load 233
load 232
+
load 231
+
int 3
==
int 1
int 0
ite
+
load 239
load 236
+
load 233
+
int 3
==
int 1
int 0
ite
+
load 238
load 235
+
load 232
+
int 3
==
int 1
int 0
ite
+
load 237
load 234
+
load 231
+
int 3
==
int 1
int 0
ite
+
load 239
load 235
+
load 231
+
int 3
==
int 1
int 0
ite
+
load 237
load 235
+
load 233
+
int 3
==
int 1
int 0
ite
+
dup
store 230
int 0
>
store 229
load 241
load 229
||
int 0
load 251
load 239
+
+
load 250
load 238
+
+
load 249
load 237
+
+
load 248
load 236
+
+
load 247
load 235
+
+
load 246
load 234
+
+
load 245
load 233
+
+
load 244
load 232
+
+
load 243
load 231
+
+
int 9
==
||
!
bz l0
load 253
substring 144 145
btoi
store 228
// compute state in HM_Set 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
load 253
concat
load 228
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
l0:
int 0
int 3
load 251
*
+
int 2
load 250
*
+
int 3
load 249
*
+
int 2
load 248
*
+
int 4
load 247
*
+
int 2
load 246
*
+
int 3
load 245
*
+
int 2
load 244
*
+
int 3
load 243
*
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 228
int 0
int 3
load 239
*
+
int 2
load 238
*
+
int 3
load 237
*
+
int 2
load 236
*
+
int 4
load 235
*
+
int 2
load 234
*
+
int 3
load 233
*
+
int 2
load 232
*
+
int 3
load 231
*
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 227
gtxna 0 ApplicationArgs 6
btoi
load 228
-
store 226
gtxna 0 ApplicationArgs 6
btoi
load 227
-
store 225
load 228
load 227
+
store 224
int 2
gtxna 0 ApplicationArgs 6
btoi
*
store 223
load 242
int 1
>
load 223
itob
int 0
itob
concat
load 230
int 1
>
int 0
itob
load 223
itob
concat
load 241
load 224
load 226
+
itob
load 225
itob
concat
load 229
load 226
itob
load 224
load 225
+
itob
concat
load 227
load 226
+
itob
load 228
load 225
+
itob
concat
ite
ite
ite
ite
store 222
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 222
substring 0 8
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 5 Amount
load 222
substring 8 16
btoi
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v37",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v37",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[9]",
                    "name": "os",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "uint256[9]",
                    "name": "xs",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xs_turn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v357",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1015",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v382",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[9]",
                    "name": "os",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "uint256[9]",
                    "name": "xs",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xs_turn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v357",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1015",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v447",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v37",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v36",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v37",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct ReachContract.T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[9]",
                    "name": "os",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "uint256[9]",
                    "name": "xs",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xs_turn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v357",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1015",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v382",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v41",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[9]",
                    "name": "os",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "uint256[9]",
                    "name": "xs",
                    "type": "uint256[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xs_turn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v357",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v1015",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v447",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16200003662000081565b4381526200004362000081565b815181526040516200005d90600090839060200162000094565b60408051601f19818403018152919052805160209091012060005550620000a39050565b6040518060200160405280600081525090565b91825251602082015260400190565b61245f80620000b36000396000f3fe6080604052600436106100555760003560e01c806310f48adc1461005a5780636c57957c1461006f578063ab4cea6a14610082578063c17e1fd514610095578063cd3ddc78146100a8578063e201e251146100bb575b600080fd5b61006d610068366004611fd4565b6100ce565b005b61006d61007d366004611fe5565b6101c1565b61006d610090366004611fe5565b6102da565b61006d6100a3366004611fa7565b6103ee565b61006d6100b6366004611fb8565b6105ea565b61006d6100c9366004611fb8565b6108b4565b6040516100e29060009083906020016121f5565b6040516020818303038152906040528051906020012060001c6000541461010857600080fd5b610110611c4c565b3460208301351461012057600080fd5b61012b34600061236c565b81526040517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99061015d908490612188565b60405180910390a161016d611c5f565b338152602080840135818301526040808501358184015283516060840152436080840152516101a1916001918491016122b9565b60408051601f198184030181529190528051602090910120600055505050565b6040516101d59060019083906020016122a5565b6040516020818303038152906040528051906020012060001c600054146101fb57600080fd5b61020a60f0608083013561236c565b4310158015610217575060015b61022057600080fd5b341561022b57600080fd5b336102396020830183611f6c565b6001600160a01b03161461024c57600080fd5b6102596020820182611f6c565b6001600160a01b03166108fc61027334606085013561236c565b6040518115909202916000818181858888f1935050505015801561029b573d6000803e3d6000fd5b507f0eacc5172200577ccadf50aa265553cdae8531b07e7711fdd25288ccdefbc960816040516102cb91906121c5565b60405180910390a16000805533ff5b6040516102ee9060019083906020016122a5565b6040516020818303038152906040528051906020012060001c6000541461031457600080fd5b61032360f0608083013561236c565b431061032e57600080fd5b3460208201351461033e57600080fd5b7fb2f92fe6c142a534ba59abdd85463065d83c535c88ba2923027ccf2fd09af3108160405161036d91906121a9565b60405180910390a161037d611c97565b61038a6020830183611f6c565b6001600160a01b03168152602080830135818301526040808401358184015233606084015260a08085013560808501524390840152516103cf91600291849101612315565b60408051601f1981840301815291905280516020909101206000555050565b604051610402906002908390602001612301565b6040516020818303038152906040528051906020012060001c6000541461042857600080fd5b610430611cdf565b341561043b57600080fd5b336104496020840184611f6c565b6001600160a01b03161461045c57600080fd5b6040516104719060c0840135906020016121ec565b6040516020818303038152906040528051906020012060001c82600001604001351461049c57600080fd5b8051600090819052815160209081018290528251604001829052825160600182905282516080908101839052835160a001839052835160c001839052835160e001839052835161010001839052835182850180519190915284519051909201919091526002906105109082908601356123e9565b61051f600260c08701356123e9565b610529919061236c565b61053391906123e9565b60208301519114604091820152517f4c256beab9f62ead72e7c5f784f7089232cbe923b3e8364a100ce35fc8a3d6649061056e90849061214e565b60405180910390a161057e611d04565b61058b6020840184611f6c565b81516001600160a01b03909116905280516020808501359101526105b56080840160608501611f6c565b81516001600160a01b0390911660409091015260208083015181830180519190915251439101526105e581610b05565b505050565b6040516105fe906005908390602001612204565b6040516020818303038152906040528051906020012060001c6000541461062457600080fd5b61062c611d24565b341561063757600080fd5b336106486060840160408501611f6c565b6001600160a01b03161461065b57600080fd5b60096103008301351061066d57600080fd5b6000606083016103008401356009811061069757634e487b7160e01b600052603260045260246000fd5b60200201356101808401610300850135600981106106c557634e487b7160e01b600052603260045260246000fd5b60200201356106d4919061236c565b146106de57600080fd5b6106f06102e083016102c08401611f8d565b610732576040805161012081810190925261072d916060850190600990839083908082843760009201919091525050506103008401356001611284565b61075c565b60408051610120818101909252906060840190600990839083908082843760009201919091525050505b8151526107716102e083016102c08401611f8d565b6107a557604080516101208181019092529061018084019060099083908390808284376000920191909152506107df915050565b604080516101208181019092526107df91610180850190600990839083908082843760009201919091525050506103008401356001611284565b8151602001526107f76102e083016102c08401611f8d565b610802576001610805565b60005b8151901515604091820152517fe0ffc2f6df93371837393fc5517221ac114a902b01c3b5dd740273b02f4c5a839061083e90849061216a565b60405180910390a161084e611d04565b61085b6020840184611f6c565b81516001600160a01b03909116905280516020808501359101526108856060840160408501611f6c565b81516001600160a01b03909116604090910152815160208083018051929092529051439101526105e581610b05565b6040516108c8906005908390602001612204565b6040516020818303038152906040528051906020012060001c600054146108ee57600080fd5b6108f6611d24565b341561090157600080fd5b3361090f6020840184611f6c565b6001600160a01b03161461092257600080fd5b60096103008301351061093457600080fd5b6000606083016103008401356009811061095e57634e487b7160e01b600052603260045260246000fd5b602002013561018084016103008501356009811061098c57634e487b7160e01b600052603260045260246000fd5b602002013561099b919061236c565b146109a557600080fd5b6109b76102e083016102c08401611f8d565b6109f957604080516101208181019092526109f4916060850190600990839083908082843760009201919091525050506103008401356001611284565b610a23565b60408051610120818101909252906060840190600990839083908082843760009201919091525050505b815152610a386102e083016102c08401611f8d565b610a6c5760408051610120818101909252906101808401906009908390839080828437600092019190915250610aa6915050565b60408051610120818101909252610aa691610180850190600990839083908082843760009201919091525050506103008401356001611284565b815160200152610abe6102e083016102c08401611f8d565b610ac9576001610acc565b60005b8151901515604091820152517f2da36d4170f82231424dc0a9be6981f58fd68f3e205981757a3d81e9a599ffcd9061083e90849061216a565b610b0d611d37565b60208281015151015160c0810151608082015160409092015160009260039291610b37919061236c565b610b41919061236c565b14610b4d576000610b50565b60015b60208481015151015161010081015160808201519151600392610b729161236c565b610b7c919061236c565b14610b88576000610b8b565b60015b60208581015151015161010081015160a0820151604090920151600392610bb19161236c565b610bbb919061236c565b14610bc7576000610bca565b60015b60208681015151015160e0810151608082015160039260016020020151610bf1919061236c565b610bfb919061236c565b14610c07576000610c0a565b60015b60208781015151015160c081015160608201519151600392610c2b9161236c565b610c35919061236c565b14610c41576000610c44565b60015b60208881015151015161010081015160e082015160c090920151600392610c6a9161236c565b610c74919061236c565b14610c80576000610c83565b60015b60208981015151015160a08101516080820151606090920151600392610ca89161236c565b610cb2919061236c565b14610cbe576000610cc1565b60015b60208a81015151810151604081015191810151905160039291610ce39161236c565b610ced919061236c565b14610cf9576000610cfc565b60015b610d06919061236c565b610d10919061236c565b610d1a919061236c565b610d24919061236c565b610d2e919061236c565b610d38919061236c565b610d42919061236c565b11610f71576020820151515160c0810151608082015160409092015160009260039291610d6f919061236c565b610d79919061236c565b14610d85576000610d88565b60015b6020840151515161010081015160808201519151600392610da89161236c565b610db2919061236c565b14610dbe576000610dc1565b60015b6020850151515161010081015160a0820151604090920151600392610de59161236c565b610def919061236c565b14610dfb576000610dfe565b60015b602086810151515160e08101516080820151919092015160039291610e229161236c565b610e2c919061236c565b14610e38576000610e3b565b60015b6020870151515160c081015160608201519151600392610e5a9161236c565b610e64919061236c565b14610e70576000610e73565b60015b6020880151515161010081015160e082015160c090920151600392610e979161236c565b610ea1919061236c565b14610ead576000610eb0565b60015b6020890151515160a08101516080820151606090920151600392610ed39161236c565b610edd919061236c565b14610ee9576000610eec565b60015b60208a8101515151604081015191810151905160039291610f0c9161236c565b610f16919061236c565b14610f22576000610f25565b60015b610f2f919061236c565b610f39919061236c565b610f43919061236c565b610f4d919061236c565b610f57919061236c565b610f61919061236c565b610f6b919061236c565b11610f74565b60015b6110fd5760208281015151805161010001519101516009919060086020020151610f9e919061236c565b60208481015151805160e0015191015160076020020151610fbf919061236c565b60208581015151805160c0015191015160066020020151610fe0919061236c565b60208681015151805160a0015191015160056020020151611001919061236c565b6020878101515180516080015191015160046020020151611022919061236c565b6020888101515180516060015191015160036020020151611043919061236c565b6020898101515180516040015191015160026020020151611064919061236c565b60208a81015151805182015191015160016020020151611084919061236c565b60208b810151518051519101515161109c919061236c565b6110a790600061236c565b6110b1919061236c565b6110bb919061236c565b6110c5919061236c565b6110cf919061236c565b6110d9919061236c565b6110e3919061236c565b6110ed919061236c565b6110f7919061236c565b14611100565b60015b1515808252611110576001611113565b60005b156112345760208201515160400151156111ad5761112f611d49565b8251516001600160a01b0390811682528351602090810151818401528451604090810151909216828401528085018051516060850152805151830151151560808501525181015160a0840152905161118c91600591849101612219565b60408051601f1981840301815291905280516020909101206000555061122f565b6111b5611d49565b8251516001600160a01b0390811682528351602090810151818401528451604090810151909216828401528085018051516060850152805151830151151560808501525181015160a0840152905161121291600591849101612219565b60408051601f198184030181529190528051602090910120600055505b611280565b61123c611d97565b82515181516001600160a01b03918216905283516020908101518351820152845160409081015184519316920191909152830151518151606001526105e581611322565b5050565b61128c611db7565b60005b60098110156112f4578481600981106112b857634e487b7160e01b600052603260045260246000fd5b60200201518282600981106112dd57634e487b7160e01b600052603260045260246000fd5b6020020152806112ec816123ce565b91505061128f565b508181846009811061131657634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b61132a611dd6565b8151602080820151606090920151015161010001516010919061134e906003612398565b8451606001516020015160e00151611367906002612398565b8551606001516020015160c00151611380906003612398565b8651606001516020015160a00151611399906002612398565b87516060015160200151608001516113b2906004612398565b88516060908101516020015101516113cb906002612398565b89516060015160200151604001516113e4906003612398565b8a516060015160209081015101516113fd906002612398565b8b51606001516020015151611413906003612398565b61141e90600061236c565b611428919061236c565b611432919061236c565b61143c919061236c565b611446919061236c565b611450919061236c565b61145a919061236c565b611464919061236c565b61146e919061236c565b6114789190612398565b6114829190612384565b815281516020810151606090910151516101000151601091906114a6906003612398565b8451606001515160e001516114bc906002612398565b8551606001515160c001516114d2906003612398565b8651606001515160a001516114e8906002612398565b87516060015151608001516114fe906004612398565b8851606090810151510151611514906002612398565b895160600151516040015161152a906003612398565b8a51606001515160200151611540906002612398565b8b51606001515151611553906003612398565b61155e90600061236c565b611568919061236c565b611572919061236c565b61157c919061236c565b611586919061236c565b611590919061236c565b61159a919061236c565b6115a4919061236c565b6115ae919061236c565b6115b89190612398565b6115c29190612384565b60208083019190915281518351909101516115dd91906123b7565b60408201526020808201518351909101516115f891906123b7565b60608201526020810151815161160e919061236c565b6080828101919091528251606001516020015160c0810151918101516040909101516003929161163d9161236c565b611647919061236c565b14611653576000611656565b60015b82516060015160200151610100810151608082015191516003926116799161236c565b611683919061236c565b1461168f576000611692565b60015b8351606001516020015161010081015160a08201516040909201516003926116b99161236c565b6116c3919061236c565b146116cf5760006116d2565b60015b8451606001516020015160e08101516080820151600392600160200201516116fa919061236c565b611704919061236c565b14611710576000611713565b60015b85516060908101516020015160c0810151918101519051600392916117379161236c565b611741919061236c565b1461174d576000611750565b60015b8651606001516020015161010081015160e082015160c0909201516003926117779161236c565b611781919061236c565b1461178d576000611790565b60015b8751606001516020015160a081015160808201516003928360200201516117b7919061236c565b6117c1919061236c565b146117cd5760006117d0565b60015b8851606001516020908101516040810151918101519051600392916117f49161236c565b6117fe919061236c565b1461180a57600061180d565b60015b611817919061236c565b611821919061236c565b61182b919061236c565b611835919061236c565b61183f919061236c565b611849919061236c565b611853919061236c565b60a08201528151606001515160c0810151608082015160409092015160039261187b9161236c565b611885919061236c565b14611891576000611894565b60015b82516060015151610100810151608082015191516003926118b49161236c565b6118be919061236c565b146118ca5760006118cd565b60015b8351606001515161010081015160a08201516040909201516003926118f19161236c565b6118fb919061236c565b1461190757600061190a565b60015b8451606001515160e0810151608082015160209092015160039261192d9161236c565b611937919061236c565b14611943576000611946565b60015b85516060908101515160c0810151918101519051600392916119679161236c565b611971919061236c565b1461197d576000611980565b60015b8651606001515161010081015160e082015160c0909201516003926119a49161236c565b6119ae919061236c565b146119ba5760006119bd565b60015b87516060908101515160a081015160808201519190920151600392916119e29161236c565b6119ec919061236c565b146119f85760006119fb565b60015b88516060015151604081015160208201519151600392611a1a9161236c565b611a24919061236c565b14611a30576000611a33565b60015b611a3d919061236c565b611a47919061236c565b611a51919061236c565b611a5b919061236c565b611a65919061236c565b611a6f919061236c565b611a79919061236c565b60c0820152815160200151611a8f906002612398565b60e082015260408101516101008201515260608101516080820151611ab4919061236c565b816101000151602001818152505080604001518160200151611ad6919061236c565b6101208201515260608101518151611aee919061236c565b6101208201516020015260408101516080820151611b0c919061236c565b6101408201805191909152606082015190516020908101919091526101608201805160009081905260e084018051925184019290925290516101808401805191909152519091015260a0810151600110611bb35760018160c0015111611ba75760008160a0015111611b9b5760008160c0015111611b8f57806101200151611b96565b8061010001515b611ba2565b8061014001515b611bae565b8061016001515b611bba565b8061018001515b6101a0820181905282515190516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611bfd573d6000803e3d6000fd5b5081516040908101516101a08301516020015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611c44573d6000803e3d6000fd5b506000805533ff5b6040518060200160405280600081525090565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060400160405280611cf2611db7565b8152602001611cff611e63565b905290565b6040518060400160405280611d17611e83565b8152602001611cff611ea3565b6040518060200160405280611cff611e63565b60408051602081019091526000815290565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611d83611e63565b815260006020820181905260409091015290565b6040518060400160405280611daa611ec3565b8152600060209091015290565b6040518061012001604052806009906020820280368337509192915050565b604051806101c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611e22611efd565b8152602001611e2f611efd565b8152602001611e3c611efd565b8152602001611e49611efd565b8152602001611e56611efd565b8152602001611cff611efd565b6040518060600160405280611e76611db7565b8152602001611daa611db7565b604080516060810182526000808252602082018190529181019190915290565b6040518060400160405280611eb6611e63565b8152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611cff611e63565b604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114611f2e57600080fd5b919050565b80358015158114611f2e57600080fd5b60006103208284031215611f55578081fd5b50919050565b600060c08284031215611f55578081fd5b600060208284031215611f7d578081fd5b611f8682611f17565b9392505050565b600060208284031215611f9e578081fd5b611f8682611f33565b600060e08284031215611f55578081fd5b60006103208284031215611fca578081fd5b611f868383611f43565b600060608284031215611f55578081fd5b600060c08284031215611ff6578081fd5b611f868383611f5b565b8060005b6009811015612023578151845260209384019390910190600101612004565b50505050565b15159052565b6001600160a01b038061204183611f17565b168352602082013560208401528061205b60408401611f17565b1660408401525061012080606083016060850137610180808401600081528282850182375050506102a080830160008152612097828401611f33565b15159052506102c06120aa828201611f33565b1515908301526102e090810135910152565b6001600160a01b036120cd82611f17565b168252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b6001600160a01b038061210e83611f17565b16835260208201356020840152604082013560408401528061213260608401611f17565b166060840152506080818101359083015260a090810135910152565b60e0810161215c82846120fc565b60c092830135919092015290565b6103208101612179828461202f565b61030092830135919092015290565b81358152602080830135908201526040918201359181019190915260600190565b60c081016121b782846120bc565b60a092830135919092015290565b60c081016121d382846120bc565b6121df60a08401611f33565b151560a083015292915050565b90815260200190565b91825235602082015260400190565b8281526103208101611f86602083018461202f565b60006103208201905083825260018060a01b038084511660208401526020840151604084015280604085015116606084015250606083015161225f608084018251612000565b60208101516122726101a0850182612000565b506040015115156102c083015260808301516122926102e0840182612029565b5060a08301516103008301529392505050565b82815260c08101611f8660208301846120bc565b91825280516001600160a01b0316602080840191909152810151604080840191909152810151606080840191909152810151608080840191909152015160a082015260c00190565b82815260e08101611f8660208301846120fc565b600060e08201905083825260018060a01b03808451166020840152602084015160408401526040840151606084015280606085015116608084015250608083015160a083015260a083015160c08301529392505050565b6000821982111561237f5761237f6123fd565b500190565b60008261239357612393612413565b500490565b60008160001904831182151516156123b2576123b26123fd565b500290565b6000828210156123c9576123c96123fd565b500390565b60006000198214156123e2576123e26123fd565b5060010190565b6000826123f8576123f8612413565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea26469706673582212204a3290acd78f147db4aa40e587da7387268980a8fc3a2e6df733db827e3f7d5564736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

