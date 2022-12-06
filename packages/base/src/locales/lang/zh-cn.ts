export default {
  buttons: {
    login: '登录',
    added: '新增',
    add: '添加',
    empty: '清空',
    edit: '编辑',
    del: '删除',
    query: '查询',
    save: '保存',
    disabled: '禁用',
    enable: '启用',
    cancel: '取消',
    confirm: '确认',
    refresh: '刷新',
    ensure: '确定',
    prev: '上一步',
    next: '下一步',
    complete: '完成',
    skip: '暂不设置',
    bindList: '添加到绑定列表',
    backup: '备份',
    scan: '开始扫描',
    addStaticList: '添加到静态地址分配列表',
    import: '导入',
    selectFile: '选择文件',
    browse: '浏览',
    reset: '恢复出厂设置',
    restart: '重启路由器',
    set: '设置',
    start: '开始',
    checkNew: '检查新版本',
    removeBlackList: '移出黑名单',
    joinBlackList: '移入黑名单',
    bindAP: '绑定AP',
    showAll: '显示全部',
    disconnect: '断开连接',
    cancelManage: '取消管控',
    connect: '连接网络',
    more: '更多'
  },
  productModel: '产品型号',
  login: {
    title: '企业路由器',
    username: '请输入用户名',
    password: '请输入密码',
    copyright: '版权信息'
  },
  logout: {
    title: '退出登录',
    message: '是否确认退出系统',
    confirmBtn: '退出',
    cancelBtn: '取消'
  },
  menu: {
    quickSet: '快速配置',
    overview: '运行状态',
    terminal: '终端管理',
    basic: '基础设置',
    basicChild: {
      mode: '接口模式',
      wan: 'WAN设置',
      lan: 'LAN设置'
    },
    wireless: '无线设置',
    wirelessChild: {
      set: '无线配置',
      guest: '访客网络',
      macFilter: 'MAC地址过滤'
    },
    behavior: '行为管理',
    behaviorChild: {
      addr: '地址管理',
      time: '时间管理',
      webVisit: '网站访问管理',
      visit: '访问控制',
      bandwidth: '带宽控制'
    },
    security: '安全管理',
    securityChild: {
      arp: 'ARP防护',
      macFilter: 'MAC地址过滤',
      attackProtect: '攻击防护'
    },
    advanced: '高级功能',
    advancedChild: {
      route: '路由设置',
      alg: 'ALG',
      virtual: '虚拟服务器',
      dynamic: '动态DNS',
      upnp: 'UPnP',
      portMonitor: '端口监控'
    },
    vpn: 'VPN',
    vpnChild: {
      ipsec: 'IPSec',
      l2tp: 'L2TP',
      pptp: 'PPTP'
    },
    systemTool: '系统工具',
    systemToolChild: {
      device: '设备管理',
      diagnostic: '诊断工具',
      time: '时间设置',
      log: '日志管理',
      system: '系统管理'
    }
  },
  overview: {
    title: '运行状态',
    interface: {
      title: '接口信息',
      online: '已联网',
      offline: '未联网',
      staticAddr: '静态地址',
      connect: '已连接',
      connectOffline: '已连接未联网',
      unConnect: '未连接',
      dhcp: 'DHCP服务器已开启',
      dhcpClose: 'DHCP服务器未开启'
    },
    networkTraffic: {
      title: '流量统计',
      interface: '接口流量统计',
      ip: 'IP流量统计',
      interfaceTable: ['接口', '发送速率(KB/s)', '接收速率(KB/s)', '发送总流量', '接收总流量'],
      openIP: '启用IP流量统计',
      note: '注意：开启IP流量统计会影响路由器转发性能',
      range: '统计范围：',
      ipCount: 'IP数量：',
      ipTable: ['IP地址', '发送速率(KB/s)', '接收速率(KB/s)', '发送总流量', '接收总流量']
    },
    resource: {
      title: '硬件资源利用率',
      cpu: 'CPU使用率',
      memory: '内存使用率'
    },
    system: {
      duration: '系统运行：',
      time: '系统时间：'
    },
    topology: {
      title: '拓扑图',
      line: '有线连接',
      wireless: '无线连接'
    },
    wireless: {
      title: '无线状态',
      disable: '已禁用',
      enable: '已启用',
      name: '无线名称',
      channel: '当前信道',
      mode: '当前模式',
      wds: 'WDS状态',
      wdsOpen: '开启',
      wdsClose: '关闭',
      terminal: '终端数量',
      password: '无线密码',
      unEncrypt: '未加密',
      2: '2.4G',
      5: '5G',
      6: '6G',
      guest: '访客网络',
      auto: '自动',
      table: ['无线名称', '无线密码', '终端数量', '状态']
    }
  },
  terminal: {
    title: '终端管理',
    manage: {
      title: '终端管理',
      joinMessage: {
        title: '移入黑名单',
        info: '移入黑名单后设备将不能连接上网，确认将该设备移入黑名单?',
        success: '已移入黑名单',
        cancel: '取消操作'
      },
      cutMessage: {
        title: '断开连接',
        info: '是否断开连接?',
        success: '已断开连接',
        cancel: '取消操作'
      },
      cancelMessage: {
        title: '取消管控',
        info: '是否取消上行速率、下行速率、上网时间限制?',
        success: '已取消限制',
        cancel: '取消操作'
      },
      note: '注意：请确认IP流量统计功能已经开启，否则将无法查看到正确的上行速率和下行速率',
      showDevice: '显示设备',
      inputPlaceholder: '设备名称或MAC地址',
      table: [
        '设备名称',
        '所属范围',
        'MAC地址',
        'IP地址',
        '上行速率(KB/s)',
        '下行速率(KB/s)',
        '接入设备名称',
        '射频单元',
        'SSID',
        'VLAN ID',
        '信号强度',
        '接入时间',
        '黑名单',
        '设置'
      ],
      line: '有线接入',
      wireless: '无线接入',
      current: '当前设备'
    },
    blackList: {
      title: '黑名单',
      removeMessage: {
        title: '移出黑名单',
        info: '移出黑名单后设备将恢复上网，确认将该设备移出黑名单?',
        success: '已移出黑名单',
        cancel: '取消操作'
      },
      table: ['设备名称', 'MAC地址', '设置']
    },
    edit: {
      title: '设备设置',
      messageSuccess: '编辑成功',
      form: [
        '设备名称',
        '所属范围',
        'IP地址',
        'MAC地址',
        '限速',
        '最大上行速率',
        '最大下行速率',
        '允许上网时间',
        '时间选择'
      ],
      line: '有线接入',
      wireless: '无线接入'
    }
  },
  basic: {
    mode: {
      title: '接口模式',
      wanCount: 'wan口数量：',
      wanSuffix: '个wan口',
      wan: 'WAN',
      lan: 'LAN'
    },
    wan: {
      title: 'WAN设置',
      basicForm: [
        '连接方式',
        'IP协议类型',
        '上行带宽',
        '下行带宽',
        'WAN口速率',
        'WAN口MAC地址设置',
        'WAN口MAC地址',
        '在线检测模式',
        'PING检测',
        'DNS检测'
      ],
      staticForm: {
        ipv4: ['IP地址', '子网掩码', '网关地址', '首选DNS服务器', '备用DNS服务器', 'MTU'],
        ipv6: [
          '状态',
          'IP地址',
          '子网前缀长度',
          '网关地址',
          '首选DNS服务器',
          '备用DNS服务器',
          'MTU'
        ]
      },
      dynamicForm: {
        ipv4: [
          '连接状态',
          'IP地址',
          '子网掩码',
          '网关地址',
          'DNS服务器',
          '在线时长',
          '主机名',
          '首选DNS服务器',
          '备用DNS服务器',
          'MTU'
        ],
        ipv6: [
          '状态',
          '连接状态',
          '子网前缀长度',
          'IP地址',
          '网关地址',
          'DNS服务器',
          '在线时长',
          'IPv6地址获取协议',
          '前缀授权',
          '首选DNS服务器',
          '备用DNS服务器',
          'MTU'
        ]
      },
      pppoeForm: {
        ipv4: [
          '用户名',
          '密码',
          '连接状态',
          'IP地址',
          'DNS服务器',
          '在线时长',
          '服务名',
          '连接模式',
          '选择时间',
          '首选DNS服务器',
          '备用DNS服务器',
          'MTU'
        ],
        ipv6: [
          '状态',
          '复用IPv4拨号链路',
          '用户名',
          '密码',
          '连接状态',
          'IP地址',
          'DNS服务器',
          '在线时长',
          'IPv6地址获取协议',
          '前缀授权',
          '服务名',
          '首选DNS服务器',
          '备用DNS服务器',
          'MTU'
        ]
      },
      blance: {
        title: '流量均衡',
        form: ['特殊应用程序选路', '均衡模式']
      }
    },
    lan: {
      title: 'LAN设置',
      set: {
        title: 'LAN设置',
        form: [
          'IP协议类型',
          '模式设置',
          'IP地址',
          '子网掩码',
          '状态',
          '地址配置方式',
          '前缀授权接口',
          'IP地址前缀',
          '子网前缀长度',
          'MAC地址'
        ],
        note: '注意：在您使用IPv6的EUI-64地址配置方式时，当开启前缀授权接口并保存配置后，网络可能会短暂中断。'
      },
      dhcp: {
        title: 'DHCP服务',
        form: [
          'DHCP服务',
          '智能DHCP',
          '开始地址',
          '结束地址',
          '地址租期',
          '网关地址',
          '缺省域名',
          '首选DNS服务器',
          '备用DNS服务器'
        ],
        minutes: '分钟'
      },
      client: {
        title: '客户端列表',
        emptyMessage: {
          title: '清空',
          info: '确认清空所有设备?',
          success: '已清空',
          cancel: '取消操作'
        },
        joinMessage: {
          title: '加入静态地址',
          info: '确认将该设备IP加入静态地址?',
          success: '已加入',
          cancel: '取消操作'
        },
        table: ['主机名', 'MAC地址', 'IP地址', '剩余租期', '添加到静态地址'],
        added: '已添加'
      },
      static: {
        title: '静态地址分配',
        delMessage: {
          title: '删除',
          info: '确认删除该设备?',
          success: '已删除',
          cancel: '取消操作'
        },
        enableMessage: {
          title: '启用',
          info: '确认启用该设备?',
          success: '已启用',
          cancel: '取消操作'
        },
        disableMessage: {
          title: '禁用',
          info: '确认禁用该设备?',
          success: '已禁用',
          cancel: '取消操作'
        },
        emptyMessage: {
          title: '删除',
          info: '确认删除所选条目?',
          success: '已删除',
          cancel: '取消操作'
        },
        table: ['MAC地址', 'IP地址', '备注', '状态', '设置'],
        enable: '已启用',
        disable: '已禁用'
      },
      dhcpv6: {
        title: 'DHCPv6服务',
        form: ['DHCP服务', '开始地址', '结束地址', '地址租期', '首选DNS服务器', '备用DNS服务器'],
        minutes: '分钟',
        note: '请先在LAN设置里开启IPv6功能'
      },
      slaac: {
        title: 'SLAAC',
        form: ['服务接口', '地址前缀', 'DNS配置方式', '首选DNS服务器', '备用DNS服务器'],
        note: '请先在LAN设置里开启IPv6功能'
      },
      clientIpv6: {
        title: 'IPv6客户端列表',
        emptyMessage: {
          title: '清空',
          info: '确认清空所有设备?',
          success: '已清空',
          cancel: '取消操作'
        },
        joinMessage: {
          title: '加入静态地址',
          info: '确认将该设备IP加入静态地址?',
          success: '已加入',
          cancel: '取消操作'
        },
        table: ['主机名', 'MAC地址', 'IP地址', '剩余租期', '添加到静态地址'],
        added: '已添加'
      },
      staticIpv6: {
        title: 'IPv6静态地址分配',
        delMessage: {
          title: '删除',
          info: '确认删除该设备?',
          success: '已删除',
          cancel: '取消操作'
        },
        enableMessage: {
          title: '启用',
          info: '确认启用该设备?',
          success: '已启用',
          cancel: '取消操作'
        },
        disableMessage: {
          title: '禁用',
          info: '确认禁用该设备?',
          success: '已禁用',
          cancel: '取消操作'
        },
        emptyMessage: {
          title: '删除',
          info: '确认删除所选条目?',
          success: '已删除',
          cancel: '取消操作'
        },
        table: ['MAC地址', 'IP地址', '备注', '状态', '设置'],
        enable: '已启用',
        disable: '已禁用'
      },
      edit: '编辑',
      add: '新增',
      operationForm: ['MAC地址', 'IP地址', '备注', '允许上网时间']
    }
  },
  wireless: {
    title: '无线配置',
    set: {
      title: '无线网络配置',
      together: '多频合一：',
      first: '2.4G基础配置',
      second: '5G基础配置',
      third: '6G基础配置',
      basicForm: [
        '无线网络状态',
        '无线网络名称(SSID)',
        '隐藏无线网络',
        '内部隔离',
        '加密方式',
        '认证类型',
        '加密算法',
        '无线密码',
        'Radius服务器',
        'Radius认证端口',
        'Radius密码',
        '组秘钥更新周期'
      ],
      unit: '秒'
    },
    ssid: {
      title: '多SSID',
      delMessage: {
        title: '删除',
        info: '确认删除该设备?',
        success: '已删除',
        cancel: '取消操作'
      },
      enableMessage: {
        title: '启用',
        info: '确认启用该设备?',
        success: '已启用',
        cancel: '取消操作'
      },
      disableMessage: {
        title: '禁用',
        info: '确认禁用该设备?',
        success: '已禁用',
        cancel: '取消操作'
      },
      emptyMessage: {
        title: '删除',
        info: '确认删除所选条目?',
        success: '已删除',
        cancel: '取消操作'
      },
      table: [
        '无线网络名称',
        '无线密码',
        '内部隔离',
        '多频合一',
        'AP设备',
        '隐藏无线网络',
        '状态',
        '设置'
      ],
      enable: '启用',
      disable: '禁用',
      enabled: '已启用',
      disabled: '已禁用',
      unEcrypt: '不加密',
      edit: '编辑',
      add: '新增',
      operationForm: [
        '无线网络名称(SSID)',
        'AP设备',
        '射频选择',
        '绑定VLAN',
        'AP列表',
        '内部隔离',
        '隐藏无线网络',
        '加密方式',
        '认证类型',
        '加密算法',
        '无线密码',
        'Radius服务器',
        'Radius认证端口',
        'Radius密码',
        '组秘钥更新周期',
        '状态'
      ],
      unit: '秒'
    },
    advanced: {
      title: '高级设置',
      first: '2.4G高级配置',
      second: '5G高级配置',
      third: '6G高级配置',
      form: ['信道', '模式', '频段带宽', '发射功率', 'Beacon时槽', 'WMM', 'OFDMA', 'MU-MIMO', 'TWT']
    },
    apTitle: 'AP列表',
    apTable: ['AP', '应用频段', 'VLAN(选填)', '状态'],
    bind: '已绑定',
    unBind: '未绑定',
    guest: {
      title: '访客网络',
      form: [
        '访客网络状态',
        '访客网络名称(SSID)',
        '加密方式',
        '无线密码',
        '上行带宽',
        '下行带宽',
        '最大接入设备数量'
      ],
      zero: '(0为不限制)'
    },
    macFilter: {
      title: 'MAC地址过滤',
      filter: {
        title: '过滤设置',
        form: ['MAC地址过滤功能', '启用白名单的SSID', '启用黑名单的SSID']
      },
      white: '白名单规则列表',
      black: '黑名单规则列表',
      delMessage: {
        title: '删除',
        info: '确认删除该设备?',
        success: '已删除',
        cancel: '取消操作'
      },
      emptyMessage: {
        title: '删除',
        info: '确认删除所选条目?',
        success: '已删除',
        cancel: '取消操作'
      },
      regularTable: ['MAC地址', '作用域', '备注', '设置'],
      edit: '编辑',
      add: '新增',
      operationForm: ['MAC地址', '作用域', '备注']
    }
  },
  behavior: {
    addr: {
      title: '地址管理',
      table: ['组名称', 'IP地址段', '设置'],
      delMessage: {
        title: '删除',
        info: '确认删除该地址段?',
        success: '已删除',
        cancel: '取消操作'
      },
      emptyMessage: {
        title: '删除',
        info: '确认删除所选条目?',
        success: '已删除',
        cancel: '取消操作'
      },
      edit: '编辑',
      add: '新增',
      operationFOrm: ['组名称', 'IP地址段']
    },
    time: {
      title: '时间管理',
      table: ['时间名称', '工作时间', '备注', '设置'],
      delMessage: {
        title: '删除',
        info: '确认删除该时间?',
        success: '已删除',
        cancel: '取消操作'
      },
      emptyMessage: {
        title: '删除',
        info: '确认删除所选条目?',
        success: '已删除',
        cancel: '取消操作'
      },
      edit: '编辑',
      add: '新增',
      operationFOrm: ['时间名称', '时间段', '备注']
    },
    webVisit: {
      title: '网站访问管理',
      group: {
        title: '网站分组',
        delMessage: {
          title: '删除',
          info: '确认删除该分组?',
          success: '已删除',
          cancel: '取消操作'
        },
        emptyMessage: {
          title: '删除',
          info: '确认删除所选条目?',
          success: '已删除',
          cancel: '取消操作'
        },
        table: ['组名称', '组成员', '设置'],
        form: ['组名称', '组成员', '上传文件'],
        note: '请使用换行或者分号分隔网址'
      },
      visit: {
        title: '网站访问',
        delMessage: {
          title: '删除',
          info: '确认删除该规则?',
          success: '已删除',
          cancel: '取消操作'
        },
        emptyMessage: {
          title: '删除',
          info: '确认删除所选条目?',
          success: '已删除',
          cancel: '取消操作'
        },
        enableMessage: {
          title: '启用',
          info: '确认启用?',
          success: '已启用',
          cancel: '取消操作'
        },
        disableMessage: {
          title: '禁用',
          info: '确认禁用?',
          success: '已禁用',
          cancel: '取消操作'
        },
        table: [
          '受管理IP地址组',
          '规则类型',
          '受管理网站类型',
          '受管理时间段',
          '状态',
          '备注',
          '设置'
        ],
        access: '允许访问',
        ban: '禁止',
        enabled: '已启用',
        disabled: '已禁用',
        form: [
          '受管理IP地址组',
          '受管理时间段',
          '时间段',
          '规则类型',
          '访问上述网站时',
          '备注',
          '状态',
          '添加到指定位置(第几条)'
        ]
      },
      edit: '编辑',
      add: '新增'
    }
  },
  systemTool: {
    device: {
      title: '设备管理',
      reset: {
        title: '恢复出厂配置',
        note: '注意：点击此按钮将使路由器的所有配置恢复到出厂时的默认状态。恢复出厂设置后，当前的配置信息将会丢失，如果您想保留当前配置请注意备份。'
      },
      backupImport: {
        title: '备份与导入配置',
        version: '版本信息',
        curVersion: '当前配置版本：',
        backup: '备份配置信息',
        backupNote:
          '说明：您可以点击“备份”保存您当前的配置信息。我们建议您在修改配置及升级软件前备份您的配置信息。',
        import: '导入配置信息',
        importNote: '说明：您可以通过导入配置文件来恢复您备份的配置',
        uploadNote: '仅允许上传一个文件，新文件将会覆盖旧文件。文件不能超过128MB'
      },
      restart: {
        title: '重启路由器',
        note: '注意：路由器的部分配置修改需要重启路由器才能生效，您可以通过此页面来重启路由器。重启过程中请不要断电'
      },
      upgrade: {
        title: '系统升级',
        online: '在线升级',
        softwareVersion: '当前软件版本：',
        local: '本地升级',
        hardwareVersion: '当前硬件版本：',
        note: '仅允许上传一个文件，新文件将会覆盖旧文件。文件不能超过128MB'
      },
      deviceName: {
        title: '设备名称配置',
        name: '设备名称：'
      }
    }
  },
  message: {
    saveSucces: '保存成功',
    maxFile: '上传文件过大！',
    openQuickSet: {
      title: '打开快速配置',
      info: '快速配置还未完成，是否进行快速配置？',
      ok: '打开快速配置',
      cancel: '退出'
    }
  },
  loading: {
    dafault: '数据加载中……'
  },
  httpErrorStarus: {
    400: '参数不正确！',
    401: '您未登录，或者登录已经超时，请先登录！',
    403: '您没有权限操作！',
    404: '请求错误，资源不存在！',
    405: '请求方法未允许',
    408: '请求超时！',
    500: '服务器内部错误！',
    501: '服务未实现！',
    502: '网关错误！',
    503: '服务不可用！',
    504: '服务暂时无法访问，请稍后再试！',
    505: 'http版本不支持该请求！',
    timeout: '网络请求超时！',
    default: '异常问题，请联系管理员！'
  }
}
