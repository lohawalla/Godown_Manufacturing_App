import {GluestackUIProvider, Text, Theme} from '@gluestack-ui/themed';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {config} from '@gluestack-ui/config';
import ApplicationNavigator from './src/navigators/Application';
import AuthGuard from './src/components/auth/AuthGuard';
import BillInfo from './src/screens/purchase/BillInfo';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        {/* <AuthGuard> */}
          <ApplicationNavigator />
          {/* <BillInfo/> */}
        {/* </AuthGuard> */}
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
