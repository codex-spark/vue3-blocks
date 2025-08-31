<script setup lang="ts">
import { ref } from 'vue'
import DynamicForm from '../components/DynamicForm/index.vue'
import type { FormInstance } from 'element-plus'
import type { FormItem } from '@/types/form'

// 定义表单配置
const formItems: FormItem[] = [
  {
    field: 'name',
    label: '姓名',
    type: 'input',
    required: true,
  },
  {
    field: 'age',
    label: '年龄',
    type: 'number',
    required: true,
  },
  {
    field: 'birthday',
    label: '出生日期',
    type: 'date',
  },
  {
    field: 'gender',
    label: '性别',
    type: 'select',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
    ],
  },
]

// 表单数据
const formData = ref({
  name: '',
  age: undefined,
  birthday: '',
  gender: '',
})

// 表单验证规则
const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
}

// 表单ref
const formRef = ref<FormInstance>()

// 提交表单
const handleSubmit = async () => {
  if (!formRef.value) return

  try {
    await formRef.value.validate()
    console.log('表单数据：', formData.value)
  } catch (error) {
    console.error('表单验证失败：', error)
  }
}

// 重置表单
const handleReset = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
</script>

<template>
  <div class="form-demo">
    <h2>动态表单示例</h2>
    <DynamicForm ref="formRef" v-model="formData" :form-items="formItems" :rules="rules" />
    <div class="form-actions">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="handleReset">重置</el-button>
    </div>
  </div>
</template>

<style scoped>
.form-demo {
  padding: 20px;
}

.form-actions {
  margin-top: 20px;
  text-align: center;
}
</style>
