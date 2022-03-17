## IDEA

### 自定义模板
#### 配置步骤
- Editor -> LiveTemplates :  add TemplateGroup  / LiveTemplates
- 填写缩写 Abbreviation，描述 Description
- 编辑模板内容 Template text，定义变量使用”$“声明，eg: $DATE$ 
- Edit variables 内置可用的变量函数 如常用的 className()，user()等
#### 常用示例
 1. 类注释
```java
/**
 * <p>
 * $CLASS_NAME$
 * </p>
 *
 * @author $AUTHOR$
 * @since $DATE$ $TIME$
 */
```

2. 声明日志变量

```java
private static final Logger log = LoggerFactory.getLogger($CLASS_NAME$.class);
```

### 离线安装插件
 1. 下载 http://plugins.jetbrains.com/
   - 要注意IDEA的适用版本
 2. 安装 http://plugins.jetbrains.com/ 

