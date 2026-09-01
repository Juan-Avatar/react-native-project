import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

export const ProfileScreen = () => {
  const { usernameSaved, logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido, {usernameSaved}!</Text>
      <Text style={styles.subtitle}>Has iniciado sesión correctamente.</Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
