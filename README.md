# OrbCursor
## **OrbCursor is portable** with help of Biepbot (friend :>)
Feeling fancy?
```html
<head>
    <script src="orb/poc.mjs" type="module"></script>
    <link rel="stylesheet" href="orb/poc.css">
</head>

<body>
    <orb-cursor speed="0.2"></orb-cursor>
</body>
```
Download or clone this repository then.. that's it - this is all you need to type, all the required files are inside the repository.
## **Note**
This is fully modular and contained inside a single folder "`orb`" that is put on the root. If you want to move it in any custom folder you will have to re-correct the path on the meta. (This example demonstrate what you need to do if you put it in a folder named `modulesFolder`).
```html
<head>
    <script src="modulesFolder/orb/poc-v2.mjs" type="module"></script>
    <link rel="stylesheet" href="modulesFolder/orb/poc-v2.css">
</head>

<body>
    <cursor-orb speed="0.2"></cursor-orb>
</body>
```
 You can tell I am novice since I had to explain this. But hey it works, wonderfully even.

---
## **Alright what does this do?**
### ***OrbCursor will follow your cursor relative to your viewport***
When scrolling the orb will not get left behind.  
![orbCursor](./run.gif)  
Look at them go.


### ***OrbCursor will react:***
- if the cursor is on the web page or not.
- react to any attribute links.  
![orbCursor](./attribute.png)  
- Optionally you can assign a specific element for the Orb to react. In this example, the element is given attribute: `orbReact = "true"`  
![orbCursor](./react.gif)  
###### `image of Inabakumori`

**OrbCursor has inversion filter embedded in the CSS, no visibility issues.**

---
## **Customizations**
### **Orb size**
You can change the orb size inside the `poc.css`
##### default variable:
```css
.orbcursor {
  --orbsize: 10px;
  --growScale: 10;
  --offset: -0.5px;
  --duration: 0.2s;
  /*you can add your own easing function here*/
  --sleek: cubic-bezier(0.03, 0.77, 0.34, 1);

  /*customizable variables*/

    ...
```
### **Easing**
Change the ease and movement of the orb by changing the speed variable in `poc.js`
##### default variable:
```html
    <orb-cursor speed="0.2"></orb-cursor>
                        ↑
                    this thing
```
If you want to hide the cursor easing entirely, change the easing multiplier to `1` in the `poc.js`.
```html
    <orb-cursor speed="1"></orb-cursor>
```
This will make the cursor movement immediate.