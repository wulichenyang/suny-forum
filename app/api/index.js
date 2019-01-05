/** 
 * api接口的统一出口
 */

import * as userApi from '@api/apis/user';
import * as forumApi from '@api/apis/forum';
import * as discussionApi from '@api/apis/discussion';
import * as discussionDetailApi from '@api/apis/discussionDetail';

// 导出接口
export {
  userApi,
  forumApi,
  discussionApi,
  discussionDetailApi,
}