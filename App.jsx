import React from 'react';

import {ThemeProvider} from "styled-components/native";

import theme from "assets/theme/themes"

import {SView} from "components";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <SView background="accentDark" mt="medium">

        </SView>
    </ThemeProvider>
  );
};

export default App;
