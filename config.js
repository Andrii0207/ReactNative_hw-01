// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAS2R34BJImDKreqCDRSag9tGSl2URhYG0',
    authDomain: 'react-native-hw-app-49f0a.firebaseapp.com',
    databaseURL: '<https://react-native-hw-app-49f0a.firebaseio.com>',
    projectId: 'react-native-hw-app-49f0a',
    storageBucket: 'gs://react-native-hw-app-49f0a.firebasestorage.app',
    messagingSenderId: '719140754122',
};

const app = initializeApp(firebaseConfig);

// Ініціалізація Auth з AsyncStorage для роботи редакс персистора
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

