do.js
=====

DO.dom is a library used to dynamically create large and complicated DOM structures.

````
with(DO.dom)
   {
   div({appendChild:document.body},
       div("Hello World"),
       input({type:'text',value:'Hello World'}),
       table(
            tbody(  
                  tr(td('Header 1'),td(Header 2)),
                  tr(td('Item 1'),td(Item 2))
                 )
            )
       
       );
   }
```` 

In the example above, the structure resembles(to an extent) HTML markup. A function for each HTML tag resides in the DO.dom object. When one of these functions is called it creates the DOM node it represents and loops through all the arguments that were supplied to it. There are 4 types of arguments that can be supplied to these functions.

* Objects - Used to apply attributes, events and perform actions on the node
* Strings - Strings are inserted as a text node in the order received
* Nodes - Appended as children in the order received
* Functions - Called in context of the node when it is created

DO.dom uses the natural javascript syntax to perform it's job. As such, DO.dom only needs to loop through all of the arguments supplied to each of the functions. However, because it uses the javascript syntax then the deepest node will be created first. The root node will be the last to be created of the entire structure. 

The syntax is as follows:
````
@tagName([object],[string],[function],[node]);
````
The return is always a node. To customize the node, variables must supplied in an object. Any variable given in an object will be inserted into the object. However, there are a few varibles that have special meaning.

## parentElement - Element id or node required

​This will tell DO.dom to append the element into the node provided. Ethere an element id or a node can be given. 

````
div({parentElement:'itemList'});
div({parentElement:document.body});
````

## insertBefore - Element id or node required

This will insert the element into the parent of the node provided but before the node. Either an element id or a node must be given. 

````
var foo =  div({insertBefore:'headerItem'});
div({insertBefore:foo});
```` 

## insertAfter - Element id or node required

This will insert the element into the parent of the node provided but after the node. Either an element id or a node must be given.

````
var foo div({insertAfter:'headerItem'});
div({insertAfter:foo});
```` 
 

## cls

​The supplied value will bet set as the class name of the element.

````
div({cls:'className'});
````

## html

The supplied value will be inserted as html into the element. Any existing children will be erased. 

````
div({html:'<b>Hello World</b>'});
````

#nid -  Node id

When used, the parent node that receives this element will also be linked to element by this id. This allows for parent and child awareness. 

````
var foo = div(span({nid:'nameLabel'}));
foo.nameLabel.innerHTML = "John Doe";
````

All other variables given will be applied to the element. In this way we can tag events onto the nodes. For example.

````
span({onclick:function(){alert("Clicked!"):}},"Click Here");
````