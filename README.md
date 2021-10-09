# Taller de HTML: Accesibilidad

Autor: Eduardo Oviedo Blanco

Para usar este taller efectivamente, clone el código en su ambiente local.
```
git clone https://github.com/edWAR6/aria.git
```
Si desea subir el taller en su repositorio personal.
Cree un repositorio en su perfil, luego:
```
git remote set-url origin https://github.com/<tu usuario>/aria.git
```

> El nombre del repositorio puede cambiar. Siga las instrucciones y guarde sus cambios.

## Propósito

Este taller demuestra algunos de los conceptos básicos de los elementos de accesibilidad de ARIA.

## Instrucciones

1. Primero vea el código en ejecución y active su lector de pantallas o screen reader.

- Note como la lectura del campo de búsqueda sin "label" no es óptima.

- Note que la lista es leida en corrido y nunca se indica que se está interpretando una lista.

- Note que el contenido dinámico no es nunca leido.

2. Para iniciar con una buena experiencia accesible, primero indique el lenguaje de la página.

```html
  <html lang="en">
```

> Si quiere probar en otro lenguaje cambielo al código correspondiente.
> Asegúrese de configurar su screen reader también.

3. Agregue roles y `area-label` a la sección de búsqueda para ser más específicos.

```html
  <form role="searchbox">
    <input type="search" name="search" placeholder="Search query" role="search" aria-label="Search through site content">
  </form>
```

4. Pruebe, haciendo que el lector lea toda la página y también haciendo click directamente al campo de texto.

5. Agregue los roles de lista a la lista de animales favoritos.

```html
  <section role="article">
    <p>My favorite animals:</p>

    <div class="favorites" role="list">
      <div role="listitem">Pig</div>
      <div role="listitem">Gazelle</div>
      <div role="listitem">Llama</div>
      <div role="listitem">Majestic moose</div>
      <div role="listitem">Hedgehog</div>
    </div>
  </section>
```

6. Pruebe, haciendo que el lector lea toda la página y también haciendo click directamente a la lista.

7. Agregue valor semántico a la sección interactiva. Además haciendo uso de la propiedad `aria-live` logre que el lector de pantallas anuncie los cambios dinámicos.

```html
  <section class="preview" role="complementary">
```

```html
  <div class="animal-description" aria-live="assertive">
```

8. Pruebe, haciendo que el lector lea toda la página y también haciendo click directamente los animales.

## Conclusion

ARIA debe usarse cuando haga falta, cuando este sea necesario. La recomendación es, probar siempre con varios lectores de pantallas (Screen readers) para verificar el nivel de accesibilidad.
