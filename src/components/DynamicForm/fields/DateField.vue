<script setup lang="ts">
/**
 * @description 日期选择器组件
 * 基于 Element Plus 的 ElDatePicker 组件封装
 * 默认使用日期类型，返回日期字符串
 */

/** 组件 Props 类型定义 */
interface Props {
  /**
   * 日期值
   * 使用 ISO 格式的日期字符串
   */
  modelValue?: string
  /** 占位文本 */
  placeholder?: string
}

defineProps<Props>()

/** 定义组件事件 */
const emit = defineEmits<{
  /**
   * 值更新事件
   * @param value ISO 格式的日期字符串
   */
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <el-date-picker
    :model-value="modelValue"
    :placeholder="placeholder"
    type="date"
    @update:model-value="(value: string) => emit('update:modelValue', value)"
  />
</template>
