/** 
 * api接口的统一出口
 */

import * as userApi from '@api/apis/user';
import * as forumApi from '@api/apis/forum';
// 其他模块的接口……

// 导出接口
export {
  userApi,
  forumApi,
  // ……
}