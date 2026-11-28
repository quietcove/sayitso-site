// Flat Hoku, same parts as the app (no shading), with separate flippers.
function hokuFlat(w,mood,o){o=o||{};var fl=o.flipL||0,fr=o.flipR||0;
 var F={happy:['_openEyes','_smile','_blush'],wink:['_winkEyes','_smile','_blush'],love:['_loveEyes','_smile','_blush'],giggle:['_giggleEyes','_tinyOpenMouth','_blush'],joy:['_joyEyes','_openMouth','_blush']};
 var p=F[mood]||F.happy;
 var flip=function(cx,cy,rot,ang){return '<g transform="rotate('+ang+' '+(cx<60?cx+8:cx-8)+' '+(cy-4)+')"><ellipse cx="'+cx+'" cy="'+cy+'" rx="11" ry="6.5" transform="rotate('+rot+' '+cx+' '+cy+')" fill="#C6BEE6"/></g>'};
 var g=flip(24,94,-28,fl)+flip(96,94,28,-fr)+A._body+A[p[2]]+A[p[0]]+A._muzzle+A[p[1]];
 return '<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+w+'" viewBox="0 0 120 120" style="overflow:visible">'+g+'</svg>'}
