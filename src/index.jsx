import fbt, {
  FbtParam,
  init as initFbt,
  IntlViewerContext,
} from 'fbt';
import React from 'react';
import ReactDOM from 'react-dom';

const LOCALE = 'en-US';

IntlViewerContext.locale = LOCALE;
initFbt({ translations: {
  [ LOCALE ]: {},
}})

const logAndReThrow = (testName, err) => {
  setTimeout(() => {
    console.error(`Error running test: ${ testName }`);
    throw err;
  });
};

const SyntaxTest = () => (
  <div>
    Simple Inferno JSX syntax test
  </div>
);

try {
  ReactDOM.render(
    <SyntaxTest />,
    document.getElementById('inferno-jsx-syntax'),
  );
} catch (e) {
  logAndReThrow('inferno-jsx syntax should always work', e);
}

const BoldItalicSyntaxText = () => (
  <div>
    <fbt desc='testing strong and italic params'>
      Inferno JSX with <strong>bold</strong> and <em>italic</em> markup
    </fbt>
  </div>
);

try {
  ReactDOM.render(
    <BoldItalicSyntaxText />,
    document.getElementById('inferno-fbt-jsx-bold-italic'),
  );
} catch (e) {
  logAndReThrow('inferno-jsx syntax should always work', e);
}

const FbtParamTest = () => {
  const param = 'FbtParam';

  return (
    <div>
      <fbt desc='testing FbtParam tag'>
        Testing <FbtParam name='param name'>{ param }</FbtParam> syntax
      </fbt>
    </div>
  )
};

try {
  ReactDOM.render(
    <FbtParamTest />,
    document.getElementById('inferno-fbt-param-jsx-syntax'),
  );
} catch (e) {
  logAndReThrow('<FBTParam /> in inferno JSX', e)
}

const ProgrammaticFBTTest = () => (
  <div>
    { fbt('fbt programmatic test', 'description') }
  </div>
);

try {
  ReactDOM.render(
    <ProgrammaticFBTTest />,
    document.getElementById('inferno-fbt-programmatic'),
  );
} catch (e) {
  logAndReThrow('fbt() function syntax in inferno JSX', e);
}