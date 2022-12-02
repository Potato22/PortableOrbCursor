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
##### *(not recommended)*
If you want to hide the cursor entirely, change the easing multiplier to 1 in the js.
```js
var speed = 1
```
This minimizes the potential to make the user experience feel jarring.