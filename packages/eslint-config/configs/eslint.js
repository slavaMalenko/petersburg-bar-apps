module.exports = {
    /**
     * Note: you must disable the base rule as it can report incorrect errors
     * use: @typescript-eslint/semi
     * https://typescript-eslint.io/rules/semi/
     */
    'semi': 0,

    /**
     * Note: you must disable the base rule as it can report incorrect errors
     * use: @typescript-eslint/no-use-before-define
     * https://typescript-eslint.io/rules/no-use-before-define
     */
    'no-use-before-define': 0,

    /**
     * Note: you must disable the base rule as it can report incorrect errors
     * use: @typescript-eslint/comma-dangle
     * https://typescript-eslint.io/rules/comma-dangle
     */
    'comma-dangle': 0,

    /*
     * Запрещается использовать 'магические' числа.
     * Все числа должны быть указаны в виде констант.
     * https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': 'off',

    /*
     * Разрешается использование только одинарных кавычек.
     * https://eslint.org/docs/rules/quotes
     */
    'quotes': [2, 'single'],

    /*
     * В JSX-элементах разрешается использование только двойных кавычек.
     * https://eslint.org/docs/rules/jsx-quotes
     */
    'jsx-quotes': [2, 'prefer-double'],

    /*
     * Все файлы должны заканчиваться пустой строкой.
     * https://eslint.org/docs/rules/eol-last
     */
    'eol-last': [2, 'always'],

    /*
     * Аргументы стрелочной функции всегда должны быть в скобках.
     * https://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': [2, 'always'],

    /*
     * Правила пустых строк после или до указанных команд.
     * https://eslint.org/docs/rules/padding-line-between-statements
     */
    'padding-line-between-statements': [
        2,
        // Пустая строка после импортов.
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },

        // Пустая строка перед return.
        { blankLine: 'always', prev: '*', next: 'return' },

        // Пустая строка после объявления переменных и перед.
        { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],

    /*
     * Запрещается отделять спред-оператор с переменной пробелом.
     * https://eslint.org/docs/rules/rest-spread-spacing
     */
    'rest-spread-spacing': 'off',

    /*
     * Пробелы между фигурными скобками.
     * https://eslint.org/docs/rules/object-curly-spacing
     */
    'object-curly-spacing': ['error', 'always'],

    /**
     * Цикломатическая сложность.
     * https://eslint.org/docs/latest/rules/complexity
     */
    'complexity': [2, { max: 20 }],

    /**
     * Запрещается использование фигурных скобок вокруг тела функции стрелки, если значение возвращается сразу.
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */
    'arrow-body-style': ['error', 'as-needed'],

    /**
     * Требуются условия "Йода".
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */
    'yoda': ['error', 'never', { exceptRange: true }],

    /**
     * Запрещаются асинхронные функции, у которых нет await выражения.
     * https://eslint.org/docs/latest/rules/require-await
     */
    'require-await': 'error',

    /**
     * Требуются const объявления для переменных, которые никогда не переназначаются после объявления.
     * https://eslint.org/docs/latest/rules/prefer-const
     */
    'prefer-const': [
        'error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: false,
        },
    ],

    /**
     * Требуются использования стрелочных функций для обратных вызовов.
     * https://eslint.org/docs/latest/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': 'error',

    /**
     * Требуются let или const вместо var.
     * https://eslint.org/docs/latest/rules/no-var
     */
    'no-var': 'error',

    /**
     * Требуется соблюдать постоянный интервал до и после стрелки в стрелочных функциях.
     * https://eslint.org/docs/latest/rules/arrow-spacing
     */
    'arrow-spacing': ['error', { before: true, after: true }],

    /**
     * Запрещаются несколько пустых строк.
     * https://eslint.org/docs/latest/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
};
