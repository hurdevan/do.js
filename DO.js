/*
 * The MIT License
 *
 * Copyright (c) 2012 - 2013 Evan Hurd
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

window.DO = 
	{
	dom:{
		"a":function(){return this.__createNode("a",arguments);},
		"abbr":function(){return this.__createNode("abbr",arguments);},
		"acronym":function(){return this.__createNode("acronym",arguments);},
		"address":function(){return this.__createNode("address",arguments);},
		"applet":function(){return this.__createNode("applet",arguments);},
		"area":function(){return this.__createNode("area",arguments);},
		"b":function(){return this.__createNode("b",arguments);},
		"base":function(){return this.__createNode("base",arguments);},
		"basefont":function(){return this.__createNode("basefont",arguments);},
		"bdo":function(){return this.__createNode("bdo",arguments);},
		"big":function(){return this.__createNode("big",arguments);},
		"blockquote":function(){return this.__createNode("blockquote",arguments);},
		"body":function(){return this.__createNode("body",arguments);},
		"br":function(){return this.__createNode("br",arguments);},
		"button":function(){return this.__createNode("button",arguments);},
		"caption":function(){return this.__createNode("caption",arguments);},
		"center":function(){return this.__createNode("center",arguments);},
		"cite":function(){return this.__createNode("cite",arguments);},
		"code":function(){return this.__createNode("code",arguments);},
		"col":function(){return this.__createNode("col",arguments);},
		"colgroup":function(){return this.__createNode("colgroup",arguments);},
		"dd":function(){return this.__createNode("dd",arguments);},
		"del":function(){return this.__createNode("del",arguments);},
		"dfn":function(){return this.__createNode("dfn",arguments);},
		"dir":function(){return this.__createNode("dir",arguments);},
		"div":function(){return this.__createNode("div",arguments);},
		"dl":function(){return this.__createNode("dl",arguments);},
		"dt":function(){return this.__createNode("dt",arguments);},
		"em":function(){return this.__createNode("em",arguments);},
		"fieldset":function(){return this.__createNode("fieldset",arguments);},
		"font":function(){return this.__createNode("font",arguments);},
		"form":function(){return this.__createNode("form",arguments);},
		"frame":function(){return this.__createNode("frame",arguments);},
		"frameset":function(){return this.__createNode("frameset",arguments);},
		"h1":function(){return this.__createNode("h1",arguments);},
		"h2":function(){return this.__createNode("h2",arguments);},
		"h3":function(){return this.__createNode("h3",arguments);},
		"h4":function(){return this.__createNode("h4",arguments);},
		"h5":function(){return this.__createNode("h5",arguments);},
		"h6":function(){return this.__createNode("h6",arguments);},
		"head":function(){return this.__createNode("head",arguments);},
		"hr":function(){return this.__createNode("hr",arguments);},
		"html":function(){return this.__createNode("html",arguments);},
		"i":function(){return this.__createNode("i",arguments);},
		"iframe":function(){return this.__createNode("iframe",arguments);},
		"img":function(){return this.__createNode("img",arguments);},
		"input":function(){return this.__createNode("input",arguments);},
		"ins":function(){return this.__createNode("ins",arguments);},
		"isindex":function(){return this.__createNode("isindex",arguments);},
		"kbd":function(){return this.__createNode("kbd",arguments);},
		"label":function(){return this.__createNode("label",arguments);},
		"legend":function(){return this.__createNode("legend",arguments);},
		"li":function(){return this.__createNode("li",arguments);},
		"link":function(){return this.__createNode("link",arguments);},
		"map":function(){return this.__createNode("map",arguments);},
		"menu":function(){return this.__createNode("menu",arguments);},
		"meta":function(){return this.__createNode("meta",arguments);},
		"noframes":function(){return this.__createNode("noframes",arguments);},
		"noscript":function(){return this.__createNode("noscript",arguments);},
		"object":function(){return this.__createNode("object",arguments);},
		"ol":function(){return this.__createNode("ol",arguments);},
		"optgroup":function(){return this.__createNode("optgroup",arguments);},
		"option":function(){return this.__createNode("option",arguments);},
		"p":function(){return this.__createNode("p",arguments);},
		"param":function(){return this.__createNode("param",arguments);},
		"pre":function(){return this.__createNode("pre",arguments);},
		"q":function(){return this.__createNode("q",arguments);},
		"s":function(){return this.__createNode("s",arguments);},
		"samp":function(){return this.__createNode("samp",arguments);},
		"script":function(){return this.__createNode("script",arguments);},
		"select":function(){return this.__createNode("select",arguments);},
		"small":function(){return this.__createNode("small",arguments);},
		"span":function(){return this.__createNode("span",arguments);},
		"strike":function(){return this.__createNode("strike",arguments);},
		"strong":function(){return this.__createNode("strong",arguments);},
		"style":function(){return this.__createNode("style",arguments);},
		"sub":function(){return this.__createNode("sub",arguments);},
		"sup":function(){return this.__createNode("sup",arguments);},
		"table":function(){return this.__createNode("table",arguments);},
		"tbody":function(){return this.__createNode("tbody",arguments);},
		"td":function(){return this.__createNode("td",arguments);},
		"textarea":function(){return this.__createNode("textarea",arguments);},
		"tfoot":function(){return this.__createNode("tfoot",arguments);},
		"th":function(){return this.__createNode("th",arguments);},
		"thead":function(){return this.__createNode("thead",arguments);},
		"title":function(){return this.__createNode("title",arguments);},
		"tr":function(){return this.__createNode("tr",arguments);},
		"tt":function(){return this.__createNode("tt",arguments);},
		"u":function(){return this.__createNode("u",arguments);},
		"ul":function(){return this.__createNode("ul",arguments);},
		
		"nid":"nid",
		"classname":"className",
		"cls":"className",
		
		
		
		
		"__createNode":function(tag,input)
			{
			var node = document.createElement(tag);
			node.childrenByName = {};
			for(var x = 0;x < input.length;x++)
				{
				var inp = input[x];
				if(typeof inp == 'function')
					{
					inp.call(inp);
					}else if(typeof inp == "string")// Insert string as a text node
					{
					node.appendChild(document.createTextNode(inp));
					}else if(inp && inp.nodeType){
					node.appendChild(inp);
					if(inp.nid != "")node[inp.nid] = inp; // Make parent's child aware
					if(inp.name != "")
						{
						if(!node.childrenByName[inp.name])node.childrenByName[inp.name] = [];
						node.childrenByName[inp.name].push(inp);
						}
					}else if(typeof inp == "object"){// Loop the object for parameters
					for(y in inp)
						{
						if(y == "cls") // Set class Name
							{
							node.className = inp[y];
							}else if(y == "style"){// Set Style
							if(typeof node.style.setAttribute == 'object')
								{
								node.style.setAttribute('cssText',inp[y]);// IE Backward Support
								}else{
								node.setAttribute('style',inp[y]); // Standard Support
								}	
							}else if(y == "parentElement"){// Append as Child
							if(inp[y] && inp[y].appendChild)
								{
								inp[y].appendChild(node);	
								}else if(document.getElementById(inp[y])){
								document.getElementById(inp[y]).appendChild(node);
								}
							}else if(y == "insertBefore"){//Insert Before
							if(inp[y] && inp[y].appendChild){
								inp[y].parentElement.insertBefore(node,inp[y]);	
								}else if(document.getElementById(inp[y])){
								var e = document.getElementById(inp[y]);
								e.parentElement.insertBefore(node,e);	
								}
							}else if(y == "insertAfter"){// Insert After
							var e = false;
							if(inp[y] && inp[y].appendChild)
								{
								e = inp[y];	
								}else if(document.getElementById(inp[y])){
								e = document.getElementById(inp[y]);	
								}
							if(e && e.nextSibling)
								{
								e.parentElement.insertBefore(node,e.nextSibling);
								}else{
								e.parentElement.appendChild(node);
								}
							}else if(y == 'html'){// Set HTML
							node.innerHTML = inp[y];
							}else{// All Else, Set Parameters
							try{node[y] = inp[y];}catch(err){if(console)console.debug('DO.dom:Failed to set attribute:'+y);}	
							}
						}
					}
				}
			return node;
			}
		},
	"mergeObjects":function(obj1,obj2)
		{
		for (var attr in obj2) { obj1[attr] = obj2[attr]; }
		return obj1;
		},
	
	"Layers":
		{
		"addLayer":function(id)
			{
			if(this[id])return false;
			this[id] = [];
			this[id].show = function()
				{
				for(var x = 0;x < this.length;x++)
					{
					if(this[x] && this[x].style)this[x].style.display="block";
					}
				};
			this[id].hide = function()
				{
				for(var x = 0;x < this.length;x++)
					{
					if(this[x] && this[x].style)this[x].style.display="none";
					}					
				};
			for(var x = 1;x < arguments.length;x++)
				{
				if(arguments[x].style)
					this[id].push(arguments[x]);
				}
			return this[id];
			},
		"removeLayer":function(id)
			{
			if(this[id])this[id] = false;
			return this;
			}
		},
	
	"__DoFuncs":[],
	"__DoFunction":[],
	"Func":function()
		{
		if(typeof arguments[0] == "boolean" && arguments[0])
			{
			var passArgs = true;
			var callBack = arguments[1];
			var vstart = 2;
			}else{
			var passArgs = false;
			var callBack = arguments[0];
			delete arguments[0];
			var vstart = 1;
			}
		
		var Params = [];
		for(var x = vstart;x < arguments.length;x++)
			{
			Params.push(arguments[x]);	
			}
			
		var Pid = this.__DoFuncs.length;
		this.__DoFuncs.push(Params);
		this.__DoFunction.push(callBack);
		if(typeof callBack == 'function')
			{
			callBack = "DO.__DoFunction["+Pid+"]";

			}
		if(passArgs)
			{
			var returnFunc = Function("var ret=[];for(var x = 0;x < arguments.length;x++){ret.push(arguments[x]);};var r = ret.concat(DO.__DoFuncs["+Pid+"]);return "+callBack+".apply(this,r);");
			}else{
			var returnFunc = Function("return "+callBack+".apply(this,DO.__DoFuncs["+Pid+"]);");	
			}
		return returnFunc;
		}
	};