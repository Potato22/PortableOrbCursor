# OrbCursor
## **OrbCursor is portable** .. with Jquery.min
You can directly copy and paste it to your webdev project if you feel like wanting to look fancy and all.
```html
<head>
    <script src="jquery.min.js"></script>
    <script src="pcf.js" defer></script>
    <link rel="stylesheet" href="pcf.css">
</head>

<body>
    <div class="orbcursor"></div>
</body>
<!-- This is all you need, all the required files are inside the repository. -->
```
## **.. why jQuery?**
Unfortunately there is no way for me to do this directly on vanilla js, since `.stop()` method is crucial part to make this work as efficient and pleasing to look at as I can.


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
- Optionally you can assign a specific element for the Orb to react in the js. In this example, the element is given data: `orbReact = "true"`  
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
    --offset: -.5px;
    /*customizable variables*/

    ...
```
### **Easing**
Change the ease and movement of the orb by changing the speed variable in `poc.js`
##### default variable:
```js
let speed = .2; // easing multiplier max(1)
```
If you want to hide the cursor easing entirely, change the easing multiplier to `1` in the `poc.js`.
```js
let speed = 1;
```
This will make the cursor movement immediate.

##### *(not recommended)*
Setting the speed more than `1` will freak out the orb and perform mitosis (and reduce performance).
```js
let speed = 1.7; //perform mitosis
```
