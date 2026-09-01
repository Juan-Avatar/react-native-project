# LoginApp

Aplicación móvil desarrollada con **React Native 0.84.0** y **Zustand 5.0.14** para la gestión de estado y persistencia de credenciales locales mediante **AsyncStorage**.

## Características

- Autenticación con credenciales persistentes en almacenamiento local.
- Entorno desacoplado con store modular (`useAuthStore`).
- Input reutilizable con animación de carga (`useEffect` y API `Animated`).
- Pantalla de bienvenida / perfil tras inicio de sesión exitoso.

## Requisitos

- Node.js >= 22.11.0
- JDK 17
- Android SDK (API 34)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone git@github.com:Juan-Avatar/react-native-project.git
   cd react-native-project
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

## Ejecución

### Android

1. Iniciar el servidor Metro:
   ```bash
   npm start
   ```

2. Ejecutar en dispositivo o emulador:
   ```bash
   npm run android
   ```

## Credenciales de prueba

- **Usuario:** `admin`
- **Contraseña:** `1234`
