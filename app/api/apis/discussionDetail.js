/**
 * discussionDetail 模块接口列表
 */
import baseUrl from '@api/baseUrl'; // 导入接口域名列表
import api from '@utils/http' // 导入http中的请求函数
import { GET, POST, PUT, DELETE } from '@utils/http'

export const fetchDiscussionDetail = (discussionSlug) => {
  return api(`${baseUrl.dev}/discussion/${discussionSlug}`)
}

export const toggleFavorite = (discussionId) => {
  return api(`${baseUrl.dev}/discussion/toggleFavorite/${discussionId}`, PUT);
};

export const deleteDiscussion = (discussionSlug) => {
  return api(`${baseUrl.dev}/discussion/deleteDiscussion/${discussionSlug}`, DELETE);
};

export const addOpinion = (opinion) => {
  return api(`${baseUrl.dev}/opinion/newOpinion`, POST, opinion);
};

export const deleteOpinion = (opinionId) => {
  return api(`${baseUrl.dev}/opinion/deleteOpinion/${opinionId}`, DELETE);
};
