# HTML y CSS

> Lenguaje de marcado de hipertexto o *HTML* son las siglas del lenguaje que nos permite estructurar las paginas web, darles la anatomia y el lugar de donde tienen que ir todas las cosas, ya sean imagenes, botones, textos, etc.

> y hojas de estilos en cascada o *CSS* es el lenguaje que vamos a usar para darles estilos a toda la estructuracion que ya hicimos previamente 

El problema es que el navegador no entiende todo lo que nosotros escribimos, por eso cada navegador usa su propio motor de renderizado, en el caso de Chrome este motor es `Blink` y en el caso de Safari es `Webkit`.Estos motores se encargan de traducir todo lo que nosotros escribimos a un lenguaje que el navegador pueda entender, y lo hace por medio de 5 pasos

1. Transforma los archivos a un árbol de objetos HTML o CSS, estos se denominan DOM (Document Object Model) y CSSDOM (Cascade Style Sheet Object Model), respectivamente. Cada nodo en el árbol es una representación de los elementos que contiene el archivo HTML o CSS.

2. Calcula el estilo correspondiente a cada nodo del DOM relacionado al CSSDOM.

3. Calcula las dimensiones de cada nodo y dónde va en la pantalla.

4. Pinta o renderiza los diferentes elementos como cajas o contenedores.

5. Agrupa todas las cajas en diferentes capas para convertirlas en una imagen que se renderiza en pantalla.

