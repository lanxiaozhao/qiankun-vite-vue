import { type RouteComponent } from 'vue-router'

export interface RouteChildrenConfigsTable {
  /** 子路由地址 `必填` */
  path: string
  /** 路由名字（对应不要重复，和当前组件的`name`保持一致）`必填` */
  name?: string
  /** 路由重定向 `可选` */
  redirect?: string
  /** 按需加载组件 `可选` */
  component?: RouteComponent
  meta?: {
    /** 菜单名称 `必填` */
    title: string
    /** 菜单图标 `可选` */
    icon?: string
    /** 是否在菜单中显示（默认`true`）`可选` */
    showLink?: boolean
  }
  /** 子路由配置项 */
  children?: Array<RouteChildrenConfigsTable>
}

/**
 * @description 完整路由配置表
 */
export interface RouteConfigsTable {
  /** 路由地址 `必填` */
  path: string
  /** 路由名字（保持唯一）`可选` */
  name?: string
  /** `Layout`组件 `可选` */
  component?: RouteComponent
  /** 路由重定向 `可选` */
  redirect?: string
  meta?: {
    /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加）`必填` */
    title: string
    /** 菜单图标 `可选` */
    icon?: string
    /** 是否在菜单中显示（默认`true`）`可选` */
    showLink?: boolean
  }
  /** 子路由配置项 */
  children?: Array<RouteChildrenConfigsTable>
}
