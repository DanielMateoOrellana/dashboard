# ChismeGPT Core

## Descripción

Este programa implementa el core transaccional para el sistema **ChismeGPT**, un servicio digital con dos tipos de usuarios: **pre-pago** y **pos-pago**. El core se encarga de recibir mensajes de los usuarios y procesarlos en función de ciertas reglas de concurrencia y prioridad.

## Requisitos

1. **Concurrencia**: El sistema puede procesar un número limitado de mensajes de manera concurrente. Este número máximo de mensajes concurrentes es configurable al ejecutar el programa.
2. **Prioridad de mensajes**: Los mensajes **pospago** tienen prioridad sobre los mensajes **prepago**, incluso si los mensajes prepago están esperando en la cola.
3. **Tiempo de procesamiento**: Los mensajes se procesan simulando un tiempo de espera (en microsegundos) para cada mensaje.
4. **Suspensión y reanudación**: Los mensajes de prepago pueden ser suspendidos y reanudados dependiendo de los mensajes pospago en espera.

## Uso

### Compilación

1. Asegúrate de tener un compilador de C disponible (por ejemplo, GCC).
2. Compila el código fuente con el siguiente comando:

`gcc -o chismegpt chismegpt.c -lpthread`


### Ejecución

Para ejecutar el programa, utiliza el siguiente comando:

`./chismegpt <número de mensajes concurrentes>`


**Parámetros**:
- `<número de mensajes concurrentes>`: 
Número máximo de mensajes que el sistema puede procesar simultáneamente. Este valor es un parámetro que debe pasarse al ejecutar el programa. Si no se proporciona, se utilizará un valor predeterminado de `5`.

Ejemplo:

`./chismegpt5`


Este comando ejecutará el programa permitiendo que hasta 5 mensajes sean procesados simultáneamente.

## Detalles de implementación

- **Semáforos y Mutexes**: El programa utiliza semáforos para limitar el número de hilos concurrentes y mutexes para asegurar la sincronización correcta en las colas de mensajes. Los mensajes **pospago** tienen siempre prioridad sobre los mensajes **prepago**.
- **Suspensión y Reanudación de Hilos**: Cuando un mensaje **pospago** entra en la cola, cualquier hilo que esté procesando un mensaje **prepago** se suspende hasta que todos los mensajes **pospago** sean procesados.

## Notas

- Asegúrate de ejecutar el programa con suficientes permisos de sistema si estás trabajando en un entorno restringido.
- El programa está diseñado para simular un sistema de procesamiento concurrente con reglas de prioridad, lo que permite experimentar con escenarios de alta concurrencia.
