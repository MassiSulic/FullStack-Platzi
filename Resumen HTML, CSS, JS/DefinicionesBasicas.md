# Definiciones simples a los nombres clave que se usan en HTML, CSS y JS

## Definiciones JS

### Que reciben las funciones?  

Cuando hablamos de funciones hay dos momentos de las mismas.
- 1. Cuando las creamos. En ese momento podemos decirle a la funcion que puede esperar *Parametros*
- 2. Cuando llamamos las funciones. Ahi es cuando le pasamos esos parametros, que en el mundo de la programacion tienen el nombre de *Argumentos*

### Como se forman los objetos?  

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor (variable). El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.

En resumen las *Propiedades* de un objeto son variables (Clave = Valor)  
Y las funciones se las llama *Metodos*

## Definiciones CSS

### Como funciona la propiedad position  

Position es una propiedad que sirve para posicionar elementos en relacion a otros elementos.

- Static: Es por defecto y sigue el flujo normal del documento
- Relative: Su posicion puede ser determinada por nosotros con "top", "right", "bottom" y "left", no afecta a los demas elementos de la pagina (Se rige por el z-Index) Y se mueve en relacion a la pagina web 
- Absolute: Asocia un elemento a su padre si lo tiene o a la pagina web. Para que sea a su padre el elemento hijo tiene que ser diferente a static, ej: relative.  

La posicion absolute con la relative es muy util para juntar dos elementos y posicionarlos uno en base al otro

- Fixed: Es lo mismo que absolute pero no admite elementos padre, si o si es en relacion a la pagina y se queda en el lugar aunque hagamos scroll