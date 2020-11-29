import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import React from 'react';
import Overview from './Overview';

var container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// PRODUCT INFORMATION

//  --Stars--
describe('Star Rating', () => {
  test('should always render 5 stars', () => {
    act(() => {
      ReactDOM.render(<Overview value = {2.25}/>, container);
    });
    expect(document.getElementById('product-overview-rating')).toBe;
  });

  test('filled stars should correspond to average score', () => {
    expect(false).toBe(false);
  });

  test('filled stars should show up to a quarter of a review point', () => {
    expect(false).toBe(false);
  });
});
//  [X] Should render 5 stars
//  [X] Filled stars should correspond to average score
//  [X] Filled stars should show up to a quarter of a review point

//  --Review Link--

//  [X] Should be a link that reads "Read all [#] reviews"
//  [X] [#] should dynamically render the number of reviews for the chosen product
//  [X] Clicking the link should take you to the Ratings & Reviews section
//  [X] This segment should be hidden if there are no reviews

//  --Product Category--

//  [X] Should render product category

//  --Produce Title--

//  [X] Should render product title

//  --Price--

//[X] Should be a price
//[X] When currentStyle changes, dynamically render new price
//[X] If discounted, sale price should appear in red followed by the origin price, struckthrough
//[X] Look up how to do basic CSS lol - color, strikethrough, conditional rendering
//[X] Toggle between CSS styling for sale price & origin price

//  --Default Product--

//[X] Should have default style for each product
//[X] Upon GETting all styles of current product, first in resulting styles array should be set as default aka currentStyle in state.


//  --Product Overview--

//  [X] From GET to /products/:product_id, a combination of slogan, description, and features
//  [X] Should render only if available

//  --Share on Social Media--

//  [X] Should render buttons for each social media site
//  [TODO:] Clicking the button should open modal for sharing product

//  STYLE SELECTOR
//[X] Get all styles of current product
//[X] map over all styles and for each style create a Style instance
//[X] Style instance should be clickable and update state, affecting the following: displayed image and preview image, available sizes, available quantity, style name, price
//[X] Style instance should have round thumbnail - materialUI Avatar or https://react-bootstrap.github.io/components/images/
// [FIXME:] styles should display in rows of 4
// [X]The current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style.
// [X] The title for that style should appear typed out in full above the thumbnail list.
// [X] A user will be able to change the selected style by clicking on the thumbnail displaying that style.   Clicking on the thumbnail for the currently selected style will have no impact.3
// [X] By default, the style selected will be the first in the list.
// [X] A product will always have at least one style.
// [X] Only one style can be selected at a time.  A style must be selected at all times.

//  ADD TO CART

//>>>SIZE SELECTOR<<<
// [X] Dropdown menu for size that dynamically renders available sizes for selected style
// [X] If size is not available, the size should not appear in the list
// [FIXME:] If there is no remaining stock of the current style, the dropdown should become inactive and read "OUT OF STOCK"
// [X] When collapsed, the dropdown should show the currently selected size
// [X] By default, the dropdown should show "Select Size"

//  >>>Quantity Selector<<<
// [X] Dropdown menu for quantity that dynamically renders numbers
// [X] Options will be a sequence of integers ranging from 1 to the maximum, either the quantity of size and style in stock or a hard limit of 15
// [X] If size has not been selected, quantity dropdown will display '-' and dropdown will be disabled
// [TODO:] Once a size has been selected, the dropdown should default to 1

//  >>>Add to Cart<<<
// [X] A button labeled "Add to Cart" will appear below the two selectors
// [TODO:] If a size has not been selected, clicking the button will open the size menu, and a dropdown should appear saying "Please select size"
// [X] If there is no stock, this button should be hidden
// [TODO:] If valid size and quantity are selected, clicking will add the right style, size, and quantity of product to user's cart

//  IMAGE GALLERY
// [X] Render gallery photos based on currentStyle
// [X] Upon new style selection, gallery will update photos corresponding to new style
// [X] Each style will have a set of images associated with it
// [X] Gallery will allow customers to browse between photos
// [TODO:] Gallery will allow customers to zoom in on photos
// [TODO:] The gallery will have two states - default collapsed and expanded view

//  >>>Default View<<<
// [X] Create ImageGallery - functional component, use hooks to hold current index in state
// [X] Should display a single main image
// [X] Should have an overlay
// [X] Overlay should dynamically render list of thumbnail images
// [X] Should show first image in set as main image
// [X] Main image should match first thumbnail
// [X] Index of current image should be maintained after update to new style
// [X] When thumbnail is clicked, should update main image to thumbnail image
// [X Thumbnail corresponding to main image should be highlighted to indicate current selection
// [X] Clicking on currently selected thumbnail should have no further effect
// [TODO:] Up to 7 thumbnail images will be displayed at a given time in the list
// [TODO:] The user should be able to scroll forward and backwards through the thumbnails if +7 styles
// [TODO:] Two arrow buttons in either direction for scrolling
// [X] Arrow buttons on main image will change main image to next image in list
// [TODO:] Thumbnail list should scroll with main image such that selected thumbnail is always visible
// [X] Mouse on hover over main image becomes magnifying glass
// [TODO:] If user clicks on image, gallery should change to expanded view
// [X] If first image is selected, left arrow should disappear. Same for last image and right arrow

//  >>>Expanded View<<<
//  The expanded view of the image gallery will overlay the rest of the item detail page.   Much of the same functionality on the default view will also be available on the expanded view.
// The expanded view will also primarily consist of a main image.  Unlike the default view, this main image will span the entire screen.
// The main image will still offer right and left arrows, which will have the same function of scrolling through the image set.
// In the expanded view, thumbnails will not appear over the main image.  Instead, icons indicating each image in the set will appear.  These icons will be much smaller, but will have the same functionality in that clicking on them will skip to that image in the set.   Additionally the icon for the currently selected. image will be distinguishably different from the rest.
// In the default view, clicking on the image would open the expanded view.   In the expanded view, however, clicking on the main image will zoom the image by 2.5 times.   Instead of displaying a magnifying glass on hover, in the expanded view the mouse should become a “+” symbol while hovering over the main image.
// After clicking, the zoomed image will be too large to display in the space provided.   In this case, the portion of the image shown within the window should correspond to the current mouse position relative to the screen.   For example, by moving the mouse right the portion of the zoomed image shown should pan to the right.
// Furthermore, the position of the mouse relative to the centering of the zoomed image should be proportional.  If the mouse is all the way in the bottom left corner of the expanded image gallery window, the bottom left corner of the zoomed image should be displayed.   Moving the mouse to the top right should smoothly move the zoomed image available such until the top right of the image is displayed.

// While the image is zoomed, no arrow buttons or thumbnail selection icons will be available.
// The mouse should display as a “-” symbol.
// Upon clicking the image in this state, the user should be returned to the normal expanded image gallery view