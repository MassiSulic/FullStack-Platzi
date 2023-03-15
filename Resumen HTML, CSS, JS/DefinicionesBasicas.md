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

La forma mas comun de usar relative y absolute es usar el *relative* en el padre y el *absolute* en los hijos que queremos que dependan del padre, por defecto si no hay un padre con relative se posiciona en base al body.

- Fixed: Es lo mismo que absolute pero no admite elementos padre, si o si es en relacion a la pagina y se queda en el lugar aunque hagamos scroll

### Como funciona flexbox  

FlexBox es otra herramienta para organizar de la forma que queramos los hijos de un elemento, ej: divs dentro de otro de un div.
  
Para que FlexBox entre en accion tenemos que asignarle al elemento padre la propiedad *display: flex;* De esta forma todos los hijos ya van a ser elementos editables.
  
Flex-Box usa dos ejes, el principal que es horizontal y el vertical que es secundario. Con la siguiente propiedad podemos editar esa direccion:
Para cambair la disposicion de los elementos podemos usar *flex-direction: (propiedad)* Esto alineara por defecto los elementos hijos como le indiquemos.
  
Para editar como queremos que se organicen los elementos hijos dentro del elemento padre (Si queremos que esten al final, en el centro u otra disposicion) Usamos la propiedad *justify-content: (Propiedad)* (Esta propiedad edita el eje principal)

La propiedad *align-items* organiza los elementos hijo con respecto al elemento padre en el eje secundario, (puedo darle cualquier posicion para que se alinea al principio medio o final).

Para organizar elementos en multilinea con flexbox uso *align-content* esta propiedad me permite gestionar como quiero que se vean los elementos hijo en multilinea. Para que la propiedad funcione tengo que establecer:
- flex-wrap: wrap; Si no no funciona align-content
- align-content: (Con la propiedad que quiera); Para alinear en multi linea
  
Si quiero editar la posicion de un solo elemento hijo de un elemento padre puedo usar la propiedad *align-self* especificando a que hijo se la quiero aplicar y teniendo en cuenta que el contenedor padre tiene que tener espacio suficiente de movimiento con *height*