## Deadly Ninja Throw

This game demonstrates the application of the gesture of mixins. The aim of the game is to get a [shuriken](https://en.wikipedia.org/wiki/Shuriken) at the target.
<p align="center">
  <img src="./pictures/logo.png">
</p><br>

### Discussion: What can go wrong, and how to deal with it?
When you use gesture mixins in your applications you may have some difficulties that make it difficult to call
 callbacks/events because of which they may not trigger immediately or not be called at all.
 In this discussion, I want to describe the main reasons for the incorrect work of mixins.
 
### Size matters
The most common reason is that the element size is too small. 
When developing mobile applications, make sure that the element in which you are using the gesture-mixins has a large enough 
size to ensure comfortable operation with at least two fingers. This is especially actual for 
[`Pinch-gesture mixin`](https://github.com/Halochkin/Components/tree/master/Gestures/PinchGestureMixin).  
If the element is too small to make gestures on its area and one finger is outside its borders, it will be equal to using only 
one finger and the `pinchCallback/event` will not trigger.<br>
If you can't increase the size of the element but you need to add a mixin 
gesture for it you can add a callback/event to the parent element.
### Your item is too responsive.
Quite often, when using gestures, you can activate the browser's built-in gestures (which are used to navigate the page, zoom in and out of scrolling and other browser control functions) at the same time as a call/event that will call for unnecessary changes to the field of view.
####  Why this happens and how to fix it?
This problem will occur every time the largest item size is larger than the device display size.<br>
You can solve this problem in 3 ways
#### 1. `Touch-action` CSS property
The `touch-action` CSS property determines whether touch input MAY trigger default behavior supplied by user agent. This includes, but is not limited to, behaviors such as panning or zooming. 
The result of touching an element depends on the value of the touch-action property and the standard settings for touching the element and its ancestors. You can selectively disable the standard touch behavior, thus preventing sending if the behavior is not required.<br>
**`none`** The element of the prohibited standard of conduct at the touch.<br>
If you don't want to allow the necessary standard behaviors on an element, such as:<br>
**`pan-x`** Allowed panning with the fingers of the x-axis Can be combined with pan-y, pan up, pan down and zoom with your fingers. <br>
**`pan-y`** Allowed panning with your fingers for the y-axis Can be combined with pan-x, pan up, pan down and zoom with your fingers. <br>
**`pan-left`** You can only pan with your fingers if the action starts by panning to the left. That is, the user moves his finger to the right. After you start scrolling, you can change the direction to the opposite.<br>
**`pan-right`** You can only pan with your fingers if the action starts by panning to the right. That is, the user moves his finger to the left. After you start scrolling, you can change the direction to the opposite.<br>
**`pan-up`** You can only pan with your fingers if the action starts by panning up. That is, the user moves his finger down. After you start scrolling, you can change the direction to the opposite.<br>
**`pan-down`** You can only pan with your fingers if the action starts by panning down. That is, the user moves his finger up. After you start scrolling, you can change the direction to the opposite.<br>
**`pinch-zoom`** Allowed zoom with a few fingers. Can be combined with pan-x, pan-left, pan-right, pan-y, pan-up, pan-down.<br>









#### Example
```html
<parent-element>
       <child-element></child-element>
</parent-element>
```

```javascript
import {PinchGesture} from "https://rawgit.com/Halochkin/Components/master/Gestures/PinchGestureMixin/src/PinchMixin.js";
import {DragFlingGesture} from 'https://rawgit.com/Halochkin/Components/master/Gestures/DragFlingMixin/src/DragFlingGestureMixin.js';
class Parent extends PinchGesture(HTMLElement){
  
  spinCallback(detail){                                     //[1]
    let child = document.querySelector("child-element");
    child.style.transform = `rotate(${detail.rotation}deg`;
  }
}
class Child extends DragFlingGesture(HTMLElement){
  
    constructor(){
      super();
      this.style.position = "absolute";
    }
    
    draggingCallback(detail){
     this.style.left = (parseFloat(this.style.left) + detail.distX) + "px";
     this.style.top = (parseFloat(this.style.top) + detail.distY) + "px";
    }
}
  customElements.define("parent-element", Parent);
  customElements.define("child-element", Child);
```
[1]  `spin` gesture will be triggered outside the child element. This will significantly increase the area to activate the event.
[2]   since two fingers are not required for `drag` event, it means that it can be called directly from the element.<br>
This example demonstrates how you can use a mixin outside of an element.
<<<<<<< HEAD
 #### Dark side of the Shadow DOM
 If you use `Shadow DOM` you may notice that callbacks do not fire in components inside the shadow tree.
 
 
 ## Editing and continue to follow ...
=======
 ## Editing and continue to follow ...
>>>>>>> github2/master
