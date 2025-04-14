// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(

  // 基础配置
  {

    react: true,
    typescript: true,
    ignores: ['**/*.md'],
  },

  // 全局规则
  {
    files: ['**/*{.vue,.js,.ts,}'],
    rules: {
      'no-console': 'off',
      'no-multi-assign': 'off',
      'ts/no-explicit-any': 'error',
      'ts/max-params': ['error', { max: 3 }],
      'ts/ban-ts-comment': 'off', // 关闭使用ts-ignore
      'ts-ignore': 'off', // 关闭使用ts-ignore
    },

  },

)
