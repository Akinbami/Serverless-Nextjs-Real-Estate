import App from "next/app"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper";
import { PersistGate } from 'redux-persist/integration/react';
import React from "react"

// import factory from "../redux/configureStore";
import factory from "../redux/store";

const  store = factory({});

class MyApp extends App {
  // static async getInitialProps({Component, ctx}) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //   console.log(pageProps)
  //   return { pageProps };
  // }

  render(){
    const { Component, pageProps} = this.props;
    // const Component = this.props.Component;
    // const appProps = this.props.appProps

    return(
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
