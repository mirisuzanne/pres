Sass Map Magic
--------------

@EricMSuzanne / @OddestBirds / @SassSusy

[Eric M Suzanne](http://ericsuzanne.com/) / [OddBird](http://oddbird.net/) / [Susy](http://susy.oddbird.net)

Spoiler Alert. There's nothing magic about Sass Maps. But you can use them to make some magic of your own.

---

￼# Maps != SourceMaps

This is not a talk about Sass SourceMaps.

---

Source Maps tell your favorite browser debugging tool where CSS code originated in your Sass. That's not what this talk is about.

---

  $map: (
    key: value,
    another key: another value,
  );

Sass Maps are a data type — like strings, and lists, and numbers — but with the ability to define key/value pairs. The key on the left is bound to the value on the right — and can be accessed at any time.

Both Sass Maps & SourceMaps were added to Sass in version 3.3 (just to confuse you), but they have nothing else in common.

---

  // Mundane
  $grid-columns: 4;
  $grid-gutters: .25;
    $grid-column-width: false;
    $grid-math: fluid;
  $grid-output: float;
    $grid-gutter-position: after;
    $grid-container: auto;
    $grid-container-position: center;
    $grid-flow: ltr;
  $grid-last-flow: to;

You can use maps to help with mundane tasks like code organization, and namespacing.

---

  // Organized!
  $grid: (
    columns: 4,
    gutters: .25,
    column-width: false,
    flow: ltr,
    math: fluid,
    output: float,
      gutter-position: after,
      container: auto,
      container-position: center,
      last-flow: to,
     );

---

  // Insane
  @mixin span(
    $columns,
      $location,
    $context: $grid-columns,
    $gutters: $grid-gutters
    $math: $grid-math,
    $output: $grid-output,
    $flow: $grid-flow,
    $gutter-position: $grid-gutter-position,
      $box-sizing: false,
    $edge: false,
    $spread: narrow,
  ){
      // mixin logic...
    }

    @include span(3, 10, 12, $output: isolate, $edge: last, $flow: rtl);

But you can also use them for complex tasks, like turning this overwhelming & bulky mixin...

---

  // ♪♫ A whole new world!
  @mixin span(
      $span
  ){
    // clever mixin logic...
  }

  @include span(isolate last 3 of 12 rtl);

into something more manageable to use.

---

# SASS ~ CSS
## Nothing is Magic.

Before we dive in, how many of you know CSS and use it regularly? How many of you use a pre-processor to generate your stylesheets? How many use Sass? Less? Stylus? Others? Do you remember table layouts? Do you remember typewriters and overhead projectors?

Everything you can do with maps, you can do without maps — but I don't recommend it. There's nothing inherently magic about pre-processors, and there's certainly nothing magic about maps. The magic is what you do with them, and all these tools can make your magic that much easier to express.

---
￼￼￼
  # Ruby
  phonebook = {
      'Sally Smart' => '555-9999',
      'John Doe' => '555-1212',
  }

  # Python
  phonebook = {
    'Sally Smart' : '555-9999',
    'John Doe' : '555-1212',
  }

  # JSON
  {
    "Sally Smart": "555-9999",
    "John Doe": "555-1212",
  }

There's nothing new about the map concept. This is a common data type in many languages — also called an associative array, symbol table, or dictionary. (Samples from Wikipedia)

---

  $map: (
    key: value,
    another key: another value,
  );

In Sass, a map is always surrounded by parenthesis, with colons between keys and their given values, and commas between key/value pairs.

---

  header {
    color: white;
    background: red;
    border-bottom: 1px solid black;
  }

# CSS ~ MAPS

  $header: (
    color: white,
      background: red,
    border-bottom: 1px solid black,
  );

You might recognize this as the basic structure of CSS, using a slightly different syntax. If you are familiar with CSS, you are already familiar with key/value pairs.

---

  $omg: (
    2: 14 - floor(13/2),
    ❄: (
      first: Eric,
      middle: M,
      last: Suzanne,
    ),
    (one, two, three): (four, five, six),
    (
      tests: 12,
      pass: 11,
      fail: 1,
    ): "One test failed!",
  );

You can use anything for a key, and anything for a value. This is awesome, and almost never useful. As a general rule, keys should be simple, readable, clear names that you can remember and access easily — like variables.

---

# MAP MERGE

    $map: (
      hello: world,
    );

    // map-merge(map1, map2)
  $intro: map-merge($greeting, (name: Eric M Suzanne));

Sass provides functions to help you manage all the key/value bindings in a map. Both create and edit are handled with a single function called `map-merge()`.

This function takes two map arguments, and returns a new map with merged values. In the event of a conflict, the second value takes precedence — allowing you to change map values.

---

  $intro: (
      hello: Denver,
      name: Eric M Suzanne,
    }

    $blendconf: (
      hello: Charlotte,
      talk: Sass Map Magic,
      organizer: Bermon Painter,
      audience: friendly and attractive,
    );

    $blended-intro: map-merge($greeting, $blendconf);

Of course, `map-merge()` also allows you to combine two larger maps into a single map — with the second map overriding the first in cases of conflict.

---

# NO MAP-SET

  // a map-set function (not included with Sass)
  @function map-set(
    $map, $key, $value
  ){
    $new: ($key: $value);
    @return map-merge($map, $new);
    }

  // Merge vs Set
  $intro: map-merge($intro, (hello: Charlotte));
  $intro: map-set($intro, hello, Charlotte);

Sass does not provide any built-in `map-set()` function, like you might expect. You can build your own, but there is very little to be gained — The `map-merge` function does everything you need.

---

# MAP REMOVE

  $intro: (
    hello: Charlotte,
      name: Eric M Suzanne,
      talk: Sass Map Magic,
      organizer: Bermon Painter,
      audience: friendly and attractive,
    insult: "I don't like your face",
  );

  // map-remove(map, key)
  $greeting: map-remove($greeting, insult);

You can remove a binding from a map using the `map-remove()` function. Pass in a map, and the key you want removed.

---

# MAP GET

  $intro: (
    location: Charlotte,
      name: Eric M Suzanne,
      talk: Sass Map Magic,
      organizer: Bermon Painter,
      audience: friendly and attractive,
  );

  // map-get(map, key)
  $location: map-get($intro, hello);
￼￼￼￼￼￼￼￼
Of course, there's no point adding, editing, and removing values from a map unless you are going to do something with them later. The `map-get()` function will give you access to any pair you want.

---

# Keys & Values

  // map-has-key(map, key)
    // return: True;
    $has-location: map-has-key($intro, hello);

  // map-keys(map)
    // return: (location, name, talk, organizer, audience);
    $keys: map-keys($intro);

  // map-values(map)
    // return: (Charlotte, Eric M Suzanne, Sass Map Magic, Bermon Painter, friendly and attractive)
    $values: map-values($intro);

Sass also provides so inspection functions to help you find out if a given key exists in a map (`map-has-key()`), or return lists of all the keys (`map-keys()`) and values (`map-values()`).

---

# And More!

  http://sass-lang.com/documentation/Sass/Script/Functions.html

There's more you can do, and it's mostly documented on the [Sass](http://sass-lang.com/) website. You can use some of the list functions on maps (and vice versa), or pass maps off as keyword arguments for a mixin or function — but we'll get to that later.

Now that you know the basics for managing maps, let's make some magic!

---

# Variable Organization

At their simplest, maps are a good way to group variables under distinct namespaces.

---

  $button-background: green;
    $button-color: white;
    $button-padding: .25em 1em;
    $button-border-radius: .25em;

  $button: (
    background: green,
      color: white,
      padding: .25em 1em,
      border-radius: .25em,
  );

We're using less variables to store the same information. This can have similar organizational advantages to nesting in Sass — making relationships explicit, and cutting down on repetition — but it also keeps your global namespace less cluttered.

---

# Repetition

---

# Icon Fonts

  // OddSite Icons
  $icons: (
    home      : "\e004",
    tag     : "\e076",
    email     : "\e0a1",
    bubbles   : "\e0e4",
    twitter   : "\e32f",
    github    : "\e34c",
    stackoverflow : "\e367",
    oddbird   : "\e600",
  );

This can do wonders for maintaining repetative data like icon-font mappings. All your icons are defined in one place, where you can easily make adjustments to their name, or their target glyph.

---

  [data-icon] {
      @extend %icon;
    }

    @each $name, $value in $icons {
      [data-icon='#{$name}']:before {
        content: '#{$value}';
      }
    }

A quick loop through the map, and you have `data-icon` attributes to use in your html, if you like to do things that way.

---

  @function icon($name) {
    @return map-get($icons, $name);
  }

    @mixin icon($name) {
      &:before {
        @extend %icon;
        content: icon($name);
      }
    }

    [href~='github.com'] {
      @include icon(github);
    }

Or you can create shortcut functions and mixins to access all your icons by name, directly in your CSS.

---

  $status-colors: (
    plusbad: red,
    bad: orange,
    ok: yellow,
    good: cyan,
    plusgood: green,
  );

    @each $name, $color in $status-colors {
      .is-#{$name} {
        background: color($color);
      }
    }

You can apply this technique to any repetative data. Recently, I used it to create state colors for an html graph.

---

# Configuration

---

# Colors

  html {
      background: color(background);
      color: color(text);
    }

    a {
      &:link, &:visited { color: color(action); }
      &:hover, &:focus, &:active { color: color(focus); }
    }

At OddBird we also use maps for colors, to help us maintain a site-wide color-palette.

---

  $colors: (
    primary: hsl(212, 72%, 59%),
    accent: hsl(31, 89%, 54%),
  );

    html {
      background: color(primary 75%, .5);
    }

Initially, we had one map with our base color definitions, and a powerful function that let us adjust lightness, saturation, and opacity on the fly. Claudina didn't like that. Too much power, and no consistent, semantic color palette across the site.

---

  $colors: (
    primary: hsl(212, 72%, 59%),
    background: #fff,
    text: #333,
    border: text (lighten: 50%),
    action: primary,
    focus: action (darken: 15%),
  );

So we moved all the logic into the color-map itself, and added self-reference so that colors could be based on other colors.

---

  @function color(
    $color
  ) {
    $get: map-get($colors, $color) or $color;
    $base: nth($get, 1);
    $adjust: if(length($get) > 1, nth($get, 2), ());
    $color: if(type-of($base) == color, $base, color($base));

    @each $function, $values in $adjust {
      $color: call($function, $color, $values...)
    }

    @return $color;
  }

This new color function knows how to find the right color in our map, apply any necessary adjustments, and return the results. We're using the nifty `call()` utility to access arbitrary adjustment functions (lighten, darken), and recursion to handle internal references (focus => action => primary), but those are features for another time.

---

# Sizes

  $base-font-size: 21px;
  $ratio: major-third;

  $font-sizes: (
    large   : make-size(2),
    medium    : make-size(1),
    normal    : make-size(0),
    small     : make-size(-1),
    smaller   : make-size(-2),
  );

  h1 {
      @include font-size(large);
    }

We use the same basic technique for consistent rhythms and typographic scale across the site.

---

# Layers & Breakpoints & More!

  $z-index: (
    default: 1,
    dropdown: 3000,
    overlay: 4000,
    modal: 4001,
  );

    $breakpoints: (
      medium: 45em;
      large: 60em;
    );

I've also seen maps used for z-index layering, named media-query breakpoints, and more. What other configuration settings might you want to manage this way?

---

# Modules & Modifiers

  $buttons: (
      primary: (
    background: color(action),
        color: white,
      ),
    secondary: (
        font-size: small,
        background: lightgray,
    ),
      alert: (
        background: red,
        color: white,
      ),
    );

By nesting maps, we can also store settings for entire modules and sub-modules. Sass doesn't currently provide many helpers for maintaining nested maps, but you can find various toolkits online that will help you do it.

---

  %button {
    border-radius: .25em;
    padding: .5em 1em;

    @each $modifier, $styles in $buttons {
      &--#{$modifier} {
        @extend %button;
        @each $property, $value in $styles {
          #{$property}: $value;
        }
        }
    }
  }

For these buttons we don't anything special — just a few loops to turn our settings into button placeholder styles. You could do the sam thing with standard classes. Notice that looping through a map gives you multiple variables to work with, both the key and the value of each pair.

---

  $buttons: (
    border-radius: .25em,
    padding: .5em 1em,

    primary: (
    background: color(action),
        color: white,
      ),
    secondary: (
        font-size: small,
        background: lightgray,
    ),
      alert: (
        background: red,
        color: white,
      ),
    );

In this case our map actually mimics the sass output we want. That's not always true with a module config, but we can take advantage of it when it is.

---

  @mixin render(
    $css
  ) {
    @each $key, $value in $css {
      @if type-of($value) == map {
        &--#{$key} {
          @include render($value);
        }
      } @else {
        #{$key}: $value;
      }
    }
  }

    .btn {
      @include render($buttons);
    }

Here's a mixin that loops through the map recursively, and prints it directly to Sass. You can play around with the use of a parent selector (`&`) on line 6 for different types of modules — move it into the map if you prefer that — but this suits our current needs.

---

  .btn {
    border-radius: 0.25em;
    padding: 0.5em 1em;
  }
  .btn--primary {
    background: color(action);
    color: white;
  }
  .btn--secondary {
    font-size: small;
    background: lightgray;
  }
  .btn--alert {
    background: red;
    color: white;
  }

---

# Case Study: Susy
## Framework Settings

We combine all of these map approaches (and more) in Susy, to initiate the default settings, accept user overrides, store data that can be passed around and manipulated, and finally print the results.

---

# Defaults

  // Old
    $susy-columns: 12;
    $susy-gutters: .25;
    $susy-math: fluid;
    $susy-flow: ltr;

  // New
  $susy-defaults: (
    columns: 12,
    gutters: .25,
    math: fluid,
      flow: ltr,
  );

Let's start with the defaults, and follow through the entire flow. Rather than causing potential variable-name conflicts, or prefixing all our settings with `$susy-`, our defaults are stored in a single, clearly-named map.

---

# User Settings

  $susy: (
      columns: 4,
      math: static,
    );

Rather than overriding the default variable, users create their own settings map, simply named `$susy`. It's a lossless approach to framework defaults!

---

# Susy Get

  @function susy-get(
      $setting,
      $map: $susy,
  ) {
    @return map-get($map, $setting) or map-get($susy, $setting) or map-get($susy-defaults, $setting);
    }

  $columns: susy-get(columns);

We can access any user setting, or the global default with our own `susy-get()` function. We can also get a setting from any arbitrary map, which will be useful later.

---

# Multiple Configurations

  $small: (
      columns: 4,
      gutters: .25,
    );

  $large: (
      columns: 12,
      gutters: .5,
    );

  aside {
      @include span(3 $large);
    }

Since all our settings are stored in maps already, users can easily pass in new settings-maps on the fly. There's only one global default map, but you can create as many Susy layouts as you want, and use them anywhere.

---

# Case Study: Susy
## Shorthand Syntax

We also use maps in Susy to create a parser for our shorthand syntax. When we want to add new syntax, we simply add it to the map! Let's take a look.

---

# Conflicting Arguments

  @include span($width);
    @include span-grid($columns, $context);
    @include span-asymmetrical($columns, $location, $context);

In Susy 2.0 we really wanted to make any type of layout possible, and that meant supporting float isolation, asymmetrical grids, and non-grid layouts. But each of those options would require a different set of arguments from the user.

---

# Shorthand Syntax!

  // old asymmetrical
  @include span($span: 1, $location: 4, $context: 2 4 3 1);
  @include span(1, 4, 2 4 3 1);

    // new asymmetrical
    @include span(1 of (2 4 3 1) at 4);
    @include span(last 1 of (2 4 3 1));

If we built this with standard mixin arguments, the asymmetrical requirements would get in the way of non-asymmetrical users. By moving to a shorthand syntax, we're able to fix that problem by allowing more flexibility around what arguments are required, and what order you pass them in. At the same time, we can add some clarity and readability to the code.

The shorthand syntax isn't just for pretty. That's what allows Susy to be as flexible as it can be, without adding complexity for users that don't need it.

---

# Tradeoffs

  @mixin span(
    $columns,
      $location,
    $context: $grid-columns,
    $gutters: $grid-gutters
    $math: $grid-math,
    $output: $grid-output,
    $flow: $grid-flow,
    $gutter-position: $grid-gutter-position,
      $box-sizing: false,
    $edge: false,
    $spread: narrow,
  ){
      // mixin logic...
    }

The downside of this approach is that you don't know as much about what's required by looking at the Susy mixin definitions. While this full list of arguments is daunting, it also provides information.

We decided that trade-off was worthwhile for us. We try to mitigate the problem by having one unified syntax that works across almost all mixins and functions. Every part of Susy understands how to read the basic layout shorthand. Learn it once, and use it everywhere.

---

# Keyword Map

    $keywords: (
      math: static fluid,
      output: isolate float,
      flow: ltr rtl,
      gutter-position: before after split inside inside-static,
    );

With maps, it's easy to create your own keyword parser! The hardest part is inventing a syntax that is clear, conceise, and functional. Start with a map of the arguments you want to track, and the available keywords for each argument.

---

# Keyword Parser

    @function parse(
      $shorthand
    ){
      $return: ();

      @each $key, $value in $keywords {
        @each $option in $value {
          @if index($shorthand, $option) {
            $return: map-merge($return, ($key: $option));
          }
        }
      }

      @return $return;
    }

  $parse: parse(static isolate rtl split);

Our parser loops through the available keywords and looks for them in your shorthand argument. When there's a match, we add it to a new map of matched key/value pairs, and return those results at the end.

The Susy parser has some added complexity to handle non-keyword settings, like column-span and context, but this is the heart of the parser. When we add a new shorthand feature, we don't have to update our parser at all — just add the new key/value pair to the map.

---

# Local and global settings

  $susy {
      math: fluid,
      output: float,
      flow: ltr,
      gutter-position: after,
  }

  $parse {
    math: static,
    output: isolate;
    flow: rtl;
    gutter-position: split;
  }

Now we have a map of user-set arguments that matches closely with our global `$susy` settings. That's exactly what we need.

---

# Current Value!

  $flow: susy-get(flow, $parse);

Since we're storing our local arguments and our global configuration in similar maps, it's easy to compare and find the current value of any setting.

Remember the `susy-get` function we wrote earlier? It can check three maps for the same setting, and return the first value it finds. First it checks the local map of parsed user arguments, then the global user settings, and finally (if it hasn't found a value yet) Susy's factory defaults.

---

# Case Study: Susy
## Framework Output

Susy has a lot of functions behind the scenes to handle all the different configurations. It would be a mess, if we didn't have a standard language for passing data from one function to another. Guess what Sass data-type made that easy for us?

---

  // Use
  @include span(1 of 4 inside border-box ltr);

  // Argument Map
  $parse: (
      span: 1,
      columns: 4,
      gutter-position: inside,
      box-sizing: border-box,
    );

    // Output Map
    $output: (
      width: 25%,
      float: left,
    padding-_from_: 3.125%,
      padding-_to_: 3.125%,
      box-sizing: border-box,
    );

Every time you call a mixin or function, Susy creates two maps internally — the first is a map of your input, and the second is a map of calculated output. The output map is cobbled together by different functions, and looks a lot like the final CSS we want (with a few small differences). Directions are still referred to in the abstract (`_to_` or `_from_`) rather than the specific (`left` or `right`), and potentially-prefixed properties like `box-sizing` are left un-prefixed.

---

