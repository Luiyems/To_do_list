# Aplicación Web de Lista de Tareas Offline

## Descripción del Proyecto

Este proyecto consiste en una **aplicación web de gestión de tareas (To_do_list)** que funciona completamente en el navegador utilizando tecnologías de **almacenamiento del lado del cliente**.

La aplicación permite a los usuarios:

- Crear tareas
- Marcar tareas como completadas
- Eliminar tareas
- Mantener las tareas guardadas incluso después de cerrar el navegador

Para lograr esto se utilizan diferentes tecnologías modernas del navegador como:

- **localStorage**
- **sessionStorage**
- **Service Workers**

El objetivo principal del proyecto es demostrar cómo las aplicaciones web modernas pueden **reducir la dependencia de servidores**, mejorar el rendimiento y ofrecer **capacidad de funcionamiento sin conexión a internet (offline)**.

---

# Objetivos del Proyecto

Los objetivos principales de esta aplicación son:

- Comprender el funcionamiento del **almacenamiento en el navegador**
- Implementar **persistencia de datos en el cliente**
- Demostrar el uso de **Service Workers para aplicaciones offline**
- Implementar una arquitectura sencilla basada en **JavaScript del lado del cliente**
- Aplicar buenas prácticas de desarrollo web

---

# Funcionalidades de la Aplicación

La aplicación incluye las siguientes funcionalidades:

- Crear nuevas tareas
- Visualizar una lista de tareas
- Marcar tareas como completadas
- Eliminar tareas
- Guardar tareas permanentemente en el navegador
- Aplicar filtros temporales a las tareas
- Permitir el funcionamiento sin conexión a internet

---

# Tecnologías Utilizadas

Este proyecto utiliza tecnologías web estándar.

## HTML5

Se utiliza para definir la **estructura de la interfaz de usuario**, incluyendo:

- formulario para crear tareas
- lista de tareas
- botones de interacción

---

## CSS3

Se utiliza para el **diseño visual de la aplicación**, incluyendo:

- alineación de elementos
- espaciado
- estilos de botones
- organización visual de la lista de tareas

---

## JavaScript

JavaScript es el núcleo de la aplicación.

Se utiliza para:

- manipular el DOM
- gestionar eventos del usuario
- guardar datos en el navegador
- cargar tareas guardadas
- actualizar la interfaz dinámicamente

---

# Almacenamiento en el Navegador

La aplicación utiliza diferentes mecanismos de almacenamiento disponibles en los navegadores modernos.

## localStorage

**localStorage** permite guardar datos en el navegador de forma persistente.

Esto significa que los datos permanecen almacenados incluso después de cerrar el navegador.

En esta aplicación, **localStorage se utiliza para almacenar las tareas del usuario**.

Las tareas se guardan en formato **JSON**.

### Estructura de una tarea

Cada tarea contiene los siguientes atributos:

- `id` → identificador único
- `text` → contenido de la tarea
- `completed` → indica si la tarea está completada
- `createdAt` → fecha de creación

Ejemplo:

```json
{
  "id": 1,
  "text": "Estudiar almacenamiento en navegador",
  "completed": false,
  "createdAt": "2026-03-09T10:00:00"
}
```

### Lógica de almacenamiento

1. Cuando el usuario crea una tarea:
   - se crea un objeto JavaScript
   - se añade a un arreglo de tareas
   - el arreglo se convierte a JSON
   - se guarda en localStorage

2. Cuando se carga la página:
   - se leen las tareas desde localStorage
   - se convierten nuevamente a objetos JavaScript
   - se muestran en la interfaz

---

## sessionStorage

**sessionStorage** permite guardar datos solo durante la sesión del navegador.

Esto significa que los datos se eliminan automáticamente cuando se cierra la pestaña.

En esta aplicación se utiliza para almacenar **el estado temporal de filtros de tareas**.

Ejemplo:

- Mostrar todas las tareas
- Mostrar solo tareas completadas
- Mostrar solo tareas pendientes

El uso de sessionStorage evita guardar configuraciones temporales de la interfaz de forma permanente.

---

# Concepto de IndexedDB

Aunque esta aplicación utiliza **localStorage**, en aplicaciones más complejas podría utilizarse **IndexedDB**.

IndexedDB es una base de datos integrada en el navegador diseñada para manejar grandes volúmenes de datos estructurados.

### Ejemplo de estructura de datos en IndexedDB

Objeto **Task**:

- `id`
- `title`
- `description`
- `priority`
- `createdAt`
- `updatedAt`
- `tags`
- `changeHistory`

### Ventajas de IndexedDB

- permite almacenar **grandes cantidades de datos**
- soporta **índices**
- permite **consultas complejas**
- es **asíncrono**
- tiene **mejor rendimiento en aplicaciones grandes**

---

# Funcionamiento Offline

La aplicación utiliza un **Service Worker** para permitir que funcione incluso sin conexión a internet.

Un Service Worker es un script que se ejecuta en segundo plano en el navegador.

Su función es:

- interceptar solicitudes de red
- almacenar recursos en caché
- servir recursos desde la caché cuando no hay conexión

### Recursos almacenados en caché

El Service Worker guarda:

- HTML
- CSS
- JavaScript

Esto permite que la aplicación se cargue incluso si el usuario está offline.

---

# Lógica General de la Aplicación

El flujo de funcionamiento de la aplicación es el siguiente:

1. El usuario abre la aplicación en el navegador
2. La aplicación carga las tareas almacenadas en localStorage
3. Las tareas se muestran en la interfaz
4. El usuario puede:

   - agregar una tarea
   - marcar una tarea como completada
   - eliminar una tarea

5. Cada cambio actualiza:

   - la interfaz visual
   - el almacenamiento en localStorage

6. El filtro actual se guarda en sessionStorage

---

# Cómo Ejecutar la Aplicación

## 1 Clonar el repositorio

```bash
git clone https://github.com/username/todo-offline-app.git
```

---

## 2 Entrar en la carpeta del proyecto

```bash
cd To_do_list
```

---

## 3 Ejecutar un servidor local

Para que el Service Worker funcione correctamente es necesario ejecutar la aplicación en un servidor local.

Ejemplo utilizando **serve**:

```bash
npx serve
```

---

## 4 Abrir la aplicación en el navegador

```
http://localhost:3000
```

---

# Consideraciones de Seguridad

El almacenamiento en el navegador tiene ciertas limitaciones.

Buenas prácticas:

- No almacenar **contraseñas**
- No almacenar **datos sensibles**
- No almacenar **tokens de autenticación**

localStorage debe utilizarse únicamente para **información no crítica**.

---

# Cómo Subir el Proyecto a GitHub

A continuación se explica el proceso completo para subir el proyecto a GitHub.

---

## 1 Crear un repositorio en GitHub

Ir a:

```
https://github.com
```

Seleccionar:

```
New repository
```

Asignar un nombre al repositorio, por ejemplo:

```
To_do_list
```

---

## 2 Inicializar Git en el proyecto

Abrir la terminal dentro de la carpeta del proyecto y ejecutar:

```bash
git init
```

Esto crea un repositorio Git local.

---

## 3 Añadir los archivos al repositorio

```bash
git add .
```

Este comando añade todos los archivos del proyecto al área de preparación.

---

## 4 Crear el primer commit

```bash
git commit -m "Initial commit - Offline Todo Application"
```

Un commit guarda un punto de control del proyecto.

---

## 5 Conectar el repsitorio local con GitHub

```bash
git remote add origin URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git remote add origin https://github.com/Luiyems/To_do_list.git
```

---

## 6 Subir el proyecto a GitHub

```bash
git push -u origin master
```

Este comando sube el código al repositorio remoto.

---

# Autor

Luis Ortiz

---

# Posibes Mejoras Futuras

- Implementar **IndexedDB**
- Añadir **edición de tareas**
- Añadir **categorías**
- Añadir **prioridades**
- Implementar **sincronización con servidor**
- Convertir la aplicación en **PWA completa**