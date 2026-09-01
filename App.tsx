import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { useAuthStore } from './src/store/useAuthStore';

function App(): React.JSX.Element {
  const { isLoggedIn } = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      {isLoggedIn ? <ProfileScreen /> : <LoginScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default App;
