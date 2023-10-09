Feature: Как разработчик, реализующий функцию сложения двух матриц,
         я хочу, чтобы функция работала следующим образом:
         она должна принимать две матрицы одинакового размера
         и возвращать новую матрицу, являющуюся результатом сложения соответствующих элементов исходных матриц.

  Scenario: Умножение матриц на число
      Given матрицa:
        | 2 | 2 |
        | 4 | 4 |
        | 6 | 6 |
      Given число:
        | 6 |
      When умножаем матрицу на число
      Then результат умножения должен быть такой:
        | 12 | 12 |
        | 24 | 24 |
        | 36 | 36 |

      Given матрицa:
        | 9 | 5 | 8 |
        | 8 | 1 | 0 |
      Given число:
        | 3 |
      When умножаем матрицу на число
      Then результат умножения должен быть такой:
        | 27 | 15 | 24 |
        | 24 | 3  | 0  |

      Given матрицa:
        | 3 | 4 | 1 | 9 |
        | 2 | 2 | 0 | 1 |
        | 7 | 5 | 3 | 4 |
        | 4 | 8 | 4 | 6 |
      Given число:
        | 0 |
      When умножаем матрицу на число
      Then результат умножения должен быть такой:
        | 0 | 0 | 0 | 0 |
        | 0 | 0 | 0 | 0 |
        | 0 | 0 | 0 | 0 |
        | 0 | 0 | 0 | 0 |

      Given матрицa:
        | 4 |  5 |
        | 9 | -3 |
      Given число:
        | -6.5 |
      When умножаем матрицу на число
      Then результат умножения должен быть такой:
        | -26   | -32.5 |
        | -58.5 | 19.5  |