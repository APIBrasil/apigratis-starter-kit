import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

import { isAuthenticated } from './middlewares/isAuthenticated'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route
              path="/auth"
              component={AuthLayout}
            />
            <Route
              path="/admin"
              render={({ location }) =>
                isAuthenticated() ? (
                  <AdminLayout />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/auth/login',
                      state: { from: location },
                    }}
                  />
                )
              }
            />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
