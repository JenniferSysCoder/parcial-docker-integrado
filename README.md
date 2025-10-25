
# Parcial Integrador – Docker y Docker Compose

**Asignatura:** Implantación de Sistemas 
**Estudiante:** Jennifer Tatiana Guerra Figueroa 
**Expediente:** GF22I04002 
**Repositorio:** parcial-docker-integrado

---

## Resumen de los ejercicios realizados

**Ejercicio 1 – Servicio Base con Dockerfile:** 
Se creó un servicio Node.js con Express que expone dos endpoints: `/` (devuelve datos del estudiante) y `/health` (devuelve `{ "status": "OK" }`). 
Se construyó un Dockerfile optimizado sobre `node:18-alpine`, definiendo WORKDIR, copiando dependencias y código, usando `npm ci`, exponiendo el puerto 3000 y evitando el uso de root. 
El contenedor se ejecutó localmente y los endpoints fueron validados correctamente.

**Ejercicio 2 – Persistencia con PostgreSQL y Volumen:** 
Se añadió un contenedor PostgreSQL con persistencia mediante un volumen `db_data`. 
Se configuraron las variables de entorno (`POSTGRES_USER=admin`, `POSTGRES_PASSWORD=12345`, `POSTGRES_DB=parcial_db`) y se creó una tabla `estudiantes` con registros de prueba. 
Se reinició el contenedor para comprobar que los datos persistieran correctamente.

**Ejercicio 3 – Integración completa con Docker Compose:** 
Se integraron los servicios de API Node.js y PostgreSQL en un `docker-compose.yml` versión 3.8, usando la red `app_net` y el volumen `db_data`. 
Se configuró `depends_on` para que la API espere la disponibilidad de la DB y se incluyó un `healthcheck` para la base de datos (`pg_isready`). 
Se levantó el proyecto con `docker compose up -d --build`, validando que la API y la base de datos se comuniquen correctamente, y que los endpoints funcionen.

**Evidencias y resultados:** 
- Contenedores corriendo sin errores. 
- Endpoints respondiendo datos esperados. 
- Base de datos con persistencia de información. 
- Red `app_net` y volumen `db_data` creados automáticamente. 
- Healthcheck de DB marca `healthy`. 
- Logs y capturas de evidencias almacenados en `/docs/evidencias`.
