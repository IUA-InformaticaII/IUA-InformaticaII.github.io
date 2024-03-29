---
title: TDA y Clases
theme: league
slideNumber: true
---
# TDA y POO</h1>
    
<small>Created by
    <a href="https://t.me/rmarku" target="_blank">
        <i class="fab fa-telegram-plane"></i>rmarku
    </a>
</small>

---

### Introducción a la Programación Orientada a Objetos

Es un paradigma de programación que es muy cercano a como interactuamos y conocemos las cosas en la vida real.

<img src="images/tda/objetos.png" alt="" class="noBorder" style="height: 300px">


---

## ¿Qué es una clase?

* Una clase es una plantilla para saber como crear Objetos
* Una clase es un modelo que define un conjunto de **Atributos** (el estado) y **Métodos** para operar
con el estado (el comportamiento)

---

## ¿Qué es un objeto?
* Los objetos se crean a partir de las clases y se llaman **Instancias**
* Es una forma de abstraerse de los datos y sus operaciones y verlos como una **"caja negra"**

---

## Clases y Objetos
<img src="images/tda/clases-objetos.svg" alt="" class="noBorder" style="height: 500px">


---

## Clases:
 
### Atributos o Variables miembros

* Son variables definidas dentro de la clase
* Pueden ser **privadas** o **publicas**
* Definen el estado del objeto
* Cada objeto tiene su propia instancia de los atributos

---

## Clases:
 
### Atributos o Variables miembros

<img src="images/tda/atributos.svg" alt="" class="noBorder" style="height: 400px">

---

## Clases: 
### Métodos o Funciones miembros
    
* Son funciones que residen dentro de la clase
* Pueden ser **privadas** o **publicas**
* Comúnmente operan con los atributos del objeto
* Permiten darle comportamiento al objeto

---

## Clases: 
### Métodos o Funciones miembros
    
<img src="images/tda/metodos.svg" alt="" class="noBorder" style="height: 400px">
    
---
## Objetos
    
* Son una instancia creada a partir de una clase.
* Poseen **Identidad**, lo que los diferencia de otros objetos
* Existe realmente en memoria.
* Cada uno tiene sus propios atributos y los métodos trabajan con estos atributos.

---
## Objetos

<img src="images/tda/objeto.svg" alt="" class="noBorder" style="height: 400px">

---
## Clases: Sintaxis

<pre><code class="hljs c++" data-trim contenteditable spellcheck="false">
class Punto {
//por omisión los miembros son 'private' para que sólo
//se puedan modificar desde la propia clase.
private:
        // Variable miembro privada
        int x;
        int y;
public:
        // Constructor
        Punto();
        // Destructor
        ~Punto();
        // Funciones miembro o métodos
        int ObtenerX();
        int ObtenerY();
};
</code></pre>


---

## Métodos especiales
### Constructor

Son unos métodos especiales que se ejecutan automáticamente al crear un objeto del tipo de la clase.
 
En su declaración no se especifica el tipo de dato que devuelven, y poseen el mismo nombre que la clase a la que pertenecen.
Al igual que otros métodos, puede haber varios constructores sobrecargados.

---

## Métodos especiales
### Constructor

Sus principales cometidos son:

* Inicializar los atributos del objeto a sus valores iniciales.

* Reservar recursos de memoria que hagan falta para el objeto.

---

## Destructor

Los destructores son métodos especiales llamados automáticamente en la ejecución del programa, y por tanto
no tienen por qué ser llamadas explícitamente por el programador.

Es llamado solo cuando la instancia del objeto termina, o cuando se realiza un **delete** del objeto.

---

## Destructor

Sus principales cometidos son:

* Liberar los recursos computacionales que el objeto haya adquirido en tiempo de ejecución al expirar éste.

* Quitar los vínculos que pudiesen tener otros recursos u objetos con éste.

---

## Archivo .h

<p>En el archivo .h se escribe el prototipo de la clase</p>
<pre><code class="hljs c++" data-trim contenteditable spellcheck="false">
class Punto {
private:
        int x;
        int y;
public:
        Punto();
        ~Punto();
        int ObtenerX();
        int ObtenerY();
};
        </code></pre>


---

## Archivo .cpp

<p>En el archivo .cpp se escribe la implementación de los metodos</p>
<pre><code class="hljs c++" data-trim contenteditable spellcheck="false">
Punto::Punto(){
    x=0;
    y=0;
}
int Punto::ObtenerX(){
        return x;
}
int Punto::ObtenerY(){
        return y;
}
        </code></pre>


---

## Palabra clave **this**

<p style="font-size: 0.8em;">
Hace referencia al propio objeto. Es utilizado para poder acceder a los atributos de la
    instancia del objeto al cual pertenece el método
</p>

Comúnmente puede ser obviado su uso, ya que llamando directamente al atributo también podemos acceder

<pre><code class="hljs c++" data-trim contenteditable spellcheck="false">
int Punto::EscribirY(int val){
        y = val; // no hace falta utilizar this
}
int Punto::EscribirX(int x){
        this->x = x;
// Como x ahora es una variable dentro de la función, para acceder al atributo
// utilizo el puntero this
}
</code></pre>


---

### Diagrama de clase (UML)

Es un diagrama utilizado para mostrar rápidamente que posee una clase

<table style="
  border-collapse: collapse;border: solid 4px; border-radius:4px; font-size: 0.8em">
    <thead>
    <tr><th>Nombre de Clase</th></tr>
    </thead>
    <tbody>
    <tr><td style="border:none;border-top: solid 4px">-atributo1: tipo</td></tr>
    <tr><td style="border:none;">+atributo2: tipo</td></tr>
    <tr><td style="border:none">+atributo3: tipo</td></tr>
    <tr><td style="border:none;border-top: solid 4px">-metodo1(param: tipo):tipo retorno</td></tr>
    <tr><td style="border:none">-metodo2(param: tipo):tipo retorno</td></tr>
    <tr><td style="border:none">+metodo3(param: tipo):tipo retorno</td></tr>
    <tr><td style="border:none">+metodo4(param: tipo):tipo retorno</td></tr>
    </tbody>
</table>

---
# A programar
