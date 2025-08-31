import type { Component } from 'vue'
import type { FormItem } from '@/types/form'
import { InputField, NumberField, DateField, SelectField } from '../fields'

/**
 * 字段组件配置类型
 * 使用映射类型确保所有表单项类型都有对应的组件配置
 */
type FieldComponents = {
  [K in FormItem['type']]: {
    /** 字段对应的组件 */
    component: Component
    /** 值转换函数，用于处理组件值的类型转换 */
    transformValue?: (value: unknown) => unknown
  }
}

/**
 * 字段组件映射配置
 * 为每种表单项类型定义对应的组件和值转换逻辑
 */
export const fieldComponents: FieldComponents = {
  /** 文本输入框配置 */
  input: {
    component: InputField,
    transformValue: (value) => String(value || ''),
  },
  /** 数字输入框配置 */
  number: {
    component: NumberField,
    transformValue: (value) => Number(value || 0),
  },
  /** 日期选择器配置 */
  date: {
    component: DateField,
    transformValue: (value) => String(value || ''),
  },
  /** 选择器配置 */
  select: {
    component: SelectField,
  },
}
