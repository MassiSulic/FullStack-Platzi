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

