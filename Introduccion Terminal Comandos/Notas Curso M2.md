# Modulo 2 Introduccion a la terminal
## Redirecciones

# Conceptos

Es muy importante recordar que el uso del redireccionamento “STANDAR OUTPUT” = “>” hacia un archivo hace que se borre todo su contenido y se guarde el actual “STANDAR OUTPUT”, si quieres que no se borre la información actual del archivo, tendrías que agregar un doble “STANDAR OUTPUT” por ejemplo:
echo “hola, mundo!” > día.txt
echo “buenas tardes, mundo!” > día.txt
echo “buenas noches, mundo!” >> día.txt
cat día.txt
buenas tardes, mundo!
Buenas noches, mundo!

# Control de flujo

- `>` = Redirecciona la salida. Por defecto redirecciona el Standar Output
    - Pero ademas podemos crear archivos de texto con este comando, ya que al no especificar el input lo va a estar esperando de mi teclado. Pero ademas si este comando lo ejecutamos en mac directamente vamos a poder escribir dentro del archivo sin necesidad de nada mas y al poner `Control + c` se va a guardar el contenido en el archivo
- `>>` = Concatena la salida con lo que ya tenga el archivo a donde se está redirigiendo la salida
- `2>` = Redirecciona el file descriptor 2 (En este caso Standar Error)
    - `2>>` = Concatena el stderr
- `2>&1` = Redirecciona el file descriptor 2 y 1
- `<` = Redirecciona el stdin desde un archivo
- `<<` = Conocido como HERE-DOCUMENT o HereDoc
- `<<<` = Conocido como HERE-STRING
- `|` = pipe es un tipo de redireccionamiento ya que la salida (stdout) de un comando es la entrada (stdin) de otro.
- `tee` = El comando tee redirecciona la salida (stdout) a ambos, un archivo y a la terminal.

# Operadores de control

- `;` = Ejecuta de forma síncrona los comandos específicados
- `&` = Ejecuta de forma asíncrona los comandos específicados
- `&&` = Ejecuta el comando si el anterior se ejecutó correctamente
- `||` = Ejecuta el comando si el anterior o la combinación de los anteriores resultaron en verdadero

# Permisos

Los permisos de cualquier cosa se dividen en 4 grupos
 1. `-` = Es un archivo normal, como un documento de texto, una foto, un video, etc.
 2. `d` = Por directory, es un directorio
 3. `l` = Es un enlace simbólico. Que no es mas que un acceso directo
    - `ln -s (Ruta o archivo)` = Me crea un acceso directo hacia ese lugar *Los accesos directos noalteran los permisos del archivo original*
 4. `b` = Es un enlace simbólico.

Per ademas los permisos se los podemos asignar en diferentes modos o grupos 
 1. `Owner` = El dueño del archivo, si no se ha cambiado, es quien lo creo y tiene mayor jerarquía sobre los otros 3. Le corresponden los primeros 3 caracteres de los permisos.
 2. `Group` = Se puede crear grupos de usuarios para darle a todos o varios los mismos permisos. A estos usuarios le corresponden el cuarto, quinto y sexto caracter de los permisos de usuarios y tienen mayor jerarquía que el último.
 3. `World` = También llamado “otros”, es cualquier otro usuario que no pertenezca a un grupo de usuario y tampoco sea el dueño, este tiene la menor jerarquía.

Y por ultimo cada grupo tiene 3 posibles tipos de permisos que se le pueden asignar.
 1. `r (Readable)` = Significa que puede leer su contenido
 2. `w (Writable)` = El usuario puede editar el contenido del archivo, también el nombre y los permisos
 3. `x (Executable)` = El usuario puede ejecutarlo en caso de que sea un programa

Ej: 
```
drwxr-xr-x
```
```
-rw-r--r--
```

Los permisos se pueden editar con numeracion octal, binaria y representativa. Adjunto un link con una pagina para ver la representacion octal que tendria que tener cada permiso: [Pagina para ver permisos](https://josenoriegaa.github.io/linux-file-system-permission-generator/index.html)

# Cambiar permisos

Para cambiar la propiedad de un archivo usamos `chown`. Y para cambiar los permisos utilizamos el comando `chmod` Este comando nos permite cambiar los permisos del sistema y se los podemos asgignar de la forma octal o con la forma de permisos simbolica, la estructura del comando para cambiar los permisos es la siguiente:
```
chmod [simboloDelUsuario][operador][permiso] [archivoParaCambiarSusPermisos]
```
Donde 
 1. Simbolo del usurio puede ser
    - `u` = User / Usuario
    - `g` = Group / Grupo
    - `o` = Others / Otros
 2. Operadores, es decir si queremos agregar permisos `+`, quitar `-` o sobre escribir `=`
 3. Tenemos que ingresar el archivo al que le queremos modificar los permisos

Por otro lado tambien tenemos el comando `whoami` que me dice que usuario soy ya que puedo estar en mi usuario y mi grupo o en el usuario y grupo root

.
Para cambiar de usuario a root puedo usar siempre el comando `sudo su` que no es mas que pedirle prestados los permisos al usuario root para cambiar de usuario o *Switch User*.

.
Y por ultimo si queremos asignar nuevas contraseñas, por ejemplo al usuario root para cambiar de usuario con `su root` usamos el comando `passwd`

# Variables de entorno

Las variables de entorno son útiles cuando necesitamos que cierta información prevalezca para poder trabajar más rápido o necesitamos guardar información para no tener que recordarla constantemente.

.
Es decir que las variables de entorno no son mas que valores que apuntan a ciertos lugares para no tener que escribir el comando completo que me lleve a ese lugar o que haga cierta accion 

.
Las variables de entorno de mayor interes son las siguientes 
- `HOME` = Indica el home del usuario
- `PATH` = Indica las direcciones de donde están los binarios que usa el sistema
- `ZSH_VERSION` = Indica la versión del bash que estás utilizando
- `SHELL` = Dirección de la shell que estás utilizando

Por cierto, todas las variables de entorno se mandan a llamar con un signo de peso por delante, de lo contrario se interpretará como un comando.
Hay muchas más, pero estas son las que te pueden interesar. Por cierto, por convención las variables de entorno se crean en mayúsculas.

.
Para crear variables de entorno hay que modificar el archivo `.zshrc` donde podemos escribir las variables que despues se pueden utilizar siempre en la terminal