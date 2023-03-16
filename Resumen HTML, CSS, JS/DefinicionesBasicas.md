# Definiciones simples a los nombres clave que se usan en HTML, CSS y JS

## Definiciones JS

### Que reciben las funciones?  

Cuando hablamos de funciones hay dos momentos de las mismas.
- 1. Cuando las creamos. En ese momento podemos decirle a la funcion que puede esperar *Parametros*
- 2. Cuando llamamos las funciones. Ahi es cuando le pasamos esos parametros, que en el mundo de la programacion tienen el nombre de *Argumentos*

### Como se forman los objetos {}?  

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de *propiedades*, y una propiedad es una asociación entre un nombre (o clave) y un valor (variable). El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un *método*.

En resumen las *Propiedades* de un objeto son variables (Clave = Valor)  
Y las variables que tienen funciones se las llama *Metodos*

## Definiciones CSS

### Como funciona la propiedad position  

Position es una propiedad que sirve para posicionar elementos en relacion a otros elementos.

- Static: Es por defecto y sigue el flujo normal del documento
- Relative: Su posicion puede ser determinada por nosotros con "top", "right", "bottom" y "left", no afecta a los demas elementos de la pagina (Se rige por el z-Index) Y se mueve en relacion a la pagina web 
- Absolute: Asocia un elemento a un padre si lo tiene. Si no al body. Para que tenga un padre diferente al body su contenedor debe ser diferente de static, ej: relative.

> La forma mas comun de usar relative y absolute es usar el *relative* en el padre y el *absolute* en los hijos que queremos que dependan del padre.

- Fixed: Es lo mismo que absolute pero no admite elementos padre, si o si es en relacion a la pagina y se queda en el lugar aunque hagamos scroll

### Como funciona flexbox  

FlexBox es otra herramienta para organizar de la forma que necesitemos a los hijos de un elemento, ej: divs dentro de otros divs.
  
Para que **FlexBox entre en accion** tenemos que asignarle al elemento **padre** la propiedad *display: flex;* De esta forma todos los **hijos** ya van a ser **elementos editables**.
  
Flex-Box usa dos ejes, el principal que es horizontal y el vertical que es secundario. Con la siguiente propiedad podemos editar la direccion principal:
*flex-direction: (propiedad)* Esto cambiara (Si se lo indicamos) la distribucion de los elementos tanto vertical como horizontalmente.
  
Con la siguiente propiedad **editamos en el eje principal** como queremos que se organicen los hijos de un elemento padre que tiene display: Flex-Box; *justify-content: (Propiedad)*

Con la siguiente propiedad **editamos en el eje secundario** como queremos que se organicen los hijos de un elemento padre que tiene display: Flex-Box; *align-items: (Propiedad)* (Para que funcione esta propiedad, tengo que definir flex-wrap: wrap;)

Para organizar elementos en multilinea uso *align-content*, esta propiedad me permite gestionar como quiero que se vean los hijos de un elemento padre en multilinea.
  
Para editar a un solo hijo de un elemento contenedor uso: *align-self* especificando a que hijo se la quiero aplicar, ej: con clases o ids. Y teniendo en cuenta que el contenedor padre tiene que tener espacio suficiente de movimiento con *height*
