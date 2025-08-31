<script setup lang="ts">
/**
 * @description 动态表单组件
 * 基于 Element Plus 的动态表单组件，支持多种表单项类型和表单验证
 */
import { ref } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import type { FormInstance } from 'element-plus'
import type { DynamicFormProps } from '@/types/form'
import FormField from './FormField.vue'

defineOptions({ name: 'DynamicForm' })

// 组件属性定义，设置默认值
const props = withDefaults(defineProps<DynamicFormProps>(), {
  labelWidth: '100px',
  rules: () => ({}),
})

// 定义组件事件
const emit = defineEmits<{
  'update:modelValue': [value: Record<string, unknown>]
}>()

/** 表单实例引用，用于表单验证等操作 */
const formRef = ref<FormInstance>()

/**
 * 处理表单项值变更
 * @param field - 变更的字段名
 * @param value - 新的字段值
 */
const handleValueChange = (field: string, value: unknown) => {
  const newFormData = { ...props.modelValue, [field]: value }
  emit('update:modelValue', newFormData)
}

/**
 * 触发表单验证
 * @returns Promise 验证结果
 */
const validate = () => {
  return formRef.value?.validate()
}

/**
 * 重置表单
 * 清空所有字段值，重置为初始状态
 */
const resetForm = () => {
  formRef.value?.resetFields()
}

// 暴露公共方法给父组件
defineExpose({
  validate,
  resetForm,
})
</script>

<template>
  <el-form ref="formRef" :model="modelValue" :rules="rules" :label-width="labelWidth">
    <el-form-item
      v-for="item in formItems"
      :key="item.field"
      :label="item.label"
      :prop="item.field"
    >
      <FormField
        :model-value="modelValue[item.field]"
        :item="item"
        @update:model-value="(value) => handleValueChange(item.field, value)"
      />
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
