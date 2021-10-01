---
title: Listas Enlazadas 
theme: league 
slideNumber: true
---

# Listas Enlazadas

<small>Created by
<a href="https://t.me/rmarku" target="_blank">
<i class="fab fa-telegram-plane"></i>rmarku
</a>
</small>

---

# Listas Enlazadas

Las listas enlazadas son una Estructura de datos del grupo de las *Estructuras de datos lineales*. Permite guardar datos
y poder recuperarlos más adelante.

<img src="images/listas/bag.svg" alt="" class="noBorder" style="height: 300px;">

---

## Listas Enlazadas

Un arreglo también nos permite guardar datos y recuperarlos luego, pero las listas enlazadas tienen varias ventajas
sobre los arreglos.

---

## Listas Enlazadas

Ventajas sobre arreglos:

* Las listas son dinámicas, por lo que ocupan solo la memoria que utilizan.
* Insertar y borrar en la lista son implementables de manera fácil.
* Con listas enlazadas, es muy sencillo implementar otras estructuras como pilas y colas
* Pueden ser más performantes en determinadas operaciones.

---

## Listas Enlazadas

Desventajas sobre arreglos:

* Usan mas memoria que los arreglos (por cada dato un puntero más)
* Para acceder a un valor debo pasar por todos los anteriores, lo que lo hace lento.
* Los datos no están de manera contigua en la memoria, por lo que se desaprovecha la mem Cache.
* Operaciones como recorrerlas al reves son muy costosas y complicadas de realizar.

---

## Nodo

El nodo es la estructura fundamental de la lista. Este está formado por dos partes. El dato que se desea guardar y un
puntero al siguiente nodo.

<img src="images/listas/Nodo.svg" alt="" class="noBorder" style="height: 300px;">

---

## TDA Nodo

Como toda TDA, definimos el modelo de un Nodo

### Atributos

| nombre    | función                       |
|------	    |------------------------------	|
| **data**  | dato almacenado               |
| **next**  | enlace al siguiente  *Nodo*   |

---

## TDA Nodo

#### Métodos

| nombre            | función                               |
|------	            |------------------------------	        |
| **getData()**     | Devuelve el dato interno al nodo      |
| **setData( d )**  | Cambia el dato interno del nodo       |
| **getNext()**     | Devuelve el puntero al nodo siguiente |
| **setNext( n )**  | Remplazar puntero al siguiente nodo   |

---

## Listas Enlazadas

Una lista enlazada es una estructura de datos en la que cada elemento (**nodo**) tiene dos partes, uno con información
(un valor de tipo genérico, dato, info, etc.) y el otro con la **dirección** del nodo siguiente.
<img src="images/listas/ListaEnlazada.svg" alt="" class="noBorder" style="height: 300px;">

---

## TDA Lista Enlazada

Como toda estructura de datos, la lista enlazada consta de datos o atributos y acciones o métodos.

#### Atributos

| nombre      | función                               |
|------	      |------------------------------	      |
| **inicio**  | Enlace al primer elemento de la lista |

---

## TDA Lista Enlazada

#### Métodos

Pueden variar según que se desea como funcionalidad.

<small>
| nombre      | función                               |
|------	      |------------------------------	      |
| insert(pos, dato)  | Insertar dato a la lista en el lugar pos |
| remove(pos)  | Borra un dato de la lista en el lugar pos |
| get( pos )  | Lee un dato de la lista en el lugar pos |
| find( dato)  | Busca el dato en la lista |
</small>

---

## Lista Enlazada

## A implementar.
