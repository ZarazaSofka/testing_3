Feature: Тестирование матриц
  
  Scenario: Транспонирование матрицы 1x1
    Given M
      | 10 |
    When транспонировать
    Then результат
      | 10 |

  Scenario: Транспонирование матрицы 1x3
    Given M
      | 1 | 2 | 3 | 
    When транспонировать
    Then результат
      | 1 |
      | 2 |
      | 3 |

  Scenario: Транспонирование матрицы 2x3
    Given M
      | 1 | 2 | 3 | 
      | 4 | 5 | 6 |
    When транспонировать
    Then результат
      | 1 | 4 |
      | 2 | 5 |
      | 3 | 6 |

  Scenario: Транспонирование матрицы 3x3
    Given M
      | 1 | 2 | 3 | 
      | 4 | 5 | 6 |
      | 7 | 8 | 9 |
    When транспонировать
    Then результат
      | 1 | 4 | 7 |
      | 2 | 5 | 8 |
      | 3 | 6 | 9 |
