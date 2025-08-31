import type { FormRules } from 'element-plus'

/**
 * 表单项配置接口
 * @interface FormItem
 */
export interface FormItem {
  /** 字段名，用于表单数据的键名 */
  field: string
  /** 表单项标签 */
  label: string
  /** 表单项类型 */
  type: 'input' | 'select' | 'date' | 'number'
  /** 占位文本 */
  placeholder?: string
  /** 选择器选项，仅在 type 为 'select' 时有效 */
  options?: Array<{
    /** 选项显示文本 */
    label: string
    /** 选项值 */
    value: string | number | boolean
  }>
  /** 是否必填 */
  required?: boolean
  /** 表单验证规则 */
  rules?: FormRules[string]
}

/**
 * 动态表单组件 Props 接口
 * @interface DynamicFormProps
 */
export interface DynamicFormProps {
  /** 表单数据对象 */
  modelValue: Record<string, unknown>
  /** 表单项配置数组 */
  formItems: FormItem[]
  /** 表单验证规则 */
  rules?: FormRules
  /** 表单标签宽度 */
  labelWidth?: string
}
