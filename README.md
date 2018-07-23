# mlh-front-end

The challenge took me about 7 hours to complete, altho I did spend some time explaining hexadecimals to my sister as well as trying to figure out the rule for converting Arabic to binary numbers(still don't get it). 

I want to say it took me about 3 hours to build something I thought was presentable and responsive, but then I decided to build my own hamburger icon, styling and animating it exclusively with CSS. Had a blast!

See it in action [here](http://www.levytsroman.github.io/mlh-front-end).

# Steps to complete the challenge
* Included normalize.css CDN

  It strips or resets the default styles on elements so that elements, for example `<p>` tag has the same margin across all the browsers. Not sure if it's allowed with the no frameworks rule if not simply commenting it out doesn't change much.

* Wrote some very semantic HTML

  A lot of times, especially with react I'll use a div for virtually everything. So for the challenge I've decided to take advantage of some HTML tags, I don't normally use such as `<section>`, `<article>`, etc... It's quite nice, the page was usable even without any styling, so if for some reason CSS fails to load, the website is still usable.

* Figured out what to do about the background

  The dual colored background was very interesting, I've never had to make one. My original thought was to just have 2 divs position absolute behind everything, but that seemed like a bad idea. I found a way to utilize linear-gradient property to get the same desired dual color effect with just one line of CSS. I think that's really cool.

* Style the page from top to bottom

  Working with CSS is like building a house, upside-down, from bricks that work differently depending on bitcoin prices. Sorry got carried away, I just style from top to bottom, trying to get general dimensions and positioning. Once that's done I dive deeper into details. I use `display: flex` property a lot for positioning, not only does it perform excellently, it is also easy to use and has excellent browser support. I'm also a big fan of the flexibility and fluidity of the layout it presents allowing me to have very few breakpoints.

  Normally I also use a lot of classes. But in this particular challenge, there weren't many reusable components, and I decided to just target various elements by their tag name or traversing the DOM. I've taken advantage of CSS variables for font sizes and colors. If for any reason the color scheme changes, you just change a couple of variables on top, so I think it's pretty useful.
  I did hardcode a lot of margins and paddings. I'm not sure if I got all of them correctly, but I think that's something that can be finetuned with feedback.

* Make sure the page is responsive
  
  I've decided to cap the width at 1024px, according to w3schools: 
  > As of January 2017, about 95% of our visitors have a screen resolution of 1024x768 pixels or higher

  The higher resolution devices usually run 150% zoom or something so they'll be fine too. I've decided to position content vertically for devices smaller than 600px and added a media query to handle that. It was at this point that I decided to turn the pseudo-navbar into a hamburger icon. Took me a while, but I'm extremely proud, had to add a couple lines of javascript to handle opening and closing the content, but was 100% worth it.

* Decided to test on Edge
  
  My brilliant linear-gradient solution for dual-colored background has failed me here. So I took a picture of it and set it as a background-image on the body for browsers incompatible with linear-gradient.

* Some refactoring and code cleanup

  Went through all the code getting rid of any code that wasn't used. Refactored my JavScript a bit, added alt tags for images, and decided that my hamburger-icon CSS should live in its own file. Found a bug where if the menu is open in small resolution, then you resize the browser to make it big, you can't interact with the page, so fixed that by adding an event listener for resizing.