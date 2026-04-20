// ============================================================
// 全能力データ
// searchable:true = 探索UI・計算対象
// searchable:false = 効率一覧のみ
// ============================================================
const allAbilities = [

  // ======== 白 (元pt120) ========
  { id:"w120_0",   group:"白", label:"白",       cost:120, discount:null,  value:72,   eff:0.6000, searchable:true },
  { id:"w114_5",   group:"白", label:"白",       cost:114, discount:"5%",  value:72,   eff:0.6316, searchable:true },
  { id:"w108_10",  group:"白", label:"白",       cost:108, discount:"10%", value:72,   eff:0.6667, searchable:true },
  { id:"w102_15",  group:"白", label:"白",       cost:102, discount:"15%", value:72,   eff:0.7059, searchable:true },
  { id:"w96_20",   group:"白", label:"白",       cost:96,  discount:"20%", value:72,   eff:0.7500, searchable:true },
  { id:"w90_25",   group:"白", label:"白",       cost:90,  discount:"25%", value:72,   eff:0.8000, searchable:true },
  { id:"w84_30",   group:"白", label:"白",       cost:84,  discount:"30%", value:72,   eff:0.8571, searchable:true },
  { id:"w78_35",   group:"白", label:"白",       cost:78,  discount:"35%", value:72,   eff:0.9231, searchable:true },
  { id:"w72_40",   group:"白", label:"白",       cost:72,  discount:"40%", value:72,   eff:1.0000, searchable:true },

  // ======== 白 (元pt80) ========
  { id:"w80_0",    group:"白", label:"白",       cost:80,  discount:null,  value:48,   eff:0.6000, searchable:true },
  { id:"w76_5",    group:"白", label:"白",       cost:76,  discount:"5%",  value:48,   eff:0.6316, searchable:true },
  { id:"w72_10b",  group:"白", label:"白",       cost:72,  discount:"10%", value:48,   eff:0.6667, searchable:true },
  { id:"w68_15",   group:"白", label:"白",       cost:68,  discount:"15%", value:48,   eff:0.7059, searchable:true },
  { id:"w64_20",   group:"白", label:"白",       cost:64,  discount:"20%", value:48,   eff:0.7500, searchable:true },
  { id:"w60_25",   group:"白", label:"白",       cost:60,  discount:"25%", value:48,   eff:0.8000, searchable:true },
  { id:"w56_30",   group:"白", label:"白",       cost:56,  discount:"30%", value:48,   eff:0.8571, searchable:true },
  { id:"w52_35",   group:"白", label:"白",       cost:52,  discount:"35%", value:48,   eff:0.9231, searchable:true },
  { id:"w48_40",   group:"白", label:"白",       cost:48,  discount:"40%", value:48,   eff:1.0000, searchable:true },

  // ======== 白 (元pt100) ========
  { id:"w100_0",   group:"白", label:"白",       cost:100, discount:null,  value:60,   eff:0.6000, searchable:true },
  { id:"w95_5",    group:"白", label:"白",       cost:95,  discount:"5%",  value:60,   eff:0.6316, searchable:true },
  { id:"w90_10",   group:"白", label:"白",       cost:90,  discount:"10%", value:60,   eff:0.6667, searchable:true },
  { id:"w85_15",   group:"白", label:"白",       cost:85,  discount:"15%", value:60,   eff:0.7059, searchable:true },
  { id:"w80_20",   group:"白", label:"白",       cost:80,  discount:"20%", value:60,   eff:0.7500, searchable:true },
  { id:"w75_25",   group:"白", label:"白",       cost:75,  discount:"25%", value:60,   eff:0.8000, searchable:true },
  { id:"w70_30",   group:"白", label:"白",       cost:70,  discount:"30%", value:60,   eff:0.8571, searchable:true },
  { id:"w65_35",   group:"白", label:"白",       cost:65,  discount:"35%", value:60,   eff:0.9231, searchable:true },
  { id:"w60_40",   group:"白", label:"白",       cost:60,  discount:"40%", value:60,   eff:1.0000, searchable:true },

  // ======== 金 (元pt120) ========
  { id:"g108_10",  group:"金", label:"金",       cost:108, discount:"10%", value:102,  eff:0.9444, searchable:true },
  { id:"g102_15",  group:"金", label:"金",       cost:102, discount:"15%", value:102,  eff:1.0000, searchable:true },
  { id:"g96_20",   group:"金", label:"金",       cost:96,  discount:"20%", value:102,  eff:1.0625, searchable:true },
  { id:"g90_25",   group:"金", label:"金",       cost:90,  discount:"25%", value:102,  eff:1.1333, searchable:true },
  { id:"g84_30",   group:"金", label:"金",       cost:84,  discount:"30%", value:102,  eff:1.2143, searchable:true },
  { id:"g78_35",   group:"金", label:"金",       cost:78,  discount:"35%", value:102,  eff:1.3077, searchable:true },
  { id:"g72_40",   group:"金", label:"金",       cost:72,  discount:"40%", value:102,  eff:1.4167, searchable:true },

  // ======== 金 (元pt100) ========
  { id:"g100_0",   group:"金", label:"金",       cost:100, discount:null,  value:85,   eff:0.8500, searchable:true },
  { id:"g95_5",    group:"金", label:"金",       cost:95,  discount:"5%",  value:85,   eff:0.8947, searchable:true },
  { id:"g90_10",   group:"金", label:"金",       cost:90,  discount:"10%", value:85,   eff:0.9444, searchable:true },

  // ======== 金 (元pt90) ========
  { id:"g90_0",    group:"金", label:"金",       cost:90,  discount:null,  value:76.5, eff:0.8500, searchable:true },
  { id:"g86_5",    group:"金", label:"金",       cost:86,  discount:"5%",  value:76.5, eff:0.8895, searchable:true },
  { id:"g81_10",   group:"金", label:"金",       cost:81,  discount:"10%", value:76.5, eff:0.9444, searchable:true },

  // ======== 白+金 ========
  { id:"wg240",    group:"白+金", label:"白+金", cost:240, discount:null, value:174,   eff:0.7250, searchable:true },
  { id:"wg234",    group:"白+金", label:"白+金", cost:234, discount:null, value:174,   eff:0.7436, searchable:true },
  { id:"wg228",    group:"白+金", label:"白+金", cost:228, discount:null, value:174,   eff:0.7632, searchable:true },
  { id:"wg222",    group:"白+金", label:"白+金", cost:222, discount:null, value:174,   eff:0.7838, searchable:true },
  { id:"wg216",    group:"白+金", label:"白+金", cost:216, discount:null, value:174,   eff:0.8056, searchable:true },
  { id:"wg210",    group:"白+金", label:"白+金", cost:210, discount:null, value:174,   eff:0.8286, searchable:true },
  { id:"wg204",    group:"白+金", label:"白+金", cost:204, discount:null, value:174,   eff:0.8529, searchable:true },
  { id:"wg198",    group:"白+金", label:"白+金", cost:198, discount:null, value:174,   eff:0.8788, searchable:true },
  { id:"wg192",    group:"白+金", label:"白+金", cost:192, discount:null, value:174,   eff:0.9063, searchable:true },
  { id:"wg186",    group:"白+金", label:"白+金", cost:186, discount:null, value:174,   eff:0.9355, searchable:true },
  { id:"wg180",    group:"白+金", label:"白+金", cost:180, discount:null, value:174,   eff:0.9667, searchable:true },
  { id:"wg174",    group:"白+金", label:"白+金", cost:174, discount:null, value:174,   eff:1.0000, searchable:true },
  { id:"wg168",    group:"白+金", label:"白+金", cost:168, discount:null, value:174,   eff:1.0357, searchable:true },
  { id:"wg162",    group:"白+金", label:"白+金", cost:162, discount:null, value:174,   eff:1.0741, searchable:true },
  { id:"wg156",    group:"白+金", label:"白+金", cost:156, discount:null, value:174,   eff:1.1154, searchable:true },
  { id:"wg150",    group:"白+金", label:"白+金", cost:150, discount:null, value:174,   eff:1.1600, searchable:true },
  { id:"wg144",    group:"白+金", label:"白+金", cost:144, discount:null, value:174,   eff:1.2083, searchable:true },

  // ======== ひらめき(New) ========
  { id:"hira72",   group:"ひらめき", label:"ひらめき", cost:72, discount:"10%", value:64, eff:0.8889, searchable:true },
  { id:"hira68",   group:"ひらめき", label:"ひらめき", cost:68, discount:"15%", value:64, eff:0.9412, searchable:true },
  { id:"hira64",   group:"ひらめき", label:"ひらめき", cost:64, discount:"20%", value:64, eff:1.0000, searchable:true },
  { id:"hira60",   group:"ひらめき", label:"ひらめき", cost:60, discount:"25%", value:64, eff:1.0667, searchable:true },
  { id:"hira56",   group:"ひらめき", label:"ひらめき", cost:56, discount:"30%", value:64, eff:1.1429, searchable:true },
  { id:"hira52",   group:"ひらめき", label:"ひらめき", cost:52, discount:"35%", value:64, eff:1.2308, searchable:true },
  { id:"hira48",   group:"ひらめき", label:"ひらめき", cost:48, discount:"40%", value:64, eff:1.3333, searchable:true },

  // ======== その他（探索対象） ========
  // 白(特殊) 元pt120
  { id:"ws108_10", group:"その他", label:"白(特殊)", cost:108, discount:"10%", value:102, eff:0.9444, searchable:true },
  { id:"ws102_15", group:"その他", label:"白(特殊)", cost:102, discount:"15%", value:102, eff:1.0000, searchable:true },
  { id:"ws96_20",  group:"その他", label:"白(特殊)", cost:96,  discount:"20%", value:102, eff:1.0625, searchable:true },
  { id:"ws90_25",  group:"その他", label:"白(特殊)", cost:90,  discount:"25%", value:102, eff:1.1333, searchable:true },
  { id:"ws84_30",  group:"その他", label:"白(特殊)", cost:84,  discount:"30%", value:102, eff:1.2143, searchable:true },
  { id:"ws78_35",  group:"その他", label:"白(特殊)", cost:78,  discount:"35%", value:102, eff:1.3077, searchable:true },
  { id:"ws72_40",  group:"その他", label:"白(特殊)", cost:72,  discount:"40%", value:102, eff:1.4167, searchable:true },
  // 白(特殊) 元pt100
  { id:"ws100_0",  group:"その他", label:"白(特殊)", cost:100, discount:null,  value:85,  eff:0.8500, searchable:true },
  { id:"ws95_5",   group:"その他", label:"白(特殊)", cost:95,  discount:"5%",  value:85,  eff:0.8947, searchable:true },
  { id:"ws90_10",  group:"その他", label:"白(特殊)", cost:90,  discount:"10%", value:85,  eff:0.9444, searchable:true },
  // ロックオン系
  { id:"lock280",  group:"その他", label:"ロックオン", cost:280, discount:null,  value:203, eff:0.7250, searchable:true },
  { id:"lock266",  group:"その他", label:"ロックオン", cost:266, discount:"5%", value:203, eff:0.7631, searchable:true },
  { id:"lock252",  group:"その他", label:"ロックオン", cost:252, discount:"10%", value:203, eff:0.8055, searchable:true },
  // 英雄白
  { id:"hero_w120",group:"その他", label:"英雄白", cost:120, discount:null,  value:102, eff:0.8500, searchable:true },
  { id:"hero_w114",group:"その他", label:"英雄白", cost:114, discount:"5%",  value:102, eff:0.8947, searchable:true },
  { id:"hero_w108",group:"その他", label:"英雄白", cost:108, discount:"10%", value:102, eff:0.9444, searchable:true },
  // 英雄金+白
  { id:"hero_gw204",group:"その他",label:"英雄金+白", cost:204, discount:null, value:204, eff:1.0000, searchable:true },
  { id:"hero_gw192",group:"その他",label:"英雄金+白", cost:192, discount:null, value:204, eff:1.0625, searchable:true },
  { id:"hero_gw180",group:"その他",label:"英雄金+白", cost:180, discount:null, value:204, eff:1.1333, searchable:true },

  // ======== 一覧のみ（searchable:false） ========
  // ノラモン (代表データとして統合)
  { id:"nb_10", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"10%", value:"変動", eff:1.1111, searchable:false },
  { id:"nb_15", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"15%", value:"変動", eff:1.1765, searchable:false },
  { id:"nb_20", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"20%", value:"変動", eff:1.2500, searchable:false },
  { id:"nb_25", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"25%", value:"変動", eff:1.3333, searchable:false },
  { id:"nb_30", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"30%", value:"変動", eff:1.4286, searchable:false },
  { id:"nb_35", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"35%", value:"変動", eff:1.5385, searchable:false },
  { id:"nb_40", group:"ノラモン", label:"ノラモン", cost:"変動", discount:"40%", value:"変動", eff:1.6667, searchable:false },
  // 調
  { id:"chou80",   group:"調", label:"調", cost:80, discount:null,  value:84, eff:1.0500, searchable:false },
  { id:"chou76",   group:"調", label:"調", cost:76, discount:"5%",  value:84, eff:1.1053, searchable:false },
  { id:"chou72",   group:"調", label:"調", cost:72, discount:"10%", value:84, eff:1.1667, searchable:false },
  // 律
  { id:"ritsu100", group:"律", label:"律", cost:100,discount:null,  value:119,eff:1.1900, searchable:false },
  { id:"ritsu95",  group:"律", label:"律", cost:95, discount:"5%",  value:119,eff:1.2526, searchable:false },
  { id:"ritsu90",  group:"律", label:"律", cost:90, discount:"10%", value:119,eff:1.3222, searchable:false },
  // 超○○(虹のみ)
  { id:"cho_r108", group:"超虹", label:"超○○(虹)",  cost:108,discount:"10%",value:160,eff:1.4778,searchable:false },
  { id:"cho_r102", group:"超虹", label:"超○○(虹)",  cost:102,discount:"15%",value:160,eff:1.5647,searchable:false },
  { id:"cho_r96",  group:"超虹", label:"超○○(虹)",  cost:96, discount:"20%",value:160,eff:1.6625,searchable:false },
  // 超○○(新規)
  { id:"cho_n228", group:"その他",label:"超○○(新規)",cost:228,discount:null, value:160,eff:0.7018,searchable:true },
  { id:"cho_n216", group:"その他",label:"超○○(新規)",cost:216,discount:null, value:160,eff:0.7407,searchable:true },
  { id:"cho_n204", group:"その他",label:"超○○(新規)",cost:204,discount:null, value:160,eff:0.7843,searchable:true },
  // 贖罪Ⅰ
  { id:"shok100",  group:"贖罪",label:"贖罪Ⅰ",    cost:100,discount:null,  value:60, eff:0.6000,searchable:false },
  { id:"shok95",   group:"贖罪",label:"贖罪Ⅰ",    cost:95, discount:"5%",  value:60, eff:0.6316,searchable:false },
  { id:"shok90",   group:"贖罪",label:"贖罪Ⅰ",    cost:90, discount:"10%", value:60, eff:0.6667,searchable:false },
  // 贖罪Ⅰ+Ⅱ
  { id:"shok12_240",group:"その他",label:"贖罪Ⅰ+Ⅱ",cost:240,discount:null,  value:179,eff:0.7458,searchable:true },
  { id:"shok12_228",group:"その他",label:"贖罪Ⅰ+Ⅱ",cost:228,discount:"5%",value:179,eff:0.7850,searchable:true },
  { id:"shok12_216",group:"その他",label:"贖罪Ⅰ+Ⅱ",cost:216,discount:"10%",value:179,eff:0.8287,searchable:true },
];

// 探索対象のみ抽出
const searchAbilities = allAbilities.filter(a => a.searchable);

// ============================================================
// グループ設定（探索UI用）
// ============================================================
const searchGroups = [
  { key:"白",      label:"白",         cls:"gl-白" },
  { key:"金",      label:"金",         cls:"gl-金" },
  { key:"白+金",   label:"白＋金",     cls:"gl-白金" },
  { key:"ひらめき",label:"ひらめき",   cls:"gl-ひらめき" },
  { key:"その他",  label:"その他",     cls:"gl-その他" },
];

// カウント管理（id→所持数）
const counts = {};
allAbilities.forEach(a => counts[a.id] = 0);

// ============================================================
// 能力リスト描画
// ============================================================
function renderAbilityList() {
  const container = document.getElementById('abilityList');
  let html = '';

  searchGroups.forEach((grp, idx) => {
    const items = searchAbilities.filter(a => a.group === grp.key);
    if (!items.length) return;

    html += `<div class="ability-group">
      <div class="group-header" onclick="toggleGroup('grp_${idx}')">
        <span class="group-label ${grp.cls}">${grp.label}</span>
        <span class="group-toggle-icon" id="icon_grp_${idx}">▼</span>
      </div>
      <div class="group-content" id="grp_${idx}" style="display: none;">`;

    items.forEach(ab => {
      // 白+金はラベルなし（取得ptのみ）
      const isWG = (ab.group === '白+金');
      // サブラベル（白/金/ひらめき/その他は label を表示）
      const subLabel = !isWG && ab.label !== '白' && ab.label !== '金' && ab.label !== 'ひらめき'
        ? `<span class="ability-sublabel">${ab.label}</span>` : '';

      html += `
      <div class="ability-row" id="row_${ab.id}">
        <div class="ability-info">
          ${subLabel}
          <span class="ability-cost">${ab.cost}pt</span>
          ${(!isWG && ab.discount) ? `<span class="ability-disc">${ab.discount}</span>` : ''}
        </div>
        <div class="counter">
          <button class="counter-btn" onclick="change('${ab.id}',-1)">−</button>
          <div class="counter-val" id="cnt_${ab.id}">0</div>
          <button class="counter-btn" onclick="change('${ab.id}',+1)">＋</button>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}

function toggleGroup(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById('icon_' + id);
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.textContent = '▲';
  } else {
    content.style.display = 'none';
    icon.textContent = '▼';
  }
}

function change(id, delta) {
  counts[id] = Math.max(0, counts[id] + delta);
  document.getElementById('cnt_' + id).textContent = counts[id];
  document.getElementById('row_' + id).classList.toggle('active', counts[id] > 0);
}

function resetAll() {
  allAbilities.forEach(a => { counts[a.id] = 0; });
  renderAbilityList();
  document.getElementById('result').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 個数制限付きナップサック DP
// アルゴリズム: 各アイテムを所持数分「仮想コピー」して
//              0/1ナップサック(逆順ループ)を適用
// バックトラック: 各アイテムコピー処理後にdpスナップショットを保持し
//              「どのコピーを使ったか」を正確に復元する
// ============================================================
function calculate() {
  const W = parseInt(document.getElementById('totalPt').value) || 0;

  // 所持数 > 0 のアイテムのみ使用
  const items = searchAbilities.filter(a => counts[a.id] > 0);

  if (items.length === 0) {
    showMsg('所持数を1以上に設定してください');
    return;
  }

  // アイテムを所持数分展開（各コピーを独立したアイテムとして扱う）
  const expanded = [];
  items.forEach(ab => {
    const maxK = counts[ab.id];
    for (let k = 0; k < maxK; k++) {
      expanded.push(ab);
    }
  });

  const N = expanded.length;

  // DP テーブル: dp[w] = 容量wで達成できる最大value
  let dp = new Float64Array(W + 1); // 0で初期化

  // バックトラック用:
  // snapshots[ei] = アイテムeiを処理する「直前」のdpスナップショット
  // これにより「アイテムeiを選んだかどうか」を判定できる
  const snapshots = [];

  // 0/1ナップサック（逆順ループ）
  for (let ei = 0; ei < N; ei++) {
    // 処理前のdpをスナップショットとして保存
    snapshots.push(new Float64Array(dp));

    const ab = expanded[ei];
    const c = ab.cost;
    const v = ab.value;
    // 逆順でループ（同一展開コピーの重複使用を防ぐ）
    for (let w = W; w >= c; w--) {
      const newVal = dp[w - c] + v;
      if (newVal > dp[w]) {
        dp[w] = newVal;
      }
    }
  }

  // 最大value を確認
  const bestVal = dp[W];
  if (bestVal === 0) {
    showMsg('所持ptが不足しています（最小コストのアイテムにも届きません）');
    return;
  }

  // 同じ最大valueで消費ptが最小のwを探す（残ptを最大化）
  let bestW = W;
  for (let w = 0; w <= W; w++) {
    if (dp[w] === bestVal) { bestW = w; break; }
  }

  // バックトラックで使用アイテムを復元
  // スナップショットを逆順に辿り、各アイテムコピーを「使ったか否か」を判定する
  const usedMap = {};
  let cur = bestW;
  // currentDp: 「今inspectしているアイテムeiの処理後」のdp状態
  // 最初は「全アイテム処理後」の最終dp
  let currentDp = dp;
  for (let ei = N - 1; ei >= 0; ei--) {
    const ab = expanded[ei];
    const c = ab.cost;
    const v = ab.value;
    const prevDp = snapshots[ei]; // アイテムei処理「前」のdp
    // cur容量で、このアイテムコピーを「選んだ」かどうかを判定:
    // 選んだなら currentDp[cur] == prevDp[cur - c] + v
    if (cur >= c && Math.abs(prevDp[cur - c] + v - currentDp[cur]) < 1e-9) {
      // このコピーを選択したと判定
      usedMap[ab.id] = (usedMap[ab.id] || 0) + 1;
      cur = cur - c;
    }
    // 次のループはアイテムei-1の処理後 = アイテムeiの処理前 = prevDp
    currentDp = prevDp;
  }

  // 検証: 使用個数が所持数を超えていないか
  for (const id in usedMap) {
    if (usedMap[id] > counts[id]) {
      showMsg('内部エラー: 所持数を超えた使用が検出されました');
      return;
    }
  }

  // 使用ptの計算
  let verifyPt = 0;
  for (const id in usedMap) {
    const ab = allAbilities.find(a => a.id === id);
    verifyPt += ab.cost * usedMap[id];
  }

  showResult(usedMap, W, bestVal, verifyPt);
}

// ============================================================
// 結果表示
// ============================================================
function showMsg(msg) {
  const div = document.getElementById('result');
  div.style.display = 'block';
  div.innerHTML = `<div class="no-result">${msg}</div>`;
}

function showResult(usedMap, W, totalVal, usedPt) {
  const div = document.getElementById('result');
  div.style.display = 'block';

  const remaining = W - usedPt;
  let listHtml = '';

  // allAbilities の順番で結果を表示
  allAbilities.forEach(ab => {
    if (!usedMap[ab.id]) return;
    const cnt = usedMap[ab.id];
    const disc = ab.discount ? `（${ab.discount}）` : '';
    const name = `${ab.label} ${ab.cost}pt${disc}`;
    const valSum = Math.round(ab.value * cnt * 10) / 10;
    const ptSum = ab.cost * cnt;
    listHtml += `<li>
      <span class="result-item-name">${name}</span>
      <div class="result-item-right">
        <span class="result-item-count">×${cnt}　+${valSum}</span>
        <span class="result-item-pt">${ptSum}pt使用</span>
      </div>
    </li>`;
  });

  div.innerHTML = `
    <div class="card-title" style="margin-bottom:14px;">最適解</div>
    <div class="result-stats">
      <div class="stat-box">
        <div class="stat-label">使用pt</div>
        <div class="stat-value s-blue">${usedPt}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">総合力</div>
        <div class="stat-value">${Math.round(totalVal * 10) / 10}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">残りpt</div>
        <div class="stat-value s-green">${remaining}</div>
      </div>
    </div>
    <ul class="result-list">${listHtml}</ul>
  `;
}

// ============================================================
// モーダル（全能力を効率降順）
// ============================================================
const groupBadgeClass = {
  '白':'tb-白', '金':'tb-金', '白+金':'tb-白金',
  'ノラモン':'tb-ノラモン', '調':'tb-調', '律':'tb-律',
  '超虹':'tb-超虹', '超新規':'tb-超新規',
  'ひらめき':'tb-ひらめき', 'その他':'tb-その他', '贖罪':'tb-贖罪',
};

function openModal() {
  const sorted = [...allAbilities].sort((a, b) => b.eff - a.eff);
  document.getElementById('modalTable').innerHTML = sorted.map(ab => {
    const pct = (ab.eff * 100).toFixed(2);
    const ec = ab.eff >= 1.4 ? 'eff-high' : ab.eff >= 1.0 ? 'eff-mid' : 'eff-low';
    const disc = ab.discount || '—';
    const cls = groupBadgeClass[ab.group] || 'tb-その他';
    const costText = typeof ab.cost === 'number' ? ab.cost + 'pt' : ab.cost;
    const valText = typeof ab.value === 'number' ? '+' + ab.value : ab.value;
    return `<tr>
      <td><span class="type-badge ${cls}">${ab.label}</span></td>
      <td>${costText}</td>
      <td>${disc}</td>
      <td>${valText}</td>
      <td><span class="eff-value ${ec}">${pct}%</span></td>
    </tr>`;
  }).join('');
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }
function closeModalOnBg(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

function openHelpModal() { document.getElementById('helpOverlay').classList.add('open'); }
function closeHelpModal() { document.getElementById('helpOverlay').classList.remove('open'); }
function closeHelpModalOnBg(e) { if (e.target === document.getElementById('helpOverlay')) closeHelpModal(); }

// 初期化
renderAbilityList();
