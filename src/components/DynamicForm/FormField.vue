<script setup lang="ts">
/**
 * @description 动态表单字段组件
 * 根据配置动态渲染不同类型的表单控件，处理值的双向绑定和类型转换
 */
import { computed } from 'vue'
import type { FormItem } from '@/types/form'
import { fieldComponents } from './config/fieldMapping'

/** 组件 Props 类型定义 */
interface Props {
  /** 字段值 */
  modelValue: unknown
  /** 字段配置项 */
  item: FormItem
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

/** 计算占位文本 */
const placeholder = computed(() => props.item.placeholder || `请输入${props.item.label}`)
/** 获取当前字段对应的组件配置 */
const currentField = computed(() => fieldComponents[props.item.type])

/**
 * 处理值变更
 * @param value - 新的字段值
 */
const handleValueChange = (value: unknown) => {
  const transformValue = currentField.value.transformValue
  emit('update:modelValue', transformValue ? transformValue(value) : value)
}

/**
 * 获取字段组件的 props
 * 根据字段类型返回不同的属性配置
 */
const getFieldProps = computed(() => {
  // 基础属性配置
  const baseProps = {
    modelValue: props.modelValue,
    placeholder: placeholder.value,
  }

  // select 类型需要额外的 options 属性
  if (props.item.type === 'select') {
    return {
      ...baseProps,
      options: props.item.options || [],
    }
  }

  return baseProps
})
</script>

<template>
  <component
    :is="currentField.component"
    v-bind="getFieldProps"
    @update:model-value="handleValueChange"
  />
</template>
