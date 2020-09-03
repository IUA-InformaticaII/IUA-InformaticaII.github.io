---
title: Memoria Dinámica
theme: league
slideNumber: true
---

# Informática II
<p>
    <small>Created by
        <a href="https://t.me/rmarku" target="_blank">
            <i class="fab fa-telegram-plane"></i>rmarku
        </a>
    </small>
</p>

---
# Memoria Dinámica



---
## Asignación dinámica de memoria
    
* Almacenamiento estático y dinámico
* Funciones malloc() y free() (C)
* Funciones new y delete (C++)
* Ejemplos de asignación de memoria para arreglos
* Ejemplos de asignación de memoria para matrices
    

---
## Almacenamiento estático

La forma convencional de almacenar las variables en memoria se denomina estático.

Con este método, al inicio del programa le informamos cuanta memoria necesitamos

---
## Almacenamiento estático
#### Inconvenientes
    
* No puedo utilizar mas datos de los que reserve en código
* Para hacerlo genérico reservo muchos mas datos de los que utilizo
* Solo implementable en tiempo de compilación
    
#### Ventaja
    
* No me preocupo por el manejo de memoria
    
---
## Almacenamiento dinámico

En tiempo de ejecución, le digo al Sistema Operativo que me de mas memoria

Esto permite trabajar con cualquier tamaño de datos

---
## Almacenamiento dinámico

#### Ventaja
    
* Puedo utilizar solo la memoria que me hace falta
* Puedo pedir mas memoria a demanda
    
#### Inconvenientes
    
* Debo asegurarme de liberar la memoria que ya no utilizo

---
## malloc: Memory Allocation
Allocation = Asignación

Allocation != Alocar
 
Alocar = Causar locura
 
Luego, la memoria no se aloca 🤪

La memoria se Asigna
---
## malloc: Memory Allocation

### Sintaxis
<pre><code class="hljs c++" data-trim>
    void* malloc(cantBytes);
</code></pre>
Se le piden <i>cantBytes</i> al Sistema Operativo. Este devuelve un puntero
a donde comienza dicha memoria o NULL si no hay memoria disponible
Nota: debo castear void al tipo de datos al que va a apuntar el puntero


---
## malloc: Ejemplo

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;

int main(){
    int *miPuntero;
    int cant = 5;
    cin >> cant;
    miPuntero = (int*)malloc( cant * sizeof(int));
    int i;
    for( i = 0 ; i < cant ; i++ ){
        cin >> miPuntero[i];
    }
}
</code></pre>



---

## malloc: Ejemplo

### ¿Y eso es todo?

No, debo verificar que malloc pudo reservarme esa memoria, de lo contrario me devuelve NULL


---
## malloc: Ejemplo

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;

int main(){
    int *miPuntero;
    int cant = 5;
    cin >> cant;
    miPuntero = (int*)malloc( cant * sizeof(int));
    if(miPuntero == NULL){
        cout << "No tengo tanta memoria!";
        exit(EXIT_FAILURE);
    }
    int i;
    for( i = 0 ; i < cant ; i++ ){
        cin >> miPuntero[i];
    }
}
</code></pre>


---
## malloc: Ejemplo

### Bueno, ahora si eso es todo

No!, al no utilizar mas esos recursos, debo liberar esa memoria. Devolverle al sistema operativo lo que me prestó.

<img src="images/memhog.jpg" alt="" style="height: 300px">

---
## malloc: Ejemplo

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;

int main(){
    int *miPuntero;
    int cant = 5;
    cin >> cant;
    miPuntero = (int*)malloc( cant * sizeof(int));
    if(miPuntero == NULL){
        cout << "No tengo tanta memoria!";
        exit(EXIT_FAILURE);
    }
    int i;
    for( i = 0 ; i < cant ; i++ ){
        cin >> miPuntero[i];
    }
    for( i = 0 ; i < cant ; i++ ){
        cout << "dato " << i << " = " <<  miPuntero[i];
    }
    free(miPuntero);
}
</code></pre>


---

## new/delete: Asignación de memoria en C++

En C++ se introducen las funciones new y delete, que vienen a remplazar a malloc() y free()
New tiene como ventaja que no hay que pasarle los valores en bytes, sino el tipo de dato que quiero.
    En realidad, new y delete hacen mas cosas que malloc y free. Esto es debido que si hago un new de una clase
        (POO) new ejecuta el constructor de la clase.


---
## malloc: Ejemplo
<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;

int main(){
    int *miPuntero;
    int cant = 5;
    cin >> cant;
    miPuntero = new int[cant];
    if(miPuntero == NULL){
        cout << "No tengo tanta memoria!";
        exit(EXIT_FAILURE);
    }
    int i;
    for( i = 0 ; i < cant ; i++ ){
        cin >> miPuntero[i];
    }
    for( i = 0 ; i < cant ; i++ ){
        cout << "dato " << i << " = " <<  miPuntero[i];
    }
    delete miPuntero;
}
</code></pre>



---
## Matrices

Las matrices son arreglos de arreglos, pero mediante el uso de memoria dinámica, cada arreglo puede tener tamaño distinto.
Luego, es mas general que una matriz.
Debo pedir memoria para el arreglo de arreglos y para cada uno de esos arreglos


---
## Matrices: Ejemplo

<pre><code class="hljs c++" data-trim>
#include &lt;iostream&gt;

int main(){
    int **miMatriz;
    int filas, columnas;
    cin >> filas;
    cin >> columnas;
    miMatriz = (int**) malloc( filas * sizeof(int*) );
    // Debería vefiricar que miMatriz no es NULL
    int i;
    for( i = 0 ; i < filas ; i++ ){
        miMatriz[i] = (int*) malloc( columnas * sizeof(int) );
        // Debería vefiricar que miMatriz[i] no es NULL
    }
    // Lo mismo con el Free, debo liberar cada malloc que hice.

    for( i = 0 ; i < filas ; i++ ){
        free(miMatriz[i]);
    }
    free(miMatriz);
}
</code></pre>


---
## malloc, calloc, realloc

Hay dos funciones mas que nos simplifican el uso de memoria con malloc

---

### Calloc

Similar a Malloc, pero llena de 0 la memoria solicitada:

<pre><code class="hljs c++" data-trim>
    void* calloc(cant_elementos, tamaño);
</code></pre>

---
### Realloc

Aumenta el tamaño 
de memoria asignado anteriormente y copia el contenido inicial al nuevo.
<pre><code class="hljs c++" data-trim>
    void* realloc(puntero_anterior, tamaño);
</code></pre>

