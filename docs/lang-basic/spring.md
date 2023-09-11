### spring boot
 - 配置文件中文乱码问题：
   - @PropertySource(value = "classpath:application-mymock-dev22.properties", encoding = "utf-8")
   - 这种方法可以正确输出中文字符
#### spring.profiles.include

 - 无法获取 include 配置文件中的属性

- Include 配置文件应该是以application-*.yml 格式的文件


#### 注解
 - @ConditionalOnProperty
 - @EnableConfigurationProperties
 - @ConfigurationProperties
 - @ConditionalOnMissingBean