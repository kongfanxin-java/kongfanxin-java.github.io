<template><h1 id="软件系统设计原则" tabindex="-1"><a class="header-anchor" href="#软件系统设计原则" aria-hidden="true">#</a> 软件系统设计原则</h1>
<h3 id="一-单一职责" tabindex="-1"><a class="header-anchor" href="#一-单一职责" aria-hidden="true">#</a> 一 单一职责</h3>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4>
<p>SRP (Single Responsibility Principle)  , &quot;There should never be more than one reason for aclass to change.&quot;</p>
<h4 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h4>
<h3 id="二-里氏替换" tabindex="-1"><a class="header-anchor" href="#二-里氏替换" aria-hidden="true">#</a> 二 里氏替换</h3>
<h4 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h4>
<p>Liskov Substitution Principle,LSP</p>
<ol>
<li>If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T. 如果对每一个类型为S的对象o1，都有类型为T的对象o2时，程序P的行为没有发生变化，那么类型S是类型T的字类型。</li>
<li>Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it. 所有引用基类的地方必须能透明的使用其子类的对象。</li>
</ol>
<h4 id="实践-1" tabindex="-1"><a class="header-anchor" href="#实践-1" aria-hidden="true">#</a> 实践</h4>
<h3 id="三-依赖倒置" tabindex="-1"><a class="header-anchor" href="#三-依赖倒置" aria-hidden="true">#</a> 三 依赖倒置</h3>
<h4 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h4>
<p>Dependence Inversion Principle，DIP. High level modules should not depend upon low level modules.Both should depend upon abstractions.Abstractions should not depend upon details.Details should depend upon abstractions.</p>
<p>三层含义：</p>
<ol>
<li>高层模块不应该依赖低层模块，两者都应该依赖其抽象；</li>
<li>抽象不应该依赖细节；</li>
<li>细节应该依赖抽象</li>
</ol>
<p>在Java语言中的表现：</p>
<ol>
<li>模块间的依赖通过抽象发生，实现类之间不发生直接的依赖关系，其依赖关系是通过接口或抽象类产生的；</li>
<li>接口或抽象类不依赖于实现类；</li>
<li>实现类依赖接口或抽象类</li>
</ol>
<p>总结即为，面向接口编程-OOD(Object-Oriented Design 面向对象设计)</p>
<h4 id="实践-2" tabindex="-1"><a class="header-anchor" href="#实践-2" aria-hidden="true">#</a> 实践</h4>
<p>三种写法</p>
<ol>
<li>构造函数传递依赖对象</li>
<li>Setter方法传递依赖对象</li>
<li>接口声明依赖对象</li>
</ol>
<p>最佳实践</p>
<ol>
<li>每个类尽量都有接口或抽象类，或者抽象类和接口两者都具备</li>
<li>变量的表面类型尽量是接口或者抽象类</li>
<li>任何类都不应该从具体类派生</li>
<li>尽量不要覆写基类的方法</li>
<li>解和里氏替换原则使用</li>
</ol>
<h3 id="四-接口隔离" tabindex="-1"><a class="header-anchor" href="#四-接口隔离" aria-hidden="true">#</a> 四 接口隔离</h3>
<h4 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3" aria-hidden="true">#</a> 定义</h4>
<ol>
<li>Clients should not be forced to depend upon interfaces that they don't use. 客户端不应该依赖它不需要的接口</li>
<li>The dependency of one class to another one should depend on the smallest possible interface. 类间的依赖关系应该建立在最小的接口上</li>
</ol>
<h3 id="五-迪米特法则" tabindex="-1"><a class="header-anchor" href="#五-迪米特法则" aria-hidden="true">#</a> 五 迪米特法则</h3>
<h4 id="定义-4" tabindex="-1"><a class="header-anchor" href="#定义-4" aria-hidden="true">#</a> 定义</h4>
<p>Law of Demeter(LoD)也称为最少知识原则（Least Knowledge Principle, LKP）</p>
<p>一个对象应该对其他对象有最少的了解</p>
<ol>
<li>只和朋友交流</li>
<li>朋友间也是有距离的</li>
<li>是自己的就是自己的： 如果一个方法放在本类中，即不增加类间关系，也对本类不产生负面影响，就放置在本类中</li>
<li>谨慎使用Serializable：</li>
</ol>
<h3 id="六-开闭原则" tabindex="-1"><a class="header-anchor" href="#六-开闭原则" aria-hidden="true">#</a> 六 开闭原则</h3>
<h4 id="定义-5" tabindex="-1"><a class="header-anchor" href="#定义-5" aria-hidden="true">#</a> 定义</h4>
<p>Software entities like classes, modules and functions should be open for extension but closed for modifications.</p>
<p>一个软件实体如类、模块和函数应该对扩展开发，对修改关闭</p>
<h4 id="实践-3" tabindex="-1"><a class="header-anchor" href="#实践-3" aria-hidden="true">#</a> 实践</h4>
<p>变化的三种类型</p>
<ol>
<li>逻辑变化</li>
<li>子模块变化</li>
<li>可见试图变化</li>
</ol>
<p>理解开闭原则的重要性的几个方面</p>
<ol>
<li>开闭原则对测试的影响</li>
<li>开闭原则可以提高复用性</li>
<li>开闭原则可以提高可维护性</li>
<li>面向对象开发的要求</li>
</ol>
<h4 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h4>
<ol>
<li>抽象约束</li>
<li>元数据（metadata）控制模块行为</li>
<li>指定项目章程</li>
<li>封装变化</li>
</ol>
</template>
