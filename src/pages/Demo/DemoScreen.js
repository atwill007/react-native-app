import React from 'react';

import HelloWorldApp from '../../components/HelloWorldApp';
import Bananas from '../../components/Bananas';
import PizzaTranslator from '../../components/PizzaTranslator';
import TouchEvent from '../../components/TouchEvent';
import ScrollDemo from '../../components/ScrollDemo';
import FlatListDemo from '../../components/FlatListDemo';
import ApiFetch from '../../components/ApiFetch';

export default function DemoScreen() {
  return (
    <React.Fragment>
      <HelloWorldApp name="RN" />
      <Bananas />
      <PizzaTranslator />
      <TouchEvent />
      <ScrollDemo />
      <FlatListDemo />
      <ApiFetch />
    </React.Fragment>
  );
}
