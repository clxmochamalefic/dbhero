import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { atom } from 'jotai';

const isDarkMode = useColorScheme() === 'dark';
export const backgroundColorAtom = atom(isDarkMode ? Colors.darker : Colors.lighter);
