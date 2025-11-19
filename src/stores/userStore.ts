// 示例：Zustand Store - userStore
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface UserState {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (user: User) => void;
//   logout: () => void;
//   updateProfile: (updates: Partial<User>) => void;
// }

// export const useUserStore = create<UserState>()(
//   persist(
//     (set, get) => ({
//       user: null,
//       isAuthenticated: false,

//       login: (user: User) => {
//         set({ user, isAuthenticated: true });
//       },

//       logout: () => {
//         set({ user: null, isAuthenticated: false });
//       },

//       updateProfile: (updates: Partial<User>) => {
//         const currentUser = get().user;
//         if (currentUser) {
//           set({ user: { ...currentUser, ...updates } });
//         }
//       },
//     }),
//     {
//       name: 'user-storage',
//     }
//   )
// );
