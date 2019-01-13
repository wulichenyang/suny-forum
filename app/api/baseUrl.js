import { apiPrefix } from '@configs';

/**
 * 接口域名的管理
 */
const baseUrl = {
    // don't use proxy
    // dev: `http://localhost:3000${apiPrefix}`,  
    
    // use proxy  
    dev: `${apiPrefix}`,  
    // dev: `${apiPrefix}`,
    // bd: 'http://xxxxx22222.com/api'
}

export default baseUrl;