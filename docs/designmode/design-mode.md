## 设计模式的6大原则
### 单一职责
- SRP (Single Responsibility Principle)  , "There should never be more than one reason for aclass to change."
- 
### 里氏替换
### 依赖倒置
#### 定义
Dependence Inversion Principle，DIP. High level modules should not depend upon low level modules.Both should depend upon abstractions.Abstractions should not depend upon details.Details should depend upon abstractions.
三层含义
1. 高层模块不应该依赖低层模块，两者都应该依赖其抽象；
2. 抽象不应该依赖细节；
3. 细节应该依赖抽象

在Java语言中的表现
1. 模块间的依赖通过抽象发生，实现类之间不发生直接的依赖关系，其依赖关系是通过接口或抽象类产生的；
2. 接口或抽象类不依赖与实现类；
3. 实现类依赖接口或抽象类

总结即为，面向接口编程-OOD(Object-Oriented Design 面向对象设计)

#### 应用

##### 依赖的三种写法

1. 构造函数传递依赖对象
2. Setter方法传递依赖对象
3. 接口声明依赖对象

##### 最佳实践

1. 每个类尽量都有接口或抽象类，或者抽象类和接口两者都具备
2. 变量的表面类型尽量是接口或者抽象类
3. 任何类都不应该从具体类派生
4. 尽量不要覆写基类的方法
5. 解和里氏替换原则使用

### 接口隔离





### 迪米特法则

#### 定义

Law of Demeter(LoD)也称为最少知识原则（Least Knowledge Principle, LKP），一个对象应该对其他对象有最少的了解。

含义

1. 只和朋友交流
2. 朋友间也是有距离的
3. 是自己的就是自己的： 如果一个方法放在本类中，即不增加类间关系，也对本类不产生负面影响，就放置在本类中
4. 谨慎使用Serializable：

 



### 开闭原则

#### 定义

Software entities like classes, modules and functions should be open for extension but closed for modifications. 

一个软件实体如类、模块和函数应该对扩展开发，对修改关闭

#### 应用

##### 变化的三种类型

1. 逻辑变化
2. 子模块变化
3. 可见试图变化

##### 理解开闭原则的重要性的几个方面

1. 开闭原则对测试的影响
2. 开闭原则可以提高复用性
3. 开闭原则可以提高可维护性
4. 面向对象开发的要求

##### 实际应用

1. 抽象约束
2. 元数据（metadata）控制模块行为
3. 指定项目章程
4. 封装变化





