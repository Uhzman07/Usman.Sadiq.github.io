Install prettier Code Formatting that allows us to keep our code inline and well indented
// Note that the external font was generated from Google Font
By default, a paragraph is set to 1 rem

The three-line appearance of the hamburger menu icon is primarily caused by the combination of the flex-direction: column; and justify-content: space-between; properties applied to the .hamburger-icon class.

flex-direction: column;: This property sets the direction of the flex container's main axis to be vertical, meaning its children elements (the lines of the hamburger icon) will be stacked on top of each other vertically.

justify-content: space-between;: This property distributes the children elements along the main axis with equal space between them. Since the container is set to a vertical direction, this creates space between each line, resulting in one line at the top, one in the middle, and one at the bottom.


/** Note that this is used to add some styling based on the size of the device been used */
@media screen and (max-width: 1200px) {
    #desktop-nav{
        display: none; /* This means that when the screen size is less or equal to 1200 px, then the desktop nav is going to disapper */