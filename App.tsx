import {GluestackUIProvider, Text, Theme} from '@gluestack-ui/themed';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {config} from '@gluestack-ui/config';
import ApplicationNavigator from './src/navigators/Application';
import AuthGuard from './src/components/auth/AuthGuard';
import {useEffect} from 'react';
import {useCameraPermission} from 'react-native-vision-camera';
import {CodeScannerPage} from './src/components/molecules/Scanner/CodeScannerPage';

export default function App() {
  const {hasPermission, requestPermission} = useCameraPermission();
  console.log(hasPermission);
  useEffect(() => {
    requestPermission();
  }, []);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <AuthGuard>
          <ApplicationNavigator />
        </AuthGuard>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
