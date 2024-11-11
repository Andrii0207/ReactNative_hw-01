import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    User,
    signOut,
} from 'firebase/auth';
import { auth } from '../../config';
import { setUserInfo, clearUserInfo } from '../redux/reducers/userSlice';
import { AppDispatch } from '../redux/store/store';
import { addUser, getUser, updateUserInFirestore } from './firestore';

