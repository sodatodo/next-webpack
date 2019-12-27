/*
 * @Author: soda
 * @Date: 2019-12-27 13:39:21
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-27 15:01:52
 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';

export default withRedux(initStore, { debug: false })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
      );
    }
  }
);
