## Comandos utiles

- npm init: inicia el proyecto de node en la carpeta en la que nos encontremos.

- npm install package-name -o → Instalar una dependencia opcional

- Se pueden generar conflictos cuando se tienen paquetes que usan la misma dependencia pero en versiones diferentes. Para evitar esto se puede simular una instalación con npm install package-name —dry-run. Con esto se simula la instalación pero sin agregar ningún paquete, si no hay ningún conflicto se procede a instalar de la manera convencional.

- npm install package-name@0.15.0 → Instalar la versión especifica de un paquete. Si luego se quiere instalar la versión más reciente se usa npm install package-name@latest.

- npm install → Instala las dependencias que estén dentro de un package.json.

- npm audit --> Audita las dependencias que tenemos instaladas en busca de vulnerabilidades.

- npm audit fix --> Audita e intenta arreglar las vulnerabilidades de nuestras dependencias.

- npm audit --json --> Muestra los resultados de la auditoría a manera más profunda en formato json.

- npm audit fix --force --> Corrige los problemas encontrados en las librerías instalando otras dependencias por debajo si es necesario.
