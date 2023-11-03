var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    const S=s.split("").sort((a,b)=>a.localeCompare(b)).join("")
    const T=t.split("").sort((a,b)=>a.localeCompare(b)).join("")
    return S===T;
};