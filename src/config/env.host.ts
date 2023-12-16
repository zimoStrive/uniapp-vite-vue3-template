type EnvType =  'development' | 'production' | 'beta';

interface EnvConfig {
  baseUrl: string;
}

/* 
  Record<Keys, Type> 是 TS 中的一个工具类型，用于创建具有指定键类型和值类型的对象类型。
  在这里，Keys 是键的类型，Type 是值的类型。
*/
const envHost: Record<EnvType, EnvConfig> = {
  development: {
    baseUrl: 'http*****dev'
  },
  beta: {
    baseUrl: 'http*****beta'
  },
  production: {
    baseUrl: 'http*****prod'
  }
};

function getEnvConfig(envType: EnvType): EnvConfig  {
  return envHost[envType];
}
// 默认环境类型
const defaultEnvType: EnvType = 'development';

// 获取当前环境类型，如果未定义则使用默认环境
const currentEnvType: EnvType = (import.meta.env.MODE as EnvType) || defaultEnvType;

// 在这里进行调整，如果是开发环境，使用 'development'，否则使用当前环境类型
const useHost = getEnvConfig(currentEnvType).baseUrl

console.log('当前环境类型：', currentEnvType);
export default useHost;