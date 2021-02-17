import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends React.Component{



  render(){



    return(
      <div>
        <Layout>
        </Layout>
        <BurgerBuilder>

        </BurgerBuilder>

      </div>
    )
  }

}

export default App;
