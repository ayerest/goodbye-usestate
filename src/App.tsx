import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Counter from './Counter/Counter.tsx';
import BuyCard from './BuyCard/BuyCard.tsx';
import Todo from './Todo/Todo.tsx';
import ProfileForm from './ProfileForm/ProfileForm.tsx';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false} }})

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      {/* <Counter /> */}
      {/* <BuyCard /> */}
      {/* <Todo /> */}
      <ProfileForm />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default App;