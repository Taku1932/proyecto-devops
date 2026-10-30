# Sistema de Reservas Médicas

## Descripción
Aplicación web que permite registrar reservas médicas mediante un formulario donde el usuario ingresa el nombre del paciente y la fecha de atención.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- Docker
- Nginx
- Docker Compose
- Git y GitHub
- GitHub Actions

## Estructura del proyecto

```text
proyecto-devops/
├── .github/
│   └── workflows/
│       └── docker.yml
├── src/
│   ├── index.html
│   └── styles.css
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── README.md
└── script.js
```

## Ejecución con Docker

Construir la imagen:

```bash
docker build -t reservas-medicas:v2 .
```

Iniciar el contenedor:

```bash
docker run -d --name reservas-prueba-v2 -p 8081:80 reservas-medicas:v2
```

Abrir en el navegador:

http://localhost:8081

## Ejecución con Docker Compose

Construir e iniciar el servicio:

```bash
docker compose up -d --build
```

Verificar el estado:

```bash
docker compose ps
```

Abrir en el navegador:

http://localhost:8082

Detener el servicio:

```bash
docker compose down
```

## Integración continua (CI)

El proyecto utiliza GitHub Actions para ejecutar automáticamente las siguientes tareas:

1. Descargar el código del repositorio.
2. Configurar Docker Buildx.
3. Construir la imagen Docker.
4. Verificar la imagen generada.
5. Iniciar un contenedor de prueba.
6. Comprobar que el servidor web responde.
7. Eliminar el contenedor de prueba.

El flujo se ejecuta al realizar un push o pull request hacia la rama main.

## Pruebas automáticas

El pipeline verifica que la aplicación web pueda ejecutarse correctamente dentro de un contenedor Docker.

Las pruebas permiten detectar errores en la construcción de la imagen o en la disponibilidad del servidor web.

## Resultados

Se verificó el funcionamiento local de la aplicación mediante Docker y Docker Compose.

Además, se confirmó la ejecución exitosa del pipeline de integración continua en GitHub Actions, incluyendo las pruebas automáticas.

## Repositorio

https://github.com/Taku1932/proyecto-devops