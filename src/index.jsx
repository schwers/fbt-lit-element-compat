import fbt, {
  FbtParam,
  init as initFbt,
  IntlVariations,
} from 'fbt';

import {
  LitElement,
  html,
  customElement,
} from 'lit-element';

const LOCALE = 'en_US'; // use en_US instead of en-US, because we have internal local mappings using these
// e.g. https://github.com/facebook/fbt/blob/ecf254f469fa925eea5b964fa8f0af36ab750dab/runtime/nonfb/IntlPhonologicalRewrites.js#L43
const viewerContext = {
  GENDER: IntlVariations.GENDER_UNKNOWN,
  locale: LOCALE,
};

initFbt({
  translations: {
    [ LOCALE ]: {},
  },
  hooks: {
    getViewerContext: () => viewerContext,
  }
});

@customElement('lit-fbt-test-one')
export class TestOne extends LitElement {
  render() {
    return html`<div>Test one, ensure LitElement is working<div>`;
  }
}

@customElement('lit-fbt-test-two')
export class TestTwo extends LitElement {
  render() {
    return html`<div>
      Test two, call out to fbt simple jsx:
      ${ <fbt desc="test two">testing fbt</fbt> }
    </div>`;
  }
}

/* Example of inability to use basic html auto-params
 * Throws a compiler error. To test:
 *   - comment other TestThree implementation
 *   - uncomment this.
 *   - run `npm start` if not doing so already to view compiler error
 *
*/
@customElement('lit-fbt-test-three')
export class TestThree1 extends LitElement {
  render() {
    return html`<div>
      Test three, try fbt auto-params:
      ${ <fbt desc='bold param'><strong>bold</strong></fbt> }
    </div>`;
  }
}

/* Example of inability to make nested usage of lit-element markup
 * Throws a compiler error. To test:
 *   - comment other TestThree implementation
 *   - uncomment this.
 *   - run `npm start` if not doing so already to view compiler error
 *
 */
@customElement('lit-fbt-test-three')
export class TestThree2 extends LitElement {
  render() {
    return html`<div>
      Test three, try making params manually:
      ${ <fbt desc='={bold}'>
          <fbt:param name="outer param">
            { html`<strong>$
              ${
                <fbt desc="=bold">
                  <fbt:param name="inner param">
                    {'bold'}
                  </fbt:param>
                </fbt>
              }
            </strong>` }
          </fbt:param>
        </fbt> }
    </div>`;
  }
}

@customElement('lit-fbt-test-three')
export class TestThree3 extends LitElement {
  render() {
    return html`<div>
      Test three, call fbt programmatically:
      ${ fbt("calling fbt directly", "test three") }
    </div>`;
  }
}

/* Example of inability to make nested usage of lit-element markup
 * Throws a compiler error. To test:
 *   - comment other TestThree implementation
 *   - uncomment this.
 *   - run `npm start` if not doing so already to view compiler error
 */
@customElement('lit-fbt-test-four')
export class TestFour1 extends LitElement {
  render() {
    return html`<div>
      Test four, try making params manually:
      ${ <fbt desc='={bold}'>
          next is bold:
          <fbt:param name="outer param">
            { html`<strong>$
              ${
                <fbt desc="=bold">
                  <fbt:param name="inner param">{'bold'}</fbt:param>
                </fbt>
              }
              </strong>`
            }
          </fbt:param>
        </fbt> }
    </div>`;
  }
}

@customElement('lit-fbt-test-four')
export class TestFour2 extends LitElement {
  render() {
    return html`<div>
      Test four, try fbt programmatic call with params:
      ${ fbt('Hello, ' + fbt.param('test param',  'fbt'), 'test four, params') }
    </div>`;
  }
}
