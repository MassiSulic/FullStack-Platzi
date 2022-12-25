## Modulo 3 Utilidad de la terminal

# Utilidades de Red en la Terminal 

- `ifconfig` = Muestra la informacion de la red como ipconfig en Windows
- `ping` = Va a enviar paquetes a la direccion especificada esperando una respuesta para saber si la red esta viva, por otro lado combinando ping con sus flags podemos reemplazar a herramientas como nmap
- `curl` = Extrae el HTML de las paginas web y lo muestra por terminal 
- `wget` = Es lo mismo que curl, solo que ya nos crea directamente el archivo y tabula mejor el HTML
- `traceroute` = Me indica cuantos saltos tuvo que hacer mi conexion para llegar a destino
- `netstat -i` = Muestra lo mismo que if config solo que con una interfaz mas amigable 

# Comprimir y descomprimir 

Para comprimir y descomprimir en formato `.tar` y `gzip (.tar.gz)` se sigue el mimso principio de comando 

```
tar [opciones] [nombreDelArchivoComprimido] [archivoAComprimir]
```

Las opciones para comprimir pueden ser las siguientes 

- `-c` = Indica que estamos comprimiendo un archivo 
- `-x` = Indica que estamos descomprimiendo un archivo 
- `-v` = Muestra la salida por terminal de *--Verbose*
- `-f` = Indica que estamos comprimiendo archivos tambien 
- `-z` = Indica que estamos comprimiendo en formato *gzip*

.
Para comprimir y descomprimir archivos en `.zip` se usa el mismo principio que anteriormente 

```
zip [opciones] [nombreDelArchivoComprimido] [archivoAComprimir]
```

Y la unica opcion que necesitamos es
- `-r` = De recursive o recursivo

Y para descomprimir seria el siguiente comando 

```
unzip [archivoADescomprimir]
```
# Administracion de procesos | Foreground y Background

- `ps` = Muestra una tabla con los procesos que se están ejecutando en la terminal
- `top` = Muestra una interfaz con los procesos que se están ejecutando más los recursos que consumen información adicional en todo nuestro sistema 
    - `htop` = Es lo mismo que top con la diferencia que tiene una mejor interfaz y funcionalidades mas sencillas de usar
- `kill` = Mata el proceso que le indiques, se lo podemos indicar con PID *ProcessID*
- `jobs` = Muestra especificamente los procesos que estan en background en la terminal
.
Cuando un proceso está en ejecución sin que sea mostrado en la terminal se dice que se está ejecutando en el background. Si se muestra la ejecución del comando dentro de la terminal se dice que está en el foreground.

- `fg` = Trae los procesos especificados al foreground 
    - `fg %x` = En zsh para que interprete que proceso queremos traer hay que poner %

- `bg` = Funciona igual que fg solo que envia procesos al backgroung

# Editores de texto Terminal Vim

En vim nos manejamos mas que nada por modos, modo insertar, modo normal, modo busqueda.

Para crear un archivo y empezar a escribir el comando basico es el siguiente 

```
vim [nombre del archivo]
```
Una vez dentro podemos usar las siguientes flags para cambiar entre modos 

- `i` = Entramos en modo insercion, nos permite escribir
    - `esc` = Para salir de este modo y entrar en el modo normal
- `/` = Es como less y nos permite buscar por palabras dentro del texto
    - `/ + delete` = Volvemos a apretar para salir del modo busqueda y borramos /
- `:q` = Para salir del editor de texto
- `:qw` = Para salir y guardar el contenido 
- `dd` = Borra completamente la linea en donde nos encontremos 

(Mas comandos de Vim)[https://vimdoc.sourceforge.net/htmldoc/usr_toc.html]

