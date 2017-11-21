const { assert } = require('chai');

const positioning = require('./order/positioning');
const display = require('./order/display');
const boxModel = require('./order/box-model');
const layout = require('./order/layout');
const style = require('./order/style');
const content = require('./order/content');

describe('CSS', () => {
  describe('Order', () => {
    it('should have the same css properties', () => {
      const desiredOrder = [
        // Positioning
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'float',
        'clear',

        // Display
        'display',
        'visibility',
        'opacity',

        // Box model
        'overflow',
        'overflow-x',
        'overflow-y',
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',

        // Grid
        // Parent
        'grid',
        'grid-template',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-gap',
        'grid-row-gap',
        'grid-column-gap',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        // Children
        'grid-area',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',

        // Flexbox
        // Parent
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        // Children
        'order',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',

        // Grid and Flexbox shared properties
        // Parent
        'justify-items',
        'justify-content',
        'align-items',
        'align-content',
        // Children
        'justify-self',
        'align-self',

        // Style
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-origin',
        'background-clip',
        'background-attachment',
        'color',
        'box-shadow',

        // Font
        'font',
        'font-style',
        'font-weight',
        'font-stretch',
        'font-size',
        'line-height',
        'font-family',
        'font-variant',
        'font-variant-caps',
        'font-variant-numeric',
        'font-variant-alternates',
        'font-variant-ligatures',
        'font-variant-east-asian',
        'font-size-adjust',
        'font-effect',
        'font-emphasize',
        'font-emphasize-position',
        'font-emphasize-style',
        'font-smooth',
        'text-align',
        'text-align-last',
        'text-indent',
        'text-decoration',
        'text-transform',
        'text-outline',
        'text-shadow',
        'text-wrap',
        'text-overflow',
        'text-overflow-ellipsis',
        'text-overflow-mode',
        'text-emphasis',
        'text-emphasis-color',
        'text-emphasis-style',
        'text-emphasis-position',
        'text-justify',
        'letter-spacing',
        'tab-size',
        'word-spacing',
        'word-wrap',
        'word-break',
        'overflow-wrap',
        'white-space',
        'hyphens',
        'list-style',
        'list-style-type',
        'list-style-position',
        'list-style-image'
      ];

      assert.deepEqual(
        [
          ...positioning,
          ...display,
          ...boxModel,
          ...layout.grid,
          ...layout.flexbox,
          ...layout.shared,
          ...style,
          ...content.font.base,
          ...content.font.variant,
          ...content.font.special,
          ...content.text,
          ...content.list
        ],
        desiredOrder
      );
    });
  });
});
