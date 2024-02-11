<template><h1 id="mysql-基础" tabindex="-1"><a class="header-anchor" href="#mysql-基础" aria-hidden="true">#</a> MySQL 基础</h1>
<h2 id="数据库编码" tabindex="-1"><a class="header-anchor" href="#数据库编码" aria-hidden="true">#</a> 数据库编码</h2>
<ul>
<li>mysql的字符序遵从命名惯例。以_ci(表示大小写不敏感)，以_cs(表示大小写敏感)，以_bin(表示用编码值进行比较)。</li>
</ul>
<h3 id="编码问题" tabindex="-1"><a class="header-anchor" href="#编码问题" aria-hidden="true">#</a> 编码问题</h3>
<ul>
<li>mysql 索引长度有限制，默认767；如果选择</li>
</ul>
<h4 id="mysql版本升级后navicat登录出错问题" tabindex="-1"><a class="header-anchor" href="#mysql版本升级后navicat登录出错问题" aria-hidden="true">#</a> MySQL版本升级后navicat登录出错问题</h4>
<ul>
<li>Client does not support authentication protocol requested by server; consider upgrading MySQL client.</li>
</ul>
<h3 id="启动不初始化表结构问题" tabindex="-1"><a class="header-anchor" href="#启动不初始化表结构问题" aria-hidden="true">#</a> 启动不初始化表结构问题</h3>
<ul>
<li>nullCatalogMeansCurrent=true 属性保证自动创建表结构,默认为false</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">url: jdbc:mysql://localhost:3306/flowable?characterEncoding=utf8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;nullCatalogMeansCurrent=true</span></span>
<span class="line"><span style="color: #D4D4D4"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="flowable启动报错" tabindex="-1"><a class="header-anchor" href="#flowable启动报错" aria-hidden="true">#</a> flowable启动报错</h4>
<ul>
<li>降低 mysql-connector-java.jar 版本：8.0.22 具体原因暂不知道</li>
<li>需要检查8.0.22与高版本的区别</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">Caused by: java.lang.ClassCastException: java.time.LocalDateTime cannot be cast to java.lang.String</span></span>
<span class="line"><span style="color: #D4D4D4">Caused by: java.lang.IllegalStateException: Event registry has not been initialized</span></span>
<span class="line"><span style="color: #D4D4D4"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="mysql-current-timestamp" tabindex="-1"><a class="header-anchor" href="#mysql-current-timestamp" aria-hidden="true">#</a> MySQL  CURRENT_TIMESTAMP</h4>
<ul>
<li>在MySQL 5.6.5版本之前，DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP只适用于TIMESTAMP，而且一张表中，最多允许一个TIMESTAMP字段采用该特性。 从MySQL 5.6.5开始， DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP同时适用于TIMESTAMP和DATETIME，且不限制数量。</li>
</ul>
<h4 id="mysql-版本问题" tabindex="-1"><a class="header-anchor" href="#mysql-版本问题" aria-hidden="true">#</a> mysql 版本问题</h4>
<ul>
<li>在使用 MySQL 8.0 时重启应用后提示 com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Public Key Retrieval is not allowed</li>
<li>最简单的解决方法是在连接后面添加 allowPublicKeyRetrieval=true</li>
<li>文档中(https://mysql-net.github.io/MySqlConnector/connection-options/)给出的解释是：</li>
<li>如果用户使用了 sha256_password 认证，密码在传输过程中必须使用 TLS 协议保护，但是如果 RSA 公钥不可用，可以使用服务器提供的公钥；可以在连接中通过 ServerRSAPublicKeyFile 指定服务器的 RSA 公钥，或者AllowPublicKeyRetrieval=True参数以允许客户端从服务器获取公钥；但是需要注意的是 AllowPublicKeyRetrieval=True可能会导致恶意的代理通过中间人攻击(MITM)获取到明文密码，所以默认是关闭的，必须显式开启</li>
<li>DBeaver 连接是需要在驱动属性里 将allowPublicKeyRetrieval 改为true</li>
</ul>
<h2 id="mysql中四种key-primary-key-unique-key-key-和-foreign-key" tabindex="-1"><a class="header-anchor" href="#mysql中四种key-primary-key-unique-key-key-和-foreign-key" aria-hidden="true">#</a> MySQL中四种Key: Primary Key, Unique Key, Key 和 Foreign Key</h2>
<h2 id="mysql-innodb-row-formats" tabindex="-1"><a class="header-anchor" href="#mysql-innodb-row-formats" aria-hidden="true">#</a> MySQL InnoDB Row Formats</h2>
<p>https://dev.mysql.com/doc/refman/5.7/en/innodb-row-format.html</p>
<h2 id="b-tree索引-与-hash索引的区别" tabindex="-1"><a class="header-anchor" href="#b-tree索引-与-hash索引的区别" aria-hidden="true">#</a> B-TREE索引 与 Hash索引的区别</h2>
<p>B-TREE索引的特点</p>
<p>B-TREEB-TREE以B+树结构存储数据，大大加快了数据的查询速度
B-TREE索引在范围查找的SQL语句中更加适合（顺序存储）</p>
<p>B-TREE索引使用场景</p>
<p>全值匹配的查询SQL，如 where act_id= '1111_act'
联合索引汇中匹配到最左前缀查询，如联合索引 KEY idx_actid_name(act_id,act_name) USING BTREE，只要条件中使用到了联合索引的第一列，就会用到该索引，但如果查询使用到的是联合索引的第二列act_name，该SQL则便无法使用到该联合索引（注：覆盖索引除外）
匹配模糊查询的前匹配，如where act_name like '11_act%'
匹配范围值的SQL查询，如where act_date &gt; '9865123547215'（not in和&lt;&gt;无法使用索引）
覆盖索引的SQL查询，就是说select出来的字段都建立了索引</p>
<p>HASH索引
HASH的特点</p>
<p>Hash索引基于Hash表实现，只有查询条件精确匹配Hash索引中的所有列才会用到hash索引
存储引擎会为Hash索引中的每一列都计算hash码，Hash索引中存储的即hash码，所以每次读取都会进行两次查询
Hash索引无法用于排序
Hash不适用于区分度小的列上，如性别字段</p>
</template>
