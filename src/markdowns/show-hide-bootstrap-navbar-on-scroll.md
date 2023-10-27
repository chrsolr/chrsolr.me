---
title: Show/Hide Bootstrap Navbar on Scroll
author: Christian Soler
date: 2016-04-04 
slug: show-hide-bootstrap-navbar-on-scroll
summary: 'Today I’ll show you an user experience trick for your website. I’ll teach you how to show/hide a Twitter Bootstrap 3 Navigation Bar depending in which direction the user scrolls. E.g. If the user scrolls down the navigation bar will hide giving the user more screen real state. If the user scrolls up the navigation bar will show so the user can use the navigation menu. Let’s get started!!!'
coverImageUrl: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png'
---

![](https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png)

# Show/Hide Bootstrap Navbar on Scroll

Today I'll show you an user experience trick for your website. I'll teach you how to show/hide a [Twitter Bootstrap 3](http://getbootstrap.com/) Navigation Bar depending in which direction the user scrolls. E.g. If the user scrolls down the navigation bar will hide giving the user more screen real state. If the user scrolls up the navigation bar will show so the user can use the navigation menu. Let's get started!!!

#### Christian Soler
##### *April 04, 2016*

---

### Pre-requisite
1. Have [Bootstrap](http://getbootstrap.com/) already added to your page.
2. Have a navbar component already added to your page.
3. Have basic knowledge of [Typescript](https://www.typescriptlang.org/).

### Html (Pug/Jade)
Here is a basic [Bootstrap](http://getbootstrap.com/) Navigation Bar and some images just to have content in the page. This way we can view the effect taking place.
```pug
nav.navbar.navbar-default.navbar-fixed-top
    .container
        .navbar-header
            button(type="button", class="navbar-toggle collapsed", data-toggle="collapse", data-target="#navbar-top", aria-expanded="false")
                span.sr-only Toggle navigation
                span.icon-bar
                span.icon-bar
                span.icon-bar
            a.navbar-brand(href="/") GTA 5

        .collapse.navbar-collapse(id="navbar-top")
            ul.nav.navbar-nav.navbar-right
                li: a(href="http://keypunchers.io/", data-toggle="collapse", data-target=".navbar-collapse.in") KeyPunchers.io
                li: a(href="https://github.com/iamrelos", data-toggle="collapse", data-target=".navbar-collapse.in") Github
.row
  .col-xs-12
    img.img-reponsive(width="100%", src="https://techfaqs.net/wp-content/uploads/2016/06/9d35e9cd02.jpg")
    
.row
  .col-xs-6
    img.img-reponsive(width="100%", src="https://howfix.net/wp-content/uploads/2016/12/GTA-Online-Bikers.jpg")
  .col-xs-6
    img.img-reponsive(width="100%", src="https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg")
    
.row
  .col-xs-12
    img.img-reponsive(width="100%", src="http://assets2.ignimgs.com/2013/09/12/gta-v-heistsjpg-e94705_1280w.jpg")
```

### CSS (SASS)
In this approach the [CSS](https://www.w3schools.com/css/css_intro.asp) have nothing to do we the effect. It's just to change the navigation bar color and to remove some paddings.
```scss
body {
  padding-top: 50px;
}

.row {
  margin: 0;
  padding: 0;

  [class^="col-"] {
    padding: 0;
  }
}

.navbar-default {
  border: 0;
  background: rgba(73, 155, 234, 1);
  background: -moz-linear-gradient(
    left,
    rgba(73, 155, 234, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(73, 155, 234, 1)),
    color-stop(100%, rgba(32, 124, 229, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(73, 155, 234, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(73, 155, 234, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(73, 155, 234, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(73, 155, 234, 1) 0%,
    rgba(32, 124, 229, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#499bea',
      endColorstr='#207ce5',
      GradientType=1
    );
}

.nav.navbar-nav.navbar-right li a, .navbar-default .navbar-brand {
  color: white;
}
```

### JavaScript (TypeScript)
We are going to spend most of our time here. We are going to start by creating an empty class. The class constructor will take one optional parameter of type string; The tag that wraps all our navigation elements. This parameter will default to the [nav](https://www.w3schools.com/tags/tag_nav.asp) element. 
```typescript
'use strict';

class NavbarUtils {
  constructor(public tag?: string = 'nav') {}
}
```

Next let's create a function and call it **initHideOnScroll** with the return type of void.
```typescript
'use strict';

class NavbarUtils {
  constructor(public tag?: string = 'nav') {}
  
  initHideOnScroll(): void {
  }
}
```

Inside the **initHideOnScroll** function is where all the magic will happen. Inside the function we are going to need a couple of variables. Here are their with a small description for their purpose:
```typescript
'use strict';

class NavbarUtils {
  constructor(public tag?: string = 'nav') {}
  
  initHideOnScroll(): void {
    // Store ref of this.
    const _this = this;
    // How many pixel should the user scroll before the effect takes place.
    const delta = 5;
    // How fast the animation should be in milliseconds.
    const speed = 250;
    // Our navigation element wrapper
    const $nav = $(`${_this.tag}`);
    // Last top position of the page. 
    let lastPosition = 0;
    // Flag to check if the user has scrolled.
    let isScrolled = false;
  }
}
```
Now we need to create an inner function that is going to run every time the user has scrolled. We are going to call it **onHasScrolled**.
```typescript
initHideOnScroll(): void {
  // Store ref of this.
  const _this = this;
  // How many pixel should the use scroll before the effect takes place.
  const delta = 5;
  // How fast the animation should be in milliseconds.
  const speed = 250;
  // Our navigation element wrapper
  const $nav = $(`${_this.tag}`);
  // Last top position of the page. 
  let lastPosition = 0;
  // Flag to check if the user has scrolled.
  let isScrolled = false;

  // Function that gets called when user has scrolled.
  function onHasScrolled() {
  
  }
}
```

Inside this function is where all the logic is going to be. First we need to get the current top position of the page. We do this by calling the Jquery **scrollTop** function on the window element.
```typescript
function onHasScrolled() {
  const top = $(window).scrollTop();
}
```

Now we need to calculate if the user has scrolled pass our minimum pixels. If the user has not pass our minimum pixels, we will do nothing.
```typescript
function onHasScrolled() {
  const top = $(window).scrollTop();

  if (Math.abs(lastPosition - top) <= delta)
        return;
}
```

The next step is where we will decide if we should show or hide the navigation bar. To hide the navigation bar the user must have scrolled pass the last position (in other words scrolled down) and the navigation bar height. After the user have satisfied those conditions, we are going to set the navigation bar CSS top property to the navigation bar height plus 10 extra pixel.  We are going to use Jquery **animate** function to set the CSS property and add the animation.
```typescript
function onHasScrolled() {
  const top = $(window).scrollTop();
  
  if (Math.abs(lastPosition - top) <= delta)
    return;
  
  if ((top > lastPosition) && (top > $nav.outerHeight())) {
    $nav.animate({
      top: `-${Number($nav.outerHeight() + 10)}px`
    }, speed); 
  }
}
```

Now let's handle the case where the user scrolls up and we need to show the navigation bar.  To calculate this, we need to check if the user current position added to the windows height is less than the document height. If it is, we are going to set the navigation bar CSS top property to **0**. Lastly, we are going to set the **lastPosition** variable to the **top** variable.
```typescript
function onHasScrolled() {
  const top = $(window).scrollTop();
  
  if (Math.abs(lastPosition - top) <= delta)
    return;
  
  if ((top > lastPosition) && (top > $nav.outerHeight())) {
    $nav.animate({
      top: `-${Number($nav.outerHeight() + 10)}px`
    }, speed);
    
  } else {
    if (top + $(window).height() < $(document).height()) {
      $nav.animate({
        top: '0px'
      }, speed);
    }
  }
  
  lastPosition = top;
}
```

At this point nothing should be happening. We still need to do two more thing. First,  we need to set our **isScrolled** flag to true if the user scrolls in any direction. Second, we need to check if the user has scroll every X amount of time and run our **onHasScrolled** function if the user has scrolled.
```typescript
class NavbarUtils {
  constructor(public tag: string = 'nav') {}
  
  initHideOnScroll(): void {
    const _this = this;
    const delta = 5;
    const speed = 250;
    const $nav = $(`${_this.tag}`);
    let lastPosition = 0;
    let isScrolled = false;
    
    function onHasScrolled() {
      ...
    }
    
    $(window).scroll(() => { isScrolled = true; });

    setInterval(() => {
      if (isScrolled) {
        onHasScrolled();
        isScrolled = false;
      }
    }, speed);
  }
}
```

Now all we need to do is to instantiate out class and call our **initHideOnScroll** function.
```typescript
new NavbarUtils().initHideOnScroll();
```
Here is how our typescript should look like:
```typescript
'use strict';

class NavbarUtils {
  constructor(public tag: string = 'nav') {}
  
  initHideOnScroll(): void {
    const _this = this;
    const delta = 5;
    const speed = 250;
    const $nav = $(`${_this.tag}`);
    let lastPosition = 0;
    let isScrolled = false;
    
    function onHasScrolled() {
      const top = $(window).scrollTop();

      if (Math.abs(lastPosition - top) <= delta)
        return;

      if ((top > lastPosition) && (top > $nav.outerHeight())) {
        $nav.animate({
          top: `-${Number($nav.outerHeight() + 10)}px`
        }, speed);
        
      } else {
        if (top + $(window).height() < $(document).height()) {
          $nav.animate({
            top: '0px'
          }, speed);
        }
      }

      lastPosition = top;
    }
    
    $(window).scroll(() => { isScrolled = true; });

    setInterval(() => {
      if (isScrolled) {
        onHasScrolled();
        isScrolled = false;
      }
    }, speed);
  }
}

new NavbarUtils().initHideOnScroll();
```

### Codepen
<iframe height='300' scrolling='no' title='Hide Navbar on Scroll' src='//codepen.io/Iamrelos/embed/RWbPBa/?height=300&theme-id=15917&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Iamrelos/pen/RWbPBa/'>Hide Navbar on Scroll</a> by Christian Soler (<a href='https://codepen.io/Iamrelos'>@Iamrelos</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
