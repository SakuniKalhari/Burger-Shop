import React,{ Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BurgerHome from './containers/BurgerBuilder/BurgerHome'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <BurgerHome />
        </Layout>
      </div>
    );
  }
}

export default App;
