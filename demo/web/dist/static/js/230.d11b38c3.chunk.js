(this["webpackJsonp@instinct-prj/web-demo"]=this["webpackJsonp@instinct-prj/web-demo"]||[]).push([[230],{841:function(t,a){!function(t){t.languages.latte={comment:/^\{\*[\s\S]*/,ld:{pattern:/^\{(?:[=_]|\/?(?!\d|\w+\()\w+|)/,inside:{punctuation:/^\{\/?/,tag:{pattern:/.+/,alias:"important"}}},rd:{pattern:/\}$/,inside:{punctuation:/.+/}},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:t.languages.php}};var a=t.languages.extend("markup",{});t.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:t.languages.php}}}}}},a.tag),t.hooks.add("before-tokenize",(function(e){"latte"===e.language&&(t.languages["markup-templating"].buildPlaceholders(e,"latte",/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*[\s\S]*?\*\/)*?\}/g),e.grammar=a)})),t.hooks.add("after-tokenize",(function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"latte")}))}(Prism)}}]);