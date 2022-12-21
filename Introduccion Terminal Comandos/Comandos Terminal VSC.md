# Comandos Terminal, Linea de comandos y VSC

## VSC


- Dividir pantalla del codigo = `Command + \`
- Abrir terminal en VSC = `Control + ` `
- Limpiar la terminal = `Control + l`

## Definiciones Shell / Bash 


```
`Shell` es la ventana que nos permite acceder al `Bash` que no es mas que un lenguaje de programacion que interactua entre el usuario y el sistema.
```


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

## Exploracion de texto en Terminal


### Editor de texto Less 

*Comandos:*

- `Down arrow, Enter, e, o, j` / `Avanza una línea.`
- `Up arrow, yok` / `Mover hacia atrás una línea.`
- `Space barof` / `Avanzar una página.`
- `b	Mover` / `hacia atrás una página.`
- `/pattern` / `Busque hacia adelante los patrones coincidentes.`
- `?pattern` / `Busque hacia atrás los patrones coincidentes.`
- `n` / `Repita la búsqueda anterior.`
- `N` / `Repita la búsqueda anterior en dirección inversa.`
- `g` / `Vaya a la primera línea del archivo.`
- `Ng` / `Vaya a la línea N-ésima en el archivo.`
- `G` / `Ir a la última línea del archivo.`
- `p` / `Vaya al principio del archivo.`
- `p` / `Ir al N por ciento en el archivo.`
- `h` / `Mostrar ayuda.`
- `q` / `Salir less_`

