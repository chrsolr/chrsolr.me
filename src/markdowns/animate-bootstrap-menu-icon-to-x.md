![](https://i.imgur.com/wuKtuYc.jpg)

# Animate Bootstrap Menu Icon To (X)

#### Christian Soler
##### *March 23, 2016*

---

In this post we are going to animate the Bootstrap Navigation Icon that is displayed in mobile devices. We'll be animating the transition from the Hamburger Icon (&#9776;) to a Close Icon (&#215;). This effect is used in many Webpages and Mobile Devices such as Android Devices. Let's get started!!!

### Pre-requisite
1. Have Bootstrap already added to your page.
2. Have a navbar component already added to your page. 

### The Trick
Whenever the user clicks on the menu button, Bootstrap will remove the "collapsed" class in our menu button. Our trick consists of animating to a close icon (&#215;) whenever the "collapsed" class is not present in our menu button and to a Hamburger icon (&#9776;) when it is.

### Close icon - (&#215;)
First we'll be creating the Close Icon (&#215;). We need to target all of our menu icon bars by using the ".navbar-toggle span.icon-bar" in our CSS and set the animation transition speed to 300ms or whatever value works for you.
```css
.navbar-toggle span.icon-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
}
```
Next we'll be targeting each bar individually. We are going to start with the first bar icon. First, we need to center it horizontally and then rotate it 45deg. We will accomplish this by using the translate and rotate values of the transform property.
```css
.navbar-toggle span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(300%) rotate(45deg);
  transform: translateY(300%) rotate(45deg);
}
```
**NOTE:** *We are targeting the "nth-child(2)" because Bootstrap contains a screen reading span tag within our menu button as the first span. So the first icon bar is actually the second span.*

Now, for the middle bar icon the effect we are aiming for is to fade out the bar icon as the transition is happening. To accomplish this effect, we are going to target the middle bar and set the opacity property to the value of 0.
```css
.navbar-toggle span.icon-bar:nth-child(3) {
  opacity: 0;
}
```
The last bar icon is similar to the first bar icon but with negative values.
```css
.navbar-toggle span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(-300%) rotate(-45deg);
  transform: translateY(-300%) rotate(-45deg);
}
```
Now we should be able to see the Close Icon in our navigation bar.

### Hamburger icon - (&#9776;)
The Hamburger icon is very simple. All we have to do is to reset all the values we used to create the Close Icon. If you remember from the "The Trick" section, we'll do this whenever the "collapsed" class is present in our menu button.

For the first and last bar icon, we'll be resetting the translate and rotate values to 0. 
```css
.navbar-toggle.collapsed span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(0) rotate(0);
}

.navbar-toggle.collapsed span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(0) rotate(0);
}
```
And for the middle bar icon, we'll be resetting the opacity value back to 1.
```css
.navbar-toggle.collapsed span.icon-bar:nth-child(3) {
  opacity: 1;
}
```
Now we should be able to see the effect. The 3 bars of our navigation menu should turn into an (X) whenever the menu is open and turn back to the 3 bars whenever the menu is close.

### Here is a Codepen version
<iframe height="300" style="width: 100%;" scrolling="no" title="Bootstrap Menu Icon to &quot;X&quot;" src="https://codepen.io/chrsolr/embed/OXYpGG?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/chrsolr/pen/OXYpGG">
  Bootstrap Menu Icon to &quot;X&quot;</a> by Christian Soler (<a href="https://codepen.io/chrsolr">@chrsolr</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Thank you for reading!!!
