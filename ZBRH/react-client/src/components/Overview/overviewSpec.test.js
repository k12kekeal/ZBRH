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
//  [TODO:] [#] should dynamically render the number of reviews for the chosen product
//  [X] Clicking the link should take you to the Ratings & Reviews section
//  [X] This segment should be hidden if there are no reviews

//  --Product Category--

//  [X] Should render product category

//  --Produce Title--

//  [X] Should render product title

//  --Price--

//  [X] Should be a price
//[TODO:] When currentStyle changes, dynamically render new price
//  [TODO:] If discounted, sale price should appear in red followed by the origin price, struckthrough
//[TODO:] Look up how to do basic CSS lol - color, strikethrough, conditional rendering
//[TODO:] Toggle between CSS styling for sale price & origin price

//  --Default Product--

//  [X] Should have default style for each product
//[X] Upon GETting all styles of current product, first in resulting styles array should be set as default aka currentStyle in state. Double check later to make sure that the first is always default, but don't worry about it too much yet.
//[FIXME:] is there any situation where we'd want to hold onto which one is the default? Anything that would reset the page that wouldn't also just re-do the GET, thereby resetting the default anyway? Hmm...

//  --Product Overview--

//  [TODO:] From GET to /products/:product_id, a combination of slogan, description, and features

//  --Share on Social Media--

//  [TODO:] Should render buttons for each social media site
//  [TODO:] Clicking the button should (?)open modal for sharing product(?)

//  STYLE SELECTOR
//[TODO:] Get all styles of current product
//[TODO:] map over all styles and for each style create a Style instance
//[TODO:] Style instance should be clickable and update state, affecting the following: displayed image and preview image, available sizes, available quantity, style name, price
//[TODO:] Style instance should have round thumbnail - materialUI Avatar or https://react-bootstrap.github.io/components/images/
// [FIXME:] styles should display in rows of 4
// The current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style.   Additionally, the title for that style should appear typed out in full above the thumbnail list.
// A user will be able to change the selected style by clicking on the thumbnail displaying that style.   Clicking on the thumbnail for the currently selected style will have no impact.3
// By default, the style selected will be the first in the list.
// A product will always have at least one style.
// Only one style can be selected at a time.  A style must be selected at all times.

//  ADD TO CART
//  Below the style selector, two dropdowns should allow the user to select the size and quantity of the item to add to their cart.   The options available within these dropdowns will vary based on the selected product style9.

//  >>>Size Selector<<<
//  The first dropdown will list all of the available sizes for the currently selected style.
// Only sizes that are currently in stock for the style selected should be listed.  Sizes not available should not appear within the list.  If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”.
// When collapsed, the dropdown should show the currently selected size.
// By default, the dropdown should show “Select Size”.

//  >>>Quantity Selector<<<
//  The second dropdown will allow the user to select a quantity of the current style and size to add to their cart.
// The options in this dropdown will be a sequence of integers ranging from 1 to the maximum.  The maximum selection will be capped by either the quantity of this style and size in stock, or a hard limit of 15.   For example, if the SKU for the selected product style and size has 4 units left in stock, the dropdown will allow choice of 1, 2, 3 or 4.  However if there are 30 units in stock, the dropdown will only present from 1 to 15.
// If the size has not been selected, then the quantity dropdown will display ‘-’ and the dropdown will be disabled.
// Once a size has been selected, the dropdown should default to 1.

//  >>>Add to Cart<<<
//  A button labeled “Add to Cart” will appear below the size and quantity dropdowns.  This button will be used to place the style, size and quantity of the product selected into the user’s cart.
// Dependent on the current selection in the size and quantity dropdowns, this button will have differing functionality.
// If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”.
// If there is no stock: This button should be hidden
// If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.

//  IMAGE GALLERY
//  The largest piece of the Overview module will be a photo gallery showing images of the product.  The photos presented in this gallery will be specific to the currently selected product style.  Each time a new style is chosen, the gallery will update to show photos corresponding to the new style.   Each style will have a set of images associated with it.  The gallery will allow customers to browse between and zoom in on these photos.
// The gallery will be viewable in two states.  A default collapsed view, and an expanded view.

//  >>>Default View<<<
//  The default view of the image gallery will be a single main image, overlaid by the list of thumbnail images.
// By default, the first image in the set will be displayed as the main image.  This image will match the smaller thumbnail image shown first.
// When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style.
// Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked.
// The thumbnail corresponding to the image currently selected as the main image should be highlighted to indicate the current selection.
// Clicking on the currently selected thumbnail will have no further effect.
// Up to 7  thumbnail images will be displayed at a given time in the list.
// If more than 7 images are in the set for the style selected, the user should be able to scroll forward and backwards through the thumbnails.   An arrow button pointing either direction should allow the customer to scroll through the remaining thumbnails in either direction.
// Customers should also be able to change to the next or previous image in the set using forward and backwards arrow buttons appearing near the right and left edges of the image, respectively.  Upon clicking the right or left arrow, the main image and the thumbnail highlighted should update.
// If upon navigating to the previous or next image using the arrows, the thumbnail corresponding to the now selected image is no longer visible, then the thumbnail list should scroll similarly such that the newly selected thumbnail is visible.
// If the user hovers over the main image anywhere other than the thumbnails, the left arrow, or the right arrow, the mouse icon should change to show a magnifying glass.  If the user clicks on the image, the image gallery should change to the expanded view.
// If the first image is selected, the left arrow should not appear.  Similarly, if the last image is selected, the right arrow should not appear.

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