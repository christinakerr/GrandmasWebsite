# GrandmasWebsite

My grandma has aphasia from a stroke, which means she struggles with remembering and pronouncing words. This web app lists words that she would like to practice, and when she clicks on them, an audio recording of the word plays.
## Deployed

[This is the deployed web app, which is optimized for my grandma's Kindle Fire.](https://christinakerr.github.io/GrandmasWebsite) 

## Versions

### Version 2

After my grandma took the site for a test run and I got her feedback, I got to work improving the user experience for her. She struggles with the concept of scrolling, so now I'm trying tabs at the top to separate each category, so that they all fit on a single screen. To do this, I tried out react-tabs for the first time, and I found it very simple and intuitive. I also changed the active styles on the word buttons so that she has a visual cue that the button has been selected.

I also wanted to play around with CSS in JS, so I refactored the word button styles into a styled component. The refactor was actually easier than I was expecting, since I hadn't worked with styled components before. I was able to implement it in 10 or 15 minutes with no issues. I might be a convert to CSS in JS. 
### Version 1

My priority with this version was getting the basics on the page so that my grandmother could take it for a test run. She is 90 years old and has very little experience with tech, so I wanted to see if she was capable of using the site.

The big task for the first version turned out to be working with audio. The code to get the audio to play was new but straightforward, but I ran into multiple CORS issues and ended up at my plan C for linking the audio to the page. This is something I'd like to return to at some point to see if there's a better way. But for now, it works!
## Tech

* JavaScript
* React.js
* HTML
* CSS
* Reactstrap
* React-Tabs
* Styled Components