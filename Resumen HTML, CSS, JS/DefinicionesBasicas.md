# Definiciones simples a los nombres clave que se usan en HTML, CSS y JS

## Definiciones JS

### Que reciben las funciones?

Cuando hablamos de funciones hay dos momentos de las mismas.

- 1. Cuando las creamos. En ese momento podemos decirle a la funcion que puede esperar _Parametros_
- 2. Cuando llamamos las funciones. Ahi es cuando le pasamos esos parametros, que en el mundo de la programacion tienen el nombre de _Argumentos_

### Como se forman los objetos {}?

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de _propiedades_, y una propiedad es una asociación entre un nombre (o clave) y un valor (variable). El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un _método_.

En resumen las _Propiedades_ de un objeto son variables (Clave = Valor)  
Y las variables que tienen funciones se las llama _Metodos_

## Definiciones CSS

### Como funciona la propiedad position

Position es una propiedad que sirve para posicionar elementos en relacion a otros elementos.

- Static: Es por defecto y sigue el flujo normal del documento
- Relative: Su posicion puede ser determinada por nosotros con "top", "right", "bottom" y "left", no afecta a los demas elementos de la pagina (Se rige por el z-Index) Y se mueve en relacion a la pagina web
- Absolute: Asocia un elemento a un padre si lo tiene. Si no al body. Para que tenga un padre diferente al body su contenedor debe ser diferente de static, ej: relative.

> La forma mas comun de usar relative y absolute es usar el _relative_ en el padre y el _absolute_ en los hijos que queremos que dependan del padre.

- Fixed: Es lo mismo que absolute pero no admite elementos padre, si o si es en relacion a la pagina y se queda en el lugar aunque hagamos scroll

### Como funciona flexbox

FlexBox es otra herramienta para organizar de la forma que necesitemos a los hijos de un elemento, ej: divs dentro de otros divs.

Para que **FlexBox entre en accion** tenemos que asignarle al elemento **padre** la propiedad _display: flex;_ De esta forma todos los **hijos** ya van a ser **elementos editables**.

Flex-Box usa dos ejes, el principal que es horizontal y el vertical que es secundario. Con la siguiente propiedad podemos editar la direccion principal:
_flex-direction: (propiedad)_ Esto cambiara (Si se lo indicamos) la distribucion de los elementos tanto vertical como horizontalmente.

Con la siguiente propiedad **editamos en el eje principal** como queremos que se organicen los hijos de un elemento padre que tiene display: Flex-Box; _justify-content: (Propiedad)_

Con la siguiente propiedad **editamos en el eje secundario** como queremos que se organicen los hijos de un elemento padre que tiene display: Flex-Box; _align-items: (Propiedad)_ (Para que funcione esta propiedad, tengo que definir flex-wrap: wrap;)

Para organizar elementos en multilinea uso _align-content_, esta propiedad me permite gestionar como quiero que se vean los hijos de un elemento padre en multilinea.

Para editar a un solo hijo de un elemento contenedor uso: _align-self_ especificando a que hijo se la quiero aplicar, ej: con clases o ids. Y teniendo en cuenta que el contenedor padre tiene que tener espacio suficiente de movimiento con _height_

## Entender los callbacks

Los callbacks no son mas que volver a llamar a una funcion antes definida, en el siguiente ejemplo:

```js
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));
```

El ejemplo anterior me dice que el return de calc va ser el return de la funcion que le pasemos como callbak, es decir.

"return callback(num1, num2)" retorna "return num1 + num2" de la funcion sum.

Por eso podemos decir que los callback son simplemente los returns de las funciones que pasemos como argumentos.
