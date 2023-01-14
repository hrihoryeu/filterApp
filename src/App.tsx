import React from 'react';
import { AppLayout } from './layout/AppLayout';
import { FilterBar } from './components/FilterBar/FilterBar';
import { ContactsList } from './components/ContactsList/ContactsList';
import { AppContextProvider } from './context/app.context';

function App() {
  return (
    <AppContextProvider>
      <AppLayout>
        <FilterBar>filter</FilterBar>
        <ContactsList/>
      </AppLayout>
    </AppContextProvider>
    
  );
}

export default App;
