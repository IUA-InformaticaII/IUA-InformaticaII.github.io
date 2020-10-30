---
title: Memoria Dinámica
theme: league
slideNumber: true
---

# Informática II

<small>Created by
    <a href="https://t.me/rmarku" target="_blank">
        <i class="fab fa-telegram-plane"></i>rmarku
    </a>
</small>

---
# Memoria Dinámica



---
## Almacenamiento estático

La forma convencional de almacenar las variables en memoria se denomina estática.

Con este método, al inicio del programa le informamos cuanta memoria necesitamos

---
## Almacenamiento estático
#### <span style="color: red"> Inconvenientes </span>
    
<span style="font-size: 0.7em">

* No puedo guardar mas datos de los que uso en código
* Para hacerlo genérico reservo muchos mas datos de los que utilizo
* Solo implementable en tiempo de compilación

</span>

#### <span style="color: lightgreen"> Ventajas </span>
    
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
## Asignación dinámica de memoria
    
* Almacenamiento estático y dinámico
* Funciones <span style="color: red">malloc()</span> y <span style="color: red">free()</span> (C)
* Funciones <span style="color: lightgreen">new</span> y <span style="color: lightgreen">delete</span> (C++)
* Ejemplos de asignación de memoria para arreglos
* Ejemplos de asignación de memoria para matrices
    

---
## <span style="color: red;">malloc</span>: Memory Allocation
Allocation = Asignación

Allocation != Alocar
 
Alocar = Causar locura
 
Luego, la memoria no se aloca 🤪

La memoria se Asigna
---
## <span style="color:red;">malloc</span>: Memory Allocation

### Sintaxis


```cpp
    void* malloc(cantBytes);
```

Se le piden <i>cantBytes</i> al Sistema Operativo. Este devuelve un puntero
a donde comienza dicha memoria o NULL si no hay memoria disponible
Nota: debo castear <span style="color: darkgrey;">**void**</span> al tipo de datos al que va a apuntar el puntero


---
## <span style="color:red;">malloc</span>: Ejemplo

Creo un arreglo de 5 enteros de manera dinámica


```cpp
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
```



---

## <span style="color:red;">malloc</span>: Ejemplo

### ¿Y eso es todo?

No, debo verificar que malloc pudo reservarme esa memoria, de lo contrario me devuelve <span style="color: yellow;">NULL</span>


---
## <span style="color:red;">malloc</span>: Ejemplo


```cpp
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
```


---
## <span style="color:red;">malloc</span>: Ejemplo

### Bueno, ahora si eso es todo

No!, al no utilizar mas esos recursos, debo liberar esa memoria. Devolverle al sistema operativo lo que me prestó.

![MemHog](images/memhog.webp)

---
## <span style="color:red;">malloc</span>: Ejemplo completo


```cpp
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
```


---

## new/delete: Asignación de memoria en C++

En C++ se introducen las funciones new y delete, que vienen a remplazar a malloc() y free()

New tiene como ventaja que no hay que pasarle los valores en bytes, sino el tipo de dato que quiero.

En realidad, new y delete hacen mas cosas que malloc y free. Esto es debido que si hago un new de una clase
        (POO) new ejecuta el constructor de la clase.


---
## new/delete: Ejemplo

```cpp
#include &lt;iostream&gt;

int main(){
    int *miPuntero;
    int cant = 5;
    cin >> cant;
    miPuntero = new int;
    if(miPuntero == nullptr){
        cout << "No tengo tanta memoria!";
        exit(EXIT_FAILURE);
    }
    cin >> *miPuntero;

    cout << "dato " << i << " = " <<  *miPuntero;

    delete miPuntero;
}
```



---
## Matrices

Las matrices son arreglos de arreglos, pero mediante el uso de memoria dinámica, cada arreglo puede tener tamaño distinto.
Luego, es mas general que una matriz.
Debo pedir memoria para el arreglo de arreglos y para cada uno de esos arreglos


---
## Matrices: Ejemplo

```cpp
#include &lt;iostream&gt;

int main(){
    int **miMatriz;
    int filas, columnas;
    cin >> filas;
    cin >> columnas;
    miMatriz = miMatriz = new int*[filas]; // o (int**) malloc( filas * sizeof(int*) );
    // Debería vefiricar que miMatriz no es NULL
    int i;
    for( i = 0 ; i < filas ; i++ ){
        miMatriz[i] =  new int[columnas]; // o (int*) malloc( columnas * sizeof(int) );
        // Debería vefiricar que miMatriz[i] no es NULL
    }
    // Lo mismo con el Free, debo liberar cada malloc que hice.
    for( i = 0 ; i < filas ; i++ ){
        delete[] miMatriz[i]; // o free(miMatriz[i]);
    }
    delete[] miMatriz; // o free(miMatriz);
}
```


---
## malloc, calloc, realloc

Hay dos funciones mas que nos simplifican el uso de memoria con malloc

---

### Calloc

Similar a Malloc, pero llena de 0 la memoria solicitada:

```cpp
    void* calloc(cant_elementos, tamaño);
```

---
### Realloc

Aumenta el tamaño 
de memoria asignado anteriormente y copia el contenido inicial al nuevo.

```cpp
    void* realloc(puntero_anterior, tamaño);
```

---

# To Code

![CodeMonkey](images/CodeMonkey2.webp)
