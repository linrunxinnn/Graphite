// 示例：TypeScript 类型定义
// 基础类型
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   avatar?: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface Project {
//   id: string;
//   name: string;
//   description?: string;
//   ownerId: string;
//   members: string[];
//   status: 'active' | 'archived' | 'deleted';
//   createdAt: Date;
//   updatedAt: Date;
// }

// API 响应类型
// export interface ApiResponse<T> {
//   success: boolean;
//   data: T;
//   message?: string;
//   errors?: string[];
// }

// export interface PaginatedResponse<T> {
//   items: T[];
//   total: number;
//   page: number;
//   pageSize: number;
//   hasNext: boolean;
//   hasPrev: boolean;
// }

// 组件 Props 类型
// export interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary' | 'danger';
//   size?: 'small' | 'medium' | 'large';
//   disabled?: boolean;
//   loading?: boolean;
// }

// 枚举类型
// export enum UserRole {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest',
// }

// export enum ProjectStatus {
//   ACTIVE = 'active',
//   ARCHIVED = 'archived',
//   DELETED = 'deleted',
// }
