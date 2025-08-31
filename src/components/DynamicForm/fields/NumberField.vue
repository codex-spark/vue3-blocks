<script setup lang="ts">
/**
 * @description 数字输入框组件
 * 基于 Element Plus 的 ElInputNumber 组件封装，专用于数字类型输入
 * 支持双向绑定，自动进行数字类型转换
 */

/** 组件 Props 类型定义 */
interface Props {
  /** 输入框的值 */
  modelValue?: number
  /** 占位文本 */
  placeholder?: string
}

defineProps<Props>()

/**
 * 定义组件事件
 * 确保输出值始终为数字类型
 */
const emit = defineEmits<{
  /** 值更新事件，返回数字类型 */
  'update:modelValue': [value: number]
}>()
</script>

<template>
  <el-input-number
    :model-value="modelValue"
    :placeholder="placeholder"
    @update:model-value="(value: number) => emit('update:modelValue', value)"
  />
</template>
