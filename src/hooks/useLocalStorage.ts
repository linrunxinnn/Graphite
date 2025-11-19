// 示例：自定义Hook - useLocalStorage
// import { useState, useEffect } from 'react';

// function useLocalStorage<T>(
//   key: string,
//   initialValue: T
// ): [T, (value: T | ((val: T) => T)) => void] {
//   // 从 localStorage 获取初始值
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(`Error reading localStorage key "${key}":`, error);
//       return initialValue;
//     }
//   });

//   // 返回一个设置值的函数，会同时更新 state 和 localStorage
//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.error(`Error setting localStorage key "${key}":`, error);
//     }
//   };

//   return [storedValue, setValue];
// }

// export default useLocalStorage;
