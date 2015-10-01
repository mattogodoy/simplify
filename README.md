# simplify

Es una librería para simplificar idiomas.

Desde hace tiempo vengo pensando en que el idioma español es de todo menos eficiente. Tenemos letras que suenan prácticamente igual, como la B y la V, como la C y la S (esto aplica sólo en ciertos países), o como la C y la K en determinadas ocasiones.

Inicialmente puede que te sangren los ojos cuando leas el texto simplificado, pero si lo piensas por un segundo, muchas de las letras que usamos tienen un montón de excepciones y reglas que hacen bastante más difícil comprender el idioma, como el caso de la C sonando como una S cuando se antepone a una E o una I, o la Q que va siempre seguida de una U y suena exactamente igual que una K, o a veces una C si la siguiente vocal es una A, una O o una U. ¿Quén fue el genio que inventó esto?

En su forma simplificada, el español sería mucho más fácil de aprender, y al leerlo su pronunciación sigue igual. Estamos en la era de la información, señores. Hagamos las cosas más simples.

## Uso

Para simplificar un texto anticuado al léxico del futuro:

```
$('.original').simplify();
```

Donde «.original» puede ser cualquier selector jQuery que apunte a un nodo que contenga texto.

## Demo
http://matto.io/files/simplify/

## Pendiente

- Respetar mayúsculas / minúsculas (actualmente se convierte todo a minúsculas)
- Agregar más idiomas
