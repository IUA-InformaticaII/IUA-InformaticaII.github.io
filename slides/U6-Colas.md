---
title: Colas
theme: league
slideNumber: true
---
# Colas

<small>Created by
    <a href="https://t.me/rmarku" target="_blank">
        <i class="fab fa-telegram-plane"></i>rmarku
    </a>
</small>

---
## Colas

Una cola es una colección ordenada de elementos en la que pueden insertarse elementos en un extremo (FONDO)
y suprimirse elementos por el otro extremo (FRENTE)

<img src="images/colas/cola.png" alt="" class="noBorder" style="height: 300px;">

---
## Colas

Las colas son estructuras que se encuentran frecuentemente en la vida diaria. Algunos ejemplos se encuentran en la
fila de un banco, un grupo de automóviles esperando en una cab ina de peaje, personas esperando para comprar un
boleto pa ra el cine, etc.
<img src="images/colas/colapersonas.jpg" alt="">

---
## Colas

Por ejemplo, la forma en que se acomodan los coches que llegan a una cabina de peaje es la siguiente:
se puede añadir un coche al final de la cola, y el primero que se va es el que está al principio de la cola . O sea
que el primero que llego es el primero que se va.

---
## Colas

La propiedad anterior se conoce como **FIFO** ( First In First Out ), es decir, el primero en entrar será el
primero en salir.

<img src="images/colas/fifo.png" alt="">

---
## Colas
<table>
    <tr>
        <td><b>encolar(x)</b></td>
        <td>Inserta el elemento por el Fondo de la cola.</td>
    </tr>
    <tr>
        <td><b>x=desencolar()</b></td>
        <td>Saca un elemento por el frente de la cola y lo almacena en x</td>
    </tr>
    <tr>
        <td><b>estaVacia()</b></td>
        <td>Devuelve V/F según si está vacía la cola.</td>
    </tr>
</table>

---
## Colas
#### Formas de implementar

* Mediante arreglos: 
  Se mantiene un índice de entrada y uno de la salida.
* Mediante Nodos enlazados:
  Se mantiene un puntero al primer nodo y uno al ultimo nodo.

---
## Colas
## A implementar.
