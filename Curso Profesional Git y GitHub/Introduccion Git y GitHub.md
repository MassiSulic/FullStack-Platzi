# Curso profesional Git y GitHub
## Conceptos

> Un sistema de control de versiones como Git nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

> En realidad, los cambios y diferencias entre las versiones de nuestros proyectos pueden tener similitudes, algunas veces los cambios pueden ser solo una palabra o una parte específica de un archivo específico. Git está optimizado para guardar todos estos cambios de forma atómica e incremental, o sea, aplicando cambios sobre los últimos cambios, estos sobre los cambios anteriores y así hasta el inicio de nuestro proyecto.

> Hay que tener en cuenta que no es una buena practica  guardar en GitHub archivos binarios, si no mas bien guardar archivos de texto plano.

> Y por ultimo la diferencia entre Git y GitHub es que Git es un sistema de control de versiones que nos permite llevar registro de todo lo que le pasa a nuestros archivos en texto plano, mientras que GitHub es el servidor donde podemos almacenar todo ese historial de versiones que tengamos de nuestros proyectos.

> El HEAD es basicamente un apuntador que nos dice donde estamos trabajando, es decir es donde esta puesta nuestra vista en los archivos, si nos movemos de branch o si hacemos nuevos commits ese apuntador nos va a decir donde estamos apuntando y por ende donde se van a realizar los cambios.

> El `Origin` hace referencia al origien de donde se van a traer y enviar archivos con comandos como push y pull, es la url del repo en GitHub y es como la abreviacion o punto de referencia para saber que ahi es el origen o repositorio remoto

> Cuando tenemos un repositorio remoto que hayamos creado nosotros y pongamos `git log` en la terminal voy a ver que ahora tengo el main que corresponde a mi repositorio local y el main que corresponde a mi repositorio en la nube p GitHub, para saber que estamos concetados correctamente tendremos que ver que figura como *origin/main.* Esto significa que estamos conectados correctamente
    > Pero esto tiene dos variantes, si enlazamos un repo de la nube con el local solo veremos el HEAD que apunta a la rama que hace de main en  el local y el origin/main.
    > Pero si creamos un repositorio en la nube y lo clonamos y no lo enlazamos tendremos dos HEAD, uno correspondera a nuestro main local y otro correspondera al del repositorio que se visualizara como *origin/HEAD* y no es mas que a que branch esta apuntando el origin del repo en la nube
> Ademas a lo anterior me gustaria agregar que en Git tenemos 3 estados para un repositorio, el local que es simplemente `git init`, despues tendria el repositorio propio en la nube que seria donde estaria trabajando en local y enviando cambios a la nube con comandos como `git push` y por ultimo tendria los repositorios publicos pero en lo que puedo contribuir.

## Comandos basicos

- `git init` = Inicializa un repositorio de GIT en la carpeta donde se ejecute el comando.
- `git add` = Añade los archivos especificados al área de preparación *staging*.
    - `git add .` = Añade todos los archivos que hayamos modificado, mientras que de la otra forma los tendremos que añadir manualmente.
- `git commit -m "Descripcion del commit"` = Confirma los archivos que se encuentran en el área de preparación y los agrega al repositorio. La m del comando significa *Message* o *Mensaje* y el msj que debemos agregar debe ser descriptivo a lo que estemos agregando. 
- `git commit -am "Descripcion del commit"` = Añade al staging area y hace un commit mediante un solo comando. (No funciona con archivos nuevos). Esto significa que no hace falta utilizar el git add, saltamos ese comando utilizando la flag -a.
- `git commit --amend` = No hace falta que cree un nuevo commit y lo suba, con este comando realizo los cambios en el ultimo commit que subi al repo
- `git status` = Ofrece una descripción del estado de los archivos (untracked, ready to commit, nothing to commit). Si los archivos ya esta traqueados, si estan lostos para subir o si estan en el area de intercambio.
- `git rm -r "fileName" -cached` = El comando git rm se puede usar para eliminar archivos sueltos o un conjunto de ellos. La función principal de git rm es eliminar los archivos en seguimiento del índice de Git. Además, git rm se puede usar para eliminar archivos tanto del índice del entorno de ensayo como del directorio de trabajo.
- `git config --global user.email tu@email.com` = Configura un email.
- `git config --global user.name <Nombre como se verá en los commits>` = Configura un nombre.
- `git config --list` = Lista las configuraciones.

## Analizar cambios de archivos

- `git log` = Lista de manera descendente los commits realizados.
- `git log --stat` = Además de listar los commits, muestra la cantidad de bytes añadidos y eliminados en cada uno de los archivos modificados e informacion mas detallada.
- `git log --all --graph --decorate --oneline` = *Comando importante.* Muestra de manera comprimida toda la historia del repositorio de manera gráfica y embellecida.
- `git show "filname"` = Permite ver la historia de los cambios en un archivo.
- `git diff "Commit 1" "Commit 2"` = Compara diferencias entre en cambios confirmados.
- `git blame "Archivo"` = Muetra quien modifico cierto archivo linea por linea

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
- `git branch -d "Nombre de la rama"` = Va a borrar la rama especificada.
- `git checkout "Rama especificada"` = Se mueve a la rama especificada.
- `git merge "Rama con la que se va a fusionar"` = Fusiona la rama actual con la rama especificada y produce un nuevo commit de esta fusión.
    - Hay que tener en cuenta que el merge hay que hacerlo en la branch que queremos traer los cambios, es decir el HEAD tiene que estar apuntando a la branch que va a recibir los commits. Por ejemplo, si yo quiero que la rama x se fusione con la rama main tengo que estar en la rama main, porque si no el main va a pasar a ser la rama x
    - Ademas si nosotros queremos actualizar una branch con main tenemos que usar el merge pero en vez de con main en la rama que queremos actualizar, esto seria como hacer un pull en una rama con main
- `git branch` = Lista las ramas generadas.
- `git branch -r` = Muestra una lista con las ramas remotas.
    - `git branch -a` Muestra todas las ramas, tanto las locales como las remotas.

> Para conocer el estandar actual de trabajo con las Branches se pueden ver los siguientes links que lo explican
https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
https://danielkummer.github.io/git-flow-cheatsheet/

## Modos de Git

> El modo inicial o `Directory` consiste en que git te puede ver si hay archivos creados o modificados pero esos cambios no tienen seguimiento por Git.

> Para que git pueda empezar a seguir o `Trackerar` esos archivos nosotros los tenemos que gregar con `git add "Archivos"` Esta zona se denomina `Staging`(Tambien podemos usar `.` para especificar que queremos agregar todos los cambios que git detecto). Por otro lado para acceder a lo que esta viendo la `Satging zone` podemos usar el comando git status. (Este comando nos muestra todos los archivos que estan `Untracked` que se encuentran en el modo inicial y los `Tracked` que estan en el modo `Staging` ese es el alcance que tiene esta zona)

> Y el ultimo modo o estado de Git es el `Repository` que no es mas que el lugar donde terminamos subiendo nuestros archivos para terminar de subirlos debemos utilizar el comando `git commit -m "Mensaje del commit"` (Cabe aclarar que no especificamos commit Git nos abrira un archivo vim para poder escribir el nombre del commit ya que es una buena practica hacerlo, para salir debemos escribir esc shift + zz).
    > Por ultimo cabe aclarar que Git es un control de versiones, lo que significa que si no queremos podemos por optar no usar GitHub y el repositorio se creara en nuestra computadora y no deberemos subirlo con comandos como `git push`

> Para entender bien esta parte hay que ver la imagen adjunta en la capeta `3 estados de Git`

## Profundizando comandos

- `git status` = Muestra informacion del modo inicial y del modo Stageing
    - Y podemos encontrar la siguiente informacion estructurada 
    (Muestra en que rama estoy o me encuentro actualmente)
    (Me dice si tengo commits por hacer) (O si ya tengo todos los commits realizados)
    (y si tengo archivos que no esta en la Stageing)

- `git log` = Muestra el historico de commits realizados
    (Commit tag)(Si es el actual es HEAD y muestra en que branch se encuentra)
    (Autor del commit)
    (Fecha de la realizacion de cambios)
    (Mensaje que caracteriza al commit)

- `git show` = Muestra especificamente los cambios realizados en el archivo
    (Lo primero que muestra es lo mismo que git log)
    diff (Muestra los archivos que se estan comparando)
        a/"Archivo" b/"Archivo"
    index (Muestra informacion de los tags)
    @@ (Muestra como cambiaron los bits de los archivos) @@

- `git checkout (tag)` = Me permite volver a una version antigua de un archivo y ese cambio para a estar `Untracked` si le hago commit estoy permiendo los cambios que tenia hasta ese momento ya que es como si volviera en el tiempo y para dejar el archivo como estaba uso el comando `git checkout main`

## Repositorio remoto Git y GitHub

La realidad es que Git es una poderosa herramienta para controlar las versiones de nuestros archivos, este control de versiones lo podemos hacer en nuestro repositorio local y tener nuestro historico en nuestro equipo, pero tambien podemos tener un repositorio remoto. Esto nos permite trabajar conjuntamente con otras personas en proyectos grandes. No cambian mucho los comandos a diferencia de tener un repositorio local, pero vamos a pasar a detallar los comandos que debemos utilizar para reflejar cambios en el repositorio remoto.

### Pasos para conectar repo local con el remoto

- `git remote add origin (url)` = Si queremos conectar el repositorio de GitHub con nuestro repositorio local, que creamos usando el comando git init, debemos ejecutar el comando anterior.
- `git remote -v` =  Me premite ver si se guardo correctamente el origin de nuestro repositorio.
- `git pull origin (Rama que elija)` = Esto me descargara la branch que quiera del repositorio en la nube en el que este trabajando.
- `git pull origin master --allow-unrelated-histories` = Trae la versión del repositorio remoto y hace merge para crear un commit con los archivos de ambas partes. Podemos usar git fetch y git merge o solo git pull con el flag --allow-unrelated-histories.
- `git push origin master` = Por último, ahora sí podemos hacer git push para guardar los cambios de nuestro repositorio local en GitHub.

### Comandos modo remoto Git

- `git clone "Url del repositorio"` = Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta.
- `git push` = Luego de hacer `git add` y `git commit` debemos ejecutar este comando para mandar los cambios al servidor remoto.
- `git fetch` = Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).
- `git merge` = También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
- `git pull` = Básicamente, git fetch y git merge al mismo tiempo. Quiere decir que una vez clonado el repo remoto con `git clone` para actualizar los cambios que tenga el repo remoto en vez de utilizar dos comandos podemos solo hacer `pull

### Comandos para controlar los commits del modo remoto

- `git log --oneline` = Te muestra el id commit y el título del commit.
- `git log --decorate` = Te muestra donde se encuentra el head point en el log.
- `git log --stat` = Explica el número de líneas que se cambiaron brevemente.
- `git log -p` = Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
- `git shortlog` = Indica que commits ha realizado un usuario, mostrando el usuario y el título de sus commits.
- `git log --graph --oneline --decorate` = Muestra mensajes personalizados de los commits.

*Comandos para ver historico de commits con filtro de fecha, usuarios, archivos*

- `git log -3` = Limitamos el número de commits.
- `git log --after=“2018-1-2”`
- `git log --after=“today”` = Commits para localizar por fechas.
- `git log --author=“Name Author”` = Commits hechos por autor que cumplan exactamente con el nombre.
- `git log --grep=“INVIE”` = Busca los commits que cumplan tal cual está escrito entre las comillas.
- `git log --grep=“INVIE” –i` = Busca los commits que cumplan sin importar mayúsculas o minúsculas.
- `git log – index.html` = Busca los commits en un archivo en específico.
- `git log -S “Por contenido”` = Buscar los commits con el contenido dentro del archivo.
- `git log > log.txt` = guardar los logs en un archivo txt

## Conflictos al hacer un merge

> Si temngo dos lineas editadas en un mismo archivo esto me creara un conflicto, la ventaja es que Git se encarga de mostrarme esos conflictos con una sitaxys muy simple

```
<<<<<< HEAD (Me dice que la linea que esta en conflicto y estoy viendo, pertenece a donde recien estaba apuntando)

        (Conflicto)
-- 
        (Conflicto)

>>>>>> "Branch de la que estoy haciendo el merge" (Me dice que lo que estoy viendo y esta en conflicto pertenece a la branch de la cual quiero hacer el merge)
```

# Resumen de comandos Utiles

> Voy a pasar a enumerar los comandos mas utiles que se pueden usar para ver el estado del repo, ya sean los commits, los merges, el estado actual del repo y en gral toda info util para solucionar problemas y conflictos

- `git log` = Muestra una lista de todos los commits realizados por que usuario, en que fecha y con msj descriptivo, ademas muestra a donde esta apuntando HEAD (Puede ser a una branch o a multiples)

- `git show` = Muestra detalladamente los cambios realizados en el ultimo commit (Tambien podemos especificar en que commit queremos ver los cambios)

- `git log --all --graph --decorate --oneline` = Muestra de una forma muy visualel historico de branches del repo, viendo cuando se separaron y volvieron a juntar junto con los commits que tienen cada uno`

## Como funcionan las llaves publicas y privadas

> Las llaves públicas y privadas, conocidas también como cifrado asimétrico de un solo camino, sirven para mandar mensajes privados entre varios nodos con la lógica de que firmas tu mensaje con una llave pública vinculada con una llave privada que puede leer el mensaje.

> Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos compartir sin correr el riesgo de que sean interceptados por personas con malas intenciones.

### Pasos a seguir de estas llaves

1. Ambas personas deben crear su llave pública y privada.

2. Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay problema si la “interceptan”).

3. La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos compartir el mensaje.

4. El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean interceptados.

5. La persona a la que enviamos el mensaje cifrado puede emplear su llave privada para descifrar el mensaje y ver los archivos.

## Conectar por ssh una Mac a GitHub

[En el siguiente Link se especifican los pasos a seguir para conectar por ssh a GitHub](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[En este Link se resuelven los problemas mas comunes al conectar ssh](https://docs.github.com/es/authentication/troubleshooting-ssh/error-permission-denied-publickey)

[Como generar una clave ssh en Mac](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[Como agregar la clave ssh a GitHub](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Pull Request

> Basicamente los pull request son pausas antes del merge tipico de Git, teniendo en cuenta que seamos colaboradores del proyecto y no usuarios normales tratando de aportar en un proyecto opensourse. Por ende los pull request son una forma ordenada de hacer merge y saber bien si hay conflictos o esta todo bien para hacer el pull request

## Fork

> Los forks o bifurcaciones son una característica única de GitHub en la que se crea una copia exacta del estado actual de un repositorio directamente en GitHub. Este repositorio podrá servir como otro origen y se podrá clonar (como cualquier otro repositorio). En pocas palabras, lo podremos utilizar como un nuevo repositorio git cualquiera

> Un fork es como una bifurcación del repositorio completo. Comparte una historia en común con el original, pero de repente se bifurca y pueden aparecer varios cambios, ya que ambos proyectos podrán ser modificados en paralelo y para estar al día un colaborador tendrá que estar actualizando su fork con la información del original.

> Al hacer un fork de un poryecto en GitHub, te conviertes en dueñ@ del repositorio fork, puedes trabajar en este con todos los permisos, pero es un repositorio completamente diferente que el original, teniendo solamente alguna historia en común (como crédito al creado o creadora original).

> Los forks son importantes porque es la manera en la que funciona el open source, ya que, una persona puede no ser colaborador de un proyecto, pero puede contribuír al mismo, haciendo mejor software que pueda ser utilizado por cualquiera.

### Comandos

Para actualizar o tener un apuntador al repo que hicimos fork y asi estar siemore actualizados con main del proyecto podemos agregar un `upstream` o remoto adicional para poder hacer `pull` directamente del repo del proyecto opensourse

- `git remote add <nombre_del_remoto> <url_del_remoto>`
    Ej: `git remote upstream https://github.com/freddier/hyperblog`

Al crear un remoto adicional, podremos hacer pull desde el nuevo origen. En caso de tener permisos, podremos hacer fetch y push.

- `git pull <remoto> <rama>`
    Ej: `git pull upstream master`

Este pull nos traerá los cambios del remoto, por lo que se estará al día en el proyecto. El flujo de trabajo cambia, en adelante se estará trabajando haciendo pull desde el upstream y push al origin para pasar a hacer pull request.

- `git pull upstream master`
- `git push origin master`

> Ver referencia de imagen `Como funcionan los Forks`

## Git ignore

> No todos los archivos que agregas a un proyecto deberían ir a un repositorio. Por ejemplo, cuando tienes un archivo donde están tus contraseñas que comúnmente tienen la extensión .env o cuando te estás conectando a una base de datos; son archivos que nadie debe ver.

> Por diversas razones, no todos los archivos que agregas a un proyecto deberían guardarse en un repositorio. Esto es porque hay archivos que no todo el mundo debería de ver, y hay archivos que al estar en el repositorio ralentizan el proceso de desarrollo (por ejemplo: los binary large objects, blob, que tardan en descargarse).

> Para que no se suban estos archivos no deseados se puede crear un archivo con el nombre .gitignore en la raíz del repositorio con las reglas para los archivos que no se deberían subir: [Aquí](https://git-scm.com/docs/gitignore) puedes ver la sintaxis.

## .Md "Markdown"

En el siguiente enlace encontraremos todo lo que podemos hacer con *Markdown* [Link](https://pandao.github.io/editor.md/en.html)

## GitHub pages

Dejo el link que nos explica como montar nuestro github pages, [link](https://pages.github.com/)

## Rebase

> Rebase es el proceso de mover o combinar una secuencia de confirmaciones en una nueva confirmación base. La reorganización es muy útil y se visualiza fácilmente en el contexto de un flujo de trabajo de ramas de funciones. El proceso general se puede visualizar de la siguiente manera.

> Nunca debes reorganizar las confirmaciones una vez que se hayan enviado a un repositorio público. La reorganización sustituiría las confirmaciones antiguas por las nuevas y parecería que esa parte del historial de tu proyecto se hubiera desvanecido de repente.

> El comando rebase es **_una mala práctica, sobre todo en repositorios remotos. Se debe evitar su uso, pero para efectos de práctica te lo vamos a mostrar, para que hagas tus propios experimentos. Con rebase puedes recoger todos los cambios confirmados en una rama y ponerlos sobre otra.

Hay que tener en cuenta que el `rebase` primero se hace en la rama que vamos a fusionar y despues a main, o la que queremos que se peguen los cambios. *Ver imagen de referencia rebase*

## Stash

> Basicamente `Stash` es un comando que sirve para guardar los cambios sin hacer un commit para movernos de rama sin que se pierda el progreso

### Comandos

- `git stash` =  Me guarda el progreso que no esta siendo trackeado por git y que esta en mi directorio
- `git stash list` = Me muestra todo lo que tengo guardado en stash
- `git stash pop` = Vuelve o trae los cambios que se habian guardado sin la necesidad del commit
- `git stash branch "Nombre de la branch"` = Lo que tengo en la lista de stash me lo envia a una branch que yo especifique
- `git stash drop` = Me borra lo que tenga en las listas de stash

## Limpiando entorno de trabajo

- `git clean` = Me borra los archivos que todavia no tengan commitsy que no tenga que subir al repo
- `git clean --dry-run` = Hace una simulacion de como se borrarian y que archivos se borrarian
- `git clean -df` = Va a borrar directorios y archivos / `files` `directory`

## Cherry-pick

> Es un comando que conciste en traernos un solo commit especifico de una branch a otra, sin la necesidad de traer todo el branch o mas commits de los que realmente queremos 

- `git cherry-pick "Tag del commit que queremos traer"` = Me trae solo el commit especificado

## Reflog

> Reflog es la verdadera magia de git, en este comando nada se pierde, git lo recuerda todo. Y tenemos los HEAD para volver o los tag, de esta forma no importa que hayamos hecho en nuestro repositorio, todo se puede recuperar ya sea con reset u otros comandos pero ahi tendremos toda la historia de nuestro proyecto

- `git reflog` = Muestra TODA la historia del proyecto

## Grep dentro de Git

- `git grep "Palabra a buscar"` = Busca especificamente la palabra dentro del repo
    - `-n` = Busca la palabra pero te dice especificamente en que linea se encuentra 
    - `-c` = Cuenta la cantidad de veces que aparecio la palabra en el repo
- `git log -S "Palabra"` = Me muestra todos los commits que hice y que tengan esa palabra

## Crear alias solo dentro de git 

> La sintaxis para crear comandos locales de git es la siguiente 
```
git config --global alias."Nombre del alias que quiero crear" ""Entre comillas el comando que quiero ejecutar dentro de git""
```
