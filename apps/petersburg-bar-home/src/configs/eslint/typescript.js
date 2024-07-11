const ALWAYS_MULTILINE = 'always-multiline';

module.exports = {
    /**
     * Запрет отключения опций проверки ESLint.
     * https://typescript-eslint.io/rules/ban-ts-comment
     */
    '@typescript-eslint/ban-ts-comment': 2,

    /**
     * Разрешения для именования типов, интерфейсов, энумов.
     * https://typescript-eslint.io/rules/naming-convention
     */
    '@typescript-eslint/naming-convention': [
        2,
        {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'has', 'can'],
            filter: {
                // you can expand this regex to add more allowed names
                regex: '^(disabled)$',
                match: false,
            },
        },
    ],
    //     {
    //         selector: 'interface',
    //         format: ['PascalCase'],
    //         prefix: ['I'],
    //         filter: {
    //             // you can expand this regex to add more allowed names
    //             regex: '^(Window)$',
    //             match: false,
    //         },
    //     },
    //     {
    //         selector: 'typeAlias',
    //         format: ['PascalCase'],
    //         prefix: ['T'],
    //         filter: {
    //             // you can expand this regex to add more allowed names
    //             regex: '^(AppDispatch|RootState)$',
    //             match: false,
    //         },
    //     },
    //     {
    //         selector: 'enum',
    //         format: ['PascalCase'],
    //         prefix: ['E'],
    //     },
    //     {
    //         selector: 'enumMember',
    //         format: ['PascalCase', 'UPPER_CASE'],
    //     },
    // ],

    /**
     * Обработка успешных и не успешных вызовов промиса.
     * https://typescript-eslint.io/rules/no-floating-promises
     */
    '@typescript-eslint/no-floating-promises': [1, { ignoreVoid: true, ignoreIIFE: true }],

    /**
     * Отключение запрета использования не-null оператора.
     * https://typescript-eslint.io/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': 0,

    /**
     * Запрет использования типа any.
     * https://typescript-eslint.io/rules/no-explicit-any
     */
    '@typescript-eslint/no-explicit-any': [2, { fixToUnknown: true, ignoreRestArgs: true }],

    /*
     * Запрещаются неиспользованные переменные.
     * Кроме переменных в типизации и спред-операторов.
     * https://typescript-eslint.io/rules/no-unused-vars
     */
    '@typescript-eslint/no-unused-vars': [
        2,
        {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
        },
    ],

    /**
     * Запрет объявления пустых интерфейсов.
     * https://typescript-eslint.io/rules/no-empty-interface
     */
    '@typescript-eslint/no-empty-interface': [2, { allowSingleExtends: true }],

    /*
     * Запрещается использовать сущности до их объявления.
     * https://typescript-eslint.io/rules/no-use-before-define
     */
    '@typescript-eslint/no-use-before-define': 2,

    /*
     * Правила разделителей в интерфейсах (точка с запятой).
     * https://typescript-eslint.io/rules/member-delimiter-style
     */
    '@typescript-eslint/member-delimiter-style': 2,

    /**
     * Всегда использовать разделители.
     * https://typescript-eslint.io/rules/semi/
     */
    '@typescript-eslint/semi': [2, 'always'],

    /**
     * Запятые в конце выражений.
     * https://typescript-eslint.io/rules/comma-dangle/
     */
    '@typescript-eslint/comma-dangle': [
        2,
        {
            arrays: ALWAYS_MULTILINE,
            objects: ALWAYS_MULTILINE,
            imports: ALWAYS_MULTILINE,
            exports: ALWAYS_MULTILINE,
            functions: ALWAYS_MULTILINE,
            enums: ALWAYS_MULTILINE,
            generics: ALWAYS_MULTILINE,
            tuples: ALWAYS_MULTILINE,
        },
    ],
};
