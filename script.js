html, body{
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 100%;
  font-family: 'Amatic SC', cursive;
  color: #fff;
}

.wrapper{
  max-width: 30rem;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.frame {
  padding: .5rem;
  background-color: rgba(0,0,0,.15);
}

.top {
  padding: 0 .75em 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  svg {
    height: 1em;
    path {
      fill: #fff;
    }
  }
}

.row{
  display: flex;
  .col {
    flex-grow: 1;
    text-align: center;
    &:before {
      content: '';
      display: block;
      width: 100%;
      padding-top: 100%;
      background-color: transparent;
    }
  }
}

$colors: (
  yellow: #cfcf77,
  green: #6db66d,
  blue: #62cbcb,
  violet: #6d6dca,
  pink: #bc80bc,
  red:  #c06262
);

@each $name, $color in $colors {
  .#{$name} {
    background-color: $color;
  }
}