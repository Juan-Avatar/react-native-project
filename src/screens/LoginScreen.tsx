import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';
import { LoadingInput } from '../components/LoadingInput';

const VALID_USER = 'admin';
const VALID_PASS = '1234';

export const LoginScreen = () => {
  const { usernameSaved, passwordSaved, login } = useAuthStore();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsername(usernameSaved);
      setPassword(passwordSaved);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [usernameSaved, passwordSaved]);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Por favor ingresa usuario y contraseña.');
      return;
    }

    if (username.trim() !== VALID_USER || password.trim() !== VALID_PASS) {
      Alert.alert(
        'Error',
        `Credenciales incorrectas.\n\nUsa las credenciales de prueba:\nUsuario: ${VALID_USER}\nContraseña: ${VALID_PASS}`
      );
      return;
    }

    login(username.trim(), password.trim());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.subtitle}>Ingresa tus credenciales para continuar</Text>

      <LoadingInput
        label="Usuario"
        placeholder="Ingresa tu usuario"
        value={username}
        onChangeText={setUsername}
        isLoading={isLoading}
        autoCapitalize="none"
      />

      <LoadingInput
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        isLoading={isLoading}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <View style={styles.hintContainer}>
        <Text style={styles.hintText}>Credenciales de prueba:</Text>
        <Text style={styles.hintCredentials}>Usuario: admin  |  Clave: 1234</Text>
      </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 48,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#a0cfff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hintContainer: {
    marginTop: 32,
    padding: 12,
    backgroundColor: '#eef2ff',
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  hintText: {
    fontSize: 12,
    color: '#4f46e5',
    fontWeight: '600',
    marginBottom: 4,
  },
  hintCredentials: {
    fontSize: 13,
    color: '#3730a3',
    fontWeight: 'bold',
  },
});
