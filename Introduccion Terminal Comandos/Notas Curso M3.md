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
