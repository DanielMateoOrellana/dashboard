# ECUAFAST - Simulador de Control Portuario

Este proyecto implementa un sistema distribuido para la simulación del control portuario en Ecuador. El programa utiliza hilos para simular entidades de control (SRI, SENAE, SUPERCIA), un administrador del puerto y barcos que realizan operaciones concurrentes.

---

## Requisitos del sistema
- Sistema operativo: Linux (recomendado)
- Compilador: `gcc` con soporte para C99 o ANSI C
- Herramientas adicionales: `make` (opcional)

---

## Estructura del proyecto
El proyecto está compuesto por los siguientes archivos:
- `main.c`: Archivo principal que coordina el programa.
- `ship.c` y `ship.h`: Manejo de las estructuras de datos para los barcos.
- `control_entities.c` y `control_entities.h`: Implementación de las entidades de control.
- `port_admin.c` y `port_admin.h`: Funciones para el administrador del puerto.
- `utils.c` y `utils.h`: Funciones auxiliares, como la gestión de la cola y estadísticas.
- `Makefile`: Archivo para facilitar la compilación.

---

## Instrucciones de compilación
Para compilar el proyecto, sigue estos pasos:

1. Asegúrate de que tienes instalado el compilador `gcc`.
2. Abre una terminal en la carpeta donde se encuentran los archivos del proyecto.
3. Ejecuta el comando:
`Make`

Esto generará un archivo ejecutable llamado `ecufast`.

---

## Instrucciones de ejecución
Para ejecutar el programa, usa el siguiente comando:
`./ecufast <numero_de_barcos>`

- `<numero_de_barcos>`: Cantidad de barcos iniciales a simular.

### Ejemplo de ejecución:

`./ecufast 5`

Esto iniciará el programa con 5 barcos iniciales.

---

## Funcionamiento del programa
1. Al iniciar, el programa procesa automáticamente los barcos iniciales.
2. Una vez procesados, se muestra un menú interactivo con las siguientes opciones:
   - **1. Añadir más barcos:** Permite agregar más barcos a la simulación.
   - **2. Ver estado actual:** Muestra el número de barcos procesados y los que quedan en cola.
   - **3. Salir del programa:** Finaliza la simulación.

---

## Notas importantes
- El programa utiliza semáforos y mutex para manejar la concurrencia y proteger los recursos compartidos.
- El tiempo de procesamiento de los barcos varía según las reglas de aforo y destino.
- Si un barco falla en su aproximación (10% de probabilidad), se elimina de la cola.

---

## Limpieza de archivos generados
Para limpiar los archivos de compilación generados por `make`, ejecuta:

`make clean`

Esto eliminará el ejecutable `ecufast` y otros archivos temporales.

---

## Créditos
Desarrollado como parte de un simulador de sistemas distribuidos para la gestión portuaria. Proyecto de la materia de Sistemas Operativos dictada por el PhD. Daniel Ochoa.
