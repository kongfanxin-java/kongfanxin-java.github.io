



```java
SqlSession session = sqlMapper.openSession();
try {
	Blog blog = (Blog) session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);
} finally {
	session.close();
}  
```





```java
SqlSession session = sqlSessionFactory.openSession();
try {
	BlogMapper mapper = session.getMapper(BlogMapper.class);
	Blog blog = mapper.selectBlog(101);
} finally {
	session.close();
}  
```







Blog blog = (Blog) session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);  

要注意这个使用完全限定名调用 Java 对象的方法是相似的，这样做是有原因的。这个命名可以直接给相同命名空间下的的映射类，使用一个名称，参数和返回值和已映射的查询语句都一样的方法即可。 这就允许你非常容易地调用映射器接口中的方法，这和你前面看到
的是一样的，下面这个示例中它又出现了。

BlogMapper mapper = session.getMapper(BlogMapper.class);
Blog blog = mapper.selectBlog(101);  