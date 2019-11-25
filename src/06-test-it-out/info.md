# react-hooks-testing-library

https://github.com/testing-library/react-hooks-testing-library

## Zasady 

👉 Hooki muszą być używane w komponentach funkcyjnych

👉 Testowanie tylko jeżeli hook jest reużywalny ale też trudny do przetesotwania w innym komponencie

👉 Opakowuje hook i zwraca element result, który pozwala na przeprowadzenie testu

## Jak to działa?

`act` - funkcja opakowująca rerender akcji z przeglądarki
`renderHook` - funkcja eksportowana z RHTL, która pozwala wyrenderować hook. Zwraca obiekt `result`, `rerender`, `unmount`

`result` - zawiera getter `current`, który zwraca wartość zwróconą przez hook oraz `error` informujący o tym, czy hook rzucił error
`rerender` - powoduje przeładowanie hooka, pozwala na przykład sprawdzić wykonanie efektów, można przekazać nowe propsy jako parametr
`unmount` - odmontowuje hook, pozwala sprawdzić czyszczenie efektów