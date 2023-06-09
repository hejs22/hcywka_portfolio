import AppProvider from './AppProvider';
import { Container } from '@mui/material';
import { RouterProvider } from 'react-router';
import { AppRouter } from './router/AppRouter';
import {
  setCustomViewportHeightVariable,
  setCustomViewportSizeVariableUpdater,
  setCustomViewportWidthVariable
} from './shared/utils/viewportHeightUtils';
import '@fontsource-variable/montserrat';

function App() {
  setCustomViewportWidthVariable();
  setCustomViewportHeightVariable();
  setCustomViewportSizeVariableUpdater();

  return (
    <AppProvider>
      <Container maxWidth="xl">
        <RouterProvider router={AppRouter} />
      </Container>
    </AppProvider>
  );
}

export default App;
