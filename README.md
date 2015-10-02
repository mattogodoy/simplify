# simplify

Es una librería para simplificar idiomas.

Desde hace tiempo vengo pensando en que el idioma español es de todo menos eficiente. Tenemos letras que suenan prácticamente igual, como la B y la V, como la C y la S (esto aplica sólo en ciertos países), o como la C y la K en determinadas ocasiones.

Inicialmente puede que te sangren los ojos cuando leas el texto simplificado, pero si lo piensas por un segundo, muchas de las letras que usamos tienen un montón de excepciones y reglas que hacen bastante más difícil comprender el idioma, como el caso de la C sonando como una S cuando se antepone a una E o una I, o la Q que va siempre seguida de una U y suena exactamente igual que una K, o a veces una C si la siguiente vocal es una A, una O o una U. ¿Quién fue el genio que dispuso esto?

En su forma simplificada, el español sería mucho más fácil de aprender, y al leerlo su pronunciación sigue igual. Estamos en la era de la información, señores. Hagamos las cosas más simples.

## Reemplazos

Los reemplazos en el texto son:

- La H deja de existir. Si es muda, ¿¿para qué la escribiríamos??. Ejemplo: «aora»
- La V deja de existir. De ahora en adelante, todo se escribe con B. Ejemplo: «bienbenido»
- C, Q y K suenan todas iguales. K y Q dejan de existir y todo se escribe con C. A mi cerebro todavía le cuesta entender que «ceso» sería «queso», pero prefiero mantener la letra C antes que K o Q. Ejemplo: «ciosco»
- Ce y Ci pasan a ser Se y Si, dado que ahora la C es un sonido cerrado. Ejemplo: «siensia»
- La X pasa a ser CS. Ejemplo: «tacsi»
- Dado que la H ya no existe, el sonido de CH es reemplazado por la letra X. Ejemplo: «bixo»
- El conjunto de Gu carece de sentido y deja de existir. Ahora la G suena igual independientemente de qué letra tenga a continuación. Ejemplo: «agila»
- La Ü que sólo se usa luego de una G y antes de una E o una I es la más estúpida de todas las reglas. A partir de ahora desaparece. Ejemplo: «desague»
- La LL desaparece dado que suena igual que Y. Mi maestra de lengua se arrancará los pelos, pero si se sincera, no hay diferencia alguna al hablarlo. Ejemplo: «yuvia»
- La C (antes de la E o la I), S y Z suenan todas iguales para la gran mayoría de países de habla hispana (sólo la parte de España que habla castellano la distingue). La Z se elimina y sólo queda la S. Ejemplo: «seresa»

Lo de reemplazar X por CS y usar la X como CH todavía no lo tengo muy claro, pero es lo que me pareció más fácil de procesar al leerlo. Se aceptan sugerencias.

## Uso

Para simplificar un texto anticuado al léxico del futuro:

```
$('.original').simplify();
```

Donde «.original» puede ser cualquier selector jQuery que apunte a un nodo que contenga texto.

### Opciones

Por defecto, se reemplaza las /c/ y /z/ por /s/.
Para el caso de España mantenemos /z/, tanto para las sílabas ce, ci como para que comienzan por zeta. Para esto pasamos el parámetro spain con valor true.

```
$('.original').simplify({spain: true});
```

## Demo
http://matto.io/files/simplify/

## Pendiente

- Respetar mayúsculas / minúsculas (actualmente se convierte todo a minúsculas)
- Agregar más idiomas
