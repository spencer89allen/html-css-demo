import React from 'react';

import Header from './Components/Header/Header';
import CssBoxModel from './Components/CssBoxModel/CssBoxModel';
import CssFloatDisplay from './Components/CssFloatDisplay/CssFloatDisplay';
import FontBackground from './Components/FontBackground/FontBackground';
import Position from './Components/Position/Position';
import Selectors from './Components/Selectors/Selectors';
import FancyEffects from './Components/FancyEffects/FancyEffects';
import Animation from './Components/Animation/Animation';
import FlexBox from './Components/FlexBox/FlexBox';
import GridVariables from './Components/GridVariables/GridVariables';
import MediaQueries from './Components/MediaQueries/MediaQueries';
import Elements from './Components/Elements/Elements';

function App() {
  return (
    <div className='container'>
      <br />
      <Header />
      <CssBoxModel />
      <CssFloatDisplay />
      <FontBackground />
      <Position />
      <Selectors />
      <FancyEffects />
      <Animation />
      <FlexBox />
      <GridVariables />
      <MediaQueries />
      <Elements />
    </div>
  );
}

export default App;
