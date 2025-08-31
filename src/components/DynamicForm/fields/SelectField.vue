<script setup lang="ts">
/**
 * @description 选择器组件
 * 基于 Element Plus 的 ElSelect 组件封装
 * 支持字符串、数字、布尔值类型的选项
 */

/** 选择器选项接口 */
interface Option {
  /** 选项显示文本 */
  label: string
  /**
   * 选项值
   * 支持字符串、数字、布尔值类型
   */
  value: string | number | boolean
}

/** 组件 Props 类型定义 */
interface Props {
  /**
   * 当前选中的值
   * 类型需要与选项值类型匹配
   */
  modelValue?: string | number | boolean
  /** 占位文本 */
  placeholder?: string
  /**
   * 选项列表
   * 必须提供，否则选择器无选项
   */
  options: Option[]
}

defineProps<Props>()

/** 定义组件事件 */
const emit = defineEmits<{
  /**
   * 值更新事件
   * @param value 选中项的值，类型与选项值类型一致
   */
  'update:modelValue': [value: string | number | boolean]
}>()
</script>

<template>
  <el-select
    :model-value="modelValue"
    :placeholder="placeholder"
    @update:model-value="(value: string) => emit('update:modelValue', value)"
  >
    <el-option
      v-for="option in options"
      :key="String(option.value)"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>
