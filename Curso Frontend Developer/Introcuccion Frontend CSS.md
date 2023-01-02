# Introduccion 

## Anatomia de una delcaracion CSS

> La anatomia basica de CSS es principalmente un selector para hacer referencia al HTML, llaves donde entraran las propiedas y valores de dichas propiedades, ej:

```
selector {
    Propiedad: valor;
}
```
- `selector` = Indica a que elemento del HTML le estoy asignando las siguientes propiedades
- `{ }` = Las llaves nos delimitan donde se van a encontrar las propiedades y valores para un selector
- `propiedad` = Es el nombre del estilo en CSS
- `valor` = Es el valor que tomara la propiedad

> Ejemplo practico
```
h1{
    color: pink;
}
```

## Comantarios CSS

Para comentar lineas de codigo en CSS utilizamos `/* */`

## Propiedades basicas de CSS

- `color` = establece el color del texto de un elemento.
- `background-color` = establece un color de fondo al elemento.
- `font-size` =  establece el tamaño de la fuente.
- `width` = establece la anchura de un elemento.
- `height` = establece la altura de un elemento.

## Tipos de selectores basicos CSS

> Los selectores nos sirven para especificarle a CSS que es lo que vamos a estilizar, tenemos diversos tipos ya que podemos ser muy especificos a la hora de decirle a CSS como queremos estilizar. Los principales selectores son los siguientes

- `de Tipo` = Selecciona todos los elementos que coincidan con el nombre de la etiqueta HTML.
```
    div {
    /* Todos los div en el documento */
}
```

- `de Clase` = Selecciona todos los elementos que coincidan con las etiquetas HTML que contengan el atributo class. Para seleccionar estos elementos, se empieza por un punto . y seguido el valor exacto del atributo class de la etiqueta. Puede ser cualquier valor que desees colocar. Puede existir más de un valor dentro del atributo class en HTML separados por espacios.
```
<!--archivo HTML-->
<div class="card card1"> Soy una carta </div>
```

- `de ID` = Selecciona el único elemento que coincida con la etiqueta HTML que contenga el atributo id. Solo puede existir un valor id para todo el documento. Para seleccionar el elemento, se empieza por el símbolo de hashtag # y seguido el valor exacto del atributo id de la etiqueta. Puede ser cualquier valor que desees colocar.
```
<!--archivo HTML-->
<button id="eliminar"> Eliminar  </button>
```

- `de Atributo` = Selecciona los elementos que coincidan con la etiqueta HTML que contenga el atributo y valor especificado. Para seleccionar los elementos, se empieza por el nombre de la etiqueta, seguido de corchetes [] que contiene el atributo y valor especificado.

```
<!--archivo HTML-->
<a href="https://platzi.com"> Ir a Platzi </a>
```

- `Universal` = Selecciona todos los elementos del documento mediante un asterisco *.
```
* {
    /* Todos los elementos */
}
```

## Selectores combinados

> Un selector combinador es la unión de dos o más selectores básicos.

- `Combinador de descendientes` = Selecciona todos los elementos del selector de la derecha que son hijos del selector de la izquierda, independientemente de la profundidad. Estos selectores están separados por un espacio.
```
padre hijos {
    /* Todos los hijos del padre */
}

div p{
    /* Todos los hijos <p> de <div>*/
}

.container img{
    /* Todos los hijos <img> de la clase "container"*/
}
```

- `Combinador de hijo directo` = Selecciona todos los elementos del selector de la derecha que son hijos directos del selector de la izquierda. Estos selectores están separados por >.
```
padre > hijos_directos {
    /* Todos los hijos directos del padre */
}

div > p{
    /* Todos los hijos directos <p> de <div>*/
}

.container > img{
    /* Todos los hijos directos <img> de la clase "container"*/
}
```

- `Combinador de elemento adyacente` = Selecciona todos los elementos del selector de la derecha que están adyacente al selector de la izquierda. Estos selectores están separados por +.
```
elemento + adyacente {
    /* Elementos adyacentes */
}

div + p{
    /* Todos los <p> adyacentes a <div>*/
}

.container + img{
    /* Todos los <img> adyacentes a la clase "container"*/
}
```

- `Combinador general de hermanos` = Selecciona todos los elementos del selector de la derecha que son hermanos del selector de la izquierda. Estos selectores están separados por ~.
```
elemento ~ hermanos {
    /* Elementos hermanos */
}

div ~ p{
    /* Todos los <p> hermanos de <div>*/
}

.container ~ img{
    /* Todos los <img> hermanos de la clase "container"*/
}
```
> Hermanos significa que comparten el mismo padre y están situados hacia abajo de otro elemento. Por ejemplo, en el siguiente código, `<div> y <p>` son hermanos de `<h1>`, pero `<h1>` no es hermano de `<div> y <p>`.
```
<!--archivo HTML -->
<h1>Soy un título </h1>
<div>Soy un div</div>
<p>Soy un párrafo</p>
```

## Pseudoclase y Pseudoelemento

> La diferencia entre uno y otro, ademas de que se usan para distintas cosas, es que las `Pseudoclases` de escriben solo con `:` mientras que los `Pseudoelementos` se escriben con `::`

### Pseudoclases
> La sintaxis de las Pseudoclases es la siguiente:
```
selector : pseudoclase { 
    propiedad: valor;
}
```

- `:hover` = Representa el estado en el cual el cursor está encima del elemento.
- `:active` = Representa el estado de un elemento que no ha sido visitado.
- `:visited` = Representa el estado de un elemento que ya ha sido visitado.
- `:not()` = Representa el estado en el cual no coinciden los selectores que se indiquen.
- `:nth-child()` = Representa el estado en el cual coinciden los hijos del elemento según el valor indicado.
    - `Formula` = Fórmula matemática: An+B donde A y B son números enteros.
    - `Ej:` 
    ```
    .container .item:nth-child(2n + 1) {
            background-color: aqua;
        }
    ```

### Pseudoelementos
> Y la sintaxis de los pseudo elementos es la siguiente:
```
selector :: pseudo-elemento { 
    propiedad: valor;
}
```

- `::before` = Sirve para agregar un contenido antes del elemento. El contenido es agregado mediante la propiedad content de CSS.
- `::after` = Sirve para agregar un contenido después del elemento. El contenido es agregado mediante la propiedad content de CSS.
- `::firt-letter` = Sirve para añadir estilos a a la primera letra del texto de cualquier elemento.

## Cascada y especificidad en CSS

> Hojas de estilos en cascada o CSS tiene ese nombre ya que se debe a la forma en que estilizamos los elementos de HTML, ya que al abrir las `{}` lo que hacemos es ir poniendo los estilos en uno debajo del otro

> Hay que tener en cuenta que a la hora de ir poniendo varios elementos que hagan referencia a lo mismo, los elementos que prevaleceran seran los que estan mas abajo, ya que los que estan abajo sobre escriben a los elementos que estan en la parte superior

> La especificidad consiste en dar un valor a una regla CSS sobre qué tan específico es el estilo, esto para que los navegadores puedan saber qué estilos aplicar sobre otros, independientemente de dónde se encuentren en el código. El estilo se aplicará donde la especificidad sea mayor.

### Tipos de especificidad

- `!important` = La palabra reservada !important es un valor de toda propiedad CSS que provee una especificidad de 10000, por lo que se aplicará ante otros estilos. Esto es una mala práctica y no deberías utilizarlo.
```
h1 {
    color: red !important;
}
```

- `estilos en linea` = Los estilos en línea son las propiedades CSS escritas en el HTML a través de la propiedad style de toda etiqueta. También es una mala práctica y debes evitarlo.
```
<h1 style="color: blue;">Especificidad</h1>
```

- `Especificidad en selectores` = Especificidad en selectores
El tema de los selectores ya lo conoces, por lo tanto, los selectores de tipo ID son más específicos que las clases, atributos y pseudoclases. Estas últimas son más específicas que los elementos y pseudoelementos. El selector universal tiene una especificidad de 0.

En un proyecto deberías evitar los !important y estilos en línea, para trabajar únicamente con la especificidad de los selectores. Sin embargo, debes tener presente que los selectores combinadores suman la especificidad de cada selector básico para obtener la especificidad total de la regla CSS.

*Ver imagen de referencie* 

## Tipos de display mas usados

> La propiedad display establece el tipo de visualización de los elementos HTML sin afectar el flujo normal de los elementos. Esto quiere decir que todos los elementos que usemos en HTML tienen una visualizacion por defecto y se ven diferente e interactuan diferente segun sea a la hora de visualizar

- `visualizacion en bloque (block)` = El display block **establece que un elemento ocupará todo el espacio disponible por defecto y el siguiente elemento a este se situará por debajo. Es posible añadir medidas de anchura width y altura height a estos a elementos. También es posible agregar todas las propiedades del modelo de caja.
- `visualizacion en linea (inline)` =  El display inline establece que un elemento ocupará el espacio del contenido del mismo y el siguiente elemento se situará a la derecha. No es posible añadir medidas de anchura width y altura height a estos a elementos. También, no es posible agregar todas las propiedades del modelo de caja, únicamente funcionará la propiedad margin en el eje horizontal.
- `visualizacion de bloque y linea (inline-block)` = El display inline-block combina las ventajas de bloque de colocar medidas al elemento y propiedades del modelo de caja correctamente; con las ventajas de inline de color un elemento seguido de otro en el mismo espacio. Si elemento excede el contenido total, se coloca en la siguiente línea por debajo.
- `visualizacion nula (none)` = El display none desactiva la visualización de un elemento, como si el elemento no existiera.

## FlexBox

> Flexbox consiste en el ordenamiento de elementos hijos en un solo eje, por defecto horizontalmente. El elemento padre o contenedor deberá contener la propiedad display con el valor flex. A partir de aquí, ya puedes ordenar los hijos según sea necesario.

> Como regla la propiedad de CSS `display: flex;` tiene que ir solo en los contenedores padre, si no tiene otros contenedores anidados no va esta propiedad

*Bibliografia muy util [Link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)*

> La bibliografia anterior es fundamental ya que me premite estructurar un monton de cosas con FLexBox

## Grid 

> Grid consiste en el ordenamiento de elementos hijos en dos ejes, como si fuera una cuadrícula o tabla. El elemento padre o contenedor deberá contener la propiedad display con el valor grid y debes definir las medidas de las columnas y de las filas. A partir de aquí, ya puedes ordenar los hijos según sea necesario.

*Bibliografia muy util [Link](https://css-tricks.com/snippets/css/complete-guide-grid/)*

> La bibliografia anterior es fundamental ya que me premite estructurar un monton de cosas con Grid

## Unificacion de Grid y FlexBox

Basicamente los dos nos permiten ordenar en la pantalla los elementos que nosotros hayamos establecido con CSS, en el caso de `FlexBox` Fue pensado para la organizacion en 2D o solo filas y columnas, mientras que `Grid` esta mas pensado para ambientes 3D cuadriculas. 

.
En FlexBox se organiza los items por medio de especificar donde queremos cada elemento con nombre, y ya se encarga el programa de ubicarlo deonde lo queremos. 

. 
Mientras que Grid trabaja por cuadricula, y lo que hacemos es establecer una cuadricula y elinear los elementos en esa cuadricula.

.
Una buena metodologia de trabajo puede ser la de organizar toda nuestra pagina web con Grid ya que permite ordenarla mejor por las cuadriculas, pero a la hora de trabajar con cosas mas chicas utilizar FlexBox ya que nos permite hacer menos calculos y trabajos mas precisos.

.
Para ver los ejemplos buscar en los archivos `/Curso Frontend Developer/FrontendPractice/DisplayB.html` para FlexBox y `/Curso Frontend Developer/FrontendPractice/DisplayBB.html` para Grid

## Colapso de margenes

> El colapso de márgenes sucede cuando dos elementos bloque adyacentes tienen un determinado valor de margin, entonces estos márgenes se solapan en un solo valor, el mayor de ambos.

> En flexbox y grid no ocurre el colapso de márgenes. Cuida los márgenes que colocas en los elementos de tipo bloque.

Basicamente, en los elementos de tipo bloque que tienen un valor de margin y que estan adyacentes uno del otrolos margenes que establecimos se colapasn en uno solo, pero si esos bloques los contenemos en otro bloque y en ese otro bloque usamos flex o grid cada margen va a ser individual, ej:

.
Si tengo dos div con un margin de 20px, estos se van a combinar o colapsar para que efectivamente tenga un margen de 20 px entre los dos.
Pero si tengo esos dos bloques contenidos en otro bloque y ese bloque tiene grid o flex ya los margenes no se van a superponer, si no que se van a respetar, lo que significa que si antes mis dos bloques los separaba 20px ahora los van a separar 40px.

## Posicionamiento en CSS

> El posicionamiento en CSS consiste en cómo un elemento se situará, con respecto a su elemento padre y al flujo normal del documento. El flujo normal del documento es el orden de los elementos establecidos en el HTML.

> La posición del elemento se la define con la propiedad position, mediante los siguientes valores:
- `static`
- `relative`
- `absolute`
- `sticky`

### Propiedades de posicion

> Además de la propiedad position, existen cuatro propiedades del elemento de acuerdo a su posición con respecto a su padre, estas son: `top` (arriba), `bottom` (debajo), `left` (izquierda) y `right` (derecha).

> Estos valores estarán establecidos en el padre próximo que tenga la posición relative.

> Si top y bottom están definidos, top gana. Si left y rigth están definidos, left gana (dependiendo el idioma configurado).

### Posicion estatica

> La posición static es el valor por defecto de todo elemento HTML, consiste en respetar el flujo normal del documento donde las propiedades de posición no pueden ser establecidas.

> [Ejemplos](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCjwvZGl2Pg0KDQoNCg0K%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCg0KLmNvbnRhaW5lcnsNCiAgd2lkdGg6IDEwMCU7DQoNCn0NCg0KLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KLmNvbnRhaW5lciBkaXYgew0KICB3aWR0aDogMTAwcHg7IA0KICBoZWlnaHQ6IDEwMHB4Ow0KLyogDQogIHRvcDogMTBweDsNCiAgYm90dG9tOiAxNXB4Ow0KICBsZWZ0OiAyMHB4Ow0KICByaWdodDogMTBweDsgDQogICovDQp9DQoNCi5jb250YWluZXIgZGl2Om50aC1jaGlsZCgybil7DQogIGJhY2tncm91bmQtY29sb3I6IGFxdWE7DQp9DQoNCi5jb250YWluZXIgZGl2Om50aC1jaGlsZCgybisxKXsNCiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247DQp9DQoNCg0KDQoNCg0KDQo=%7C)

### Posicion relativa

> La posición relative consiste en respetar el flujo normal del documento donde las propiedades de posición sí pueden ser establecidas.

> [Ejemplos](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0icmVsYXRpdmUiPjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KICA8ZGl2PjwvZGl2Pg0KPC9kaXY+DQoNCg0KDQo=%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCg0KLmNvbnRhaW5lcnsNCiAgd2lkdGg6IDEwMCU7DQp9DQoNCi5jb250YWluZXIgZGl2IHsNCiAgd2lkdGg6IDEwMHB4OyANCiAgaGVpZ2h0OiAxMDBweDsNCn0NCg0KLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KLmNvbnRhaW5lciAucmVsYXRpdmV7DQogIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi8NCiAgLyogdG9wOiA1MHB4OyAqLw0KICAvKiBsZWZ0OiA1MHB4OyAqLw0KfQ0KDQouY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMm4pew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KfQ0KDQouY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMm4rMSl7DQogIGJhY2tncm91bmQtY29sb3I6IGJyb3duOw0KfQ0KDQoNCg0KDQoNCg0K%7C)

### Posicion absoluta

> La posición relative consiste en respetar el flujo normal del documento donde las propiedades de posición sí pueden ser establecidas.

> Elemento padre más próximo con posición relativa
>El elemento con posición absoluta se desplazará arriba, abajo, izquierda o derecha con respecto al elemento padre más próximo con posición relativa.

>Si no existe un padre con posición relativa de un elemento con posición absoluta, este se desplazará con respecto al elemento raíz del documento.

> [Ejemplos](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdiBjbGFzcz0iYWJzb2x1dGUiPjE8L2Rpdj4NCiAgPGRpdj4yPC9kaXY+DQogIDxkaXY+MzwvZGl2Pg0KICA8ZGl2PjQ8L2Rpdj4NCiAgPGRpdj41PC9kaXY+DQo8L2Rpdj4NCg0KDQoNCg==%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCiAgZm9udC1zaXplOiAxLjVyZW07DQp9DQoNCi8qIEltcG9ydGFudGUgZWwgcG9zaXRpb24gKi8NCi5jb250YWluZXJ7DQogIHBvc2l0aW9uOiByZWxhdGl2ZTsNCiAgd2lkdGg6IDEwMCU7DQp9DQoNCi5jb250YWluZXIgZGl2IHsNCiAgd2lkdGg6IDEwMHB4OyANCiAgaGVpZ2h0OiAxMDBweDsNCn0NCg0KLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KLmNvbnRhaW5lciAuYWJzb2x1dGV7DQogIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi8NCiAgLyogbGVmdDogMTUwcHg7ICovDQogIC8qIHRvcDogNTBweDsgKi8NCn0NCg0KLmNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDJuKXsNCiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTsNCn0NCg0KLmNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDJuKzEpew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsNCn0NCg0KDQoNCg0KDQoNCg0KDQo=%7C)


### Posicion fija

> La posición fixed consiste en quitar al elemento del flujo normal del documento y fijarlo en un lugar; donde las propiedades de posición sí pueden ser establecidas.

> [Ejemplos](https://codi.link/PG5hdj5EZSBncmFuZGUgcXVpZXJvIHNlciB1bmEgYmFycmEgZGUgbmF2ZWdhY2nDs248L25hdj4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQo8cD5Tb3kgdW4gcMOhcnJhZm8sIGJhamEgcG9yIGZhdm9yPC9wPg0KPHA+U295IHVuIHDDoXJyYWZvLCBiYWphIHBvciBmYXZvcjwvcD4NCjxwPlNveSB1biBww6FycmFmbywgYmFqYSBwb3IgZmF2b3I8L3A+DQoNCg0KDQo=%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCiAgZm9udC1zaXplOiAxLjFyZW07DQp9DQoNCi8qIERlc3Bsw6F6YXRlIHBvciBlbCBkb2N1bWVudG8geSBkZXNwdcOpcyBxdWl0YSBsb3MgY29tZW50YXJpb3MgeSBvYnNlcnZhIGVsIGNvbXBvcnRhbWllbnRvICovDQoNCm5hdiB7DQogIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi8NCiAgLyogdG9wOiAwOyAqLw0KICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTsNCiAgd2lkdGg6IDEwMCU7DQogIGhlaWdodDogYXV0bzsNCiAgcGFkZGluZzogMjBweDsNCn0NCg0KcCB7DQogIHBhZGRpbmc6IDEwcHg7DQp9DQoNCg0KDQoNCg0KDQoNCg0K%7C)

### Posicion variable fija

> La posición sticky consiste en quitar al elemento del flujo normal del documento y fijarlo en un lugar mientras su contenedor sea visible; donde las propiedades de posición sí pueden ser establecidas.

> [Ejemplos](https://codi.link/PGRpdj4NCiAgPHA+U295IHVuIHDDoXJyYWZvIDE8L3A+DQogIDx1bD4NCiAgICA8bGk+RWxlbWVudG8gMTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDI8L2xpPg0KICAgIDxsaT5FbGVtZW50byAzPC9saT4NCiAgICA8bGk+RWxlbWVudG8gNDwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDU8L2xpPg0KICAgIDxsaT5FbGVtZW50byA2PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDg8L2xpPg0KICAgIDxsaT5FbGVtZW50byA5PC9saT4NCiAgICA8bGk+RWxlbWVudG8gMTA8L2xpPg0KICA8L3VsPg0KICA8cD5Tb3kgdW4gcMOhcnJhZm8gMjwvcD4NCiAgPHVsPg0KICAgIDxsaT5FbGVtZW50byAxPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDM8L2xpPg0KICAgIDxsaT5FbGVtZW50byA0PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDY8L2xpPg0KICAgIDxsaT5FbGVtZW50byA3PC9saT4NCiAgICA8bGk+RWxlbWVudG8gODwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDk8L2xpPg0KICAgIDxsaT5FbGVtZW50byAxMDwvbGk+DQogIDwvdWw+DQogIDxwPlNveSB1biBww6FycmFmbyAzPC9wPg0KICA8dWw+DQogICAgPGxpPkVsZW1lbnRvIDE8L2xpPg0KICAgIDxsaT5FbGVtZW50byAyPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDQ8L2xpPg0KICAgIDxsaT5FbGVtZW50byA1PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDc8L2xpPg0KICAgIDxsaT5FbGVtZW50byA4PC9saT4NCiAgICA8bGk+RWxlbWVudG8gOTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDEwPC9saT4NCiAgPC91bD4NCiAgPHA+U295IHVuIHDDoXJyYWZvIDQ8L3A+DQogIDx1bD4NCiAgICA8bGk+RWxlbWVudG8gMTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDI8L2xpPg0KICAgIDxsaT5FbGVtZW50byAzPC9saT4NCiAgICA8bGk+RWxlbWVudG8gNDwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDU8L2xpPg0KICAgIDxsaT5FbGVtZW50byA2PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDg8L2xpPg0KICAgIDxsaT5FbGVtZW50byA5PC9saT4NCiAgICA8bGk+RWxlbWVudG8gMTA8L2xpPg0KICA8L3VsPg0KICA8cD5Tb3kgdW4gcMOhcnJhZm8gNTwvcD4NCiAgPHVsPg0KICAgIDxsaT5FbGVtZW50byAxPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDM8L2xpPg0KICAgIDxsaT5FbGVtZW50byA0PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDY8L2xpPg0KICAgIDxsaT5FbGVtZW50byA3PC9saT4NCiAgICA8bGk+RWxlbWVudG8gODwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDk8L2xpPg0KICAgIDxsaT5FbGVtZW50byAxMDwvbGk+DQogIDwvdWw+DQogIDxwPlNveSB1biBww6FycmFmbyA2PC9wPg0KICA8dWw+DQogICAgPGxpPkVsZW1lbnRvIDE8L2xpPg0KICAgIDxsaT5FbGVtZW50byAyPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDQ8L2xpPg0KICAgIDxsaT5FbGVtZW50byA1PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDc8L2xpPg0KICAgIDxsaT5FbGVtZW50byA4PC9saT4NCiAgICA8bGk+RWxlbWVudG8gOTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDEwPC9saT4NCiAgPC91bD4NCiAgPHA+U295IHVuIHDDoXJyYWZvIDc8L3A+DQogIDx1bD4NCiAgICA8bGk+RWxlbWVudG8gMTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDI8L2xpPg0KICAgIDxsaT5FbGVtZW50byAzPC9saT4NCiAgICA8bGk+RWxlbWVudG8gNDwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDU8L2xpPg0KICAgIDxsaT5FbGVtZW50byA2PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDg8L2xpPg0KICAgIDxsaT5FbGVtZW50byA5PC9saT4NCiAgICA8bGk+RWxlbWVudG8gMTA8L2xpPg0KICA8L3VsPg0KICA8cD5Tb3kgdW4gcMOhcnJhZm8gODwvcD4NCiAgPHVsPg0KICAgIDxsaT5FbGVtZW50byAxPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDM8L2xpPg0KICAgIDxsaT5FbGVtZW50byA0PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDY8L2xpPg0KICAgIDxsaT5FbGVtZW50byA3PC9saT4NCiAgICA8bGk+RWxlbWVudG8gODwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDk8L2xpPg0KICAgIDxsaT5FbGVtZW50byAxMDwvbGk+DQogIDwvdWw+DQogIDxwPlNveSB1biBww6FycmFmbyA5PC9wPg0KICA8dWw+DQogICAgPGxpPkVsZW1lbnRvIDE8L2xpPg0KICAgIDxsaT5FbGVtZW50byAyPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDQ8L2xpPg0KICAgIDxsaT5FbGVtZW50byA1PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDc8L2xpPg0KICAgIDxsaT5FbGVtZW50byA4PC9saT4NCiAgICA8bGk+RWxlbWVudG8gOTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDEwPC9saT4NCiAgPC91bD4NCiAgPHA+U295IHVuIHDDoXJyYWZvIDEwPC9wPg0KICA8dWw+DQogICAgPGxpPkVsZW1lbnRvIDE8L2xpPg0KICAgIDxsaT5FbGVtZW50byAyPC9saT4NCiAgICA8bGk+RWxlbWVudG8gMzwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDQ8L2xpPg0KICAgIDxsaT5FbGVtZW50byA1PC9saT4NCiAgICA8bGk+RWxlbWVudG8gNjwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDc8L2xpPg0KICAgIDxsaT5FbGVtZW50byA4PC9saT4NCiAgICA8bGk+RWxlbWVudG8gOTwvbGk+DQogICAgPGxpPkVsZW1lbnRvIDEwPC9saT4NCiAgPC91bD4NCjwvZGl2Pg==%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCiAgZm9udC1zaXplOiAxLjFyZW07DQp9DQoNCi8qIERlc3Bsw6F6YXRlIHBvciBlbCBkb2N1bWVudG8geSBkZXNwdcOpcyBxdWl0YSBsb3MgY29tZW50YXJpb3MgeSBvYnNlcnZhIGVsIGNvbXBvcnRhbWllbnRvICovDQoNCnAgew0KICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqLw0KICAvKiB0b3A6IDA7ICovDQogIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlOw0KICBwYWRkaW5nOiAxMHB4Ow0KfQ0KDQpsaSB7DQogIG1hcmdpbjogMjBweCAzMHB4Ow0KfQ0KDQoNCg0KDQoNCg0KDQoNCg0K%7C)

### Unificacion

> Basicamente esto me sirve para posicionar elemento del HTML en relacion a otro elementos que pueden o no seguir el orden del HTML, y pueden ser visibles o no.

## Z-index y el contexto de apilamiento

> El contexto de apilamiento consiste en la superposición de capas o elementos a lo largo del eje Z del navegador. Esto es importante para evitar que un elemento esté ocultando a otro.

El navegador está constituido de tres planos y ejes: el ancho o X; el alto o Y; y el de profundidad o Z.

El eje X positivo está hacia la derecha; el eje Y positivo está hacia abajo; y el eje Z positivo está hacia el usuario.

Estos son muy importantes para mover los elementos del HTML desde un punto inicial hacia un punto final.

El contexto de apilamiento se configura con la propiedad z-index.

Por defecto, todos los elementos tienen un valor auto, es decir, el orden está definido por la estructura del HTML. Los primeros elementos estarán detrás y los últimos estarán de frente.

Si se establece un valor positivo, este elemento se sitúa por delante de los demás. Si se establece un valor negativo, se sitúa por detrás.

Si un elemento tiene un z-index mayor a otro, estará por delante. Sin embargo, si un elemento que tiene un z-index menor a otros, sus hijos nunca estarán por encima, aunque su z-index sea mayor.

## Propiedades de CSS mas usadas

> Las propiedades CSS más usadas son las siguientes, separadas en secciones comunes, algunas ya las conocemos:

- `Display`
- `Margin`
- `Padding`
- `Border`
- `Width`
- `Heigth`
- `Color`
- `Background`

Para ver todas las propiedades de CSS: [Link](https://cssreference.io/)

### Propiedades para los textos

- `font-size` = establece un tamaño de fuente.
- `font-weight` = establece el resaltado del texto, con valores de 100 a 900 en intervalos de 100; donde 100 es delgada y 900 es negrita.
- `font-family` = establece el tipo de fuente.
- `text-align` = establece la posición del texto: right, left, center y justify.
- `color` = establece el color del texto.
- `border-radius` = propiedad que establece bordes redondeados.

