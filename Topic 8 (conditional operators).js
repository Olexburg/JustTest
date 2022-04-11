const a = 'boy';
const b = 'girl';
console.log(a === 'boy');
console.log(a === b);

const c = 'Alex';
const d = 'alex';
console.log(c === d);

const e = 'Oleh';
const f = 'oleh';
console.log(e.toLowerCase() === f.toLowerCase());

const g = 'aaa';
const h = 'aaaaaa';
console.log(g.length < h.length);

const i = 'Metallica';
console.log(i.includes('metal'));
console.log(i.includes('Metal'))

const j = 'abc';
const k = 'abd';
console.log(k > j);

const l = 5;
const m = 6;
const n = m;
const o = 1;
console.log(l < m);
console.log(l <= m);
console.log(l + o === m);
console.log(l !== m);

const p = true;
const r = false;
console.log(p && r);
console.log(p || r);
console.log(p === r);
console.log(! r);