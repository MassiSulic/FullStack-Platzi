# Comandos Terminal, Linea de comandos y VSC

## VSC


- Dividir pantalla del codigo = `Command + \`
- Abrir terminal en VSC = `Control + ` `
- Limpiar la terminal = `Control + l`

## Definiciones Shell / Bash 


```
`Shell` es la ventana que nos permite acceder al `Bash` que no es mas que un lenguaje de programacion que interactua entre el usuario y el sistema.
```
* * * 

```
Por otro lado podemos destacar que los principales Shell son `zShell` y `BashShell`
siendo de MacOS y sistemas Unix respectivamente
```

## Comandos zShell y BashShell


- Listar archivos *Forma mas clara* = `ls -lh`
- Volver al Home = `cd`
- Conocer la ruta hasta el directorio actual *Operadores ruta absoluta* = `pwd`
    - *Operadores ruta relativa* = `. ..`

- Descripcion de cualquier archivo = `file`
- Ver archivos ocultos = `ls -a`
- Copiar archivos = `cp`
- Eliminar archivos = `rm` 
- Eliminar directorios = `rm -r` *La r indica que es recursivo, es decir va a preguntar archivo x archivo*
- Mover archivos = `mv`
- Borrar directorio = `rmdir`
- Ver directorios y archivos en forma de arbol = `tree`
    - para ver niveles especificos usamos = `tree -L (nivel que queremos ver ej: 2`
- Crear archivos = `Touch` *Si no especificamos la extencion se creara un .txt*
- Cambiar nombre a un archivo = `mv (Nombre viejo) (Nombre nuevo)`
- Previsualizar primeras lineas de un archivo = `head`
    - Con `head -n (Nunero) establecemos cuantas lineas queremos ver del archivo de texto`
- Previsualizar ultimas lineas de un archivo de texto = `tail`
    - Con `head -n (Nunero) establecemos cuantas lineas queremos ver del archivo de texto`
- Matar procesos terminal = `Control + C`

## Exploracion de texto en Terminal con Less

Less tiene como funcion leer texto en la terminal pero no editarlo, ademas tiene funcionalidades como buscar cierto texto con `/(palabra)` y nos va a buscar si esta la palabra en el texto, pero solo es para visualizar no para insertar. Y para salir usamos `q`

[Comandos](https://victorhckinthefreeworld.com/2022/06/30/algunos-trucos-utiles-de-uso-del-paginador-less/)

* * *

## Que es un comando y sus tipos

*Los comandos pueden tener 4 tipos*

1. Un programa ejecutable
2. Un comando de utilidad de shell
3. Una funcion de shell
4. Un alias 

Para saber que tipo de comando es un comando podemos usar el comando = `Type`
Para conocer el manual de un comando = `man`
