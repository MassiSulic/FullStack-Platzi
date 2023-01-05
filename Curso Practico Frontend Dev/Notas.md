# Conceptos

Una de las primeras cosas que hacemos antes de empezar con la maquetacion de nuestro sitio web es identificar las pantallas y los diferentes lugares a los que se pueden acceder, como hacer un bosquejo.  

Este bosquejo o maqueta lo podemos hacer con herramientas como Figma o Scketch, donde estariamos planificando la experiencia del usuario y su interfaz (UX / UI).  

Por eso podemos decir que: La *maquetación o diagramación web* consiste en transformar un diseño gráfico —boceto— (hecho por UX/UI en Figma o Scketch) en una interfaz funcional en términos de programación que entienda un navegador o dispositivo específico.`

## Sistemas de diseño

Cuando hablamos ya de construir un sitio web hay practicas que nos convienen seguir para que no tengamos inconvenientes a la hora de escalar nuestro sitio o de hacer cambios, por eso algunas reglas que tenemos que tener presentes son las siguientes:  

- Es bueno utilizar variables en css, es decir que en el `<styles>` podemos establecer codigos de color para ya trabajar con ellos, asi si los queremos cambiar en un futuro no tendriamos que ir lugar por lugar cambiando los colores si no que ya tendriamos todo unificado  

Para establecer las variables usamos la siguiete sintaxis `--nombre-variable: valor;` Normalmente las declaramos dentro del selector :root para que su alcance (scope) sea global.  

Y podemos acceder a estas variables con la funcion `var()`

- Lo mismo con las fuentes que vamos a utilizar, las podemos sacar de Google Fonts y establecerlas como links en el head del html y luego dentro de la etiqueta style le decimos a CSS que la implemente
```
body {
            font-family: 'Quicksand', sans-serif;
        }
```

- Y por ultimo los iconos que los podemos guardar en carpetas como assets o utilidades que usaremos durante la creacion del sitio web.  

Basicamente todo esto hay que planearlo antes asi nuestro sitio web queda profesional y sin problemas en un futuro.  

A continuacion hay una pagina web con todas las reglas que podriamos seguir para hacer paginas web estandares [Link](https://polaris.shopify.com/design/design)

## Como ordenar estilos

Cuando vamos a dar estilos en css para seguir una metodologia ordenada y legible podemos seguir estos pasos:

1. Posicionamiento
2. Modelo de caja
3. Tipografia
4. Visuales
5. Otros

## Propiedades para centrar

- `text-align: center` = La propiedad text-align puede aplicarse a elementos de nivel bloque (P, H1, etc.) para dar la alineación del texto del elemento. Esta propiedad es similar en función al atributo ALIGN de HTML en párrafos, encabezados y divisiones.

- `justify-self: center` = https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self

- `justify-content: center` = https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content

> La clave para entender los justify es que el de content modifica el contenido, mientras que el de self se modifica a si mismo (Es decir al mismo elemento que estamos modificando y no a todos)

## Position 

- Static: posición por defecto de los elementos.
Es el único caso en el que no se puede utilizar top, right, bottom ni left.

- Absolute: los elementos permanecen en la posición donde fueron colocados, pero pierden su espacio físico, es decir, se sobreponen en otros elementos. Aclaración: para poder aplicar este valor, el contendor padre debe tener position relative.

- Relative: conservan su posición original y espacio físico, pero podemos moverlos con las propiedades top, right, bottom, y left.

- Fixed: pierden su espacio físico y permanecen de forma fija.

- Sticky: conservan su espacio físico, pero cuando el scroll los alcanza lo siguen - sin perder dicho espacio físico.
Es muy usado para barras de navegación.

- Initial: vuelve el position de un elemento a como estaba originalmente.

- Inherit: hereda el position de su padre.