/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [numero, setNumero] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1, // Make sure the view takes full screen height
  };

  const handleSubmit = () => {
    // Basic validation
    if (!numero.trim() || !monto.trim()) {
      Alert.alert('Error', 'Por favor complete los campos requeridos');
      return;
    }

    console.log('Formulario enviado:', {numero, monto, mensaje});
    Alert.alert(
      'Formulario Enviado',
      `Número: ${numero}\nMonto: S/ ${monto}\nMensaje: ${mensaje}`,
    );

    // Reset form
    setNumero('');
    setMonto('');
    setMensaje('');
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={{backgroundColor: backgroundStyle.backgroundColor}}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}} // Add padding at bottom
      >
        <View style={{padding: safePadding}}>
          <Text style={styles.formTitle}>Formulario de Ejemplo</Text>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Número:</Text>
            <TextInput
              style={styles.input}
              value={numero}
              onChangeText={setNumero}
              keyboardType="numeric"
              placeholder="Ingrese un número"
            />

            <Text style={styles.label}>Monto S/:</Text>
            <TextInput
              style={styles.input}
              value={monto}
              onChangeText={setMonto}
              keyboardType="decimal-pad"
              placeholder="Ingrese el monto"
            />

            <Text style={styles.label}>Mensaje:</Text>
            <TextInput
              style={[styles.input, styles.messageInput]}
              value={mensaje}
              onChangeText={setMensaje}
              placeholder="Escriba su mensaje"
              multiline
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  messageInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
