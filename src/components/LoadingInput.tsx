import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ActivityIndicator,
  Animated,
  TextInputProps,
} from 'react-native';

interface LoadingInputProps extends TextInputProps {
  label: string;
  isLoading: boolean;
}

export const LoadingInput: React.FC<LoadingInputProps> = ({
  label,
  isLoading,
  style,
  placeholder,
  ...rest
}) => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      fadeAnim.setValue(1);
    }
  }, [isLoading, fadeAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {isLoading ? (
        <Animated.View style={[styles.skeletonContainer, { opacity: fadeAnim }]}>
          <Text style={styles.skeletonText}>Cargando...</Text>
          <ActivityIndicator size="small" color="#999" />
        </Animated.View>
      ) : (
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          {...rest}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  skeletonContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skeletonText: {
    color: '#999',
    fontSize: 14,
  },
});
