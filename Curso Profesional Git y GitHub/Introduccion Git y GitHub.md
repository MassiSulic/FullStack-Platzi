# Curso profesional Git y GitHub
## Conceptos

> Un sistema de control de versiones como Git nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

> En realidad, los cambios y diferencias entre las versiones de nuestros proyectos pueden tener similitudes, algunas veces los cambios pueden ser solo una palabra o una parte específica de un archivo específico. Git está optimizado para guardar todos estos cambios de forma atómica e incremental, o sea, aplicando cambios sobre los últimos cambios, estos sobre los cambios anteriores y así hasta el inicio de nuestro proyecto.

> Hay que tener en cuenta que no es una buena practica  guardar en GitHub archivos binarios, si no mas bien guardar archivos de texto plano 

> Y por ultimo la diferencia entre Git y GitHub es que Git es un sistema de control de versiones que nos permite llevar registro de todo lo que le pasa a nuestros archivos en texto plano, mientras que GitHub es el servidor donde podemos almacenar todo ese historial de versiones que tengamos de nuestros proyectos 

## Comandos basicos

- `git init` = Inicializa un repositorio de GIT en la carpeta donde se ejecute el comando.
- `git add` = Añade los archivos especificados al área de preparación *staging*.
    - `git add .` = Añade todos los archivos que hayamos modificado, mientras que de la otra forma los tendremos que añadir manualmente.
- `git commit -m "Descripcion del commit"` = Confirma los archivos que se encuentran en el área de preparación y los agrega al repositorio. La m del comando significa *Message* o *Mensaje* y el msj que debemos agregar debe ser descriptivo a lo que estemos agregando. 
- `git commit -am "Descripcion del commit"` = Añade al staging area y hace un commit mediante un solo comando. (No funciona con archivos nuevos). Esto significa que no hace falta utilizar el git add, saltamos ese comando utilizando la flag -a.
- `git status` = Ofrece una descripción del estado de los archivos (untracked, ready to commit, nothing to commit). Si los archivos ya esta traqueados, si estan lostos para subir o si estan en el area de intercambio.
- `git rm -r "fileName" -cached` = El comando git rm se puede usar para eliminar archivos sueltos o un conjunto de ellos. La función principal de git rm es eliminar los archivos en seguimiento del índice de Git. Además, git rm se puede usar para eliminar archivos tanto del índice del entorno de ensayo como del directorio de trabajo.
- `git config --global user.email tu@email.com` = Configura un email.
- `git config --global user.name <Nombre como se verá en los commits>` = Configura un nombre.
- `git config --list` = Lista las configuraciones.

## Analizar cambios de archivos

- `git log` = Lista de manera descendente los commits realizados.
- `git log --stat` = Además de listar los commits, muestra la cantidad de bytes añadidos y eliminados en cada uno de los archivos modificados.
- `git log --all --graph --decorate --oneline` = *Comando importante.* Muestra de manera comprimida toda la historia del repositorio de manera gráfica y embellecida.
- `git show "filname"` = Permite ver la historia de los cambios en un archivo.
- `git diff "Commit 1" "Commit 2"` = Compara diferencias entre en cambios confirmados.

## Branches y Checkout

- `git reset "Commit especifico" --hard/soft` = Regresa al commit especificado, eliminando todos los cambios que se hicieron después de ese commit.
- `git checkout "Commit/Branch" "Archivo"` = Permite regresar al estado en el cual se realizó un commit o branch especificado, pero no elimina lo que está en el staging area.
- `git checkout -"filrPath"` = Deshacer cambios en un archivo en estado modified (que ni fue agregado a staging)

### Git rm y reset

*Git rm*

>Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.

>Git rm no puede usarse por sí solo, así nomás. Se debe utilizar uno de los flags para indicar a Git cómo eliminar los archivos que ya no se necesitan en la última versión del proyecto:

- `git rm --cached "Archivos"` = Elimina los archivos del área de Staging y del próximo commit, pero los mantiene en nuestro disco duro.
- `git rm --forced "Archivos"` = Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos aplicar comandos más avanzados).

*Git reset*

>Con git reset volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobreescribir.

- `git reset --soft` = Vuelve el branch al estado del commit especificado, manteniendo los archivos en el directorio de trabajo y lo que haya en staging considerando todo como nuevos cambios. Así podemos aplicar las últimas actualizaciones a un nuevo commit.
- `git reset --hard` = Borra absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.
- `git reset HEAD` = *Comando Importante.* No borra los archivos ni sus modificaciones, solo los saca del área de staging, de forma que los últimos cambios de estos archivos no se envíen al último commit. Si se cambia de opinión se los puede incluir nuevamente con git add.

## Ramas o Branches

>Al crear una nueva rama se copia el último commit en esta nueva rama. Todos los cambios hechos en esta rama no se reflejarán en la rama master hasta que hagamos un merge.

- `git branch "Nombre de la branch"` = Crea una nueva rama.
- `git checkout "Rama especificada"` = Se mueve a la rama especificada.
- `git merge "Rama con la que se va a fusionar"` = Fusiona la rama actual con la rama especificada y produce un nuevo commit de esta fusión.
- `git branch` = Lista las ramas generadas.
