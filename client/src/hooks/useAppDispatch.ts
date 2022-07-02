import type { AppDispatch } from '~/store';
import { useDispatch } from 'react-redux';

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
