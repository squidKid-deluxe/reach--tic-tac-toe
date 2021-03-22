// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function A(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc6 = stdlib.T_Object({
    os: ctc5,
    xs: ctc5,
    xsTurn: ctc4
     });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc4, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc6, ctc4]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v24 = await ctc.creationTime();
  const v27 = stdlib.protect(ctc0, await interact.getWager(), {
    at: './index.rsh:91:57:application',
    fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:17:function exp)'],
    msg: 'getWager',
    who: 'A'
     });
  const v28 = stdlib.protect(ctc0, await interact.random(), {
    at: './index.rsh:92:43:application',
    fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:17:function exp)'],
    msg: 'random',
    who: 'A'
     });
  const v29 = stdlib.digest(ctc1, [v28]);
  const txn1 = await (ctc.sendrecv('A', 1, 2, stdlib.checkedBigNumberify('./index.rsh:94:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc2], [v24, v27, v29], v27, [ctc0, ctc2], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:94:9:dot', stdlib.UInt_max, 0), v24]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:94:9:dot', stdlib.UInt_max, 0)]);
    const [v31, v32] = txn1.data;
    const v33 = txn1.value;
    const v37 = txn1.time;
    const v30 = txn1.from;
    
    const v34 = stdlib.eq(v33, v31);
    stdlib.assert(v34, {
      at: './index.rsh:94:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'A'
       });
    stdlib.assert(true, {
      at: './index.rsh:94:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
       });
    const v36 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v33);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:96:15:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v32, v36, v37]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:96:15:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v32, v36]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v31, v32] = txn1.data;
  const v33 = txn1.value;
  const v37 = txn1.time;
  const v30 = txn1.from;
  const v34 = stdlib.eq(v33, v31);
  stdlib.assert(v34, {
    at: './index.rsh:94:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'A'
     });
  stdlib.assert(true, {
    at: './index.rsh:94:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
     });
  const v36 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v33);
  const txn2 = await (ctc.recv('A', 2, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:78:18:decimal', stdlib.UInt_max, 240)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv('A', 3, 0, stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 4), [ctc3, ctc0, ctc2, ctc0, ctc0], [v30, v31, v32, v36, v37], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 1), v30, v31, v32, v36, v37]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 1), v30, v31, v32, v36]);
      const [] = txn3.data;
      const v758 = txn3.value;
      const v763 = txn3.time;
      const v757 = txn3.from;
      
      const v759 = stdlib.eq(v758, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v759, {
        at: 'reach standard library:66:7:dot',
        fs: ['at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
        msg: 'pay amount correct',
        who: 'A'
         });
      const v760 = stdlib.addressEq(v30, v757);
      stdlib.assert(v760, {
        at: 'reach standard library:66:7:dot',
        fs: ['at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
        msg: 'sender correct',
        who: 'A'
         });
      const v762 = stdlib.add(v36, v758);
      sim_r.txns.push({
        amt: v762,
        to: v30
         });
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn3.data;
    const v758 = txn3.value;
    const v763 = txn3.time;
    const v757 = txn3.from;
    const v759 = stdlib.eq(v758, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v759, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'pay amount correct',
      who: 'A'
       });
    const v760 = stdlib.addressEq(v30, v757);
    stdlib.assert(v760, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'sender correct',
      who: 'A'
       });
    const v762 = stdlib.add(v36, v758);
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:87:39:application',
      fs: ['at ./index.rsh:86:17:application call to [unknown function] (defined at: ./index.rsh:86:29:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./index.rsh:85:34:function exp)', 'at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
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
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'A'
       });
    stdlib.assert(true, {
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
       });
    const txn3 = await (ctc.sendrecv('A', 4, 1, stdlib.checkedBigNumberify('./index.rsh:107:9:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc2, ctc3, ctc0, ctc0, ctc0], [v30, v31, v32, v41, v42, v47, v28], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:107:9:dot', stdlib.UInt_max, 2), v30, v31, v32, v41, v42, v47]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:107:9:dot', stdlib.UInt_max, 2), v30, v31, v32, v41, v42]);
      const [v51] = txn3.data;
      const v52 = txn3.value;
      const v57 = txn3.time;
      const v50 = txn3.from;
      
      const v53 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v53, {
        at: './index.rsh:107:9:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'A'
         });
      const v54 = stdlib.addressEq(v30, v50);
      stdlib.assert(v54, {
        at: './index.rsh:107:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'A'
         });
      const v58 = stdlib.digest(ctc1, [v51]);
      const v59 = stdlib.eq(v32, v58);
      stdlib.assert(v59, {
        at: './index.rsh:109:14:application',
        fs: [],
        msg: null,
        who: 'A'
         });
      const v60 = stdlib.mod(v51, stdlib.checkedBigNumberify('./index.rsh:110:39:decimal', stdlib.UInt_max, 2));
      const v61 = stdlib.mod(v42, stdlib.checkedBigNumberify('./index.rsh:110:57:decimal', stdlib.UInt_max, 2));
      const v62 = stdlib.add(v60, v61);
      const v63 = stdlib.mod(v62, stdlib.checkedBigNumberify('./index.rsh:110:63:decimal', stdlib.UInt_max, 2));
      const v64 = stdlib.eq(v63, stdlib.checkedBigNumberify('./index.rsh:110:69:decimal', stdlib.UInt_max, 0));
      const v68 = [false, false, false, false, false, false, false, false, false];
      const v70 = {
        os: v68,
        xs: v68,
        xsTurn: v64
         };
      const v67 = v70;
      const v779 = v57;
      
      if ((() => {
        const v75 = v67.xs;
        const v77 = v75[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
        const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
        const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
        const v80 = v78 ? v79 : false;
        const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
        const v82 = v75[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
        const v83 = v81 ? v82 : false;
        const v84 = v80 ? true : v83;
        const v85 = v77 ? v84 : false;
        const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
        const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
        const v89 = v82 ? v88 : false;
        const v91 = v75[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
        const v92 = v79 ? v91 : false;
        const v93 = v89 ? true : v92;
        const v94 = v86 ? v93 : false;
        const v95 = v85 ? true : v94;
        const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
        const v99 = v77 ? v86 : false;
        const v102 = v79 ? v82 : false;
        const v103 = v99 ? true : v102;
        const v106 = v78 ? v88 : false;
        const v107 = v103 ? true : v106;
        const v110 = v81 ? v91 : false;
        const v111 = v107 ? true : v110;
        const v112 = v96 ? v111 : false;
        const v113 = v95 ? true : v112;
        const v115 = v67.os;
        const v117 = v115[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
        const v118 = v115[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
        const v119 = v115[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
        const v120 = v118 ? v119 : false;
        const v121 = v115[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
        const v122 = v115[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
        const v123 = v121 ? v122 : false;
        const v124 = v120 ? true : v123;
        const v125 = v117 ? v124 : false;
        const v126 = v115[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
        const v128 = v115[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
        const v129 = v122 ? v128 : false;
        const v131 = v115[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
        const v132 = v119 ? v131 : false;
        const v133 = v129 ? true : v132;
        const v134 = v126 ? v133 : false;
        const v135 = v125 ? true : v134;
        const v136 = v115[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
        const v139 = v117 ? v126 : false;
        const v142 = v119 ? v122 : false;
        const v143 = v139 ? true : v142;
        const v146 = v118 ? v128 : false;
        const v147 = v143 ? true : v146;
        const v150 = v121 ? v131 : false;
        const v151 = v147 ? true : v150;
        const v152 = v136 ? v151 : false;
        const v153 = v135 ? true : v152;
        const v155 = v113 ? true : v153;
        const v176 = v77 ? true : v117;
        const v185 = v78 ? true : v118;
        const v194 = v79 ? true : v119;
        const v203 = v81 ? true : v121;
        const v212 = v96 ? true : v136;
        const v221 = v91 ? true : v131;
        const v230 = v82 ? true : v122;
        const v239 = v88 ? true : v128;
        const v248 = v86 ? true : v126;
        const v273 = v176 ? v185 : false;
        const v278 = v273 ? v194 : false;
        const v283 = v278 ? v203 : false;
        const v288 = v283 ? v212 : false;
        const v293 = v288 ? v221 : false;
        const v298 = v293 ? v230 : false;
        const v303 = v298 ? v239 : false;
        const v308 = v303 ? v248 : false;
        const v314 = v155 ? true : v308;
        const v317 = v314 ? false : true;
        
        return v317; })()) {
        const v319 = v67.xsTurn;
        if (v319) {
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:116:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:116:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
          sim_r.isHalt = false;
           }
        else {
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:125:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:125:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
          sim_r.isHalt = false;
           } }
      else {
        const v458 = v67.xs;
        const v472 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
        const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v476 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
        const v477 = v476 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v480 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
        const v481 = v480 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v484 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
        const v485 = v484 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v488 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
        const v489 = v488 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v492 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
        const v493 = v492 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v496 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
        const v497 = v496 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v500 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
        const v501 = v500 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v504 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
        const v505 = v504 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v519 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v473);
        const v522 = stdlib.add(v519, v477);
        const v525 = stdlib.add(v522, v481);
        const v528 = stdlib.add(v525, v485);
        const v531 = stdlib.add(v528, v489);
        const v534 = stdlib.add(v531, v493);
        const v537 = stdlib.add(v534, v497);
        const v540 = stdlib.add(v537, v501);
        const v543 = stdlib.add(v540, v505);
        const v548 = stdlib.mul(v543, v31);
        const v549 = stdlib.div(v548, stdlib.checkedBigNumberify('./index.rsh:134:67:decimal', stdlib.UInt_max, 16));
        const v550 = v67.os;
        const v564 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
        const v565 = v564 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v568 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
        const v569 = v568 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v572 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
        const v573 = v572 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v576 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
        const v577 = v576 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v580 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
        const v581 = v580 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v584 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
        const v585 = v584 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v588 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
        const v589 = v588 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v592 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
        const v593 = v592 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v596 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
        const v597 = v596 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
        const v611 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v565);
        const v614 = stdlib.add(v611, v569);
        const v617 = stdlib.add(v614, v573);
        const v620 = stdlib.add(v617, v577);
        const v623 = stdlib.add(v620, v581);
        const v626 = stdlib.add(v623, v585);
        const v629 = stdlib.add(v626, v589);
        const v632 = stdlib.add(v629, v593);
        const v635 = stdlib.add(v632, v597);
        const v640 = stdlib.mul(v635, v31);
        const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:135:67:decimal', stdlib.UInt_max, 16));
        const v642 = stdlib.sub(v31, v549);
        const v643 = stdlib.sub(v31, v641);
        const v644 = stdlib.add(v549, v641);
        const v651 = v476 ? v480 : false;
        const v654 = v484 ? v496 : false;
        const v655 = v651 ? true : v654;
        const v656 = v472 ? v655 : false;
        const v660 = v496 ? v500 : false;
        const v663 = v480 ? v492 : false;
        const v664 = v660 ? true : v663;
        const v665 = v504 ? v664 : false;
        const v666 = v656 ? true : v665;
        const v670 = v472 ? v504 : false;
        const v673 = v480 ? v496 : false;
        const v674 = v670 ? true : v673;
        const v677 = v476 ? v500 : false;
        const v678 = v674 ? true : v677;
        const v681 = v484 ? v492 : false;
        const v682 = v678 ? true : v681;
        const v683 = v488 ? v682 : false;
        const v684 = v666 ? true : v683;
        const v693 = v568 ? v572 : false;
        const v696 = v576 ? v588 : false;
        const v697 = v693 ? true : v696;
        const v698 = v564 ? v697 : false;
        const v702 = v588 ? v592 : false;
        const v705 = v572 ? v584 : false;
        const v706 = v702 ? true : v705;
        const v707 = v596 ? v706 : false;
        const v708 = v698 ? true : v707;
        const v712 = v564 ? v596 : false;
        const v715 = v572 ? v588 : false;
        const v716 = v712 ? true : v715;
        const v719 = v568 ? v592 : false;
        const v720 = v716 ? true : v719;
        const v723 = v576 ? v584 : false;
        const v724 = v720 ? true : v723;
        const v725 = v580 ? v724 : false;
        const v726 = v708 ? true : v725;
        const v733 = stdlib.add(v644, v642);
        const v734 = stdlib.add(v644, v643);
        const v735 = stdlib.add(v641, v642);
        const v736 = stdlib.add(v549, v643);
        const v737 = [v642, v734];
        const v738 = [v735, v736];
        const v739 = v726 ? v737 : v738;
        const v740 = [v733, v643];
        const v741 = v684 ? v740 : v739;
        const v742 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 0)];
        const v743 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 1)];
        sim_r.txns.push({
          amt: v742,
          to: v30
           });
        sim_r.txns.push({
          amt: v743,
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
      at: './index.rsh:107:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'A'
       });
    const v54 = stdlib.addressEq(v30, v50);
    stdlib.assert(v54, {
      at: './index.rsh:107:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'A'
       });
    const v58 = stdlib.digest(ctc1, [v51]);
    const v59 = stdlib.eq(v32, v58);
    stdlib.assert(v59, {
      at: './index.rsh:109:14:application',
      fs: [],
      msg: null,
      who: 'A'
       });
    const v60 = stdlib.mod(v51, stdlib.checkedBigNumberify('./index.rsh:110:39:decimal', stdlib.UInt_max, 2));
    const v61 = stdlib.mod(v42, stdlib.checkedBigNumberify('./index.rsh:110:57:decimal', stdlib.UInt_max, 2));
    const v62 = stdlib.add(v60, v61);
    const v63 = stdlib.mod(v62, stdlib.checkedBigNumberify('./index.rsh:110:63:decimal', stdlib.UInt_max, 2));
    const v64 = stdlib.eq(v63, stdlib.checkedBigNumberify('./index.rsh:110:69:decimal', stdlib.UInt_max, 0));
    const v68 = [false, false, false, false, false, false, false, false, false];
    const v70 = {
      os: v68,
      xs: v68,
      xsTurn: v64
       };
    let v67 = v70;
    let v779 = v57;
    
    while ((() => {
      const v75 = v67.xs;
      const v77 = v75[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
      const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
      const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
      const v80 = v78 ? v79 : false;
      const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
      const v82 = v75[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
      const v83 = v81 ? v82 : false;
      const v84 = v80 ? true : v83;
      const v85 = v77 ? v84 : false;
      const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
      const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
      const v89 = v82 ? v88 : false;
      const v91 = v75[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
      const v92 = v79 ? v91 : false;
      const v93 = v89 ? true : v92;
      const v94 = v86 ? v93 : false;
      const v95 = v85 ? true : v94;
      const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
      const v99 = v77 ? v86 : false;
      const v102 = v79 ? v82 : false;
      const v103 = v99 ? true : v102;
      const v106 = v78 ? v88 : false;
      const v107 = v103 ? true : v106;
      const v110 = v81 ? v91 : false;
      const v111 = v107 ? true : v110;
      const v112 = v96 ? v111 : false;
      const v113 = v95 ? true : v112;
      const v115 = v67.os;
      const v117 = v115[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
      const v118 = v115[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
      const v119 = v115[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
      const v120 = v118 ? v119 : false;
      const v121 = v115[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
      const v122 = v115[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
      const v123 = v121 ? v122 : false;
      const v124 = v120 ? true : v123;
      const v125 = v117 ? v124 : false;
      const v126 = v115[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
      const v128 = v115[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
      const v129 = v122 ? v128 : false;
      const v131 = v115[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
      const v132 = v119 ? v131 : false;
      const v133 = v129 ? true : v132;
      const v134 = v126 ? v133 : false;
      const v135 = v125 ? true : v134;
      const v136 = v115[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
      const v139 = v117 ? v126 : false;
      const v142 = v119 ? v122 : false;
      const v143 = v139 ? true : v142;
      const v146 = v118 ? v128 : false;
      const v147 = v143 ? true : v146;
      const v150 = v121 ? v131 : false;
      const v151 = v147 ? true : v150;
      const v152 = v136 ? v151 : false;
      const v153 = v135 ? true : v152;
      const v155 = v113 ? true : v153;
      const v176 = v77 ? true : v117;
      const v185 = v78 ? true : v118;
      const v194 = v79 ? true : v119;
      const v203 = v81 ? true : v121;
      const v212 = v96 ? true : v136;
      const v221 = v91 ? true : v131;
      const v230 = v82 ? true : v122;
      const v239 = v88 ? true : v128;
      const v248 = v86 ? true : v126;
      const v273 = v176 ? v185 : false;
      const v278 = v273 ? v194 : false;
      const v283 = v278 ? v203 : false;
      const v288 = v283 ? v212 : false;
      const v293 = v288 ? v221 : false;
      const v298 = v293 ? v230 : false;
      const v303 = v298 ? v239 : false;
      const v308 = v303 ? v248 : false;
      const v314 = v155 ? true : v308;
      const v317 = v314 ? false : true;
      
      return v317; })()) {
      const v319 = v67.xsTurn;
      if (v319) {
        const v323 = [stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3)];
        const v324 = stdlib.protect(ctc0, await interact.getMove(v67, v323), {
          at: './index.rsh:51:30:application',
          fs: ['at ./index.rsh:119:39:application call to "getValidMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: 'getMove',
          who: 'A'
           });
        const v326 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v324);
        const v327 = stdlib.lt(v324, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
        const v328 = v326 ? v327 : false;
        stdlib.assert(v328, {
          at: './index.rsh:52:9:application',
          fs: ['at ./index.rsh:119:39:application call to "getValidMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: null,
          who: 'A'
           });
        const v332 = v67.xs;
        const v334 = v332[v324];
        const v335 = v67.os;
        const v337 = v335[v324];
        const v338 = v334 ? true : v337;
        const v341 = v338 ? false : true;
        stdlib.assert(v341, {
          at: './index.rsh:53:9:application',
          fs: ['at ./index.rsh:119:39:application call to "getValidMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: null,
          who: 'A'
           });
        const txn4 = await (ctc.sendrecv('A', 7, 1, stdlib.checkedBigNumberify('./index.rsh:120:13:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc3, ctc6, ctc4, ctc0, ctc0], [v30, v31, v41, v67, v319, v779, v324], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:120:13:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:120:13:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
          const [v346] = txn4.data;
          const v347 = txn4.value;
          const v352 = txn4.time;
          const v345 = txn4.from;
          
          const v348 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v348, {
            at: './index.rsh:120:13:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'A'
             });
          const v349 = stdlib.addressEq(v30, v345);
          stdlib.assert(v349, {
            at: './index.rsh:120:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'A'
             });
          const v355 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v346);
          const v356 = stdlib.lt(v346, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
          const v357 = v355 ? v356 : false;
          stdlib.assert(v357, {
            at: './index.rsh:57:10:application',
            fs: ['at ./index.rsh:122:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
            msg: null,
            who: 'A'
             });
          const v361 = v67.xs;
          const v363 = v361[v346];
          const v364 = v67.os;
          const v366 = v364[v346];
          const v367 = v363 ? true : v366;
          const v370 = v367 ? false : true;
          stdlib.assert(v370, {
            at: './index.rsh:58:10:application',
            fs: ['at ./index.rsh:122:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
            msg: null,
            who: 'A'
             });
          const v375 = v319 ? false : true;
          const v379 = stdlib.Array_set(v361, v346, true);
          const v381 = v319 ? v379 : v361;
          const v385 = stdlib.Array_set(v364, v346, true);
          const v386 = v319 ? v364 : v385;
          const v388 = {
            os: v386,
            xs: v381,
            xsTurn: v375
             };
          const cv67 = v388;
          const cv779 = v352;
          
          (() => {
            const v67 = cv67;
            const v779 = cv779;
            
            if ((() => {
              const v75 = v67.xs;
              const v77 = v75[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
              const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
              const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
              const v80 = v78 ? v79 : false;
              const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
              const v82 = v75[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
              const v83 = v81 ? v82 : false;
              const v84 = v80 ? true : v83;
              const v85 = v77 ? v84 : false;
              const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
              const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
              const v89 = v82 ? v88 : false;
              const v91 = v75[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
              const v92 = v79 ? v91 : false;
              const v93 = v89 ? true : v92;
              const v94 = v86 ? v93 : false;
              const v95 = v85 ? true : v94;
              const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
              const v99 = v77 ? v86 : false;
              const v102 = v79 ? v82 : false;
              const v103 = v99 ? true : v102;
              const v106 = v78 ? v88 : false;
              const v107 = v103 ? true : v106;
              const v110 = v81 ? v91 : false;
              const v111 = v107 ? true : v110;
              const v112 = v96 ? v111 : false;
              const v113 = v95 ? true : v112;
              const v115 = v67.os;
              const v117 = v115[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
              const v118 = v115[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
              const v119 = v115[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
              const v120 = v118 ? v119 : false;
              const v121 = v115[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
              const v122 = v115[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
              const v123 = v121 ? v122 : false;
              const v124 = v120 ? true : v123;
              const v125 = v117 ? v124 : false;
              const v126 = v115[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
              const v128 = v115[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
              const v129 = v122 ? v128 : false;
              const v131 = v115[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
              const v132 = v119 ? v131 : false;
              const v133 = v129 ? true : v132;
              const v134 = v126 ? v133 : false;
              const v135 = v125 ? true : v134;
              const v136 = v115[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
              const v139 = v117 ? v126 : false;
              const v142 = v119 ? v122 : false;
              const v143 = v139 ? true : v142;
              const v146 = v118 ? v128 : false;
              const v147 = v143 ? true : v146;
              const v150 = v121 ? v131 : false;
              const v151 = v147 ? true : v150;
              const v152 = v136 ? v151 : false;
              const v153 = v135 ? true : v152;
              const v155 = v113 ? true : v153;
              const v176 = v77 ? true : v117;
              const v185 = v78 ? true : v118;
              const v194 = v79 ? true : v119;
              const v203 = v81 ? true : v121;
              const v212 = v96 ? true : v136;
              const v221 = v91 ? true : v131;
              const v230 = v82 ? true : v122;
              const v239 = v88 ? true : v128;
              const v248 = v86 ? true : v126;
              const v273 = v176 ? v185 : false;
              const v278 = v273 ? v194 : false;
              const v283 = v278 ? v203 : false;
              const v288 = v283 ? v212 : false;
              const v293 = v288 ? v221 : false;
              const v298 = v293 ? v230 : false;
              const v303 = v298 ? v239 : false;
              const v308 = v303 ? v248 : false;
              const v314 = v155 ? true : v308;
              const v317 = v314 ? false : true;
              
              return v317; })()) {
              const v319 = v67.xsTurn;
              if (v319) {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:116:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:116:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
                sim_r.isHalt = false;
                 }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:125:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:125:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
                sim_r.isHalt = false;
                 } }
            else {
              const v458 = v67.xs;
              const v472 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
              const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v476 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
              const v477 = v476 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v480 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
              const v481 = v480 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v484 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
              const v485 = v484 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v488 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
              const v489 = v488 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v492 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
              const v493 = v492 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v496 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
              const v497 = v496 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v500 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
              const v501 = v500 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v504 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
              const v505 = v504 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v519 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v473);
              const v522 = stdlib.add(v519, v477);
              const v525 = stdlib.add(v522, v481);
              const v528 = stdlib.add(v525, v485);
              const v531 = stdlib.add(v528, v489);
              const v534 = stdlib.add(v531, v493);
              const v537 = stdlib.add(v534, v497);
              const v540 = stdlib.add(v537, v501);
              const v543 = stdlib.add(v540, v505);
              const v548 = stdlib.mul(v543, v31);
              const v549 = stdlib.div(v548, stdlib.checkedBigNumberify('./index.rsh:134:67:decimal', stdlib.UInt_max, 16));
              const v550 = v67.os;
              const v564 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
              const v565 = v564 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v568 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
              const v569 = v568 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v572 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
              const v573 = v572 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v576 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
              const v577 = v576 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v580 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
              const v581 = v580 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v584 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
              const v585 = v584 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v588 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
              const v589 = v588 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v592 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
              const v593 = v592 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v596 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
              const v597 = v596 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v611 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v565);
              const v614 = stdlib.add(v611, v569);
              const v617 = stdlib.add(v614, v573);
              const v620 = stdlib.add(v617, v577);
              const v623 = stdlib.add(v620, v581);
              const v626 = stdlib.add(v623, v585);
              const v629 = stdlib.add(v626, v589);
              const v632 = stdlib.add(v629, v593);
              const v635 = stdlib.add(v632, v597);
              const v640 = stdlib.mul(v635, v31);
              const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:135:67:decimal', stdlib.UInt_max, 16));
              const v642 = stdlib.sub(v31, v549);
              const v643 = stdlib.sub(v31, v641);
              const v644 = stdlib.add(v549, v641);
              const v651 = v476 ? v480 : false;
              const v654 = v484 ? v496 : false;
              const v655 = v651 ? true : v654;
              const v656 = v472 ? v655 : false;
              const v660 = v496 ? v500 : false;
              const v663 = v480 ? v492 : false;
              const v664 = v660 ? true : v663;
              const v665 = v504 ? v664 : false;
              const v666 = v656 ? true : v665;
              const v670 = v472 ? v504 : false;
              const v673 = v480 ? v496 : false;
              const v674 = v670 ? true : v673;
              const v677 = v476 ? v500 : false;
              const v678 = v674 ? true : v677;
              const v681 = v484 ? v492 : false;
              const v682 = v678 ? true : v681;
              const v683 = v488 ? v682 : false;
              const v684 = v666 ? true : v683;
              const v693 = v568 ? v572 : false;
              const v696 = v576 ? v588 : false;
              const v697 = v693 ? true : v696;
              const v698 = v564 ? v697 : false;
              const v702 = v588 ? v592 : false;
              const v705 = v572 ? v584 : false;
              const v706 = v702 ? true : v705;
              const v707 = v596 ? v706 : false;
              const v708 = v698 ? true : v707;
              const v712 = v564 ? v596 : false;
              const v715 = v572 ? v588 : false;
              const v716 = v712 ? true : v715;
              const v719 = v568 ? v592 : false;
              const v720 = v716 ? true : v719;
              const v723 = v576 ? v584 : false;
              const v724 = v720 ? true : v723;
              const v725 = v580 ? v724 : false;
              const v726 = v708 ? true : v725;
              const v733 = stdlib.add(v644, v642);
              const v734 = stdlib.add(v644, v643);
              const v735 = stdlib.add(v641, v642);
              const v736 = stdlib.add(v549, v643);
              const v737 = [v642, v734];
              const v738 = [v735, v736];
              const v739 = v726 ? v737 : v738;
              const v740 = [v733, v643];
              const v741 = v684 ? v740 : v739;
              const v742 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 0)];
              const v743 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 1)];
              sim_r.txns.push({
                amt: v742,
                to: v30
                 });
              sim_r.txns.push({
                amt: v743,
                to: v41
                 });
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.isHalt = true;
               } })();
          return sim_r;
           })));
        const [v346] = txn4.data;
        const v347 = txn4.value;
        const v352 = txn4.time;
        const v345 = txn4.from;
        const v348 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v348, {
          at: './index.rsh:120:13:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'A'
           });
        const v349 = stdlib.addressEq(v30, v345);
        stdlib.assert(v349, {
          at: './index.rsh:120:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'A'
           });
        const v355 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v346);
        const v356 = stdlib.lt(v346, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
        const v357 = v355 ? v356 : false;
        stdlib.assert(v357, {
          at: './index.rsh:57:10:application',
          fs: ['at ./index.rsh:122:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v361 = v67.xs;
        const v363 = v361[v346];
        const v364 = v67.os;
        const v366 = v364[v346];
        const v367 = v363 ? true : v366;
        const v370 = v367 ? false : true;
        stdlib.assert(v370, {
          at: './index.rsh:58:10:application',
          fs: ['at ./index.rsh:122:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v375 = v319 ? false : true;
        const v379 = stdlib.Array_set(v361, v346, true);
        const v381 = v319 ? v379 : v361;
        const v385 = stdlib.Array_set(v364, v346, true);
        const v386 = v319 ? v364 : v385;
        const v388 = {
          os: v386,
          xs: v381,
          xsTurn: v375
           };
        const cv67 = v388;
        const cv779 = v352;
        
        v67 = cv67;
        v779 = cv779;
        
        continue;
         }
      else {
        const txn4 = await (ctc.recv('A', 8, 1, [ctc0], false, false));
        const [v415] = txn4.data;
        const v416 = txn4.value;
        const v421 = txn4.time;
        const v414 = txn4.from;
        const v417 = stdlib.eq(v416, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v417, {
          at: './index.rsh:129:13:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'A'
           });
        const v418 = stdlib.addressEq(v41, v414);
        stdlib.assert(v418, {
          at: './index.rsh:129:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'A'
           });
        const v424 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v415);
        const v425 = stdlib.lt(v415, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
        const v426 = v424 ? v425 : false;
        stdlib.assert(v426, {
          at: './index.rsh:57:10:application',
          fs: ['at ./index.rsh:131:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v430 = v67.xs;
        const v432 = v430[v415];
        const v433 = v67.os;
        const v435 = v433[v415];
        const v436 = v432 ? true : v435;
        const v439 = v436 ? false : true;
        stdlib.assert(v439, {
          at: './index.rsh:58:10:application',
          fs: ['at ./index.rsh:131:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'A'
           });
        const v444 = v319 ? false : true;
        const v448 = stdlib.Array_set(v430, v415, true);
        const v450 = v319 ? v448 : v430;
        const v454 = stdlib.Array_set(v433, v415, true);
        const v455 = v319 ? v433 : v454;
        const v457 = {
          os: v455,
          xs: v450,
          xsTurn: v444
           };
        const cv67 = v457;
        const cv779 = v421;
        
        v67 = cv67;
        v779 = cv779;
        
        continue;
         } }
    const v458 = v67.xs;
    const v472 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
    const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v476 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
    const v477 = v476 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v480 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
    const v481 = v480 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v484 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
    const v485 = v484 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v488 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
    const v489 = v488 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v492 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
    const v493 = v492 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v496 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
    const v497 = v496 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v500 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
    const v501 = v500 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v504 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
    const v505 = v504 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v519 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v473);
    const v522 = stdlib.add(v519, v477);
    const v525 = stdlib.add(v522, v481);
    const v528 = stdlib.add(v525, v485);
    const v531 = stdlib.add(v528, v489);
    const v534 = stdlib.add(v531, v493);
    const v537 = stdlib.add(v534, v497);
    const v540 = stdlib.add(v537, v501);
    const v543 = stdlib.add(v540, v505);
    const v548 = stdlib.mul(v543, v31);
    const v549 = stdlib.div(v548, stdlib.checkedBigNumberify('./index.rsh:134:67:decimal', stdlib.UInt_max, 16));
    const v550 = v67.os;
    const v564 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
    const v565 = v564 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v568 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
    const v569 = v568 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v572 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
    const v573 = v572 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v576 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
    const v577 = v576 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v580 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
    const v581 = v580 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v584 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
    const v585 = v584 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v588 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
    const v589 = v588 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v592 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
    const v593 = v592 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v596 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
    const v597 = v596 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v611 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v565);
    const v614 = stdlib.add(v611, v569);
    const v617 = stdlib.add(v614, v573);
    const v620 = stdlib.add(v617, v577);
    const v623 = stdlib.add(v620, v581);
    const v626 = stdlib.add(v623, v585);
    const v629 = stdlib.add(v626, v589);
    const v632 = stdlib.add(v629, v593);
    const v635 = stdlib.add(v632, v597);
    const v640 = stdlib.mul(v635, v31);
    const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:135:67:decimal', stdlib.UInt_max, 16));
    const v642 = stdlib.sub(v31, v549);
    const v643 = stdlib.sub(v31, v641);
    const v644 = stdlib.add(v549, v641);
    const v651 = v476 ? v480 : false;
    const v654 = v484 ? v496 : false;
    const v655 = v651 ? true : v654;
    const v656 = v472 ? v655 : false;
    const v660 = v496 ? v500 : false;
    const v663 = v480 ? v492 : false;
    const v664 = v660 ? true : v663;
    const v665 = v504 ? v664 : false;
    const v666 = v656 ? true : v665;
    const v670 = v472 ? v504 : false;
    const v673 = v480 ? v496 : false;
    const v674 = v670 ? true : v673;
    const v677 = v476 ? v500 : false;
    const v678 = v674 ? true : v677;
    const v681 = v484 ? v492 : false;
    const v682 = v678 ? true : v681;
    const v683 = v488 ? v682 : false;
    const v684 = v666 ? true : v683;
    const v693 = v568 ? v572 : false;
    const v696 = v576 ? v588 : false;
    const v697 = v693 ? true : v696;
    const v698 = v564 ? v697 : false;
    const v702 = v588 ? v592 : false;
    const v705 = v572 ? v584 : false;
    const v706 = v702 ? true : v705;
    const v707 = v596 ? v706 : false;
    const v708 = v698 ? true : v707;
    const v712 = v564 ? v596 : false;
    const v715 = v572 ? v588 : false;
    const v716 = v712 ? true : v715;
    const v719 = v568 ? v592 : false;
    const v720 = v716 ? true : v719;
    const v723 = v576 ? v584 : false;
    const v724 = v720 ? true : v723;
    const v725 = v580 ? v724 : false;
    const v726 = v708 ? true : v725;
    const v733 = stdlib.add(v644, v642);
    const v734 = stdlib.add(v644, v643);
    const v735 = stdlib.add(v641, v642);
    const v736 = stdlib.add(v549, v643);
    const v737 = [v642, v734];
    const v738 = [v735, v736];
    const v739 = v726 ? v737 : v738;
    const v740 = [v733, v643];
    const v741 = v684 ? v740 : v739;
    const v742 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 0)];
    const v743 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 1)];
    ;
    ;
    stdlib.protect(ctc10, await interact.endsWith(v67), {
      at: './index.rsh:154:26:application',
      fs: ['at ./index.rsh:153:11:application call to [unknown function] (defined at: ./index.rsh:153:23:function exp)'],
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc7 = stdlib.T_Object({
    os: ctc6,
    xs: ctc6,
    xsTurn: ctc5
     });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc7, ctc5, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc7, ctc5]);
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
    at: './index.rsh:94:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'B'
     });
  stdlib.assert(true, {
    at: './index.rsh:94:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'B'
     });
  const v36 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v33);
  stdlib.protect(ctc2, await interact.acceptWager(v31), {
    at: './index.rsh:99:29:application',
    fs: ['at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:17:function exp)'],
    msg: 'acceptWager',
    who: 'B'
     });
  const v40 = stdlib.protect(ctc0, await interact.random(), {
    at: './index.rsh:100:53:application',
    fs: ['at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:17:function exp)'],
    msg: 'random',
    who: 'B'
     });
  const txn2 = await (ctc.sendrecv('B', 2, 1, stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0], [v30, v31, v32, v36, v37, v40], v31, [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:78:18:decimal', stdlib.UInt_max, 240), ((txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 1), v30, v31, v32, v36, v37]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 1), v30, v31, v32, v36]);
    const [v42] = txn2.data;
    const v43 = txn2.value;
    const v47 = txn2.time;
    const v41 = txn2.from;
    
    const v44 = stdlib.eq(v43, v31);
    stdlib.assert(v44, {
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'B'
       });
    stdlib.assert(true, {
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'B'
       });
    sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:15:after expr stmt semicolon', stdlib.UInt_max, 2), v30, v31, v32, v41, v42, v47]);
    sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:103:15:after expr stmt semicolon', stdlib.UInt_max, 2), v30, v31, v32, v41, v42]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv('B', 3, 0, [], false, false));
    const [] = txn3.data;
    const v758 = txn3.value;
    const v763 = txn3.time;
    const v757 = txn3.from;
    const v759 = stdlib.eq(v758, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v759, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'pay amount correct',
      who: 'B'
       });
    const v760 = stdlib.addressEq(v30, v757);
    stdlib.assert(v760, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'sender correct',
      who: 'B'
       });
    const v762 = stdlib.add(v36, v758);
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:87:39:application',
      fs: ['at ./index.rsh:86:17:application call to [unknown function] (defined at: ./index.rsh:86:29:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./index.rsh:85:34:function exp)', 'at ./index.rsh:102:58:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
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
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'B'
       });
    stdlib.assert(true, {
      at: './index.rsh:101:9:dot',
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
      at: './index.rsh:107:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'B'
       });
    const v54 = stdlib.addressEq(v30, v50);
    stdlib.assert(v54, {
      at: './index.rsh:107:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'B'
       });
    const v58 = stdlib.digest(ctc3, [v51]);
    const v59 = stdlib.eq(v32, v58);
    stdlib.assert(v59, {
      at: './index.rsh:109:14:application',
      fs: [],
      msg: null,
      who: 'B'
       });
    const v60 = stdlib.mod(v51, stdlib.checkedBigNumberify('./index.rsh:110:39:decimal', stdlib.UInt_max, 2));
    const v61 = stdlib.mod(v42, stdlib.checkedBigNumberify('./index.rsh:110:57:decimal', stdlib.UInt_max, 2));
    const v62 = stdlib.add(v60, v61);
    const v63 = stdlib.mod(v62, stdlib.checkedBigNumberify('./index.rsh:110:63:decimal', stdlib.UInt_max, 2));
    const v64 = stdlib.eq(v63, stdlib.checkedBigNumberify('./index.rsh:110:69:decimal', stdlib.UInt_max, 0));
    const v68 = [false, false, false, false, false, false, false, false, false];
    const v70 = {
      os: v68,
      xs: v68,
      xsTurn: v64
       };
    let v67 = v70;
    let v779 = v57;
    
    while ((() => {
      const v75 = v67.xs;
      const v77 = v75[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
      const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
      const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
      const v80 = v78 ? v79 : false;
      const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
      const v82 = v75[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
      const v83 = v81 ? v82 : false;
      const v84 = v80 ? true : v83;
      const v85 = v77 ? v84 : false;
      const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
      const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
      const v89 = v82 ? v88 : false;
      const v91 = v75[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
      const v92 = v79 ? v91 : false;
      const v93 = v89 ? true : v92;
      const v94 = v86 ? v93 : false;
      const v95 = v85 ? true : v94;
      const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
      const v99 = v77 ? v86 : false;
      const v102 = v79 ? v82 : false;
      const v103 = v99 ? true : v102;
      const v106 = v78 ? v88 : false;
      const v107 = v103 ? true : v106;
      const v110 = v81 ? v91 : false;
      const v111 = v107 ? true : v110;
      const v112 = v96 ? v111 : false;
      const v113 = v95 ? true : v112;
      const v115 = v67.os;
      const v117 = v115[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
      const v118 = v115[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
      const v119 = v115[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
      const v120 = v118 ? v119 : false;
      const v121 = v115[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
      const v122 = v115[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
      const v123 = v121 ? v122 : false;
      const v124 = v120 ? true : v123;
      const v125 = v117 ? v124 : false;
      const v126 = v115[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
      const v128 = v115[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
      const v129 = v122 ? v128 : false;
      const v131 = v115[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
      const v132 = v119 ? v131 : false;
      const v133 = v129 ? true : v132;
      const v134 = v126 ? v133 : false;
      const v135 = v125 ? true : v134;
      const v136 = v115[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
      const v139 = v117 ? v126 : false;
      const v142 = v119 ? v122 : false;
      const v143 = v139 ? true : v142;
      const v146 = v118 ? v128 : false;
      const v147 = v143 ? true : v146;
      const v150 = v121 ? v131 : false;
      const v151 = v147 ? true : v150;
      const v152 = v136 ? v151 : false;
      const v153 = v135 ? true : v152;
      const v155 = v113 ? true : v153;
      const v176 = v77 ? true : v117;
      const v185 = v78 ? true : v118;
      const v194 = v79 ? true : v119;
      const v203 = v81 ? true : v121;
      const v212 = v96 ? true : v136;
      const v221 = v91 ? true : v131;
      const v230 = v82 ? true : v122;
      const v239 = v88 ? true : v128;
      const v248 = v86 ? true : v126;
      const v273 = v176 ? v185 : false;
      const v278 = v273 ? v194 : false;
      const v283 = v278 ? v203 : false;
      const v288 = v283 ? v212 : false;
      const v293 = v288 ? v221 : false;
      const v298 = v293 ? v230 : false;
      const v303 = v298 ? v239 : false;
      const v308 = v303 ? v248 : false;
      const v314 = v155 ? true : v308;
      const v317 = v314 ? false : true;
      
      return v317; })()) {
      const v319 = v67.xsTurn;
      if (v319) {
        const txn4 = await (ctc.recv('B', 7, 1, [ctc0], false, false));
        const [v346] = txn4.data;
        const v347 = txn4.value;
        const v352 = txn4.time;
        const v345 = txn4.from;
        const v348 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v348, {
          at: './index.rsh:120:13:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'B'
           });
        const v349 = stdlib.addressEq(v30, v345);
        stdlib.assert(v349, {
          at: './index.rsh:120:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'B'
           });
        const v355 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v346);
        const v356 = stdlib.lt(v346, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
        const v357 = v355 ? v356 : false;
        stdlib.assert(v357, {
          at: './index.rsh:57:10:application',
          fs: ['at ./index.rsh:122:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v361 = v67.xs;
        const v363 = v361[v346];
        const v364 = v67.os;
        const v366 = v364[v346];
        const v367 = v363 ? true : v366;
        const v370 = v367 ? false : true;
        stdlib.assert(v370, {
          at: './index.rsh:58:10:application',
          fs: ['at ./index.rsh:122:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v375 = v319 ? false : true;
        const v379 = stdlib.Array_set(v361, v346, true);
        const v381 = v319 ? v379 : v361;
        const v385 = stdlib.Array_set(v364, v346, true);
        const v386 = v319 ? v364 : v385;
        const v388 = {
          os: v386,
          xs: v381,
          xsTurn: v375
           };
        const cv67 = v388;
        const cv779 = v352;
        
        v67 = cv67;
        v779 = cv779;
        
        continue;
         }
      else {
        const v392 = [stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3)];
        const v393 = stdlib.protect(ctc0, await interact.getMove(v67, v392), {
          at: './index.rsh:51:30:application',
          fs: ['at ./index.rsh:128:39:application call to "getValidMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:127:17:application call to [unknown function] (defined at: ./index.rsh:127:21:function exp)'],
          msg: 'getMove',
          who: 'B'
           });
        const v395 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v393);
        const v396 = stdlib.lt(v393, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
        const v397 = v395 ? v396 : false;
        stdlib.assert(v397, {
          at: './index.rsh:52:9:application',
          fs: ['at ./index.rsh:128:39:application call to "getValidMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:127:17:application call to [unknown function] (defined at: ./index.rsh:127:21:function exp)'],
          msg: null,
          who: 'B'
           });
        const v401 = v67.xs;
        const v403 = v401[v393];
        const v404 = v67.os;
        const v406 = v404[v393];
        const v407 = v403 ? true : v406;
        const v410 = v407 ? false : true;
        stdlib.assert(v410, {
          at: './index.rsh:53:9:application',
          fs: ['at ./index.rsh:128:39:application call to "getValidMove" (defined at: ./index.rsh:50:1:function exp)', 'at ./index.rsh:127:17:application call to [unknown function] (defined at: ./index.rsh:127:21:function exp)'],
          msg: null,
          who: 'B'
           });
        const txn4 = await (ctc.sendrecv('B', 8, 1, stdlib.checkedBigNumberify('./index.rsh:129:13:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc7, ctc5, ctc0, ctc0], [v30, v31, v41, v67, v319, v779, v393], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, false, ((txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:129:13:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:129:13:dot', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
          const [v415] = txn4.data;
          const v416 = txn4.value;
          const v421 = txn4.time;
          const v414 = txn4.from;
          
          const v417 = stdlib.eq(v416, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v417, {
            at: './index.rsh:129:13:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'B'
             });
          const v418 = stdlib.addressEq(v41, v414);
          stdlib.assert(v418, {
            at: './index.rsh:129:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'B'
             });
          const v424 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v415);
          const v425 = stdlib.lt(v415, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
          const v426 = v424 ? v425 : false;
          stdlib.assert(v426, {
            at: './index.rsh:57:10:application',
            fs: ['at ./index.rsh:131:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
            msg: null,
            who: 'B'
             });
          const v430 = v67.xs;
          const v432 = v430[v415];
          const v433 = v67.os;
          const v435 = v433[v415];
          const v436 = v432 ? true : v435;
          const v439 = v436 ? false : true;
          stdlib.assert(v439, {
            at: './index.rsh:58:10:application',
            fs: ['at ./index.rsh:131:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
            msg: null,
            who: 'B'
             });
          const v444 = v319 ? false : true;
          const v448 = stdlib.Array_set(v430, v415, true);
          const v450 = v319 ? v448 : v430;
          const v454 = stdlib.Array_set(v433, v415, true);
          const v455 = v319 ? v433 : v454;
          const v457 = {
            os: v455,
            xs: v450,
            xsTurn: v444
             };
          const cv67 = v457;
          const cv779 = v421;
          
          (() => {
            const v67 = cv67;
            const v779 = cv779;
            
            if ((() => {
              const v75 = v67.xs;
              const v77 = v75[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
              const v78 = v75[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
              const v79 = v75[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
              const v80 = v78 ? v79 : false;
              const v81 = v75[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
              const v82 = v75[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
              const v83 = v81 ? v82 : false;
              const v84 = v80 ? true : v83;
              const v85 = v77 ? v84 : false;
              const v86 = v75[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
              const v88 = v75[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
              const v89 = v82 ? v88 : false;
              const v91 = v75[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
              const v92 = v79 ? v91 : false;
              const v93 = v89 ? true : v92;
              const v94 = v86 ? v93 : false;
              const v95 = v85 ? true : v94;
              const v96 = v75[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
              const v99 = v77 ? v86 : false;
              const v102 = v79 ? v82 : false;
              const v103 = v99 ? true : v102;
              const v106 = v78 ? v88 : false;
              const v107 = v103 ? true : v106;
              const v110 = v81 ? v91 : false;
              const v111 = v107 ? true : v110;
              const v112 = v96 ? v111 : false;
              const v113 = v95 ? true : v112;
              const v115 = v67.os;
              const v117 = v115[stdlib.checkedBigNumberify('./index.rsh:30:7:array ref', stdlib.UInt_max, 0)];
              const v118 = v115[stdlib.checkedBigNumberify('./index.rsh:30:18:array ref', stdlib.UInt_max, 1)];
              const v119 = v115[stdlib.checkedBigNumberify('./index.rsh:30:28:array ref', stdlib.UInt_max, 2)];
              const v120 = v118 ? v119 : false;
              const v121 = v115[stdlib.checkedBigNumberify('./index.rsh:30:40:array ref', stdlib.UInt_max, 3)];
              const v122 = v115[stdlib.checkedBigNumberify('./index.rsh:30:50:array ref', stdlib.UInt_max, 6)];
              const v123 = v121 ? v122 : false;
              const v124 = v120 ? true : v123;
              const v125 = v117 ? v124 : false;
              const v126 = v115[stdlib.checkedBigNumberify('./index.rsh:31:9:array ref', stdlib.UInt_max, 8)];
              const v128 = v115[stdlib.checkedBigNumberify('./index.rsh:31:30:array ref', stdlib.UInt_max, 7)];
              const v129 = v122 ? v128 : false;
              const v131 = v115[stdlib.checkedBigNumberify('./index.rsh:31:52:array ref', stdlib.UInt_max, 5)];
              const v132 = v119 ? v131 : false;
              const v133 = v129 ? true : v132;
              const v134 = v126 ? v133 : false;
              const v135 = v125 ? true : v134;
              const v136 = v115[stdlib.checkedBigNumberify('./index.rsh:32:9:array ref', stdlib.UInt_max, 4)];
              const v139 = v117 ? v126 : false;
              const v142 = v119 ? v122 : false;
              const v143 = v139 ? true : v142;
              const v146 = v118 ? v128 : false;
              const v147 = v143 ? true : v146;
              const v150 = v121 ? v131 : false;
              const v151 = v147 ? true : v150;
              const v152 = v136 ? v151 : false;
              const v153 = v135 ? true : v152;
              const v155 = v113 ? true : v153;
              const v176 = v77 ? true : v117;
              const v185 = v78 ? true : v118;
              const v194 = v79 ? true : v119;
              const v203 = v81 ? true : v121;
              const v212 = v96 ? true : v136;
              const v221 = v91 ? true : v131;
              const v230 = v82 ? true : v122;
              const v239 = v88 ? true : v128;
              const v248 = v86 ? true : v126;
              const v273 = v176 ? v185 : false;
              const v278 = v273 ? v194 : false;
              const v283 = v278 ? v203 : false;
              const v288 = v283 ? v212 : false;
              const v293 = v288 ? v221 : false;
              const v298 = v293 ? v230 : false;
              const v303 = v298 ? v239 : false;
              const v308 = v303 ? v248 : false;
              const v314 = v155 ? true : v308;
              const v317 = v314 ? false : true;
              
              return v317; })()) {
              const v319 = v67.xsTurn;
              if (v319) {
                sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:116:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:116:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
                sim_r.isHalt = false;
                 }
              else {
                sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:125:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319, v779]);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:125:19:after expr stmt semicolon', stdlib.UInt_max, 5), v30, v31, v41, v67, v319]);
                sim_r.isHalt = false;
                 } }
            else {
              const v458 = v67.xs;
              const v472 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
              const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v476 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
              const v477 = v476 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v480 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
              const v481 = v480 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v484 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
              const v485 = v484 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v488 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
              const v489 = v488 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v492 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
              const v493 = v492 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v496 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
              const v497 = v496 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v500 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
              const v501 = v500 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v504 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
              const v505 = v504 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v519 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v473);
              const v522 = stdlib.add(v519, v477);
              const v525 = stdlib.add(v522, v481);
              const v528 = stdlib.add(v525, v485);
              const v531 = stdlib.add(v528, v489);
              const v534 = stdlib.add(v531, v493);
              const v537 = stdlib.add(v534, v497);
              const v540 = stdlib.add(v537, v501);
              const v543 = stdlib.add(v540, v505);
              const v548 = stdlib.mul(v543, v31);
              const v549 = stdlib.div(v548, stdlib.checkedBigNumberify('./index.rsh:134:67:decimal', stdlib.UInt_max, 16));
              const v550 = v67.os;
              const v564 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
              const v565 = v564 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v568 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
              const v569 = v568 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v572 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
              const v573 = v572 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v576 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
              const v577 = v576 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v580 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
              const v581 = v580 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v584 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
              const v585 = v584 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v588 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
              const v589 = v588 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v592 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
              const v593 = v592 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v596 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
              const v597 = v596 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
              const v611 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v565);
              const v614 = stdlib.add(v611, v569);
              const v617 = stdlib.add(v614, v573);
              const v620 = stdlib.add(v617, v577);
              const v623 = stdlib.add(v620, v581);
              const v626 = stdlib.add(v623, v585);
              const v629 = stdlib.add(v626, v589);
              const v632 = stdlib.add(v629, v593);
              const v635 = stdlib.add(v632, v597);
              const v640 = stdlib.mul(v635, v31);
              const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:135:67:decimal', stdlib.UInt_max, 16));
              const v642 = stdlib.sub(v31, v549);
              const v643 = stdlib.sub(v31, v641);
              const v644 = stdlib.add(v549, v641);
              const v651 = v476 ? v480 : false;
              const v654 = v484 ? v496 : false;
              const v655 = v651 ? true : v654;
              const v656 = v472 ? v655 : false;
              const v660 = v496 ? v500 : false;
              const v663 = v480 ? v492 : false;
              const v664 = v660 ? true : v663;
              const v665 = v504 ? v664 : false;
              const v666 = v656 ? true : v665;
              const v670 = v472 ? v504 : false;
              const v673 = v480 ? v496 : false;
              const v674 = v670 ? true : v673;
              const v677 = v476 ? v500 : false;
              const v678 = v674 ? true : v677;
              const v681 = v484 ? v492 : false;
              const v682 = v678 ? true : v681;
              const v683 = v488 ? v682 : false;
              const v684 = v666 ? true : v683;
              const v693 = v568 ? v572 : false;
              const v696 = v576 ? v588 : false;
              const v697 = v693 ? true : v696;
              const v698 = v564 ? v697 : false;
              const v702 = v588 ? v592 : false;
              const v705 = v572 ? v584 : false;
              const v706 = v702 ? true : v705;
              const v707 = v596 ? v706 : false;
              const v708 = v698 ? true : v707;
              const v712 = v564 ? v596 : false;
              const v715 = v572 ? v588 : false;
              const v716 = v712 ? true : v715;
              const v719 = v568 ? v592 : false;
              const v720 = v716 ? true : v719;
              const v723 = v576 ? v584 : false;
              const v724 = v720 ? true : v723;
              const v725 = v580 ? v724 : false;
              const v726 = v708 ? true : v725;
              const v733 = stdlib.add(v644, v642);
              const v734 = stdlib.add(v644, v643);
              const v735 = stdlib.add(v641, v642);
              const v736 = stdlib.add(v549, v643);
              const v737 = [v642, v734];
              const v738 = [v735, v736];
              const v739 = v726 ? v737 : v738;
              const v740 = [v733, v643];
              const v741 = v684 ? v740 : v739;
              const v742 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 0)];
              const v743 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 1)];
              sim_r.txns.push({
                amt: v742,
                to: v30
                 });
              sim_r.txns.push({
                amt: v743,
                to: v41
                 });
              sim_r.nextSt = stdlib.digest(ctc10, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
              sim_r.isHalt = true;
               } })();
          return sim_r;
           })));
        const [v415] = txn4.data;
        const v416 = txn4.value;
        const v421 = txn4.time;
        const v414 = txn4.from;
        const v417 = stdlib.eq(v416, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v417, {
          at: './index.rsh:129:13:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'B'
           });
        const v418 = stdlib.addressEq(v41, v414);
        stdlib.assert(v418, {
          at: './index.rsh:129:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'B'
           });
        const v424 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:47:26:decimal', stdlib.UInt_max, 0), v415);
        const v425 = stdlib.lt(v415, stdlib.checkedBigNumberify('./index.rsh:4:15:decimal', stdlib.UInt_max, 9));
        const v426 = v424 ? v425 : false;
        stdlib.assert(v426, {
          at: './index.rsh:57:10:application',
          fs: ['at ./index.rsh:131:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v430 = v67.xs;
        const v432 = v430[v415];
        const v433 = v67.os;
        const v435 = v433[v415];
        const v436 = v432 ? true : v435;
        const v439 = v436 ? false : true;
        stdlib.assert(v439, {
          at: './index.rsh:58:10:application',
          fs: ['at ./index.rsh:131:28:application call to "applyMove" (defined at: ./index.rsh:56:1:function exp)'],
          msg: null,
          who: 'B'
           });
        const v444 = v319 ? false : true;
        const v448 = stdlib.Array_set(v430, v415, true);
        const v450 = v319 ? v448 : v430;
        const v454 = stdlib.Array_set(v433, v415, true);
        const v455 = v319 ? v433 : v454;
        const v457 = {
          os: v455,
          xs: v450,
          xsTurn: v444
           };
        const cv67 = v457;
        const cv779 = v421;
        
        v67 = cv67;
        v779 = cv779;
        
        continue;
         } }
    const v458 = v67.xs;
    const v472 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
    const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v476 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
    const v477 = v476 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v480 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
    const v481 = v480 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v484 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
    const v485 = v484 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v488 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
    const v489 = v488 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v492 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
    const v493 = v492 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v496 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
    const v497 = v496 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v500 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
    const v501 = v500 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v504 = v458[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
    const v505 = v504 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v519 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v473);
    const v522 = stdlib.add(v519, v477);
    const v525 = stdlib.add(v522, v481);
    const v528 = stdlib.add(v525, v485);
    const v531 = stdlib.add(v528, v489);
    const v534 = stdlib.add(v531, v493);
    const v537 = stdlib.add(v534, v497);
    const v540 = stdlib.add(v537, v501);
    const v543 = stdlib.add(v540, v505);
    const v548 = stdlib.mul(v543, v31);
    const v549 = stdlib.div(v548, stdlib.checkedBigNumberify('./index.rsh:134:67:decimal', stdlib.UInt_max, 16));
    const v550 = v67.os;
    const v564 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 0)];
    const v565 = v564 ? stdlib.checkedBigNumberify('./index.rsh:13:33:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v568 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 1)];
    const v569 = v568 ? stdlib.checkedBigNumberify('./index.rsh:13:36:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v572 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 2)];
    const v573 = v572 ? stdlib.checkedBigNumberify('./index.rsh:13:39:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v576 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 3)];
    const v577 = v576 ? stdlib.checkedBigNumberify('./index.rsh:13:42:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v580 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 4)];
    const v581 = v580 ? stdlib.checkedBigNumberify('./index.rsh:13:45:decimal', stdlib.UInt_max, 4) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v584 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 5)];
    const v585 = v584 ? stdlib.checkedBigNumberify('./index.rsh:13:48:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v588 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 6)];
    const v589 = v588 ? stdlib.checkedBigNumberify('./index.rsh:13:51:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v592 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 7)];
    const v593 = v592 ? stdlib.checkedBigNumberify('./index.rsh:13:54:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v596 = v550[stdlib.checkedBigNumberify('./index.rsh:15:63:array ref', stdlib.UInt_max, 8)];
    const v597 = v596 ? stdlib.checkedBigNumberify('./index.rsh:13:57:decimal', stdlib.UInt_max, 3) : stdlib.checkedBigNumberify('./index.rsh:15:76:decimal', stdlib.UInt_max, 0);
    const v611 = stdlib.add(stdlib.checkedBigNumberify('reach standard library:145:19:decimal', stdlib.UInt_max, 0), v565);
    const v614 = stdlib.add(v611, v569);
    const v617 = stdlib.add(v614, v573);
    const v620 = stdlib.add(v617, v577);
    const v623 = stdlib.add(v620, v581);
    const v626 = stdlib.add(v623, v585);
    const v629 = stdlib.add(v626, v589);
    const v632 = stdlib.add(v629, v593);
    const v635 = stdlib.add(v632, v597);
    const v640 = stdlib.mul(v635, v31);
    const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:135:67:decimal', stdlib.UInt_max, 16));
    const v642 = stdlib.sub(v31, v549);
    const v643 = stdlib.sub(v31, v641);
    const v644 = stdlib.add(v549, v641);
    const v651 = v476 ? v480 : false;
    const v654 = v484 ? v496 : false;
    const v655 = v651 ? true : v654;
    const v656 = v472 ? v655 : false;
    const v660 = v496 ? v500 : false;
    const v663 = v480 ? v492 : false;
    const v664 = v660 ? true : v663;
    const v665 = v504 ? v664 : false;
    const v666 = v656 ? true : v665;
    const v670 = v472 ? v504 : false;
    const v673 = v480 ? v496 : false;
    const v674 = v670 ? true : v673;
    const v677 = v476 ? v500 : false;
    const v678 = v674 ? true : v677;
    const v681 = v484 ? v492 : false;
    const v682 = v678 ? true : v681;
    const v683 = v488 ? v682 : false;
    const v684 = v666 ? true : v683;
    const v693 = v568 ? v572 : false;
    const v696 = v576 ? v588 : false;
    const v697 = v693 ? true : v696;
    const v698 = v564 ? v697 : false;
    const v702 = v588 ? v592 : false;
    const v705 = v572 ? v584 : false;
    const v706 = v702 ? true : v705;
    const v707 = v596 ? v706 : false;
    const v708 = v698 ? true : v707;
    const v712 = v564 ? v596 : false;
    const v715 = v572 ? v588 : false;
    const v716 = v712 ? true : v715;
    const v719 = v568 ? v592 : false;
    const v720 = v716 ? true : v719;
    const v723 = v576 ? v584 : false;
    const v724 = v720 ? true : v723;
    const v725 = v580 ? v724 : false;
    const v726 = v708 ? true : v725;
    const v733 = stdlib.add(v644, v642);
    const v734 = stdlib.add(v644, v643);
    const v735 = stdlib.add(v641, v642);
    const v736 = stdlib.add(v549, v643);
    const v737 = [v642, v734];
    const v738 = [v735, v736];
    const v739 = v726 ? v737 : v738;
    const v740 = [v733, v643];
    const v741 = v684 ? v740 : v739;
    const v742 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 0)];
    const v743 = v741[stdlib.checkedBigNumberify('./index.rsh:144:13:array', stdlib.UInt_max, 1)];
    ;
    ;
    stdlib.protect(ctc2, await interact.endsWith(v67), {
      at: './index.rsh:154:26:application',
      fs: ['at ./index.rsh:153:11:application call to [unknown function] (defined at: ./index.rsh:153:23:function exp)'],
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
  stepargs: [0, 121, 169, 161, 201, 0, 0, 181, 181],
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
// "./index.rsh:94:9:dot"
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
// "./index.rsh:94:9:dot"
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
// "./index.rsh:101:9:dot"
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
// "./index.rsh:101:9:dot"
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
// "[at ./index.rsh:102:58:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:66:7:dot"
// "[at ./index.rsh:102:58:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
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
// "./index.rsh:107:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:107:9:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
// Nothing
// "./index.rsh:109:14:application"
// "[]"
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 10
keccak256
==
assert
byte base64(AAAAAAAAAAAA)
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
substring 9 18
dup
store 253
byteget 0
store 252
load 253
byteget 1
store 251
load 253
byteget 2
store 250
load 253
byteget 3
store 249
load 253
byteget 6
store 248
load 253
byteget 8
store 247
load 253
byteget 7
store 246
load 253
byteget 5
store 245
load 253
byteget 4
store 244
load 252
load 251
load 250
&&
load 249
load 248
&&
||
&&
load 247
load 248
load 246
&&
load 250
load 245
&&
||
&&
||
load 244
load 252
load 247
&&
load 250
load 248
&&
||
load 251
load 246
&&
||
load 249
load 245
&&
||
&&
||
store 243
load 254
substring 0 9
dup
store 242
byteget 0
store 241
load 242
byteget 1
store 240
load 242
byteget 2
store 239
load 242
byteget 3
store 238
load 242
byteget 6
store 237
load 242
byteget 8
store 236
load 242
byteget 7
store 235
load 242
byteget 5
store 234
load 242
byteget 4
store 233
load 241
load 240
load 239
&&
load 238
load 237
&&
||
&&
load 236
load 237
load 235
&&
load 239
load 234
&&
||
&&
||
load 233
load 241
load 236
&&
load 239
load 237
&&
||
load 240
load 235
&&
||
load 238
load 234
&&
||
&&
||
store 232
load 243
load 232
||
load 252
load 241
||
load 251
load 240
||
&&
load 250
load 239
||
&&
load 249
load 238
||
&&
load 244
load 233
||
&&
load 245
load 234
||
&&
load 248
load 237
||
&&
load 246
load 235
||
&&
load 247
load 236
||
&&
||
!
bz l0
load 254
substring 18 19
btoi
store 231
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
load 231
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
load 252
int 3
int 0
ite
+
load 251
int 2
int 0
ite
+
load 250
int 3
int 0
ite
+
load 249
int 2
int 0
ite
+
load 244
int 4
int 0
ite
+
load 245
int 2
int 0
ite
+
load 248
int 3
int 0
ite
+
load 246
int 2
int 0
ite
+
load 247
int 3
int 0
ite
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 231
int 0
load 241
int 3
int 0
ite
+
load 240
int 2
int 0
ite
+
load 239
int 3
int 0
ite
+
load 238
int 2
int 0
ite
+
load 233
int 4
int 0
ite
+
load 234
int 2
int 0
ite
+
load 237
int 3
int 0
ite
+
load 235
int 2
int 0
ite
+
load 236
int 3
int 0
ite
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 230
gtxna 0 ApplicationArgs 6
btoi
load 231
-
store 229
gtxna 0 ApplicationArgs 6
btoi
load 230
-
store 228
load 231
load 230
+
store 227
load 243
load 227
load 229
+
itob
load 228
itob
concat
load 232
load 229
itob
load 227
load 228
+
itob
concat
load 230
load 229
+
itob
load 231
load 228
+
itob
concat
ite
ite
store 226
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 226
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
load 226
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
// "./index.rsh:120:13:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:120:13:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
// Nothing
// "./index.rsh:57:10:application"
// "[at ./index.rsh:122:28:application call to \"applyMove\" (defined at: ./index.rsh:56:1:function exp)]"
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
substring 9 18
store 255
gtxna 0 ApplicationArgs 8
substring 0 9
store 254
// Nothing
// "./index.rsh:58:10:application"
// "[at ./index.rsh:122:28:application call to \"applyMove\" (defined at: ./index.rsh:56:1:function exp)]"
load 255
gtxna 0 ApplicationArgs 10
btoi
byteget2
load 254
gtxna 0 ApplicationArgs 10
btoi
byteget2
||
!
assert
gtxna 0 ApplicationArgs 9
btoi
load 254
load 254
gtxna 0 ApplicationArgs 10
btoi
int 1
byteset2
ite
gtxna 0 ApplicationArgs 9
btoi
load 255
gtxna 0 ApplicationArgs 10
btoi
int 1
byteset2
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
substring 9 18
dup
store 252
byteget 0
store 251
load 252
byteget 1
store 250
load 252
byteget 2
store 249
load 252
byteget 3
store 248
load 252
byteget 6
store 247
load 252
byteget 8
store 246
load 252
byteget 7
store 245
load 252
byteget 5
store 244
load 252
byteget 4
store 243
load 251
load 250
load 249
&&
load 248
load 247
&&
||
&&
load 246
load 247
load 245
&&
load 249
load 244
&&
||
&&
||
load 243
load 251
load 246
&&
load 249
load 247
&&
||
load 250
load 245
&&
||
load 248
load 244
&&
||
&&
||
store 242
load 253
substring 0 9
dup
store 241
byteget 0
store 240
load 241
byteget 1
store 239
load 241
byteget 2
store 238
load 241
byteget 3
store 237
load 241
byteget 6
store 236
load 241
byteget 8
store 235
load 241
byteget 7
store 234
load 241
byteget 5
store 233
load 241
byteget 4
store 232
load 240
load 239
load 238
&&
load 237
load 236
&&
||
&&
load 235
load 236
load 234
&&
load 238
load 233
&&
||
&&
||
load 232
load 240
load 235
&&
load 238
load 236
&&
||
load 239
load 234
&&
||
load 237
load 233
&&
||
&&
||
store 231
load 242
load 231
||
load 251
load 240
||
load 250
load 239
||
&&
load 249
load 238
||
&&
load 248
load 237
||
&&
load 243
load 232
||
&&
load 244
load 233
||
&&
load 247
load 236
||
&&
load 245
load 234
||
&&
load 246
load 235
||
&&
||
!
bz l0
load 253
substring 18 19
btoi
store 230
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
load 230
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
load 251
int 3
int 0
ite
+
load 250
int 2
int 0
ite
+
load 249
int 3
int 0
ite
+
load 248
int 2
int 0
ite
+
load 243
int 4
int 0
ite
+
load 244
int 2
int 0
ite
+
load 247
int 3
int 0
ite
+
load 245
int 2
int 0
ite
+
load 246
int 3
int 0
ite
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 230
int 0
load 240
int 3
int 0
ite
+
load 239
int 2
int 0
ite
+
load 238
int 3
int 0
ite
+
load 237
int 2
int 0
ite
+
load 232
int 4
int 0
ite
+
load 233
int 2
int 0
ite
+
load 236
int 3
int 0
ite
+
load 234
int 2
int 0
ite
+
load 235
int 3
int 0
ite
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 229
gtxna 0 ApplicationArgs 6
btoi
load 230
-
store 228
gtxna 0 ApplicationArgs 6
btoi
load 229
-
store 227
load 230
load 229
+
store 226
load 242
load 226
load 228
+
itob
load 227
itob
concat
load 231
load 228
itob
load 226
load 227
+
itob
concat
load 229
load 228
+
itob
load 230
load 227
+
itob
concat
ite
ite
store 225
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 225
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
load 225
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
// "./index.rsh:129:13:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:129:13:dot"
// "[]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
==
assert
// Nothing
// "./index.rsh:57:10:application"
// "[at ./index.rsh:131:28:application call to \"applyMove\" (defined at: ./index.rsh:56:1:function exp)]"
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
substring 9 18
store 255
gtxna 0 ApplicationArgs 8
substring 0 9
store 254
// Nothing
// "./index.rsh:58:10:application"
// "[at ./index.rsh:131:28:application call to \"applyMove\" (defined at: ./index.rsh:56:1:function exp)]"
load 255
gtxna 0 ApplicationArgs 10
btoi
byteget2
load 254
gtxna 0 ApplicationArgs 10
btoi
byteget2
||
!
assert
gtxna 0 ApplicationArgs 9
btoi
load 254
load 254
gtxna 0 ApplicationArgs 10
btoi
int 1
byteset2
ite
gtxna 0 ApplicationArgs 9
btoi
load 255
gtxna 0 ApplicationArgs 10
btoi
int 1
byteset2
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
substring 9 18
dup
store 252
byteget 0
store 251
load 252
byteget 1
store 250
load 252
byteget 2
store 249
load 252
byteget 3
store 248
load 252
byteget 6
store 247
load 252
byteget 8
store 246
load 252
byteget 7
store 245
load 252
byteget 5
store 244
load 252
byteget 4
store 243
load 251
load 250
load 249
&&
load 248
load 247
&&
||
&&
load 246
load 247
load 245
&&
load 249
load 244
&&
||
&&
||
load 243
load 251
load 246
&&
load 249
load 247
&&
||
load 250
load 245
&&
||
load 248
load 244
&&
||
&&
||
store 242
load 253
substring 0 9
dup
store 241
byteget 0
store 240
load 241
byteget 1
store 239
load 241
byteget 2
store 238
load 241
byteget 3
store 237
load 241
byteget 6
store 236
load 241
byteget 8
store 235
load 241
byteget 7
store 234
load 241
byteget 5
store 233
load 241
byteget 4
store 232
load 240
load 239
load 238
&&
load 237
load 236
&&
||
&&
load 235
load 236
load 234
&&
load 238
load 233
&&
||
&&
||
load 232
load 240
load 235
&&
load 238
load 236
&&
||
load 239
load 234
&&
||
load 237
load 233
&&
||
&&
||
store 231
load 242
load 231
||
load 251
load 240
||
load 250
load 239
||
&&
load 249
load 238
||
&&
load 248
load 237
||
&&
load 243
load 232
||
&&
load 244
load 233
||
&&
load 247
load 236
||
&&
load 245
load 234
||
&&
load 246
load 235
||
&&
||
!
bz l0
load 253
substring 18 19
btoi
store 230
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
load 230
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
load 251
int 3
int 0
ite
+
load 250
int 2
int 0
ite
+
load 249
int 3
int 0
ite
+
load 248
int 2
int 0
ite
+
load 243
int 4
int 0
ite
+
load 244
int 2
int 0
ite
+
load 247
int 3
int 0
ite
+
load 245
int 2
int 0
ite
+
load 246
int 3
int 0
ite
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 230
int 0
load 240
int 3
int 0
ite
+
load 239
int 2
int 0
ite
+
load 238
int 3
int 0
ite
+
load 237
int 2
int 0
ite
+
load 232
int 4
int 0
ite
+
load 233
int 2
int 0
ite
+
load 236
int 3
int 0
ite
+
load 234
int 2
int 0
ite
+
load 235
int 3
int 0
ite
+
gtxna 0 ApplicationArgs 6
btoi
*
int 16
/
store 229
gtxna 0 ApplicationArgs 6
btoi
load 230
-
store 228
gtxna 0 ApplicationArgs 6
btoi
load 229
-
store 227
load 230
load 229
+
store 226
load 242
load 226
load 228
+
itob
load 227
itob
concat
load 231
load 228
itob
load 226
load 227
+
itob
concat
load 229
load 228
+
itob
load 230
load 227
+
itob
concat
ite
ite
store 225
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
load 225
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
load 225
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
                    "internalType": "bool[9]",
                    "name": "os",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool[9]",
                    "name": "xs",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xsTurn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v319",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v779",
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
                "name": "v346",
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
                    "internalType": "bool[9]",
                    "name": "os",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool[9]",
                    "name": "xs",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xsTurn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v319",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v779",
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
                "name": "v415",
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
                    "internalType": "bool[9]",
                    "name": "os",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool[9]",
                    "name": "xs",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xsTurn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v319",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v779",
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
                "name": "v346",
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
                    "internalType": "bool[9]",
                    "name": "os",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool[9]",
                    "name": "xs",
                    "type": "bool[9]"
                  },
                  {
                    "internalType": "bool",
                    "name": "xsTurn",
                    "type": "bool"
                  }
                ],
                "internalType": "struct ReachContract.T11",
                "name": "v67",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v319",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v779",
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
                "name": "v415",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16200003662000081565b4381526200004362000081565b815181526040516200005d90600090839060200162000094565b60408051601f19818403018152919052805160209091012060005550620000a39050565b6040518060200160405280600081525090565b91825251602082015260400190565b61227380620000b36000396000f3fe6080604052600436106100555760003560e01c806310f48adc1461005a5780631981efa81461006f57806349e412a3146100825780636c57957c14610095578063ab4cea6a146100a8578063c17e1fd5146100bb575b600080fd5b61006d610068366004611dbd565b6100ce565b005b61006d61007d366004611da1565b6101c1565b61006d610090366004611da1565b6104b9565b61006d6100a3366004611dce565b610733565b61006d6100b6366004611dce565b61084c565b61006d6100c9366004611d90565b610960565b6040516100e2906000908390602001612009565b6040516020818303038152906040528051906020012060001c6000541461010857600080fd5b610110611a76565b3460208301351461012057600080fd5b61012b346000612180565b81526040517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99061015d908490611f9c565b60405180910390a161016d611a89565b338152602080840135818301526040808501358184015283516060840152436080840152516101a1916001918491016120cd565b60408051601f198184030181529190528051602090910120600055505050565b6040516101d5906005908390602001612018565b6040516020818303038152906040528051906020012060001c600054146101fb57600080fd5b610203611ac1565b341561020e57600080fd5b3361021f6060840160408501611d55565b6001600160a01b03161461023257600080fd5b60096103008301351061024457600080fd5b61018082016103008301356009811061026d57634e487b7160e01b600052603260045260246000fd5b6020020160208101906102809190611d76565b6102c45760608201610300830135600981106102ac57634e487b7160e01b600052603260045260246000fd5b6020020160208101906102bf9190611d76565b6102c7565b60015b6102d25760016102d5565b60005b6102de57600080fd5b6102f06102e083016102c08401611d76565b610332576040805161012081810190925261032d916060850190600990839083908082843760009201919091525050506103008401356001610b57565b61035c565b60408051610120818101909252906060840190600990839083908082843760009201919091525050505b8151526103716102e083016102c08401611d76565b6103a557604080516101208181019092529061018084019060099083908390808284376000920191909152506103df915050565b604080516101208181019092526103df91610180850190600990839083908082843760009201919091525050506103008401356001610b57565b8151602001526103f76102e083016102c08401611d76565b610402576001610405565b60005b8151901515604091820152517ff400075ca180c75e19ebe9d3bb4f33e017f2dcbe64f076b2ada77f44c335960f9061043e908490611f7e565b60405180910390a161044e611ad9565b61045b6020840184611d55565b81516001600160a01b03909116905280516020808501359101526104856060840160408501611d55565b81516001600160a01b03909116604090910152815160208083018051929092529051439101526104b481610bff565b505050565b6040516104cd906005908390602001612018565b6040516020818303038152906040528051906020012060001c600054146104f357600080fd5b6104fb611ac1565b341561050657600080fd5b336105146020840184611d55565b6001600160a01b03161461052757600080fd5b60096103008301351061053957600080fd5b61018082016103008301356009811061056257634e487b7160e01b600052603260045260246000fd5b6020020160208101906105759190611d76565b6105b95760608201610300830135600981106105a157634e487b7160e01b600052603260045260246000fd5b6020020160208101906105b49190611d76565b6105bc565b60015b6105c75760016105ca565b60005b6105d357600080fd5b6105e56102e083016102c08401611d76565b6106275760408051610120818101909252610622916060850190600990839083908082843760009201919091525050506103008401356001610b57565b610651565b60408051610120818101909252906060840190600990839083908082843760009201919091525050505b8151526106666102e083016102c08401611d76565b61069a57604080516101208181019092529061018084019060099083908390808284376000920191909152506106d4915050565b604080516101208181019092526106d491610180850190600990839083908082843760009201919091525050506103008401356001610b57565b8151602001526106ec6102e083016102c08401611d76565b6106f75760016106fa565b60005b8151901515604091820152517fd237453bc693ce9ed8cd453fa1f25dcf62eed1b48504c9528182c7cd8d3d15ac9061043e908490611f7e565b6040516107479060019083906020016120b9565b6040516020818303038152906040528051906020012060001c6000541461076d57600080fd5b61077c60f06080830135612180565b4310158015610789575060015b61079257600080fd5b341561079d57600080fd5b336107ab6020830183611d55565b6001600160a01b0316146107be57600080fd5b6107cb6020820182611d55565b6001600160a01b03166108fc6107e5346060850135612180565b6040518115909202916000818181858888f1935050505015801561080d573d6000803e3d6000fd5b507f0eacc5172200577ccadf50aa265553cdae8531b07e7711fdd25288ccdefbc9608160405161083d9190611fd9565b60405180910390a16000805533ff5b6040516108609060019083906020016120b9565b6040516020818303038152906040528051906020012060001c6000541461088657600080fd5b61089560f06080830135612180565b43106108a057600080fd5b346020820135146108b057600080fd5b7fb2f92fe6c142a534ba59abdd85463065d83c535c88ba2923027ccf2fd09af310816040516108df9190611fbd565b60405180910390a16108ef611af9565b6108fc6020830183611d55565b6001600160a01b03168152602080830135818301526040808401358184015233606084015260a080850135608085015243908401525161094191600291849101612129565b60408051601f1981840301815291905280516020909101206000555050565b604051610974906002908390602001612115565b6040516020818303038152906040528051906020012060001c6000541461099a57600080fd5b6109a2611b41565b34156109ad57600080fd5b336109bb6020840184611d55565b6001600160a01b0316146109ce57600080fd5b6040516109e39060c084013590602001612000565b6040516020818303038152906040528051906020012060001c826000016040013514610a0e57600080fd5b8051600090819052815160209081018290528251604001829052825160600182905282516080908101839052835160a001839052835160c001839052835160e00183905283516101000183905283518285018051919091528451905190920191909152600290610a829082908601356121fd565b610a91600260c08701356121fd565b610a9b9190612180565b610aa591906121fd565b60208301519114604091820152517f4c256beab9f62ead72e7c5f784f7089232cbe923b3e8364a100ce35fc8a3d66490610ae0908490611f62565b60405180910390a1610af0611ad9565b610afd6020840184611d55565b81516001600160a01b0390911690528051602080850135910152610b276080840160608501611d55565b81516001600160a01b0390911660409091015260208083015181830180519190915251439101526104b481610bff565b610b5f611b61565b60005b6009811015610bcc57848160098110610b8b57634e487b7160e01b600052603260045260246000fd5b6020020151828260098110610bb057634e487b7160e01b600052603260045260246000fd5b9115156020909202015280610bc4816121e2565b915050610b62565b5081818460098110610bee57634e487b7160e01b600052603260045260246000fd5b911515602090920201529392505050565b60208181015151015151610c14576000610c6b565b602081810151518101510151610c2b576000610c39565b602081810151510151604001515b610c685760208181015151015160600151610c55576000610c63565b60208181015151015160c001515b610c6b565b60015b610ce5576020818101515101516101000151610c88576000610ce0565b60208181015151015160c00151610ca0576000610cae565b60208181015151015160e001515b610cdd5760208181015151015160400151610cca576000610cd8565b60208181015151015160a001515b610ce0565b60015b610ce8565b60015b610dc25760208181015151015160800151610d04576000610dbd565b60208181015151015151610d19576000610d28565b60208181015151015161010001515b610d575760208181015151015160400151610d44576000610d52565b60208181015151015160c001515b610d5a565b60015b610d8857602081810151518101510151610d75576000610d83565b60208181015151015160e001515b610d8b565b60015b610dba5760208181015151015160600151610da7576000610db5565b60208181015151015160a001515b610dbd565b60015b610dc5565b60015b610f6e576020810151515151610ddc576000610e2b565b60208181015151510151610df1576000610dfd565b60208101515151604001515b610e28576020810151515160600151610e17576000610e23565b6020810151515160c001515b610e2b565b60015b610e9b57602081015151516101000151610e46576000610e96565b6020810151515160c00151610e5c576000610e68565b6020810151515160e001515b610e93576020810151515160400151610e82576000610e8e565b6020810151515160a001515b610e96565b60015b610e9e565b60015b610f66576020810151515160800151610eb8576000610f61565b6020810151515151610ecb576000610ed8565b6020810151515161010001515b610f03576020810151515160400151610ef2576000610efe565b6020810151515160c001515b610f06565b60015b610f305760208181015151510151610f1f576000610f2b565b6020810151515160e001515b610f33565b60015b610f5e576020810151515160600151610f4d576000610f59565b6020810151515160a001515b610f61565b60015b610f69565b60015b610f71565b60015b6111105760208181015151015151610f90576020810151515151610f93565b60015b610f9e576000610fc0565b602081810151518101510151610fbd5760208181015151510151610fc0565b60015b610fcb576000610fef565b60208181015151015160400151610fec576020810151515160400151610fef565b60015b610ffa57600061101e565b6020818101515101516060015161101b57602081015151516060015161101e565b60015b61102957600061104d565b6020818101515101516080015161104a57602081015151516080015161104d565b60015b61105857600061107c565b60208181015151015160a00151611079576020810151515160a0015161107c565b60015b6110875760006110ab565b60208181015151015160c001516110a8576020810151515160c001516110ab565b60015b6110b65760006110da565b60208181015151015160e001516110d7576020810151515160e001516110da565b60015b6110e557600061110b565b60208181015151015161010001516111085760208101515151610100015161110b565b60015b611113565b60015b61111e576001611121565b60005b156112425760208101515160400151156111bb5761113d611b80565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051516060850152805151830151151560808501525181015160a0840152905161119a9160059184910161202d565b60408051601f1981840301815291905280516020909101206000555061123d565b6111c3611b80565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528084018051516060850152805151830151151560808501525181015160a084015290516112209160059184910161202d565b60408051601f198184030181529190528051602090910120600055505b611290565b61124a611bce565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845193169201919091528201515181516060015261128e81611293565b505b50565b61129b611bee565b815160208082015160609092015101516101000151601091906112bf5760006112c2565b60035b8451606001516020015160e001516112db5760006112de565b60025b8551606001516020015160c001516112f75760006112fa565b60035b8651606001516020015160a00151611313576000611316565b60025b875160600151602001516080015161132f576000611332565b60045b885160609081015160200151015161134b57600061134e565b60025b895160600151602001516040015161136757600061136a565b60035b8a51606001516020908101510151611383576000611386565b60025b8b5160600151602001515161139c57600061139f565b60035b6113aa906000612180565b6113b49190612180565b6113be9190612180565b6113c89190612180565b6113d29190612180565b6113dc9190612180565b6113e69190612180565b6113f09190612180565b6113fa9190612180565b61140491906121ac565b61140e9190612198565b81528151602081015160609091015151610100015160109190611432576000611435565b60035b8451606001515160e0015161144b57600061144e565b60025b8551606001515160c00151611464576000611467565b60035b8651606001515160a0015161147d576000611480565b60025b8751606001515160800151611496576000611499565b60045b88516060908101515101516114af5760006114b2565b60025b89516060015151604001516114c85760006114cb565b60035b8a516060015151602001516114e15760006114e4565b60025b8b516060015151516114f75760006114fa565b60035b611505906000612180565b61150f9190612180565b6115199190612180565b6115239190612180565b61152d9190612180565b6115379190612180565b6115419190612180565b61154b9190612180565b6115559190612180565b61155f91906121ac565b6115699190612198565b602080830191909152815183519091015161158491906121cb565b604082015260208082015183519091015161159f91906121cb565b6060820152602081015181516115b59190612180565b60808201908152604082015160a083015152606082015190516115d89190612180565b8160a001516020018181525050806040015181602001516115f99190612180565b60c082015152606081015181516116109190612180565b60c0820151602001526040810151608082015161162d9190612180565b60e0820180519190915260608083015191516020908101929092528351015101515161165a5760006116b6565b8151606001516020908101510151611673576000611682565b81516060015160200151604001515b6116b357815160609081015160200151015161169f5760006116ae565b8151606001516020015160c001515b6116b6565b60015b611735578151606001516020015161010001516116d4576000611730565b8151606001516020015160c001516116ed5760006116fc565b8151606001516020015160e001515b61172d578151606001516020015160400151611719576000611728565b8151606001516020015160a001515b611730565b60015b611738565b60015b61181c578151606001516020015160800151611755576000611817565b815160600151602001515161176b57600061177b565b8151606001516020015161010001515b6117ac5781516060015160200151604001516117985760006117a7565b8151606001516020015160c001515b6117af565b60015b6117e05781516060015160209081015101516117cc5760006117db565b8151606001516020015160e001515b6117e3565b60015b61181457815160609081015160200151015161180057600061180f565b8151606001516020015160a001515b611817565b60015b61181f565b60015b6119de578151606001515151611836576000611886565b815160600151516020015161184c576000611858565b81516060015151604001515b61188357815160609081015151015161187257600061187e565b8151606001515160c001515b611886565b60015b6118f6578151606001515161010001516118a15760006118f1565b8151606001515160c001516118b75760006118c3565b8151606001515160e001515b6118ee5781516060015151604001516118dd5760006118e9565b8151606001515160a001515b6118f1565b60015b6118f9565b60015b6119c25781516060015151608001516119135760006119bd565b8151606001515151611926576000611933565b8151606001515161010001515b61195e57815160600151516040015161194d576000611959565b8151606001515160c001515b611961565b60015b61198c57815160600151516020015161197b576000611987565b8151606001515160e001515b61198f565b60015b6119ba5781516060908101515101516119a95760006119b5565b8151606001515160a001515b6119bd565b60015b6119c5565b60015b6119d3578060c001516119d9565b8060a001515b6119e4565b8060e001515b610100820181905282515190516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611a27573d6000803e3d6000fd5b5081516040908101516101008301516020015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611a6e573d6000803e3d6000fd5b506000805533ff5b6040518060200160405280600081525090565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280611ad4611c4c565b905290565b6040518060400160405280611aec611c6c565b8152602001611ad4611c8c565b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060400160405280611b54611b61565b8152602001611ad4611c4c565b6040518061012001604052806009906020820280368337509192915050565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611bba611c4c565b815260006020820181905260409091015290565b6040518060400160405280611be1611cac565b8152600060209091015290565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001611c25611ce6565b8152602001611c32611ce6565b8152602001611c3f611ce6565b8152602001611ad4611ce6565b6040518060600160405280611c5f611b61565b8152602001611be1611b61565b604080516060810182526000808252602082018190529181019190915290565b6040518060400160405280611c9f611c4c565b8152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611ad4611c4c565b604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114611d1757600080fd5b919050565b80358015158114611d1757600080fd5b60006103208284031215611d3e578081fd5b50919050565b600060c08284031215611d3e578081fd5b600060208284031215611d66578081fd5b611d6f82611d00565b9392505050565b600060208284031215611d87578081fd5b611d6f82611d1c565b600060e08284031215611d3e578081fd5b60006103208284031215611db3578081fd5b611d6f8383611d2c565b600060608284031215611d3e578081fd5b600060c08284031215611ddf578081fd5b611d6f8383611d44565b8060005b6009811015611e1657611dff82611d1c565b151584526020938401939190910190600101611ded565b50505050565b8060005b6009811015611e165781511515845260209384019390910190600101611e20565b15159052565b6001600160a01b0380611e5983611d00565b1683526020820135602084015280611e7360408401611d00565b16604084015250611e8a6060830160608301611de9565b610180611e9b818401828401611de9565b506102a0611eaa818301611d1c565b1515908301526102c0611ebe828201611d1c565b1515908301526102e090810135910152565b6001600160a01b03611ee182611d00565b168252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b6001600160a01b0380611f2283611d00565b168352602082013560208401526040820135604084015280611f4660608401611d00565b166060840152506080818101359083015260a090810135910152565b60e08101611f708284611f10565b60c092830135919092015290565b6103208101611f8d8284611e47565b61030092830135919092015290565b81358152602080830135908201526040918201359181019190915260600190565b60c08101611fcb8284611ed0565b60a092830135919092015290565b60c08101611fe78284611ed0565b611ff360a08401611d1c565b151560a083015292915050565b90815260200190565b91825235602082015260400190565b8281526103208101611d6f6020830184611e47565b60006103208201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151612073608084018251611e1c565b60208101516120866101a0850182611e1c565b506040015115156102c083015260808301516120a66102e0840182611e41565b5060a08301516103008301529392505050565b82815260c08101611d6f6020830184611ed0565b91825280516001600160a01b0316602080840191909152810151604080840191909152810151606080840191909152810151608080840191909152015160a082015260c00190565b82815260e08101611d6f6020830184611f10565b600060e08201905083825260018060a01b03808451166020840152602084015160408401526040840151606084015280606085015116608084015250608083015160a083015260a083015160c08301529392505050565b6000821982111561219357612193612211565b500190565b6000826121a7576121a7612227565b500490565b60008160001904831182151516156121c6576121c6612211565b500290565b6000828210156121dd576121dd612211565b500390565b60006000198214156121f6576121f6612211565b5060010190565b60008261220c5761220c612227565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea26469706673582212202473bc120766a163830fa49037ac862e69aadb5fd02b6bcb1244a0bc1a540c3764736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

