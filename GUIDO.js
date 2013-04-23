// JavaScript Document

var GUIDO = 
	{
	tableCSS:"border-collapse:collapse;",
	tableTdCSS:"width:50px;height:15px;line-height:15px;overflow:hidden;white-space:nowrap;",
	table:function(obj)
		{
		if(obj.style)
			obj.style+=";"+this.tableCSS;
			else
			obj.style = +this.tableCSS;
		var table = DO.dom.table(obj,tbody = DO.dom.tbody({id:'tbody'}));
		table.tableObject = {};
		table.tableObject.table = table;
		table.tableObject.tbody = tbody;
		table.tableObject.selection = [-1,-1,-1,-1];
		table.appendMatrix = GUIDO_table_appendMatrix;
		table.tagOnChangeEvent = GUIDO_table_tagOnChangeEvent;
		table.select = GUIDO_table_select;
		table.offset = GUIDO_table_applyOffset;
		table.clearSelect = GUIDO_table_clearSelect;
		table.exec = GUIDO_table_exec;
		table.expand = GUIDO_table_expand;
		table.apply = GUIDO_table_apply;
		table.group = GUIDO_table_group;
		table.createGroup = GUIDO_table_createGroup;
		table.contentEditableOn = GUIDO_table_editableOn;
		table.createArrayMatrix = GUIDO_table_createArrayMatrix;
		return table;
		}

	};
	

function GUIDO_table_applyOffset(offset)
{
//this.tableObject.selection[0]+=Number(offset[0]);
this.tableObject.selection[1]+=Number(offset[1]);
//this.tableObject.selection[2]+=Number(offset[0]);
this.tableObject.selection[3]+=Number(offset[1]);
return this;
}

	
function GUIDO_table_appendMatrix(rows,cols)
{
if(this.tbody.children[0])
	{
	var offset = [this.tbody.children.length,this.tbody.children[0].children.length];
	}else{
	var offset = [0,0,0,0];	
	}

for(var x = 0;x < rows;x++)
	{
	if(this.tbody.children[x])
		{
		var tr = this.tbody.children[x];
		}else{
		var tr = DO.dom.tr({parentElement:this.tbody});
		tr.tableObject = this.tableObject;
		}
	
	for(var y = 0;y< cols;y++)
		{
		var td = DO.dom.td({parentElement:tr,style:GUIDO.tableTdCSS});
		td.tableObject = this.tableObject;
		}
	}
return offset;
}

function GUIDO_table_select(startRow,startCol,endRow,endCol)
{
this.tableObject.selection = [startRow,startCol,endRow,endCol];
return this;
}
function GUIDO_table_clearSelect()
{
this.tableObject.selection = [-1,-1,-1,-1];
}

function GUIDO_table_exec(func)
{
if(arguments[1])
	var args = arguments[1];
	else
	var args = [];
var selection = this.tableObject.selection;
if(selection[0] < 0 || selection[1] < 0 || selection[2] < 0 || selection[3] < 0)return this;

for(var x = selection[0];x <= selection[2];x++)
	{
	var tr = this.tbody.children[x];
	if(!tr)continue;
	for(var y = selection[1];y <= selection[3];y++)
		{
		var td = tr.children[y];
		if(!td)continue;
		var appy = [x,y].concat(args);
		func.apply(td,appy);	
		}
	}
return this;	
}

function GUIDO_table_expand(row,col,toRow,toCol)
{
this.select(row,col,toRow,toCol).exec(function(r,c)
	{
	if(r == row && c == col)
		{
		this.rowSpan = toRow-row+1;
		this.colSpan = toCol-col+1;
		this.style.backgroundColor="green";
		
		return true;
		}
	this.style.backgroundColor='red';
	this.style.display = 'none';
		
	});
}

function GUIDO_table_group()
{
if(!this.tableGroup)return this;
this.tableObject.selection[0] = this.tableObject.selection[0] + this.tableGroup[0];
this.tableObject.selection[1] = this.tableObject.selection[1] + this.tableGroup[1];
return this;
}

function GUIDO_table_createArrayMatrix()
{
var tmpMatrix = {};
var selection = this.tableObject.selection;
if(selection[0] < 0 || selection[1] < 0 || selection[2] < 0 || selection[3] < 0)return this;
var row = -1;
for(var x = selection[0];x <= selection[2];x++)
	{
	var tr = this.tbody.children[x];
	if(!tr)continue;
	row++;
	var col = -1;
	if(!tmpMatrix[row])tmpMatrix[row] = {};
	for(var y = selection[1];y <= selection[3];y++)
		{
		var td = tr.children[y];
		if(!td)continue;
		col++;
		tmpMatrix[row][col] = td;
		}
	}
return tmpMatrix;
}

function GUIDO_table_createGroup()
{
this.tableObject.table.exec(function()
	{
	this.tableGroup = this.tableObject.selection;
	});
return this;
}
function GUIDO_table_apply()
{
var selection = this.tableObject.selection;
if(selection[0] < 0 || selection[1] < 0 || selection[2] < 0 || selection[3] < 0)return this;

for(var x = selection[0];x <= selection[2];x++)
	{
	var tr = this.tbody.children[x];
	if(!tr)continue;
	for(var y = selection[1];y <= selection[3];y++)
		{
		var td = tr.children[y];
		if(!td)continue;
		//func.call(td,x,y);
		for(var z = 0;z < arguments.length;z++)
			{
			if(arguments[z].nodeType)
				{
				if(arguments[z].parentElement)
					{
					td.appendChild(arguments[z].cloneNode(true));
					}else{
					td.appendChild(arguments[z]);
					}
				continue;
				}else if(typeof arguments[z] == "string") {
				td.appendChild(document.createTextNode(arguments[z]));
				continue;
				}else if(typeof arguments[z] == "object")
				{
				for(var w in arguments[z])
					{
					if(w == 'style')
						{
						if(typeof td.style.setAttribute == 'object')
								{
								td.style.setAttribute('cssText',arguments[z][w]);// IE Backward Support
								}else{
								td.setAttribute('style',arguments[z][w]); // Forward Support
								}	
						}else{
						td[w] = arguments[z][w];	
						}
						
					}
				}
			}
		}
	}
return this;
}

function GUIDO_table_editableOn()
{
this.exec(function()
	{
	this.contentEditable = true;
	this.onkeydown = GUIDO_table_event_onkeydown;
	this.onmouseup = GUIDO_table_event_onmousedown;
	this.getRowAndCol = GUIDO_table_task_getRowAndCol;
	this.onfocus = GUIDO_table_event_initOnChangeEvent;
	this.onblur = GUIDO_table_event_endOnChangeEvent;
	});
}

function GUIDO_table_tagOnChangeEvent(func,selection)
{
this.exec(function()
	{
	this.tagEventFunc = func;	
	window.tmpVar = this;	
	});
this.tableObject.selection = selection;
this.exec(function(x,y)
	{
	this.targetFuncTd = tmpVar;
	this.style.backgroundColor="red";
	this.onchange = function(){this.targetFuncTd.tagEventFunc.apply(this.targetFuncTd,arguments)};
	});
return this;
}

function GUIDO_table_event_initOnChangeEvent()
{
this.originalHTML = this.innerHTML;
}
function GUIDO_table_event_endOnChangeEvent()
{
if(this.originalHTML != this.innerHTML)
	{
	if(this.onchange)this.onchange(this);
	this.originalHTML = this.innerHTML;
	}
return this;
}

function GUIDO_table_event_onmousedown(event)
{	

if(document.selection)
	var range = document.selection;
	else
	var range = document.getSelection();

if(range.type == "Range")
	return true;
	else
	GUIDO_table_task_selectAllText(this);

}

function  GUIDO_table_event_onkeydown(event)
{
window.test = event;

if(document.selection)
	var range = document.selection;
	else
	var range = document.getSelection();
window.test = range;

	
if(event.keyCode == 13) // Enter Key
	{
	GUIDO_table_task_focusFromPoint(this,1,0);
	return false;	
	}
if(event.keyCode == 40) // Down Key
	{
	GUIDO_table_task_focusFromPoint(this,1,0);
	return false;	
	}
if(event.keyCode == 38) // Up Key
	{
	GUIDO_table_task_focusFromPoint(this,-1,0);
	return false;	
	}
if(range.type == "Caret" && this.innerHTML != "")return true;

if(event.keyCode == 37) // Left Key
	{
	GUIDO_table_task_focusFromPoint(this,0,-1);
	return false;	
	}
if(event.keyCode == 39) // Right Key
	{
	GUIDO_table_task_focusFromPoint(this,0,1);
	return false;	
	}
}

function GUIDO_table_task_getRowAndCol()
{
var row = this.parentElement;
var col = this;
var rowCount = 0;
var colCount = 0;
while(row.previousSibling)
	{
	rowCount++;
	row = row.previousSibling;
	}
while(col.previousSibling)
	{
	colCount++;
	col = col.previousSibling;
	}
return [rowCount,colCount];
}

function GUIDO_table_task_selectAllText(obj)
{
if(obj.innerHTML == "")return true;
if (document.selection) {
        var range = document.body.createTextRange();
        if(range.type == "Caret")return false;
        range.moveToElementText(obj.firstChild);
        range.select();
    } else if (window.getSelection()) {
        var range = document.createRange();
        if(range.type == "Caret")return false;
        range.selectNode(obj.firstChild);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

function GUIDO_table_task_focusFromPoint(obj,toRow,toCol)
{
var ret = obj.getRowAndCol();
var row = ret[0];
var col = ret[1];
if(toRow != 0)
	{
	if(obj.tableObject.table.tbody.children[row+toRow])
		{
		row = row + toRow;	
		}
	}
if(toCol != 0)
	{
	if(obj.tableObject.table.tbody.children[row].children[col+toCol])
		{
		col = col + toCol;	
		}	
	}
while(toRow != 0 && 
	obj.tableObject.table.tbody.children[row].children[col] && 
	obj.tableObject.table.tbody.children[row].children[col].style.display == 'none')
	{
	row = row + toRow;
	}
while(toCol != 0 && 
	obj.tableObject.table.tbody.children[row].children[col] && 
	obj.tableObject.table.tbody.children[row].children[col].style.display == 'none')
	{
	col = col + toCol;
	}

var tmpSelect = obj.tableObject.selection;
obj.tableObject.table.select(row,col,row,col).exec(function(){this.focus();GUIDO_table_task_selectAllText(this);});
obj.tableObject.selection = tmpSelect;
return false;
}