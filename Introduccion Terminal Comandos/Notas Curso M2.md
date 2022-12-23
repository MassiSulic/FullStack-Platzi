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
