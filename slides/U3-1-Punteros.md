---
title: Punteros
theme: league
slideNumber: true
---

# Informática II
<small>
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---

# Punteros

---

## Memoria de Una PC


---

# El Puntero o apuntador

Los punteros son variables cuyos valores son direcciones de memoria.<br>
![punteros](images/int_punteros.png)

---

# Punteros

* Una <b>variable</b> contiene un valor especifico
* El <b>puntero</b> contiene la dirección de una variable que contiene un valor especifico.
* Las variables hacen referencia <i>directa</i> a un valor.
* Los punteros hacen referencia <i>indirecta</i> a un valor.


---
## Punteros
### Sintaxis de declaración

```cpp
int *miPuntero;
```
---
## Punteros
### Operador dirección
El operador dirección (&) es un operador uniario que obtiene la dirección de memoria de su operando.

```cpp
int i = 5;
int *iPtr = &i;
```
---
## Punteros
### Operador de Indirección
El operador de Indirección (*) es un operador uniario obtiene
el valor del lugar donde está apuntando un puntero.

```cpp
int i = 5;
int *iPtr;
iPtr= &i;
cout << *iPtr;
```
---
## Punteros
### ejemplo de uso:

```cpp
#include <iostream>

int main(){
    int *miPuntero;
    int num = 5;

    cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
}
```

---
### ejemplo de uso:

<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td>0x325485</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325486</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
&rArr;int main(){
    int &#42;miPuntero;
    int num = 5;

    cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
    }
</code></pre>

        </td>
    </tr>
</table>

---
### ejemplo de uso:

<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span class="fragment" style="color:#00bb00">*miPuntero</span></td>
                    <td>0x325485</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325486</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
&rArr;   int &#42;miPuntero;
    int num = 5;

    cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
}
</code></pre>

        </td>
    </tr>
</table>

---

### ejemplo de uso:
<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>*miPuntero</td>
                    <td>0x325485</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td><span class="fragment" style="color:#00bb00">num</span></td>
                    <td>0x325486</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
    int &#42;miPuntero;
&rArr;   int num = 5;

    cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
    }
</code></pre>

        </td>
    </tr>
</table>

---

### ejemplo de uso:
<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>*miPuntero</td>
                    <td>0x325485</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td>num</td>
                    <td>0x325486</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">


<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
    int &#42;miPuntero;
    int num = 5;

&rArr;   cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
}
</code></pre>

        </td>
    </tr>
</table>

<span style="font-size: 0.6em">
    <span class="fragment">
                5 
    </span>
</span>

---
### ejemplo de uso:
<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>*miPuntero</td>
                    <td>0x325485</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td>num</td>
                    <td>0x325486</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
    int &#42;miPuntero;
    int num = 5;

    cout << num << endl;
&rArr;    cout << &num << endl;

    miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
}
</code></pre>

        </td>
    </tr>
</table>

<p style="font-size: 0.6em">

    5<br> 
    <span class="fragment">
0x325486
    </span>
</p>

---
### ejemplo de uso:
<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>*miPuntero</td>
                    <td>0x325485</td>
                    <td><span class="fragment" style="color:#00bb00">0x325486</span></td>
                </tr>
                <tr>
                    <td>num</td>
                    <td>0x325486</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
    int &#42;miPuntero;
    int num = 5;

    cout << num << endl;
    cout << &num << endl;

&rArr;   miPuntero = &num ;

    cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
}
</code></pre>

        </td>
    </tr>
</table>

<div style="font-size: 0.6em">
    5<br>
    0x325486
</div>

---
### ejemplo de uso:
<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>*miPuntero</td>
                    <td>0x325485</td>
                    <td>0x325486</td>
                </tr>
                <tr>
                    <td>num</td>
                    <td>0x325486</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
    int &#42;miPuntero;
    int num = 5;

    cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

&rArr;   cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
    }
</code></pre>

        </td>
    </tr>
</table>

<div style="font-size: 0.6em">
    5<br>
    0x325486<br>
    <span class="fragment">0x325486</span>
</div>

---
### ejemplo de uso:
<table>
    <tr>
        <td>
            Memoria
            <table style="font-size: 0.45em">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirc</th>
                    <th>Dato</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>*miPuntero</td>
                    <td>0x325485</td>
                    <td>0x325486</td>
                </tr>
                <tr>
                    <td>num</td>
                    <td>0x325486</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325487</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325488</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325489</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325490</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325491</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325492</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325493</td>
                    <td>0x3210</td>
                </tr>
                <tr>
                    <td></td>
                    <td>0x325494</td>
                    <td>0x3210</td>
                </tr>
                </tbody>
            </table>
        </td>
        <td width="65%">

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;
 int main(){
    int &#42;miPuntero;
    int num = 5;

    cout << num << endl;
    cout << &num << endl;

    miPuntero = &num ;

&rArr;   cout << miPuntero << endl;
    cout << *miPuntero << endl;

    return 0;
}
</code></pre>

        </td>
    </tr>
</table>

<div style="font-size: 0.6em">
    5<br>
    0x325486<br>
    0x325486<br>
    <span class="fragment">5</span>
</div>


---

## ¿Porque C++ usa punteros?

* Al usar punteros se puede utilizar memoria dinámica
* Son mas eficientes para utilizar arreglos y estructuras
* Se pueden hacer punteros a funciones
* Produce código eficiente y compacto
* Son una herramienta muy potente.


---

## Desventajas

* Punteros mal inicializados pueden causar SegFault.
* Si su valor es erroneo, puede llevar a corrupción de memoria.

---

## Resumen:

* Un * en la declaración de una variable antes del nombre, define un puntero.
* Un & antes de una variable indica la dirección de memoria de dicha variable.
* Un * antes de un puntero, indica que estoy desrreferenciandolo y obteniendo el valor de donde apunta.

---

## Manos a la Obra
