// High-quality Hoku for the ad: shading, outline, separate flippers, blink.
let __hq=0;
function hokuHQ(w,mood,o={}){
 const id='h'+(__hq++);const fl=o.flipL||0,fr=o.flipR||0;
 const FACEP={happy:['_openEyes','_smile','_blush'],wink:['_winkEyes','_smile','_blush'],love:['_loveEyes','_smile','_blush'],giggle:['_giggleEyes','_tinyOpenMouth','_blush'],joy:['_joyEyes','_openMouth','_blush'],blink:['_sleepEyes','_smile','_blush']};
 const [e,mo,b]=FACEP[mood]||FACEP.happy;
 const OL='#A99FD6';
 const defs=`<defs>
 <radialGradient id="${id}b" cx="38%" cy="30%" r="78%"><stop offset="0" stop-color="#F1EDFD"/><stop offset=".45" stop-color="#DDD6F4"/><stop offset=".85" stop-color="#C9BFEC"/><stop offset="1" stop-color="#BBB0E4"/></radialGradient>
 <radialGradient id="${id}t" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#ECE8FA"/></radialGradient>
 <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#CFC6EE"/><stop offset="1" stop-color="#ADA2DA"/></linearGradient>
 </defs>`;
 const flip=(cx,cy,rot,ang)=>`<g transform="rotate(${ang} ${cx<60?cx+8:cx-8} ${cy-4})"><ellipse cx="${cx}" cy="${cy}" rx="11.5" ry="6.8" transform="rotate(${rot} ${cx} ${cy})" fill="url(#${id}f)" stroke="${OL}" stroke-width="1.3"/></g>`;
 let g=defs;
 g+=flip(24,94,-28,fl)+flip(96,94,28,-fr);
 g+=`<ellipse cx="60" cy="68" rx="44" ry="42" fill="url(#${id}b)" stroke="${OL}" stroke-width="1.4"/>`;
 // rim light + bottom occlusion
 g+=`<path d="M22 58 A40 40 0 0 1 60 27" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
 g+=`<ellipse cx="60" cy="92" rx="26" ry="14" fill="url(#${id}t)"/>`;
 g+=`<ellipse cx="41" cy="41" rx="10" ry="5.6" transform="rotate(-22 41 41)" fill="#FFFFFF" opacity=".75"/><circle cx="53" cy="35" r="2" fill="#FFFFFF" opacity=".7"/>`;
 g+=A[b]+A[e]+A._muzzle+A[mo];
 return `<svg width="${w}" height="${w}" viewBox="0 0 120 120" style="overflow:visible">${g}</svg>`}
