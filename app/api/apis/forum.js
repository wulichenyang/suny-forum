/**
 * forum模块接口列表
 */
import baseUrl from '@api/baseUrl'; // 导入接口域名列表
import api from '@utils/http' // 导入http中的请求函数
import { GET, POST, PUT, UPDATE } from '@utils/http'

export const fetchForum = api(`${baseUrl.dev}/forum`)