(this["webpackJsonp@instinct-prj/web-demo"]=this["webpackJsonp@instinct-prj/web-demo"]||[]).push([[250],{861:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var s=0;s<c.length&&!(o>=r.length);s++){var p=c[s];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=r[o],g=t.tokenStack[u],l="string"===typeof p?p:p.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++o;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),b=[];h&&b.push.apply(b,i([h])),b.push(m),d&&b.push.apply(b,i([d])),"string"===typeof p?c.splice.apply(c,[s,1].concat(b)):p.content=b}}else p.content&&i(p.content)}return c}(t.tokens)}}}})}(Prism)}}]);