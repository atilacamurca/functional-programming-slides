title: Agenda

* Introdução
* JavaScript
* Python
* Ruby
* Outras

---

title: Introdução
class: segue dark nobackground

---

title: Introdução

<!--
Functional programming requires that functions are first-class, which means that they are treated like any other values and can be passed as arguments to other functions or be returned as a result of a function. Being first-class also means that it is possible to define and manipulate functions from within other functions.
-->

**Programação Funcional** (PF) requer que funções sejam tratadas como
**valores de primeira importância**, o que significa que elas são tratadas
com qualquer outro valor e podem ser passadas como argumento para outras funções
ou serem retornadas como resultado de uma função.

Serem tratadas como valores de primeira importância
resulta também na possibilidade de definir e manipular funções dentro de outras
funções.

---

title: Linguagens que suportam PF

## Python

---

title: Linguagens que suportam PF

## Ruby

---

title: JavaScript
class: segue nobackground fill
image: img/js-bg.jpg

---

title: Linguagens que suportam PF

## JavaScript

Mais próxima de uma linguagem funcional. Suporta:

* Funções de primeira importância
* Funções podem retornam funções
* Blocos léxicos + Escopo

<p><img alt="High Class Functions" src="img/high-class-js.jpg"
style="width: 40%; float: right; position: absolute; top: 350px; left: 600px;"/></p>

---

title: JavaScript
subtitle: Exemplo - Funções de primeira importância

<pre class="prettyprint" data-lang="javascript">
var hosts = [];
/* ... */
function verify_hosts(h_initial, h_final, <b>callback</b>) {
	for (var i = h_initial; i < h_final; i++) {
    	hosts[i].verify();
    }
    <b>callback();</b>
}
</pre>

---

title: JavaScript
subtitle: Exemplo - Funções podem retornar funções

<pre class="prettyprint" data-lang="javascript">
var curry = function (fn) {
	return function (value1) {
    	return function (value2) {
        	return fn(value1, value2);
        };
    };
};

var mult = function(a, b) { return a * b; };

var twice = curry(mult)(2);
twice(4); // => 8
twice(6); // => 12
</pre>

---

title: JavaScript
subtitle: Exemplo - Blocos léxicos + Escopo

<pre class="prettyprint" data-lang="javascript">
// global scope
var scope = "global";

var foo = function(){
    // inner scope 1
    var scope = "inner";
    var myscope = function(){
        // inner scope 2
        return scope;
    };
    return myscope;
};

console.log(foo()()); // => "inner"
console.log(scope); // => "global"
</pre>

---

title: JavaScript
subtitle: "It's a trap!"
class: segue nobackground fill
image: img/js-its-a-trap.jpg

---

title: JavaScript
subtitle: It's a trap!

<pre class="prettyprint" data-lang="javascript">
function User() {
    this.name = 'Átila';
    this.uid = 0;
}

User.prototype.get = function(fn) {
    return fn();
};

var user = new User();
var name = user.get(function() {
    return this.name;
});
console.log('name: ' + name);
</pre>

---

title: JavaScript
subtitle: It's a trap!

<pre>
~/fp-like/src/self-worng.js:15
    return this.name;
               ^
TypeError: Cannot read property 'name' of undefined
</pre>

---

title: JavaScript
subtitle: It's a trap!

<pre class="prettyprint" data-lang="javascript">
function User() {
    this.name = 'Átila';
    this.uid = 0;
}

User.prototype.get = function(fn) {
    return fn(<b>this</b>);
};

var user = new User();
var name = user.get(function(<b>self</b>) {
    return <b>self.name</b>;
});
console.log('name: ' + name);
</pre>

---

title: JavaScript
subtitle: Extensível!

<pre class="prettyprint" data-lang="javascript">
var user = new User();
var uid_name_s = user.get(function(self) {
    return 'uid: ' + self.uid + ', name: ' + self.name;
});
console.log(uid_name_s);
</pre>

Saída:

<pre>
uid: 0, name: Átila
</pre>

---

title: Links

FP

* <http://www.haskell.org/haskellwiki/Functional_programming>

JavaScript

* <http://underscorejs.org/>
* <http://underscorejs.org/underscore.js>
* <http://xkr.us/articles/javascript/unary-add/>
* <http://eloquentjavascript.net/1st_edition/chapter6.html>
* <http://eliperelman.com/fn.js/>

---

title: Links

JavaScript

* <http://jhusain.github.io/learnrx/>
* <http://tech.pro/tutorial/2009/functional-javascript-part-2-what-makes-a-language-functional>

Ruby

* <http://pt.slideshare.net/tokland/functional-programming-with-ruby-9975242>

---

title: Links

Python

* <http://www.ibm.com/developerworks/library/l-prog/>
* <http://anandology.com/python-practice-book/functional-programming.html>
* <http://www.infoq.com/articles/fn.py-functional-programming-python>


