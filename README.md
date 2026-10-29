# Sistema de Reservas Médicas

## Descripción
Aplicación web para registrar reservas médicas mediante un formulario que permite ingresar el nombre del paciente y la fecha de atención.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- Docker
- Nginx
- Git y GitHub
- GitHub Actions

## Ejecución con Docker

Construir la imagen:

```bash
docker build -t reservas-medicas:v1 .
```

Iniciar el contenedor:

```bash
docker run -d --name reservas-medicas -p 8080:80 reservas-medicas:v1
```

Abrir en el navegador:

http://localhost:8080

## Integración continua (CI)

El proyecto utiliza GitHub Actions para ejecutar automáticamente las siguientes tareas:

1. Descargar el código del repositorio.
2. Configurar Docker Buildx.
3. Construir la imagen Docker.
4. Verificar la imagen generada.
5. Iniciar un contenedor de prueba.
6. Comprobar que el servidor web responde correctamente.
7. Eliminar el contenedor de prueba.

El flujo se ejecuta al realizar un push o pull request hacia la rama main.

## Resultado

Se verificó el funcionamiento local de la aplicación mediante Docker y la ejecución exitosa del pipeline de integración continua en GitHub Actions.
