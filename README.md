# PPS_Entrega

## Enunciados de las aplicaciones - 2 cuat. 2019 - Versión del 02-08-2019 
**Requerimientos excluyentes:**
Iconos de las aplicaciones que se reconozcan como pertenecientes a un mismo paquete de aplicaciones. (Distintos, pero iguales). 
Splash animado con: ícono de la aplicación, el nombre del alumno y la división. 
Todo en español. (¡TODO EN ESPAÑOL!, ¡los acentos pertenecen al idioma!). 
Todo error o información mostrarlo con distintas ventanas. (DISTINTAS, ¡NO alerts!). 
Cada aplicación con estilos que difieran entre sí. (Colores y fuentes y tamaños y formas, imágenes). 
Validación de datos, en todos los formularios. (TODOS LOS DATOS, EN TODOS LOS FORMULARIOS). 
Spinners en todas las esperas (TODAS). (establecer esperas de al menos 2 segundos). 
Distintos botones de usuario, para testear el ingreso, en cada aplicación (flotantes, fijos, con distintas formas y distintas posiciones). 
La TOTALIDAD de la superficie de la pantalla debe estar ocupada con distintos elementos. (¡NO debe haber espacios neutros!). 

**Requerimientos optativos:**

Los spinners con el logo de la empresa.
Sonidos distintos al iniciar las aplicaciones. 
Botones de las aplicaciones con animaciones. 
Sonidos por cada transición de páginas. 
Sonido al cerrar la sesión. 
Vibraciones al detectarse un error. 

### 1.- Conversando en el aula (testeado en más de un dispositivo): 
* Ingresar un usuario. (registrado en BD) 
* La aplicación mostrará dos botones (con colores e imágenes que los distinga) y el texto PPS-4A y PPS-4B, respectivamente. 
* Los botones deben de ocupar toda la pantalla (TODA LA PANTALLA). Una vez seleccionada el aula (respetar el mismo color del botón de ingreso), se tendrá un cuadro de texto y un botón para ingresar un mensaje. 
* El listado de mensajes muestra el usuario que lo generó (al estilo Whatsapp). 
* Los mensajes no pueden tener más de 21 caracteres. Mostrar la fecha y el autor del mensaje. Si el autor del mensaje soy yo, NO mostrar el nombre. Los mensajes propios se alinearán a la derecha, los demás, a la izquierda. 

![Conversando en el aula](https://github.com/marianomadou/PPS_Entrega/blob/master/documentacion/print_alarma.jpg)

### 2.- Tabla didáctica de idiomas para niños (5 años): 
* Ingresar un usuario. (registrado en BD) 
* Crear una aplicación que permita seleccionar un tema y un idioma. 
* La aplicación contará con cinco BOTONES que ocupen toda la pantalla. (TODA LA PANTALLA). 
* Se tendrán botones flotantes que permitan seleccionar el idioma deseado. (que posean banderitas) 
* Los idiomas son: 
    **Español. Inglés. Portugués.** 
* Se tendrán botones que permitan seleccionar el tema deseado. (que posean imágenes alusivas). 
* Los temas son: 
    **Colores. Números. Animales.**
* + Los sonidos pueden ser grabados por el usuario (no excluyente, pero suma nota. Si lo graban con acento español, más). 
*+ Debe funcionar con el dispositivo tanto en horizontal como en vertical, ajustando los  elementos a la pantalla. 

![Conversando en el aula](https://github.com/marianomadou/PPS_Entrega/blob/master/documentacion/print_didactica.jpg)

### 3.- Alarma de robo: Ingresar un usuario. (registrado en BD):
La aplicación tendrá un botón que permitirá activar y desactivar el detector de robo. Una vez activado, (asumiendo que el dispositivo está apoyado horizontalmente sobre una mesa) se va a disparar la alarma: 
● Al cambiar la posición, a izquierda o a derecha, emitirá un sonido distinto para cada lado. 
● Al ponerlo vertical, se encenderá la luz (por 5 segundos) y emitirá un sonido. 
● Al ponerlo horizontal, vibrará (por 5 segundos) y emitirá un sonido. + Grabar los sonidos. Ejemplo: al moverlo hacia la izquierda, “¡Están hurtando el dispositivo!”, al moverlo hacia la derecha “¡Epa! ¿Qué estás por hacer?”. 

![Conversando en el aula](https://github.com/marianomadou/PPS_Entrega/blob/master/documentacion/print_alarma.jpg)

### 4.- Relevamiento visual (testeado en más de un dispositivo): 
Ingresar un usuario. (registrado en BD) Seleccionar un BOTÓN de dos posibles (Cosas LINDAS del edificio, Cosas FEAS del edificio). Los botones deben de ocupar toda la pantalla (TODA LA PANTALLA) y poseer imágenes alusivas. Al ingresar a una sección, nos permite tomar una foto y subirla a la nube. El nombre del usuario tiene que estar relacionado con la foto. Los demás usuarios tienen que ver la foto subida. El listado de fotos se tiene que mostrar ordenado por fecha de forma DESCENDENTE. Permitir votar la cosa más linda y la más fea del edificio (un voto por foto). 
+ Permitir ver los resultados en gráficos de torta (para las lindas) y de barra (para las feas). + Permitir subir más de una foto a la vez. + Mostrar el listado de las fotos que el usuario subió. + Al seleccionar un resultado del gráfico, mostrar la foto correspondiente. 

![Conversando en el aula](https://github.com/marianomadou/PPS_Entrega/blob/master/documentacion/print_visual.jpg)

### 5.- Visualizador kinético: 
Ingresar un usuario. (registrado en BD) Seleccionar un BOTÓN de dos posibles (Cosas LINDAS del edificio, Cosas FEAS del edificio). Los botones deben de ocupar toda la pantalla (TODA LA PANTALLA) y poseer imágenes alusivas. Al ingresar a una sección, nos permite tomar una foto y subirla a la nube. El nombre del usuario tiene que estar relacionado con la foto. Los demás usuarios tienen que ver la foto subida. El listado de fotos se tiene que mostrar de forma DESCENDENTE. Permitir subir más de una foto a la vez. Mostrar el listado de las fotos que el usuario subió. Permitir votar la cosa más linda y la más fea del edificio (un voto por foto). Permitir ver los resultados en gráficos de torta (para las lindas) y de barra (para las feas). Al seleccionar un resultado del gráfico, mostrar la foto correspondiente. 
En la galería de fotos: 
● Al mover el celular hacia la derecha, mostrar la siguiente fotografía. 
● Al mover el celular hacia la izquierda, a la foto anterior. 
● Al hacer otro movimiento (usted lo determinará) se vuelve al principio. 

![Conversando en el aula](https://github.com/marianomadou/PPS_Entrega/blob/master/documentacion/print_kinectico.jpg)

## Cronograma de aplicaciones para PPS 2019
**31-8**
TRAER 1 APP CON LOGIN -> GUARDADO EN LOCALSTORAGE, FIREBASE (O NADA)

**7-9**
TRAER 5 APPS CON LOGIN (DISTINTOS)
5 ICONOS (IGUALES PERO DISTINTOS);
5 LOGIN FUNCIONALES (GUARDADO EN FIREBASE);

**14-9**
REGISTRAR FUNCIONAL; 5 SPLASH SCREEN (CON TRANSICIÓN)(ANIMADA)

**28-9**
PRE-ENTREGA 5 APLICACIONES CON DISEÑO DE PANTALLAS

**5-10**
PRE-ENTREGA 2-> FUNCIONALIDAD

**12-10**
PRE-ENTREGA 3 -> CON NOTA

**19-10**
PRIMER PARCIAL -> FIRMA DE LIBRETAS.PRE-ENTREGA RECUPERATORIO -> CON NOTA

**26-10**
-RECUPERATORIO -> FIRMA DE LIBRETAS ARMADO DE EQUIPOS PARA EL SEGUNDO PARCIAL

**2-11**
ESQUEMA DE LA APLICACIÓN

**9-11**
PRE-ENTREGA 1
TEMAS INDIVIDUALES PARA la aprobación directa

**16-11**
PRE-ENTREGA 2

**23-11**
PRE-ENTREGA 3

**30-11**
SEGUNDO PARCIAL -> FIRMA DE LIBRETAS

**7-12**
CORRECCIÓN FINAL
