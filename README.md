# **Skrutte the Rabbit**
-------
<img src="https://github.com/anst9000/skrutte_the_rabbit/blob/master/src/img/skrutte_hiding.jpg"  alt="Skrutte the Rabbit" width="200">

## Description
> This is a web page about my little bunny Skrutte.

## Colors
> Colors are chosen from the Internet site [coolors.co](https://coolors.co/)
> The advantage of using this Internet site is that all colors presented are matching each others.
> The three main colors used on this site is the following color codes:
> - ![#C5EDAC](https://placehold.it/15/C5EDAC/000000?text=+) `#C5EDAC`
> - ![#597081](https://placehold.it/15/597081/000000?text=+) `#597081`
> - ![#6C0E23](https://placehold.it/15/6C0E23/000000?text=+) `#6C0E23`

## Techniques
| Module | Version |
|:------:|---------|
| browser-sync | ^2.26.7 |
| del | ^5.1.0 |
| gulp | ^4.0.2 |
| gulp-clean-css | ^4.2.0 |
| gulp-concat | ^2.6.1 |
| gulp-imagemin | ^6.1.0 |
| gulp-sass | ^4.0.2 |
| gulp-uglify-es | ^1.0.4 |

## SCSS
> For this web page the technique SCSS (= Sassy CSS) was used in conjuction with GULP version 4.

### SCSS-partials
| Module | Description |
|:------:|---------|
| _colors.scss | A setup partial for colors used in the project. |
| _fonts.scss | This partial is for fonts, sizes and corresponding characteristics. |
| _mixins.scss | This file is for @mixin of different types. |
| _navigation.scss | A partial for navigation bar and 'home'-button. |
| _reset.scss | This file is used for resetting values like margin and padding. |
| _sections.scss | The file for all the content in the picture/text parts. |

### SCSS-techniques
| Technique | Description |
|:---------:|---------|
| $variable | Used for colors, fonts, font-sizes and themes. |
| @mixins | Used for common setups, functions with parameters and themes. |
| @if @else | Used for deciding types of themes to chose. |
| @media | Used for media queries with different contents and sizes. |
| nesting | Used when giving attributes to child elements. |
| @extend | Used when inheriting attributes from other elements. |
| pseudo elements | Used in nesting with &: to call child elements. |

## Code examples
> **@mixin** for Media Query
~~~css
@mixin mq($size) {
    @media only screen and (max-width: $size) {
        @content;
    }
}
~~~
> **@include** calling mixin for Media Query
~~~css
@include mq(675px) {
    .box p {
        font-size: 0.8rem;
    }
}
~~~
> **Nesting** parent elements and child elements
~~~css
.box {
    background: $color2;
    width: 25%;
    height: 75%;
    border: 5px solid $border;
    padding: 10px;

    p {
        font-size: 1.0rem;
        line-height: 1.4;

        &:first-of-type {
            font-weight: 700;
            text-decoration: underline;
            padding-bottom: 0.4rem;
        }

        span {
            text-shadow: 0.5px 0.5px #FFFF00;
        }
    }
}
~~~
